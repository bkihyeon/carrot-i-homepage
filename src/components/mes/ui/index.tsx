import MediaPlaceholder from "@/components/main/ui/media-placeholder";
import {
  mesArchitectureProps,
  mesDashboardProps,
  mesInfoFeatureSections,
  mesNextPictureProps,
  mesPictureExplainImageClassName,
  mesSectionDividerClassName,
  mesWordBannerProps,
} from "@/components/mes/model/mesPage.data";
import InfoFeatureSection from "@/components/shared/infoFeatureSection";
import NextPicture from "@/components/shared/nextPicture/ui/nextPicture";
import WordBanner from "@/components/shared/wordBanner";
import DashBoard from "@/components/mes/ui/dashBoard";
import AIDecisionArchitecture from "@/components/shared/aiDecisionArchitecture/ui/aiDecisionArchitecture";
import { pictureExplainItems } from "@/components/shared/pictureExplain/model/pictureExplain.data";
import PictureExplain from "@/components/shared/pictureExplain";
import Image from "next/image";
import DecorativeArrowCard from "@/components/shared/decorativeArrowCard";

export default function MesPage() {
  return (
    <section className={"mb-5xl"}>
      <MediaPlaceholder />
      <NextPicture {...mesNextPictureProps} />
      <WordBanner {...mesWordBannerProps} />
      {mesInfoFeatureSections.map((section, index) => (
        <div key={`mes-info-feature-${index}`}>
          <InfoFeatureSection {...section} />
          {index < mesInfoFeatureSections.length ? (
            <div className={mesSectionDividerClassName} />
          ) : null}
        </div>
      ))}
      <DashBoard {...mesDashboardProps} />
      <AIDecisionArchitecture {...mesArchitectureProps} />
      <div className="grid grid-cols-1 border-l border-border tablet:grid-cols-5 desktop:grid-cols-5">
        {pictureExplainItems.map((item) => (
          <PictureExplain
            key={item.imageAlt}
            className="max-w-none border-t-0 border-l-0"
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
        <DecorativeArrowCard className="border-t-0 border-l-0" />
      </div>
    </section>
  );
}
