export default function ImpactBanner() {
  return (
    <section className="flex w-full items-center justify-center border border-border bg-[linear-gradient(180deg,#09090b_0%,#562b0c_100%)] px-xl py-3xl text-center text-background tablet:px-2xl tablet:py-4xl desktop:px-4xl desktop:py-5xl">
      <div className="flex w-full max-w-[992px] flex-col items-center gap-md tablet:gap-lg desktop:gap-xl">
        <p className="text-[1.25rem] leading-[140%] font-bold text-background tablet:text-[1.5rem] desktop:text-[1.875rem] desktop:tracking-[-0.0625rem]">
          데이터 기반 의사결정을 도입한 기업은
          <br />
          설비 다운타임을 <span className="text-primary">30~50%</span> 줄이고
          유지보수 비용을 <span className="text-primary">10~40% 절감</span>
          합니다.
        </p>
        <p className="type-body text-background">
          *McKinsey &amp; Company, Deloitte 산업 리서치 기준
        </p>
      </div>
    </section>
  );
}
