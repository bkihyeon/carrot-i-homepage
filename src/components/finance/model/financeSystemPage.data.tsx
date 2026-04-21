import type { AIDecisionArchitectureProps } from "@/components/shared/aiDecisionArchitecture/ui/aiDecisionArchitecture";
import type { NextPictureProps } from "@/components/shared/nextPicture/ui/nextPicture";
import type { PictureExplainItem } from "@/components/shared/pictureExplain/model/pictureExplain.data";
import type { WordBannerProps } from "@/components/shared/wordBanner";
import type { TextDashboardProps } from "@/components/finance/ui/textDashboard";

export const financeNextPictureProps = {
  columnsClassName:
    "tablet:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] desktop:grid-cols-[minmax(0,648.8px)_minmax(320px,431.2px)]",
  title: <>금융 시스템 설계 & 운영</>,
  description: (
    <>
      데이터부터 채널까지, 금융을 하나의 흐름으로 끊김 없이 작동하는 안정적인
      금융 인프라
    </>
  ),
  inquiryDes:
    "계정계(Core Banking) 기반의 여수신 데이터 정합성과 트랜잭션 안정성을 확보하고, 정교한 권한 관리와 감사 추적이 가능한 금융 보안 체계를 구축하며, 고가용성 아키텍처를 통해 어떤 상황에서도 중단 없이 운영되는 안정적인 금융 채널 서비스를 제공합니다.",
  className: "border-t-0",
} as const satisfies NextPictureProps;

export const financeWordBannerProps = {
  word: "AI 데이터 플로우 기반, Financial System으로 보안을 최적화하세요.",
  type: "financial" as const,
} as const satisfies WordBannerProps;

export const financeDashboardProps = [
  {
    eyebrow: "여수신 업무 설계",
    title: "데이터 정합성을 기반으로 안정적인 여수신 업무를 설계합니다",
    description:
      "계정계(Core Banking) 데이터의 정합성과 트랜잭션 무결성을 기반으로 금융의 핵심인 자금 흐름을 안정적으로 처리할 수 있는 구조를 설계합니다. 정확한 데이터 처리 기준을 통해 신뢰도 높은 금융 업무 운영을 지원합니다.",
  },
  {
    eyebrow: "금융 보안 시스템 구축",
    title: "정교한 권한 관리와 감사 체계로 금융 보안을 강화합니다",
    description:
      "IAM/EAM 기반의 권한 관리 체계를 구축하고, 모든 접근과 행위를 추적 가능한 수준으로 기록합니다. 규제 기관의 감사에도 즉시 대응 가능한 로그 설계와 안정적인 접근 통제 환경을 제공합니다.",
  },
  {
    eyebrow: "금융 채널 서비스 구축",
    title: "중단 없는 금융 서비스를 위한 고가용성 채널을 구축합니다",
    description:
      "모바일, 웹, 콜센터 등 다양한 고객 접점에서 어떤 상황에서도 서비스가 안정적으로 유지되도록 설계합니다. 트래픽 증가나 외부 연동 장애 상황에서도 핵심 금융 서비스가 중단되지 않는 아키텍처를 구현합니다.",
  },
] as const satisfies readonly TextDashboardProps[];

export const financeArchitectureProps = {
  eyebrow: <>캐롯아이의 AI 의사결정 아키텍처</>,
  title: <>단순한 금융 시스템이 아닌, 데이터 기반 기술입니다</>,
  description: (
    <>
      데이터 구조화부터 예측, 자동화, 설명까지 <br />
      의사결정에 필요한 모든 과정을 기술로 완성합니다.
    </>
  ),
} as const satisfies AIDecisionArchitectureProps;

export const financePictureExplainItems = [
  {
    imageSrc: "/image/finance/miri1.png",
    imageAlt: "finance-miri1",
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
    imageSrc: "/image/finance/miri2.png",
    imageAlt: "finance-miri2",
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
    imageSrc: "/image/finance/miri3.png",
    imageAlt: "finance-miri3",
    title: <>Execution Pipeline</>,
    description: (
      <>
        분석을 결정으로 <br />
        연결하고 설계합니다.
      </>
    ),
  },
  {
    imageSrc: "/image/finance/miri4.png",
    imageAlt: "finance-miri4",
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
