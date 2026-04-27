"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  headerItems,
  mobileHeaderItems,
} from "@/components/header/model/header.data";
import { HeaderNav } from "@/components/header/ui/header-nav";
import { OpenInquiryButton } from "@/components/shared/modal/ui/modal-trigger";

function MobileHeaderPanel({ onNavigate }: { onNavigate: () => void }) {
  const solutionItem = mobileHeaderItems.find((item) => item.type === "menu");
  const topLevelItems = mobileHeaderItems.filter(
    (item) => item.type !== "menu",
  );

  return (
    <div className="fixed inset-x-0 top-16 z-40 bg-background/60 px-xl py-xs shadow-card backdrop-blur-[8px] tablet:hidden">
      <nav className="flex flex-col items-start gap-xs">
        {solutionItem?.type === "menu" ? (
          <div className="flex w-full flex-col items-start ">
            <span className="type-heading-4 text-foreground py-3">
              {solutionItem.label}
            </span>
            <div className="flex w-full flex-col items-start gap-xs">
              {solutionItem.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onNavigate}
                  className="font-normal text-[1rem] leading-[140%] text-foreground transition-colors hover:text-foreground px-xs py-3"
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
              className="type-heading-4 text-foreground transition-colors hover:text-foreground-alt py-3"
            >
              {item.label}
            </Link>
          ) : (
            <OpenInquiryButton
              key={item.label}
              onClick={onNavigate}
              className="type-heading-4 text-foreground transition-colors hover:text-foreground-alt py-3"
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
  const rootRef = useRef<HTMLDivElement>(null);

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
    <div ref={rootRef}>
      <header className="fixed inset-x-0 top-0 z-50 h-[76px] self-stretch bg-background/60 backdrop-blur-[8px] tablet:h-[6.25rem]">
        <div className="flex h-full w-full items-center justify-between self-stretch p-lg tablet:px-2xl tablet:py-xl desktop:px-3xl">
          <div className="flex min-w-0 items-center gap-2xl">
            <Link
              href="/"
              className="shrink-0"
              onClick={() => setMobileOpen(false)}
            >
              <Image
                src="/icon/header/mainTitle.svg"
                alt="Carrot i"
                width={103}
                height={28}
                priority
              />
            </Link>

            <HeaderNav items={headerItems} />
          </div>

          <div className="hidden tablet:block">
            <OpenInquiryButton className="inline-flex min-h-8 shrink-0 cursor-pointer items-center justify-center gap-xs rounded-xl bg-secondary px-sm py-2xs text-secondary-foreground shadow-xs transition-colors tablet:min-h-[36px] tablet:px-md tablet:py-xs">
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
      </header>

      {mobileOpen ? (
        <MobileHeaderPanel onNavigate={() => setMobileOpen(false)} />
      ) : null}
    </div>
  );
}
