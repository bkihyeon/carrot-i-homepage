"use server";

import "server-only";

import nodemailer from "nodemailer";

import {
  initialInquiryActionState,
  readInquiryFormData,
  validateInquiryForm,
  type InquiryActionState,
  type InquiryFormValues,
} from "@/components/shared/modal/model/inquiry";

const DEFAULT_INQUIRY_RECIPIENT = "lhb@carrot-i.com";

type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
};

type MailError = Error & {
  code?: string;
  command?: string;
  response?: string;
  responseCode?: number;
};

function getRequiredEnv(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`${name} 환경 변수가 설정되지 않았습니다.`);
  }

  return value;
}

function getOptionalEnv(name: string) {
  const value = process.env[name]?.trim();

  return value ? value : undefined;
}

function getSmtpConfig(): SmtpConfig {
  const port = Number(getOptionalEnv("SMTP_PORT") ?? "587");
  const secure =
    (getOptionalEnv("SMTP_SECURE") ?? "false").toLowerCase() === "true";

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error("SMTP_PORT 환경 변수 값이 올바르지 않습니다.");
  }

  return {
    host: getRequiredEnv("SMTP_HOST"),
    port,
    secure,
    user: getRequiredEnv("SMTP_USER"),
    pass: getRequiredEnv("SMTP_PASS"),
    from: getRequiredEnv("SMTP_FROM"),
    to: getOptionalEnv("INQUIRY_TO_EMAIL") ?? DEFAULT_INQUIRY_RECIPIENT,
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function buildMailSubject(values: InquiryFormValues) {
  return `[문의하기] ${values.company} / ${values.name}`;
}

function buildMailText(values: InquiryFormValues) {
  return [
    "홈페이지 문의가 접수되었습니다.",
    "",
    `회사명: ${values.company}`,
    `성함: ${values.name}`,
    `이메일: ${values.email}`,
    `개인정보 수집동의: ${values.privacyAgreed ? "동의" : "미동의"}`,
    "",
    "문의내용:",
    values.message,
  ].join("\n");
}

function buildMailHtml(values: InquiryFormValues) {
  const messageHtml = escapeHtml(values.message).replaceAll("\n", "<br />");

  return `
    <div>
      <p>홈페이지 문의가 접수되었습니다.</p>
      <ul>
        <li><strong>회사명:</strong> ${escapeHtml(values.company)}</li>
        <li><strong>성함:</strong> ${escapeHtml(values.name)}</li>
        <li><strong>이메일:</strong> ${escapeHtml(values.email)}</li>
        <li><strong>개인정보 수집동의:</strong> ${
          values.privacyAgreed ? "동의" : "미동의"
        }</li>
      </ul>
      <p><strong>문의내용</strong></p>
      <p>${messageHtml}</p>
    </div>
  `.trim();
}

async function sendInquiryEmail(values: InquiryFormValues) {
  const config = getSmtpConfig();
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 10_000,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  await transporter.verify();

  await transporter.sendMail({
    from: config.from,
    to: config.to,
    replyTo: values.email,
    subject: buildMailSubject(values),
    text: buildMailText(values),
    html: buildMailHtml(values),
  });
}

function getFriendlyMailErrorMessage(error: unknown) {
  if (!(error instanceof Error)) {
    return "문의 메일 발송 중 알 수 없는 오류가 발생했습니다.";
  }

  const mailError = error as MailError;

  if (mailError.code === "ETIMEDOUT") {
    return "SMTP 서버 연결 시간이 초과되었습니다. SMTP_HOST, SMTP_PORT, SMTP_SECURE 설정 또는 서버 방화벽을 확인해 주세요.";
  }

  if (mailError.code === "ESOCKET") {
    return "SMTP 소켓 연결에 실패했습니다. SMTP_HOST, SMTP_PORT, SMTP_SECURE 조합을 다시 확인해 주세요.";
  }

  if (mailError.code === "EAUTH") {
    return "SMTP 인증에 실패했습니다. SMTP_USER, SMTP_PASS 또는 SMTP AUTH 허용 여부를 확인해 주세요.";
  }

  if (mailError.code === "EENVELOPE") {
    return "메일 발신자 또는 수신자 주소 형식이 올바르지 않습니다. SMTP_FROM, INQUIRY_TO_EMAIL 값을 확인해 주세요.";
  }

  if (mailError.code === "EDNS") {
    return "SMTP 서버 주소를 찾지 못했습니다. SMTP_HOST 값을 다시 확인해 주세요.";
  }

  return mailError.message;
}

export async function submitInquiryAction(
  _previousState: InquiryActionState,
  formData: FormData,
): Promise<InquiryActionState> {
  const values = readInquiryFormData(formData);
  const fieldErrors = validateInquiryForm(values);

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "입력값을 다시 확인해 주세요.",
      fieldErrors,
    };
  }

  try {
    await sendInquiryEmail(values);

    return {
      status: "success",
      message: "문의 메일이 정상적으로 발송되었습니다.",
      fieldErrors: {},
    };
  } catch (error) {
    const message = getFriendlyMailErrorMessage(error);

    return {
      ...initialInquiryActionState,
      status: "error",
      message,
    };
  }
}
