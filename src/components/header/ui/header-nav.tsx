"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import type {
  HeaderItem,
  HeaderLeafItem,
  HeaderMenuItem,
} from "@/components/header/model/header.types";

type HeaderNavProps = {
  items: HeaderItem[];
};

function HeaderDropdownItem({ item }: { item: HeaderLeafItem }) {
  return (
    <Link
      href={item.href}
      className="inline-flex h-10 w-[184px] items-center rounded-md bg-transparent px-3 py-2xs transition-colors hover:bg-secondary"
    >
      <span className="text-foreground">{item.label}</span>
    </Link>
  );
}

function HeaderMenu({ item }: { item: HeaderMenuItem }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-[36px] items-center justify-center gap-xs rounded-xl bg-transparent px-md py-xs opacity-100 transition-colors hover:bg-secondary"
        style={item.frameWidth ? { width: `${item.frameWidth}px` } : undefined}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span className="type-body-bold text-foreground">{item.label}</span>
        <Image
          src={open ? "/icon/header/Up_icon.svg" : "/icon/header/Down_icon.svg"}
          alt=""
          width={14}
          height={14}
          aria-hidden
        />
      </button>

      {open ? (
        <div
          className="absolute left-0 top-full z-50 mt-xs flex w-[252px] flex-col rounded-2xl border bg-background p-md shadow-card"
          style={{
            borderColor: "var(--token-color-border)",
            gap: "var(--spacing-sm)",
          }}
        >
          {item.children.map((child) => (
            <HeaderDropdownItem key={child.href} item={child} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function HeaderNav({ items }: HeaderNavProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-xs tablet:flex">
      {items.map((item) =>
        item.type === "menu" ? (
          <HeaderMenu key={`${item.label}-${pathname}`} item={item} />
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className="inline-flex min-h-[36px] items-center justify-center gap-xs rounded-xl bg-transparent px-md py-xs opacity-100 transition-colors hover:bg-secondary"
          >
            <span className="type-body-bold text-foreground">{item.label}</span>
          </Link>
        ),
      )}
    </nav>
  );
}
