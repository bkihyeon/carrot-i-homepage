"use client";

import type { ButtonHTMLAttributes } from "react";

import type {
  LegalDocumentType,
  LegalModalMode,
} from "@/components/shared/modal/model/legal-documents";
import { useModalActions } from "@/components/shared/modal/ui/modal-provider";

type OpenInquiryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type OpenLegalDocumentButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    documentType: LegalDocumentType;
    mode?: LegalModalMode;
  };

export function OpenInquiryButton({
  children,
  onClick,
  type = "button",
  ...props
}: OpenInquiryButtonProps) {
  const { openInquiry } = useModalActions();

  return (
    <button
      type={type}
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          openInquiry();
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export function OpenLegalDocumentButton({
  children,
  documentType,
  mode = "readonly",
  onClick,
  type = "button",
  ...props
}: OpenLegalDocumentButtonProps) {
  const { openLegalDocument } = useModalActions();

  return (
    <button
      type={type}
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          openLegalDocument(documentType, mode);
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}
