import type { AIDecisionArchitectureProps } from "@/components/shared/aiDecisionArchitecture/ui/aiDecisionArchitecture";
import type { InfoFeatureSectionProps } from "@/components/shared/infoFeatureSection";
import type { NextPictureProps } from "@/components/shared/nextPicture/ui/nextPicture";
import type { PictureExplainItem } from "@/components/shared/pictureExplain/model/pictureExplain.data";
import type { WordBannerProps } from "@/components/shared/wordBanner";
import type { DashBoardProps } from "@/components/shared/dashBoard";
import type { InsightDashboardProps } from "@/components/cast/ui/insightDashboard";

export const castNextPictureProps = {
  columnsClassName:
    "tablet:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] desktop:grid-cols-[minmax(0,648.8px)_minmax(320px,431.2px)]",
  title: (
    <>
      AI 데이터 플로우 기반 <br /> 상권 분석 및 수요 예측 솔루션
    </>
  ),
  description: (
    <>
      데이터를 기반으로 상권을 분석하고
      <br />
      수요와 매출까지 예측하는 AI 솔루션
    </>
  ),
  inquiryDes:
    "데이터 파이프라인을 기반으로 유동인구, 공공, 매출 데이터를 통합 분석하여 지역 상권의 흐름을 파악하고 수요를 예측합니다. 이를 통해 매출 가능성을 사전에 예측하고 효율적인 입지 및 운영 전략 수립을 지원합니다.",
  className: "border-t-0",
} as const satisfies NextPictureProps;

export const castWordBannerProps = {
  word: "AI 데이터 플로우 기반, preci.CAST로 상권 분석과 운영을 최적화하세요.",
  type: "cast" as const,
} as const satisfies WordBannerProps;

export const castDashboardProps = {
  eyebrow: "상권 지도",
  title: "지도 기반 데이터로 상권을 직관적으로 분석합니다",
  description:
    "유동인구, 매출, 업종 데이터를 지도 위에 통합해 상권의 구조와 흐름을 한눈에 파악할 수 있습니다. 입지별 특성과 경쟁 환경을 직관적으로 분석할 수 있습니다.",
  imageSrc: "/image/cast/Commercial Map.png",
  imageAlt: "cast 상권 지도 이미지",
  mobileImageHeightClassName: "h-[28rem]",
  useTabletImagePadding: false,
} as const satisfies DashBoardProps;

export const castInfoFeatureSectionProps = {
  eyebrow: <>운영 관리</>,
  title: (
    <>
      매출과 비용을 한눈에 확인하고
      <br />
      수익을 관리합니다
    </>
  ),
  paragraphs: [
    "매출, 원가, 지출 데이터를 기반으로 실시간 손익을 자동으로 계산하고 시각화합니다.",
    "운영 흐름을 직관적으로 파악하고 더 정확한 매장 운영 의사결정을 지원합니다.",
  ],
  imageSrc: "/image/cast/phoneDisplay.png",
  tabletImageSrc: "/image/cast/cast_phone4x.png",
  imageAlt: "CAST 운영 관리 화면",
  imageClassName: "object-contain object-center",
} as const satisfies InfoFeatureSectionProps;

export const castInsightDashboardProps = {
  eyebrow: "대시보드",
  title: "데이터 기반 인사이트로 상권 전략을 제안합니다",
  description:
    "상권 지표, 고객 특성, 매출 패턴을 통합 분석하여 핵심 고객층과 수요 흐름을 도출하고, 데이터 기반으로 실행 가능한 전략을 제안합니다.",
  desktopImages: [
    {
      src: "/image/cast/cast_DashBoard_1_4x.png",
      alt: "CAST 인사이트 대시보드1",
    },
    {
      src: "/image/cast/cast_DashBoard_2_4x.png",
      alt: "CAST 인사이트 대시보드2",
    },
    {
      src: "/image/cast/cast_DashBoard_3_4x.png",
      alt: "CAST 인사이트 대시보드3",
    },
  ],
} as const satisfies InsightDashboardProps;

export const castArchitectureProps = {
  eyebrow: <>캐롯아이의 AI 의사결정 아키텍처</>,
  title: <>단순한 상권 분석이 아닌, 데이터 기반 기술입니다</>,
  description: (
    <>
      데이터 구조화부터 예측, 자동화, 설명까지 <br />
      의사결정에 필요한 모든 과정을 기술로 완성합니다.
    </>
  ),
} as const satisfies AIDecisionArchitectureProps;

export const castPictureExplainItems = [
  {
    imageSrc: "/icon/main/miri1_b_4x.png",
    imageAlt: "cast-miri1",
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
    imageSrc: "/icon/main/miri2_b_4x.png",
    imageAlt: "cast-miri2",
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
    imageSrc: "/icon/main/miri3_b_4x.png",
    imageAlt: "cast-miri3",
    title: <>Execution Pipeline</>,
    description: (
      <>
        분석을 결정으로 <br />
        연결하고 설계합니다.
      </>
    ),
  },
  {
    imageSrc: "/icon/main/miri4_b_4x.png",
    imageAlt: "cast-miri4",
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
] as const satisfies readonly PictureExplainItem[];
