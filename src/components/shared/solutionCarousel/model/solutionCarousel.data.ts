export type SolutionSlide = {
  id: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  themeColor: string;
};

export const solutionSlides: SolutionSlide[] = [
  {
    id: "mes",
    href: "/mes",
    imageSrc: "/icon/main/slider/Visual 1.png",
    imageAlt: "Preci.MES visual",
    themeColor: "var(--token-color-primary)",
    title: "제조 공정 실행 관리 시스템",
    subtitle:
      "데이터를 기반으로 운영을 관리하고 생산·재고·공정을 최적화하는 AI 기반 MES 솔루션",
    description:
      "데이터 파이프라인을 기반으로 MES를 구축하고 수요 예측 AI를 통해 생산·재고·공정 데이터를 통합적으로 분석합니다. 이를 통해 불필요한 작업과 인력 투입을 줄이고 정확한 생산 계획과 적정 재고 운영을 가능하게 하여 작업 공수와 운영 비용을 동시에 절감합니다.",
  },
  {
    id: "cast",
    href: "/cast",
    imageSrc: "/icon/main/slider/Visual 2.png",
    imageAlt: "Preci.CAST visual",
    themeColor: "#9333EA",
    title: "상권 분석 및 수요 예측 솔루션",
    subtitle: "데이터를 기반으로 상권을 분석하고 수요와 매출까지 예측하는 AI 솔루션",
    description:
      "데이터 파이프라인을 기반으로 유동인구, 공공, 매출 데이터를 통합 분석하여 지역 상권의 흐름을 파악하고 수요를 예측합니다. 이를 통해 매출 가능성을 사전에 예측하고 효율적인 입지 및 운영 전략 수립을 지원합니다.",
  },
  {
    id: "financial-system",
    href: "/financial_system",
    imageSrc: "/icon/main/slider/Visual 3.png",
    imageAlt: "Financial System visual",
    themeColor: "#16A34A",
    title: "금융 시스템 설계 & 운영",
    subtitle: "데이터부터 채널까지, 금융을 하나의 흐름으로 끊김 없이 작동하는 안정적인 금융 인프라",
    description:
      "계정계(Core Banking) 기반의 여수신 데이터 정합성과 트랜잭션 안정성을 확보하고, 정교한 권한 관리와 감사 추적이 가능한 금융 보안 체계를 구축하며, 고가용성 아키텍처를 통해 어떤 상황에서도 중단 없이 운영되는 안정적인 금융 채널 서비스를 제공합니다.",
  },
];
