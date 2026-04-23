"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type {
  LegalDocumentType,
  LegalModalMode,
} from "@/components/shared/modal/model/legal-documents";
import InquiryModal from "@/components/shared/modal/ui/inquiry-modal";
import LegalModal from "@/components/shared/modal/ui/legal-modal";

type ActiveLegalModal = {
  documentType: LegalDocumentType;
  mode: LegalModalMode;
};

type ModalContextValue = {
  openInquiry: () => void;
  openLegalDocument: (
    documentType: LegalDocumentType,
    mode?: LegalModalMode,
  ) => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function useModalActions() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalActions must be used within ModalProvider");
  }

  return context;
}

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isPrivacyAgreed, setIsPrivacyAgreed] = useState(false);
  const [activeLegalModal, setActiveLegalModal] =
    useState<ActiveLegalModal | null>(null);

  const isAnyModalOpen = isInquiryOpen || activeLegalModal !== null;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isAnyModalOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isAnyModalOpen]);

  function openInquiry() {
    setIsInquiryOpen(true);
  }

  function closeInquiry() {
    setIsInquiryOpen(false);
    setIsPrivacyAgreed(false);
  }

  function openLegalDocument(
    documentType: LegalDocumentType,
    mode: LegalModalMode = "readonly",
  ) {
    setActiveLegalModal({ documentType, mode });
  }

  function closeLegalDocument() {
    setActiveLegalModal(null);
  }

  function handlePrivacyAgree() {
    setIsPrivacyAgreed(true);
    closeLegalDocument();
  }

  function handleInquirySubmitSuccess() {
    closeInquiry();
  }

  const contextValue = useMemo<ModalContextValue>(
    () => ({
      openInquiry,
      openLegalDocument,
    }),
    [],
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}

      {isInquiryOpen ? (
        <InquiryModal
          isPrivacyAgreed={isPrivacyAgreed}
          onClose={closeInquiry}
          onOpenPrivacyConsent={() => openLegalDocument("privacy", "consent")}
          onPrivacyAgreedChange={setIsPrivacyAgreed}
          onSubmitSuccess={handleInquirySubmitSuccess}
        />
      ) : null}

      {activeLegalModal ? (
        <LegalModal
          documentType={activeLegalModal.documentType}
          mode={activeLegalModal.mode}
          onClose={closeLegalDocument}
          onAgree={
            activeLegalModal.mode === "consent"
              ? handlePrivacyAgree
              : undefined
          }
          zIndexClassName={isInquiryOpen ? "z-[110]" : "z-[100]"}
        />
      ) : null}
    </ModalContext.Provider>
  );
}
