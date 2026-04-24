import type { AIDecisionArchitectureProps } from "@/components/shared/aiDecisionArchitecture/ui/aiDecisionArchitecture";
import type { InfoFeatureSectionProps } from "@/components/shared/infoFeatureSection";
import type { NextPictureProps } from "@/components/shared/nextPicture/ui/nextPicture";
import type { WordBannerProps } from "@/components/shared/wordBanner";

export const mesNextPictureProps = {
  columnsClassName:
    "tablet:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] desktop:grid-cols-[minmax(0,648.8px)_minmax(320px,431.2px)]",
  title: <>생산 데이터를 기반으로 운영을 최적화하는 AI 데이터 플로우 MES</>,
  description: (
    <>
      데이터를 기반으로 운영을 관리하고
      <br />
      생산·재고·공정을 최적화하는 AI 기반 MES 솔루션
    </>
  ),
  inquiryDes:
    "AI 데이터 플로우를 기반으로 MES를 구축하고 수요 예측 AI를 통해 생산·재고·공정 데이터를 통합적으로 분석합니다. 이를 통해 불필요한 작업과 인력 투입을 줄이고 정확한 생산 계획과 적정 재고 운영을 가능하게 하여 작업 공수와 운영 비용을 동시에 절감합니다.",
  className: "border-t-0",
} as const satisfies NextPictureProps;

export const mesWordBannerProps = {
  word: "AI 데이터 플로우 MES, preci.MES로 생산과 재고를 최적화하세요.",
  type: "mes" as const,
} as const satisfies WordBannerProps;

export const mesInfoFeatureSections = [
  {
    eyebrow: <>공정 및 설비 관리</>,
    title: (
      <>
        공정 흐름과 설비를
        <br />
        하나의 구조로 관리합니다
      </>
    ),
    paragraphs: [
      "공정 흐름을 시각적으로 설계하고, 각 단계에 설비를 연결해 생산 구조를 한눈에 파악할 수 있습니다.",
      "복잡한 생산 과정을 체계적으로 관리하고 운영 효율을 높입니다.",
    ],
    imageSrc: "/image/mes/gongjung&seoulbi.png",
    imageAlt: "공정 흐름과 설비 관리 화면",
    imageClassName: "object-contain object-top",
    imageWidth: 644,
    imageHeight: 610,
    imageLayout: "framed",
  },
  {
    eyebrow: <>BOM 관리</>,
    title: (
      <>
        제품 구조를 기준으로 <br /> 자재를 체계적으로 관리합니다
      </>
    ),
    paragraphs: [
      "BOM 구조를 기반으로 자재와 구성 요소를 정리하여 제품 단위의 생산 기준을 명확하게 정의합니다.",
      "변경과 확장이 쉬운 구조로 안정적인 생산 관리를 지원합니다.",
    ],
    imageSrc: "/image/mes/BOMgwanli3.png",
    imageAlt: "BOM 관리 화면",
    imageLayout: "bleedRight",
  },
] as const satisfies readonly InfoFeatureSectionProps[];

export const mesDashboardProps = {
  eyebrow: "대시보드",
  title: "AI 데이터 플로우로 분석하고 운영을 최적화합니다",
  description:
    "생산 데이터를 기반으로 수율을 실시간 분석하고, 변화 흐름과 이상 패턴을 직관적으로 파악할 수 있습니다. 데이터 기반 의사결정으로 생산 효율을 지속적으로 개선합니다.",
  imageSrc: "/image/mes/Sales Container.png",
  mobileImageSrc: "/image/mes/Sales Container(mobile).png",
  imageAlt: "MES 대시보드 이미지",
  mobileImageClassName: "h-auto w-full",
  mobileImageWidth: 377,
  mobileImageHeight: 514,
} as const;

export const mesArchitectureProps = {
  eyebrow: <>캐롯아이의 AI 의사결정 아키텍처</>,
  title: (
    <>
      단순한 MES가 아닌,
      <br className="tablet:hidden" /> 데이터 기반 기술입니다
    </>
  ),
  description: (
    <>
      데이터 구조화부터 예측, 자동화, 설명까지 <br />
      의사결정에 필요한 모든 과정을 기술로 완성합니다.
    </>
  ),
} as const satisfies AIDecisionArchitectureProps;

export const mesSectionDividerClassName =
  "mx-auto w-full max-w-[63.5rem] border-b border-border";

export const mesPictureExplainImageClassName =
  "relative h-[10rem] w-[10rem] tablet:h-[10rem] tablet:w-[10rem] desktop:h-[13.5rem] desktop:w-[13.5rem]";
