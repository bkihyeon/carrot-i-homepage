"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useId } from "react";

type ModalShellProps = {
  title: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
  zIndexClassName?: string;
  panelClassName?: string;
  mobileSheet?: boolean;
};

export default function ModalShell({
  title,
  onClose,
  children,
  footer,
  zIndexClassName = "z-[100]",
  panelClassName = "",
  mobileSheet = false,
}: ModalShellProps) {
  const titleId = useId();
  const overlayPaddingClassName = mobileSheet
    ? "p-0 tablet:p-xl"
    : "p-md tablet:p-xl";
  const containerClassName = mobileSheet
    ? "flex h-full items-end justify-center tablet:items-center"
    : "flex h-full items-center justify-center";
  const sheetPanelClassName = mobileSheet
    ? "h-[78dvh] max-h-[78dvh] border-x-0 border-b-0 tablet:h-auto tablet:max-h-[calc(100dvh-2rem)] tablet:rounded-none tablet:border"
    : "max-h-[calc(100dvh-2rem)]";
  const headerClassName = mobileSheet
    ? "flex items-center justify-between border-b border-border px-lg py-md tablet:p-xl"
    : "flex items-center justify-between border-b border-border p-xl";
  const titleClassName = mobileSheet
    ? "text-[1.25rem] leading-[140%] font-bold tracking-[-0.02em] text-foreground tablet:type-heading-3 tablet:tracking-[-0.0625rem]"
    : "type-heading-3 leading-[140%] font-bold tracking-[-0.0625rem] text-foreground";
  const closeButtonClassName = mobileSheet
    ? "inline-flex h-8 w-8 items-center justify-center transition-opacity hover:opacity-70 tablet:h-10 tablet:w-10"
    : "inline-flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-70";

  return (
    <div
      className={`fixed inset-0 ${zIndexClassName} bg-black/70 ${overlayPaddingClassName}`}
      onClick={onClose}
    >
      <div className={containerClassName}>
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className={`flex flex-col overflow-hidden border border-border bg-background shadow-card ${sheetPanelClassName} ${panelClassName}`.trim()}
          onClick={(event) => event.stopPropagation()}
        >
          <header className={headerClassName}>
            <h2 id={titleId} className={titleClassName}>
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label={`${title} 닫기`}
              className={closeButtonClassName}
            >
              <Image
                src="/icon/modal/close.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden
                className="h-6 w-6 cursor-pointer"
              />
            </button>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>

          {footer ? (
            <footer className="border-t border-border px-xl py-lg tablet:px-2xl">
              {footer}
            </footer>
          ) : null}
        </section>
      </div>
    </div>
  );
}
