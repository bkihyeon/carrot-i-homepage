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

export type HeaderActionItem = {
  type: "action";
  label: string;
  action: "inquiry";
};

export type HeaderItem = HeaderLinkItem | HeaderMenuItem;

export type MobileHeaderItem = HeaderItem | HeaderActionItem;
