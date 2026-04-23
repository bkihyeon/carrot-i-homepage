export type InquiryFormState = {
  company: string;
  name: string;
  email: string;
  message: string;
};

export type InquiryFormValues = InquiryFormState & {
  privacyAgreed: boolean;
};

export type InquiryField = keyof InquiryFormValues;

export type InquiryActionState = {
  status: "idle" | "success" | "error";
  message: string | null;
  fieldErrors: Partial<Record<InquiryField, string>>;
};

export const MAX_INQUIRY_MESSAGE_LENGTH = 2000;

export const initialInquiryFormState: InquiryFormState = {
  company: "",
  name: "",
  email: "",
  message: "",
};

export const initialInquiryActionState: InquiryActionState = {
  status: "idle",
  message: null,
  fieldErrors: {},
};

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function readInquiryFormData(formData: FormData): InquiryFormValues {
  const company = formData.get("company");
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const privacyAgreed = formData.get("privacyAgreed");

  return {
    company: typeof company === "string" ? company.trim() : "",
    name: typeof name === "string" ? name.trim() : "",
    email: typeof email === "string" ? email.trim() : "",
    message: typeof message === "string" ? message.trim() : "",
    privacyAgreed: privacyAgreed === "true",
  };
}

export function validateInquiryForm(
  values: InquiryFormValues,
): InquiryActionState["fieldErrors"] {
  const fieldErrors: InquiryActionState["fieldErrors"] = {};

  if (!values.company) {
    fieldErrors.company = "회사명을 입력해 주세요.";
  }

  if (!values.name) {
    fieldErrors.name = "성함을 입력해 주세요.";
  }

  if (!values.email) {
    fieldErrors.email = "이메일 주소를 입력해 주세요.";
  } else if (!isValidEmail(values.email)) {
    fieldErrors.email = "올바른 이메일 주소를 입력해 주세요.";
  }

  if (!values.message) {
    fieldErrors.message = "문의 내용을 입력해 주세요.";
  } else if (values.message.length > MAX_INQUIRY_MESSAGE_LENGTH) {
    fieldErrors.message = `문의 내용은 ${MAX_INQUIRY_MESSAGE_LENGTH}자 이하로 입력해 주세요.`;
  }

  if (!values.privacyAgreed) {
    fieldErrors.privacyAgreed = "개인정보 수집동의가 필요합니다.";
  }

  return fieldErrors;
}
