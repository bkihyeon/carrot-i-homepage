"use client";

import type { ReactNode } from "react";
import { useId } from "react";

type ModalShellProps = {
  title: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
  zIndexClassName?: string;
  panelClassName?: string;
};

export default function ModalShell({
  title,
  onClose,
  children,
  footer,
  zIndexClassName = "z-[100]",
  panelClassName = "",
}: ModalShellProps) {
  const titleId = useId();

  return (
    <div
      className={`fixed inset-0 ${zIndexClassName} bg-black/70 p-md tablet:p-xl`}
      onClick={onClose}
    >
      <div className="flex h-full items-center justify-center">
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className={`flex max-h-[calc(100dvh-2rem)] flex-col overflow-hidden border border-border bg-background shadow-card ${panelClassName}`.trim()}
          onClick={(event) => event.stopPropagation()}
        >
          <header className="flex items-center justify-between border-b border-border p-xl">
            <h2
              id={titleId}
              className="type-heading-3 leading-[140%] font-bold tracking-[-0.0625rem] text-foreground"
            >
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label={`${title} 닫기`}
              className="inline-flex h-10 w-10 items-center justify-center text-[2.125rem] leading-none text-foreground transition-opacity hover:opacity-70"
            >
              <span aria-hidden>&times;</span>
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
