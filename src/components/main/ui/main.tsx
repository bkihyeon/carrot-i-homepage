import MediaPlaceholder from "@/components/main/ui/media-placeholder";
import PictureExplain from "@/components/shared/pictureExplain";
import { pictureExplainItems } from "@/components/shared/pictureExplain/model/pictureExplain.data";
import Image from "next/image";
import DecorativeArrowCard from "@/components/shared/decorativeArrowCard";

import {
  OurTechnologyData,
  OurSolutionData,
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

      <div className="content-shell px-xs tablet:px-2xl desktop:px-0">
        {/* Our Technology */}
        <div className="pt-[var(--token-space-24)] pb-[var(--token-space-10)]">
          <OurComponent {...OurTechnologyData}>
            <div className="grid grid-cols-1 gap-sm tablet:grid-cols-2 desktop:grid-cols-4 ">
              {OurSolutionBoxData.map((item, index) => (
                <article
                  key={item.imageAlt}
                  className="flex flex-col items-start gap-md border border-ring bg-background p-xl rounded-2xl"
                >
                  <div className="flex self-stretch items-start justify-between">
                    <div className="relative h-[7.5rem] w-[7.5rem]">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        sizes="7.5rem"
                        className="object-contain"
                      />
                    </div>
                    <div
                      className={
                        "h-[2rem] w-[2rem] desktop:h-[2.5rem] desktop:w-[2.5rem] bg-(--color-secondary) rounded-2xl items-center justify-center flex"
                      }
                    >
                      <Image
                        src={"/icon/main/slider/arrow_forward.svg"}
                        alt={item.imageAlt}
                        height={24}
                        width={24}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex self-stretch items-end gap-md justify-between ">
                    <div className="flex flex-col gap-3">
                      <h3 className="break-keep text-heading-4 leading-[var(--token-text-heading-4-line-height)] font-bold tracking-[var(--token-text-heading-4-letter-spacing)]">
                        {item.title}
                      </h3>
                      <p className="font-normal text-[1rem] break-keep text-foreground">
                        {item.description}
                      </p>
                    </div>
                    <div className={"text-muted-foreground"}>0{index + 1}</div>
                  </div>
                </article>
              ))}
            </div>
          </OurComponent>
        </div>

        {/* 왜 데이터와 어쩌구 */}
        <div className="grid grid-cols-1 items-stretch tablet:h-[31.875rem] tablet:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] desktop:h-auto desktop:grid-cols-[431px_649px]">
          <WhyAI className="border-t-0 tablet:border-l tablet:border-r-0" />
          <WhyAIIssuesPanel />
        </div>

        {/*데코레이터 배너*/}
        <ImpactBanner />
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
