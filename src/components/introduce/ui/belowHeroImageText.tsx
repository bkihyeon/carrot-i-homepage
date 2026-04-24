export default function BelowHeroImageText() {
  return (
    <section className="w-full border border-border tablet:p-2xl p-xl ">
      <div className="flex h-full flex-col tablet:h-[9.5rem] tablet:w-[34rem]">
        <p className="text-[1.125rem] tablet:text-2xl desktop:font-heading desktop:text-heading-3 break-keep font-heading text-heading-3 leading-[160%] font-bold tracking-[var(--token-text-heading-3-letter-spacing)] text-foreground">
          캐롯아이는 데이터를 결정으로 바꾸는 회사입니다.
        </p>
        <p
          className="
        text-[1.125rem] tablet:text-2xl desktop:font-heading desktop:text-heading-3 leading-[160%] font-normal tracking-[var(--token-text-heading-3-letter-spacing)] text-foreground"
        >
          AI Data Flow, 데이터 수집부터 분석, 예측, 의사결정까지 흩어진 과정을
          하나의 흐름으로 연결합니다.
          <br className="hidden tablet:block" />
          단순한 활용을 넘어, 실행까지 이어지는 구조를 만듭니다.
        </p>
      </div>
    </section>
  );
}
