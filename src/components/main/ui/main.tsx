import MediaPlaceholder from "@/components/main/ui/media-placeholder";
import Image from "next/image";

import {
  OurTechnologyData,
  OurSolutionBoxData,
} from "@/components/main/model/main.data";

import WhyAI from "@/components/main/ui/whyAI";
import WhyAIIssuesPanel from "@/components/main/ui/whyAIIssuesPanel";
import ImpactBanner from "@/components/main/ui/impactBanner";
import AIDecisionArchitecture from "@/components/shared/aiDecisionArchitecture/ui/aiDecisionArchitecture";
import SolutionsIntro from "@/components/main/ui/solutionsIntro";
import SolutionCarousel from "@/components/shared/solutionCarousel/ui/solutionCarousel";
import OurComponent from "@/components/main/ui/ourComponent";

export default function MainPage() {
  return (
    <section className="flex flex-col  pb-4xl tablet:pb-5xl ">
      <MediaPlaceholder variant="main" />

      <div className="content-shell px-lg tablet:px-2xl desktop:px-0">
        {/* Our Technology */}
        <div className=" pt-[var(--spacing-2xl)] tablet:pt-[var(--token-space-24)] pb-[var(--token-space-10)]">
          <OurComponent {...OurTechnologyData}>
            <div className="grid grid-cols-1 gap-sm tablet:grid-cols-4 ">
              {OurSolutionBoxData.map((item, index) => (
                <article
                  key={item.imageAlt}
                  className="flex self-stretch items-center gap-md rounded-2xl border border-ring bg-background p-md tablet:flex-col tablet:items-start tablet:p-xl"
                >
                  <div className="flex shrink-0 self-stretch items-start justify-between tablet:w-full">
                    <div className="relative desktop:h-[7.5rem] desktop:w-[7.5rem] tablet:h-[5rem] tablet:w-[5rem] h-[6rem] w-[6rem]">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        sizes="7.5rem"
                        className="object-contain"
                      />
                    </div>
                    <div className="hidden h-[2rem] w-[2rem] items-center justify-center rounded-2xl bg-(--color-secondary) tablet:flex desktop:h-[2.5rem] desktop:w-[2.5rem]">
                      <Image
                        src={"/icon/main/slider/arrow_forward.svg"}
                        alt={item.imageAlt}
                        height={24}
                        width={24}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex min-w-0 flex-1 self-stretch items-start justify-between gap-md tablet:items-end">
                    <div className="flex min-w-0 flex-1 flex-col self-stretch items-start gap-3">
                      <h3 className="break-keep font-sans text-body-small leading-[var(--token-text-body-small-line-height)] font-bold tracking-[0.00438rem] text-foreground tablet:text-heading-4 tablet:leading-[var(--token-text-heading-4-line-height)] tablet:tracking-[var(--token-text-heading-4-letter-spacing)]">
                        {item.title}
                      </h3>
                      <p className="break-keep font-sans text-body-small leading-[var(--token-text-body-small-line-height)] font-normal tracking-[0.00438rem] text-foreground tablet:text-[1rem] tablet:leading-normal tablet:tracking-[0]">
                        {item.description}
                      </p>
                    </div>
                    <div className="shrink-0 self-end font-normal text-muted-foreground">
                      0{index + 1}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </OurComponent>
        </div>
      </div>

      {/* 왜 데이터와 어쩌구 */}
      <section className="w-full bg-primary-foreground">
        <div className="content-shell px-lg tablet:px-2xl desktop:px-0">
          <div className="flex w-full max-w-[67.5rem] flex-col items-center gap-xl self-stretch pt-md pb-3xl tablet:flex-row tablet:gap-0 tablet:pt-0 tablet:pb-0">
            <WhyAI className="tablet:flex-[1_0_0] tablet:self-stretch" />
            <WhyAIIssuesPanel className="tablet:flex-[1_0_0] tablet:self-stretch" />
          </div>
        </div>
      </section>

      {/*데코레이터 배너*/}
      <section className="w-full border border-border bg-[linear-gradient(180deg,#09090b_0%,#562b0c_100%)]">
        <div className="content-shell px-lg tablet:px-2xl desktop:px-0">
          <ImpactBanner />
        </div>
      </section>

      <div className="content-shell px-lg tablet:px-2xl desktop:px-0">
        {/*AI의사 결정 아키텍쳐 텍스트 + 그림 */}
        <AIDecisionArchitecture />
        {/*캐러셀 위 타이틀*/}
        <SolutionsIntro />
        {/*메인페이지 캐러셀*/}
        <SolutionCarousel />
      </div>
    </section>
  );
}
