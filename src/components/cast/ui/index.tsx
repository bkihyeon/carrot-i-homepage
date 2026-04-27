import MediaPlaceholder from "@/components/main/ui/media-placeholder";
import {
  castDashboardProps,
  castInfoFeatureSectionProps,
  castInsightDashboardProps,
  castNextPictureProps,
  castWordBannerProps,
  castArchitectureProps,
  castPictureExplainItems,
} from "@/components/cast/model/castPage.data";
import InsightDashboard from "@/components/cast/ui/insightDashboard";
import InfoFeatureSection from "@/components/shared/infoFeatureSection";
import NextPicture from "@/components/shared/nextPicture/ui/nextPicture";
import WordBanner from "@/components/shared/wordBanner";
import DashBoard from "@/components/shared/dashBoard";
import AIDecisionArchitecture from "@/components/shared/aiDecisionArchitecture/ui/aiDecisionArchitecture";
import { mesPictureExplainImageClassName } from "@/components/mes/model/mesPage.data";
import PictureExplain from "@/components/shared/pictureExplain";
import Image from "next/image";
import DecorativeArrowCard from "@/components/shared/decorativeArrowCard";

export default function CastPage() {
  return (
    <section className={"mb-5xl"}>
      <MediaPlaceholder variant="cast" />
      <NextPicture {...castNextPictureProps} />
      <WordBanner {...castWordBannerProps} />
      <DashBoard {...castDashboardProps} />
      <InsightDashboard {...castInsightDashboardProps} />
      <InfoFeatureSection
        {...castInfoFeatureSectionProps}
        showBottomBorder={true}
      />
      <AIDecisionArchitecture
        {...castArchitectureProps}
        imageSrc={"/image/cast/AIDetermineArchitecture_4x.png"}
      />
      <div className="grid grid-cols-1 border-l border-border tablet:grid-cols-5 desktop:grid-cols-5">
        {castPictureExplainItems.map((item) => (
          <PictureExplain
            key={item.imageAlt}
            className="max-w-none border-t-0 border-l-0 border-r"
            media={
              <div className={mesPictureExplainImageClassName}>
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-contain"
                />
              </div>
            }
            title={item.title}
            description={item.description}
          />
        ))}
        <DecorativeArrowCard
          className="hidden border-t-0 border-l-0 tablet:flex"
          variant={"cast"}
        />
      </div>
    </section>
  );
}
