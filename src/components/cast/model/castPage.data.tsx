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
  inquiry_des:
    "데이터 파이프라인을 기반으로 유동인구, 공공, 매출 데이터를 통합 분석하여 지역 상권의 흐름을 파악하고 수요를 예측합니다. 이를 통해 매출 가능성을 사전에 예측하고 효율적인 입지 및 운영 전략 수립을 지원합니다.",
  className: "border-t-0",
} as const;

export const castWordBannerProps = {
  word: "AI 데이터 플로우 기반, preci.CAST로 상권 분석과 운영을 최적화하세요.",
  type: "cast" as const,
};

export const castDashboardProps = {
  eyebrow: "상권 지도",
  title: "지도 기반 데이터로 상권을 직관적으로 분석합니다",
  description:
    "유동인구, 매출, 업종 데이터를 지도 위에 통합해 상권의 구조와 흐름을 한눈에 파악할 수 있습니다. 입지별 특성과 경쟁 환경을 직관적으로 분석할 수 있습니다.",
  imageSrc: "/image/cast/Commercial Map.png",
  mobileImageSrc: "/image/cast/Commercial Map.png",
  imageAlt: "cast 상권 지도 이미지",
} as const;

export const castInsightDashboardProps = {
  eyebrow: "대시보드",
  title: "데이터 기반 인사이트로 상권 전략을 제안합니다",
  description:
    "상권 지표, 고객 특성, 매출 패턴을 통합 분석하여 핵심 고객층과 수요 흐름을 도출하고, 데이터 기반으로 실행 가능한 전략을 제안합니다.",
  desktopImages: [
    {
      src: "/image/cast/cast_DashBoard_1.png",
      alt: "CAST 인사이트 대시보드1",
    },
    {
      src: "/image/cast/cast_DashBoard_2.png",
      alt: "CAST 인사이트 대시보드2",
    },
    {
      src: "/image/cast/cast_DashBoard_3.png",
      alt: "CAST 인사이트 대시보드3",
    },
  ],
} as const;
