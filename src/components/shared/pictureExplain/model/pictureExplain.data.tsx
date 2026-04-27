import type { ReactNode } from "react";

export type PictureExplainItem = {
  imageSrc: string;
  imageAlt: string;
  title: ReactNode;
  description: ReactNode;
};

export const pictureExplainItems: PictureExplainItem[] = [
  {
    imageSrc: "/icon/main/miri1_4x.png",
    imageAlt: "miri1",
    title: (
      <>
        Domain <br /> Data Structure
      </>
    ),
    description: (
      <>
        데이터를 모으고 <br />
        구조를 설계합니다.
      </>
    ),
  },
  {
    imageSrc: "/icon/main/miri2_4x.png",
    imageAlt: "miri2",
    title: (
      <>
        Hybrid AI <br /> Modeling
      </>
    ),
    description: (
      <>
        하나의 모델로 <br />
        예측하지 않습니다.
      </>
    ),
  },
  {
    imageSrc: "/icon/main/miri3_4x.png",
    imageAlt: "miri3",
    title: <>Execution Pipeline</>,
    description: (
      <>
        분석을 결정으로 <br /> 연결하고 설계합니다.
      </>
    ),
  },
  {
    imageSrc: "/icon/main/miri4_4x.png",
    imageAlt: "miri4",
    title: (
      <>
        Explainable <br /> AI
      </>
    ),
    description: (
      <>
        결과와 함께 <br />
        이유를 제공합니다.
      </>
    ),
  },
];
