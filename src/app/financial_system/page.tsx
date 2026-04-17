export default function FinancialSystemPage() {
  return (
    <section className="content-shell flex flex-col px-xs pt-md tablet:px-2xl tablet:pt-xl desktop:px-0 desktop:pt-2xl">
      <div className="flex flex-col border border-border bg-background">
        <div className="flex flex-col gap-md border-b border-border px-xl py-3xl tablet:px-2xl tablet:py-4xl desktop:px-3xl desktop:py-5xl">
          <p className="type-body-medium uppercase text-foreground-alt">
            Financial System
          </p>
          <h1 className="type-heading-1 break-keep font-bold text-foreground">
            금융 시스템 설계와 운영 역량을 설명하는 상세 페이지
          </h1>
          <p className="type-body-medium max-w-[52rem] text-foreground-alt">
            계정계, 보안, 채널 운영, 고가용성 아키텍처 등 금융 시스템 인프라 역량을 정리하는 페이지입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-3">
          <article className="flex flex-col gap-sm border-b border-border px-xl py-2xl last:border-b-0 tablet:border-b-0 tablet:border-l desktop:px-3xl desktop:py-3xl">
            <p className="type-body-medium uppercase text-foreground-alt">
              Core
            </p>
            <h2 className="type-heading-3 break-keep font-bold text-foreground">
              계정계와 트랜잭션 안정성
            </h2>
            <p className="type-body text-foreground-alt">
              정합성, 거래 처리, 데이터 신뢰성 같은 핵심 인프라 포인트를 전면에 배치합니다.
            </p>
          </article>
          <article className="flex flex-col gap-sm border-b border-border px-xl py-2xl last:border-b-0 tablet:border-b-0 tablet:border-l desktop:px-3xl desktop:py-3xl">
            <p className="type-body-medium uppercase text-foreground-alt">
              Security
            </p>
            <h2 className="type-heading-3 break-keep font-bold text-foreground">
              보안과 감사 체계
            </h2>
            <p className="type-body text-foreground-alt">
              권한 관리, 감사 로그, 규정 대응 같은 금융 특화 보안 항목을 설명합니다.
            </p>
          </article>
          <article className="flex flex-col gap-sm border-b border-border px-xl py-2xl last:border-b-0 tablet:border-b-0 tablet:border-l desktop:px-3xl desktop:py-3xl">
            <p className="type-body-medium uppercase text-foreground-alt">
              Operations
            </p>
            <h2 className="type-heading-3 break-keep font-bold text-foreground">
              무중단 운영 구조
            </h2>
            <p className="type-body text-foreground-alt">
              고가용성, 장애 대응, 안정적인 채널 운영 전략을 시각적으로 보여줍니다.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
