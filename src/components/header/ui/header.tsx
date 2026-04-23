"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { headerItems, mobileHeaderItems } from "@/components/header/model/header.data";
import { HeaderNav } from "@/components/header/ui/header-nav";
import { OpenInquiryButton } from "@/components/shared/modal/ui/modal-trigger";

function MobileHeaderPanel({
  onNavigate,
}: {
  onNavigate: () => void;
}) {
  const solutionItem = mobileHeaderItems.find((item) => item.type === "menu");
  const topLevelItems = mobileHeaderItems.filter((item) => item.type !== "menu");

  return (
    <div className="absolute inset-x-0 top-full border-t border-border bg-background px-xl py-xl shadow-card">
      <nav className="flex flex-col items-start gap-xl">
        {solutionItem?.type === "menu" ? (
          <div className="flex w-full flex-col items-start gap-sm">
            <span className="type-body-bold text-foreground">
              {solutionItem.label}
            </span>
            <div className="flex w-full flex-col items-start gap-xs pl-md">
              {solutionItem.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onNavigate}
                  className="type-body text-foreground-alt transition-colors hover:text-foreground"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        {topLevelItems.map((item) =>
          item.type === "link" ? (
            <Link
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className="type-body-bold text-foreground transition-colors hover:text-foreground-alt"
            >
              {item.label}
            </Link>
          ) : (
            <OpenInquiryButton
              key={item.label}
              onClick={onNavigate}
              className="type-body-bold text-foreground transition-colors hover:text-foreground-alt"
            >
              {item.label}
            </OpenInquiryButton>
          ),
        )}
      </nav>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header
      ref={rootRef}
      className="fixed inset-x-0 top-0 z-50 h-16 self-stretch bg-background/60 backdrop-blur-[8px] tablet:h-[6.25rem]"
    >
      <div className="flex h-full w-full items-center justify-between self-stretch px-md py-sm tablet:px-2xl tablet:py-xl desktop:px-3xl">
        <div className="flex min-w-0 items-center gap-2xl">
          <Link href="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
            <Image
              src="/icon/header/mainTitle.svg"
              alt="Carrot i"
              width={103}
              height={28}
              className="h-6 w-auto tablet:h-7"
              priority
            />
          </Link>

          <HeaderNav items={headerItems} />
        </div>

        <div className="hidden tablet:block">
          <OpenInquiryButton
            className="inline-flex min-h-8 shrink-0 items-center justify-center gap-xs rounded-xl bg-secondary px-sm py-2xs text-secondary-foreground shadow-xs transition-colors tablet:min-h-[36px] tablet:px-md tablet:py-xs"
          >
            <Image
              src="/icon/header/inquiry.svg"
              alt="inquiry"
              width={57}
              height={15}
              className="h-3 w-auto tablet:h-[15px]"
            />
          </OpenInquiryButton>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "모바일 메뉴 닫기" : "모바일 메뉴 열기"}
          className="inline-flex h-9 w-9 items-center justify-center tablet:hidden"
        >
          <Image
            src={
              mobileOpen
                ? "/icon/header/mobile/close.svg"
                : "/icon/header/mobile/3bal.svg"
            }
            alt=""
            width={36}
            height={36}
            aria-hidden
          />
        </button>
      </div>

      {mobileOpen ? (
        <MobileHeaderPanel onNavigate={() => setMobileOpen(false)} />
      ) : null}
    </header>
  );
}
