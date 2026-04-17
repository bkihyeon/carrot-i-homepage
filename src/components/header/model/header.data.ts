import type { HeaderItem } from "@/components/header/model/header.types";

export const headerItems: HeaderItem[] = [
  {
    type: "menu",
    label: "솔루션",
    frameWidth: 98,
    children: [
      {
        label: "Preci.MES",
        href: "/mes",
      },
      {
        label: "Preci.CAST",
        href: "/cast",
      },
      {
        label: "Financial System",
        href: "/financial_system",
      },
    ],
  },
  {
    type: "link",
    label: "회사 소개",
    href: "/#company-introduce",
  },
  {
    type: "link",
    label: "콘텐츠",
    href: "/#contents",
  },
];
