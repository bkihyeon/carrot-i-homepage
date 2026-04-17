export default function CastPage() {
  return (
    <section className="content-shell flex flex-col px-xs pt-md tablet:px-2xl tablet:pt-xl desktop:px-0 desktop:pt-2xl">
      <div className="flex flex-col border border-border bg-background">
        <div className="flex flex-col gap-md border-b border-border px-xl py-3xl tablet:px-2xl tablet:py-4xl desktop:px-3xl desktop:py-5xl">
          <p className="type-body-medium uppercase text-foreground-alt">
            CAST
          </p>
          <h1 className="type-heading-1 break-keep font-bold text-foreground">
            상권 분석과 수요 예측을 설명하는 CAST 상세 페이지
          </h1>
          <p className="type-body-medium max-w-[52rem] text-foreground-alt">
            데이터 기반 상권 분석, 예측 모델, 시각화 결과를 중심으로 CAST 솔루션 가치를 보여주는 페이지입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-3">
          <article className="flex flex-col gap-sm border-b border-border px-xl py-2xl last:border-b-0 tablet:border-b-0 tablet:border-l desktop:px-3xl desktop:py-3xl">
            <p className="type-body-medium uppercase text-foreground-alt">
              Data
            </p>
            <h2 className="type-heading-3 break-keep font-bold text-foreground">
              데이터 파이프라인 설명
            </h2>
            <p className="type-body text-foreground-alt">
              유동 인구, 공공 데이터, 매출 데이터가 어떤 식으로 결합되는지 정리합니다.
            </p>
          </article>
          <article className="flex flex-col gap-sm border-b border-border px-xl py-2xl last:border-b-0 tablet:border-b-0 tablet:border-l desktop:px-3xl desktop:py-3xl">
            <p className="type-body-medium uppercase text-foreground-alt">
              Insights
            </p>
            <h2 className="type-heading-3 break-keep font-bold text-foreground">
              예측 결과와 분석 화면
            </h2>
            <p className="type-body text-foreground-alt">
              대시보드 이미지나 지표 카드로 예측 정확도와 활용 예시를 보여줍니다.
            </p>
          </article>
          <article className="flex flex-col gap-sm border-b border-border px-xl py-2xl last:border-b-0 tablet:border-b-0 tablet:border-l desktop:px-3xl desktop:py-3xl">
            <p className="type-body-medium uppercase text-foreground-alt">
              Use Cases
            </p>
            <h2 className="type-heading-3 break-keep font-bold text-foreground">
              활용 시나리오
            </h2>
            <p className="type-body text-foreground-alt">
              입지 선정, 매출 추정, 지역 비교 같은 대표 활용 사례를 모듈형으로 구성합니다.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
