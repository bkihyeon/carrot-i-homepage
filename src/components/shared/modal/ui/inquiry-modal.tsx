"use client";

import { useActionState, useEffect, useState } from "react";

import {
  MAX_INQUIRY_MESSAGE_LENGTH,
  initialInquiryActionState,
  initialInquiryFormState,
  isValidEmail,
  type InquiryFormState,
} from "@/components/shared/modal/model/inquiry";
import { submitInquiryAction } from "@/components/shared/modal/model/inquiry.action";
import ModalShell from "@/components/shared/modal/ui/modal-shell";

type InquiryModalProps = {
  isPrivacyAgreed: boolean;
  onClose: () => void;
  onOpenPrivacyConsent: () => void;
  onPrivacyAgreedChange: (checked: boolean) => void;
  onSubmitSuccess: () => void;
};

const inputClassName =
  "w-full rounded-[0.5rem] border border-[#D9D9D9] bg-[#F7F7F8] px-3 py-[0.59rem] font-sans text-[0.875rem] leading-[1.125rem] font-normal tracking-[0.00438rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary tablet:rounded-[0.875rem] tablet:px-md tablet:py-sm tablet:text-[0.875rem] tablet:leading-[1.3125rem]";

export default function InquiryModal({
  isPrivacyAgreed,
  onClose,
  onOpenPrivacyConsent,
  onPrivacyAgreedChange,
  onSubmitSuccess,
}: InquiryModalProps) {
  const [formState, setFormState] = useState(initialInquiryFormState);
  const [actionState, formAction, isPending] = useActionState(
    submitInquiryAction,
    initialInquiryActionState,
  );

  useEffect(() => {
    if (actionState.status === "success") {
      onSubmitSuccess();
    }
  }, [actionState.status, onSubmitSuccess]);

  const isEmailValid = isValidEmail(formState.email);

  const isFormValid =
    formState.company.trim().length > 0 &&
    formState.name.trim().length > 0 &&
    formState.message.trim().length > 0 &&
    isEmailValid &&
    isPrivacyAgreed;

  function updateField<K extends keyof InquiryFormState>(
    key: K,
    value: InquiryFormState[K],
  ) {
    setFormState((current) => ({
      ...current,
      [key]: value,
    }));
  }

  return (
    <ModalShell
      title="문의하기"
      onClose={onClose}
      panelClassName="w-full max-w-[34rem]"
      mobileSheet
    >
      <form action={formAction} className="flex h-full flex-col">
        <input
          type="hidden"
          name="privacyAgreed"
          value={isPrivacyAgreed ? "true" : "false"}
        />
        <div className="flex w-full min-w-0 flex-col gap-md px-lg py-lg tablet:gap-xl tablet:p-xl">
          <label className="flex flex-col gap-xs">
            <span className="text-[1rem] leading-[140%] font-medium tracking-[-0.02em] text-foreground tablet:text-base">
              회사명 <span className="text-[#FF5E00]">*</span>
            </span>
            <input
              name="company"
              type="text"
              value={formState.company}
              onChange={(event) => updateField("company", event.target.value)}
              placeholder="회사명을 입력해 주세요"
              className={inputClassName}
              autoComplete="organization"
              disabled={isPending}
            />
            {actionState.fieldErrors.company ? (
              <p className="text-sm text-[#D94841]">
                {actionState.fieldErrors.company}
              </p>
            ) : null}
          </label>

          <label className="flex flex-col gap-xs">
            <span className="text-[1rem] leading-[140%] font-medium tracking-[-0.02em] text-foreground tablet:text-base">
              성함 <span className="text-[#FF5E00]">*</span>
            </span>
            <input
              name="name"
              type="text"
              value={formState.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="문의하시는 분의 성함을 입력해 주세요"
              className={inputClassName}
              autoComplete="name"
              disabled={isPending}
            />
            {actionState.fieldErrors.name ? (
              <p className="text-sm text-[#D94841]">
                {actionState.fieldErrors.name}
              </p>
            ) : null}
          </label>

          <label className="flex flex-col gap-xs">
            <span className="text-[1rem] leading-[140%] font-medium tracking-[-0.02em] text-foreground tablet:text-base">
              이메일 <span className="text-[#FF5E00]">*</span>
            </span>
            <input
              name="email"
              type="email"
              value={formState.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="이메일 주소를 입력해 주세요"
              className={inputClassName}
              autoComplete="email"
              disabled={isPending}
            />
            {actionState.fieldErrors.email ? (
              <p className="text-sm text-[#D94841]">
                {actionState.fieldErrors.email}
              </p>
            ) : null}
          </label>

          <label className="flex flex-col gap-xs">
            <span className="flex items-center justify-between gap-md">
              <span className="text-[1rem] leading-[140%] font-medium tracking-[-0.02em] text-foreground tablet:text-base">
                문의내용 <span className="text-[#FF5E00]">*</span>
              </span>
              <span className="text-xs text-muted-foreground tablet:text-sm">
                {formState.message.length}/{MAX_INQUIRY_MESSAGE_LENGTH}
              </span>
            </span>
            <textarea
              name="message"
              value={formState.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="문의하실 내용을 입력해 주세요"
              className={`${inputClassName} min-h-[8.75rem] resize-none tablet:min-h-[11.875rem]`}
              disabled={isPending}
              maxLength={MAX_INQUIRY_MESSAGE_LENGTH}
            />
            {actionState.fieldErrors.message ? (
              <p className="text-sm text-[#D94841]">
                {actionState.fieldErrors.message}
              </p>
            ) : null}
          </label>
        </div>

        <div className="mt-auto border-t border-border px-lg py-xl tablet:p-xl">
          <div className="flex flex-col gap-xs">
            <div className="flex min-h-[2rem] items-center rounded-[0.5rem] border border-[#D9D9D9] bg-background px-sm py-2xs tablet:min-h-[3.25rem] tablet:rounded-[0.875rem] tablet:px-3 tablet:py-xs">
              <button
                type="button"
                onClick={() =>
                  isPrivacyAgreed
                    ? onPrivacyAgreedChange(false)
                    : onOpenPrivacyConsent()
                }
                aria-label={
                  isPrivacyAgreed
                    ? "개인정보 수집동의 해제"
                    : "개인정보처리방침 확인 후 동의"
                }
                aria-pressed={isPrivacyAgreed}
                className={`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[0.25rem] border transition-colors tablet:h-[1.2rem] tablet:w-[1.2rem] tablet:rounded-[0.3rem] ${
                  isPrivacyAgreed
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-[#D9D9D9] bg-background text-transparent"
                }`.trim()}
                disabled={isPending}
              >
                <span className="text-[0.75rem] leading-none tablet:text-[0.875rem]">
                  ✓
                </span>
              </button>

              <button
                type="button"
                onClick={onOpenPrivacyConsent}
                className="ml-xs text-left text-[0.75rem] leading-[140%] text-[#52525B] transition-colors hover:text-foreground tablet:type-body tablet:ml-sm"
                disabled={isPending}
              >
                개인정보 수집동의
              </button>
            </div>
            {actionState.fieldErrors.privacyAgreed ? (
              <p className="text-sm text-[#D94841]">
                {actionState.fieldErrors.privacyAgreed}
              </p>
            ) : null}
            {actionState.message ? (
              <p
                aria-live="polite"
                className={`text-sm ${
                  actionState.status === "error"
                    ? "text-[#D94841]"
                    : "text-foreground"
                }`.trim()}
              >
                {actionState.message}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={!isFormValid || isPending}
              className={`inline-flex min-h-[2.25rem] w-full items-center justify-center rounded-[0.5rem] px-md py-xs text-[0.875rem] leading-[140%] font-bold tracking-[-0.02em] transition-colors tablet:min-h-[3.5rem] tablet:rounded-[0.875rem] tablet:py-sm tablet:text-[1.375rem] ${
                isFormValid && !isPending
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "bg-[#D9D9DF] text-zinc-100"
              }`.trim()}
            >
              {isPending ? "전송 중..." : "문의하기"}
            </button>
          </div>
        </div>
      </form>
    </ModalShell>
  );
}
