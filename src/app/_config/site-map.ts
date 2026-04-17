export type SiteSection = {
  anchorId?: string;
  eyebrow: string;
  title: string;
  description: string;
};

export type SitePage = {
  key: "home" | "mes" | "cast" | "financial-system";
  title: string;
  href: string;
  summary: string;
  intro: string;
  sections: SiteSection[];
};

export const sitePages: SitePage[] = [
  {
    key: "home",
    title: "Home",
    href: "/",
    summary: "Carrot-i의 전체 메시지와 서비스 축을 보여주는 메인 랜딩 페이지",
    intro:
      "브랜드 인트로, 핵심 가치, 주요 솔루션 진입점을 담는 메인 페이지입니다. 이후 Figma 홈 화면 구현도 이 구조 위에 그대로 입힐 수 있습니다.",
    sections: [
      {
        anchorId: "solution",
        eyebrow: "Hero",
        title: "브랜드 첫 인상과 핵심 메시지",
        description:
          "강한 첫 화면, 주요 카피, CTA, 브랜드 소개를 가장 먼저 배치합니다.",
      },
      {
        anchorId: "company-introduce",
        eyebrow: "Solutions",
        title: "MES / CAST / Financial System 진입",
        description:
          "3개 서비스 페이지로 자연스럽게 이어지도록 카드형 또는 탭형 진입 영역을 둡니다.",
      },
      {
        anchorId: "contents",
        eyebrow: "Proof",
        title: "성과와 신뢰 요소",
        description:
          "고객사, 운영 지표, 프로젝트 사례, 기술 강점을 묶어 신뢰를 강화합니다.",
      },
    ],
  },
  {
    key: "mes",
    title: "MES",
    href: "/mes",
    summary: "제조 운영과 현장 데이터를 연결하는 MES 상세 페이지",
    intro:
      "생산 계획, 작업 지시, 실적 수집, 모니터링 등 MES 기능을 기능 흐름 중심으로 소개하는 상세 페이지입니다.",
    sections: [
      {
        eyebrow: "Overview",
        title: "현장 운영 흐름 소개",
        description:
          "생산 지시부터 실적 관리까지 어떤 흐름으로 이어지는지 시각적으로 설명합니다.",
      },
      {
        eyebrow: "Features",
        title: "핵심 기능 블록",
        description:
          "생산 관리, 품질 관리, 설비 연동, 추적성 관리처럼 기능별 섹션을 분리합니다.",
      },
      {
        eyebrow: "CTA",
        title: "도입 문의와 데모 요청",
        description:
          "도입 상담, 구축 문의, 관련 사례 보기 같은 전환 액션을 아래에 배치합니다.",
      },
    ],
  },
  {
    key: "cast",
    title: "CAST",
    href: "/cast",
    summary: "상권 분석과 수요 예측을 설명하는 CAST 상세 페이지",
    intro:
      "데이터 기반 상권 분석, 예측 모델, 시각화 결과를 중심으로 CAST 솔루션 가치를 보여주는 페이지입니다.",
    sections: [
      {
        eyebrow: "Data",
        title: "데이터 파이프라인 설명",
        description:
          "유동 인구, 공공 데이터, 매출 데이터가 어떤 식으로 결합되는지 정리합니다.",
      },
      {
        eyebrow: "Insights",
        title: "예측 결과와 분석 화면",
        description:
          "대시보드 이미지나 지표 카드로 예측 정확도와 활용 예시를 보여줍니다.",
      },
      {
        eyebrow: "Use Cases",
        title: "활용 시나리오",
        description:
          "입지 선정, 매출 추정, 지역 비교 같은 대표 활용 사례를 모듈형으로 구성합니다.",
      },
    ],
  },
  {
    key: "financial-system",
    title: "Financial System",
    href: "/financial_system",
    summary: "금융 시스템 설계와 운영 역량을 설명하는 상세 페이지",
    intro:
      "계정계, 보안, 채널 운영, 고가용성 아키텍처 등 금융 시스템 인프라 역량을 정리하는 페이지입니다.",
    sections: [
      {
        eyebrow: "Core",
        title: "계정계와 트랜잭션 안정성",
        description:
          "정합성, 거래 처리, 데이터 신뢰성 같은 핵심 인프라 포인트를 전면에 배치합니다.",
      },
      {
        eyebrow: "Security",
        title: "보안과 감사 체계",
        description:
          "권한 관리, 감사 로그, 규정 대응 같은 금융 특화 보안 항목을 설명합니다.",
      },
      {
        eyebrow: "Operations",
        title: "무중단 운영 구조",
        description:
          "고가용성, 장애 대응, 안정적인 채널 운영 전략을 시각적으로 보여줍니다.",
      },
    ],
  },
];

export function getSitePage(key: SitePage["key"]) {
  return sitePages.find((page) => page.key === key);
}
