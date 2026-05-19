import MediaPlaceholder from "@/components/main/ui/media-placeholder";
import PictureExplain from "@/components/shared/pictureExplain";
import { pictureExplainItems } from "@/components/shared/pictureExplain/model/pictureExplain.data";
import Image from "next/image";
import DecorativeArrowCard from "@/components/shared/decorativeArrowCard";
import WhyAI from "@/components/main/ui/whyAI";
import WhyAIIssuesPanel from "@/components/main/ui/whyAIIssuesPanel";
import ImpactBanner from "@/components/main/ui/impactBanner";
import AIDecisionArchitecture from "@/components/shared/aiDecisionArchitecture/ui/aiDecisionArchitecture";
import SolutionsIntro from "@/components/main/ui/solutionsIntro";
import SolutionCarousel from "@/components/shared/solutionCarousel/ui/solutionCarousel";

export default function MainPage() {
  return (
    <section className="flex flex-col  pb-4xl tablet:pb-5xl ">
      {/*TODO: 나중에 주는 파일로 대체*/}
      <MediaPlaceholder variant="main" />

      <div className="content-shell px-xs tablet:px-2xl desktop:px-0">
        {/* 4 + 1 사각형 디자인 사진 */}
        <div className="grid grid-cols-1 border-l border-border tablet:grid-cols-5 desktop:grid-cols-5">
          {pictureExplainItems.map((item) => (
            <PictureExplain
              key={item.imageAlt}
              className="max-w-none border-0 border-r border-b border-border tablet:border-b"
              media={
                <div className="relative h-[10rem] w-[10rem] tablet:h-[10rem] tablet:w-[10rem] desktop:h-[13.5rem] desktop:w-[13.5rem]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1279px) 10rem, 13.5rem"
                    className="object-contain"
                  />
                </div>
              }
              title={item.title}
              description={item.description}
            />
          ))}
          <DecorativeArrowCard className="border-0 border-r border-b border-border tablet:border-b-0" />
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
