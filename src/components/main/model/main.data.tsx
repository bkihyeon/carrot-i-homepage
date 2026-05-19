import type { ReactNode } from "react";

export interface OurPropsType {
  ourProps: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}

export interface SolutionBoxType {
  title: ReactNode;
  description: ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export const OurTechnologyData: OurPropsType = {
  ourProps: "TECHNOLOGY",
  title: <>AI 데이터 플로우 한눈에 보기</>,
  subtitle:
    "데이터를 가치로 바꾸는 4단계 플로우로 더 빠르고 정확한 의사결정을 지원합니다.",
};

export const OurSolutionData: OurPropsType = {
  ourProps: "SOLUTION",
  title: (
    <>
      MES부터 상권 분석, 금융까지
      <br />
      캐롯아이의 다양한 솔루션을 만나보세요
    </>
  ),
};

export const OurSolutionBoxData: SolutionBoxType[] = [
  {
    title: (
      <>
        Domain <br />
        Data Structure
      </>
    ),
    description: (
      <>
        데이터를 모으고 <br />
        구조를 설계합니다.
      </>
    ),
    imageSrc: "/icon/main/our_tech1.png",
    imageAlt: "우리테크아이콘1",
  },
  {
    title: (
      <>
        Hybrid
        <br />
        AI Modeling
      </>
    ),
    description: (
      <>
        하나의 모델로 <br />
        예측하지 않습니다.
      </>
    ),
    imageSrc: "/icon/main/our_tech2.png",
    imageAlt: "우리테크아이콘2",
  },
  {
    title: (
      <>
        Execution
        <br /> Pipeline
      </>
    ),
    description: (
      <>
        분석을 결정으로 <br />
        연결하고 설계합니다.
      </>
    ),
    imageSrc: "/icon/main/our_tech3.png",
    imageAlt: "우리테크아이콘3",
  },
  {
    title: (
      <>
        Explainable <br />
        AI
      </>
    ),
    description: (
      <>
        결과와 함께
        <br /> 이유를 제공합니다.
      </>
    ),
    imageSrc: "/icon/main/our-tech4.png",
    imageAlt: "우리테크아이콘4",
  },
];
