"use client";

import { useState } from "react";

import ModalShell from "@/components/shared/modal/ui/modal-shell";

type InquiryModalProps = {
  isPrivacyAgreed: boolean;
  onClose: () => void;
  onOpenPrivacyConsent: () => void;
  onPrivacyAgreedChange: (checked: boolean) => void;
  onSubmit: () => void;
};

type InquiryFormState = {
  company: string;
  name: string;
  email: string;
  message: string;
};

const initialFormState: InquiryFormState = {
  company: "",
  name: "",
  email: "",
  message: "",
};

const inputClassName =
  "w-full rounded-[0.875rem] border border-[#D9D9D9] bg-[#F7F7F8] px-md py-sm font-sans text-[0.875rem] leading-[1.3125rem] font-normal tracking-[0.00438rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary";

export default function InquiryModal({
  isPrivacyAgreed,
  onClose,
  onOpenPrivacyConsent,
  onPrivacyAgreedChange,
  onSubmit,
}: InquiryModalProps) {
  const [formState, setFormState] = useState(initialFormState);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    formState.email.trim(),
  );

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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    onSubmit();
  }

  return (
    <ModalShell title="문의하기" onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex h-full flex-col">
        <div className="flex flex-col gap-xl p-xl w-[30rem] ">
          <label className="flex flex-col gap-xs">
            <span className="font-medium leading-[140%] tracking-[-0.02em] text-foreground">
              회사명 <span className="text-[#FF5E00]">*</span>
            </span>
            <input
              type="text"
              value={formState.company}
              onChange={(event) => updateField("company", event.target.value)}
              placeholder="회사명을 입력해 주세요"
              className={inputClassName}
              autoComplete="organization"
            />
          </label>

          <label className="flex flex-col gap-xs">
            <span className="font-medium leading-[140%]  tracking-[-0.02em] text-foreground">
              성함 <span className="text-[#FF5E00]">*</span>
            </span>
            <input
              type="text"
              value={formState.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="문의하시는 분의 성함을 입력해 주세요"
              className={inputClassName}
              autoComplete="name"
            />
          </label>

          <label className="flex flex-col gap-xs">
            <span className="font-medium leading-[140%] tracking-[-0.02em] text-foreground">
              이메일 <span className="text-[#FF5E00]">*</span>
            </span>
            <input
              type="email"
              value={formState.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="이메일 주소를 입력해 주세요"
              className={inputClassName}
              autoComplete="email"
            />
          </label>

          <label className="flex flex-col gap-xs">
            <span className="font-medium leading-[140%] tracking-[-0.02em] text-foreground">
              문의내용 <span className="text-[#FF5E00]">*</span>
            </span>
            <textarea
              value={formState.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="문의하실 내용을 입력해 주세요"
              className={`${inputClassName} min-h-[11.875rem] resize-none`}
            />
          </label>
        </div>

        <div className="mt-auto border-t border-border p-xl">
          <div className="flex flex-col gap-xs">
            <div className="flex min-h-[3.25rem] items-center rounded-[0.875rem] border border-[#D9D9D9] bg-background py-xs px-3">
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
                className={`inline-flex h-[1.2rem] w-[1.2rem] shrink-0 items-center justify-center rounded-[0.3rem] border transition-colors ${
                  isPrivacyAgreed
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-[#D9D9D9] bg-background text-transparent"
                }`.trim()}
              >
                <span className="text-[0.875rem] leading-none">✓</span>
              </button>

              <button
                type="button"
                onClick={onOpenPrivacyConsent}
                className="type-body ml-sm text-left text-[#52525B] transition-colors hover:text-foreground"
              >
                개인정보 수집동의
              </button>
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`inline-flex min-h-[3.5rem] w-full items-center justify-center rounded-[0.875rem] px-md py-sm text-[1.375rem] leading-[140%] font-bold tracking-[-0.02em] transition-colors ${
                isFormValid
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "bg-[#D9D9DF] text-zinc-100"
              }`.trim()}
            >
              문의하기
            </button>
          </div>
        </div>
      </form>
    </ModalShell>
  );
}
