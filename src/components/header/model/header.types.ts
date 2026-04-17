export type HeaderLeafItem = {
  label: string;
  href: string;
};

export type HeaderLinkItem = HeaderLeafItem & {
  type: "link";
};

export type HeaderMenuItem = {
  type: "menu";
  label: string;
  frameWidth?: number;
  children: HeaderLeafItem[];
};

export type HeaderItem = HeaderLinkItem | HeaderMenuItem;
