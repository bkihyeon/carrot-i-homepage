"use client";

import {
  legalDocumentContent,
  type LegalDocumentType,
  type LegalModalMode,
} from "@/components/shared/modal/model/legal-documents";
import ModalShell from "@/components/shared/modal/ui/modal-shell";

type LegalModalProps = {
  documentType: LegalDocumentType;
  mode: LegalModalMode;
  onClose: () => void;
  onAgree?: () => void;
  zIndexClassName?: string;
};

export default function LegalModal({
  documentType,
  mode,
  onClose,
  onAgree,
  zIndexClassName,
}: LegalModalProps) {
  const document = legalDocumentContent[documentType];

  return (
    <ModalShell
      title={document.title}
      onClose={onClose}
      zIndexClassName={zIndexClassName}
      panelClassName="w-[30rem] h-[43.8125rem]"
      footer={
        mode === "consent" ? (
          <button
            type="button"
            onClick={onAgree}
            className="inline-flex min-h-[3.5rem] w-full items-center justify-center rounded-[0.875rem] bg-primary px-md py-sm text-[1.375rem] leading-[140%] font-bold tracking-[-0.02em] text-primary-foreground transition-colors "
          >
            동의하기
          </button>
        ) : undefined
      }
    >
      <div className="flex min-h-[33.5rem] flex-col gap-lg px-xl py-xl tablet:px-2xl tablet:py-2xl">
        {document.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="type-body whitespace-pre-line text-foreground"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </ModalShell>
  );
}
