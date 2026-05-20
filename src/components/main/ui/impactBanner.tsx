export default function ImpactBanner() {
  return (
    <div className="flex w-full items-center justify-center px-xl py-[6rem] text-center text-background tablet:px-2xl desktop:px-4xl ">
      <div className="flex w-full flex-col items-center gap-md tablet:gap-lg desktop:gap-xl">
        <p className="font-heading text-heading-2 leading-[140%] font-bold tracking-[var(--token-text-heading-2-letter-spacing)] tablet:text-[2.5rem] tablet:leading-[125%] tablet:tracking-[var(--token-text-heading-1-letter-spacing)]">
          데이터 기반 의사결정을 <br className={"block tablet:hidden"} /> 도입한
          기업은
          <br />
          설비 다운타임을 <br className={"block tablet:hidden"} />
          <span className="text-primary">30~50%</span> 줄이고
          <br />
          유지보수 비용을 <br className={"block tablet:hidden"} />
          <span className="text-primary">10~40% 절감</span>
          {"합니다."}
        </p>
        <p className="text-background desktop:text-[1rem] text-[0.875rem] font-normal">
          *McKinsey &amp; Company, Deloitte 산업 리서치 기준
        </p>
      </div>
    </div>
  );
}
