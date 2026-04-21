import MediaPlaceholder from "@/components/main/ui/media-placeholder";
import NextPicture from "@/components/shared/nextPicture/ui/nextPicture";
import {
  financeNextPictureProps,
  financeWordBannerProps,
  financeDashboardProps,
  financeArchitectureProps,
  financePictureExplainItems,
} from "@/components/finance/model/financeSystemPage.data";
import WordBanner from "@/components/shared/wordBanner";
import TextDashboard from "@/components/finance/ui/textDashboard";
import AIDecisionArchitecture from "@/components/shared/aiDecisionArchitecture/ui/aiDecisionArchitecture";

import PictureExplain from "@/components/shared/pictureExplain";
import { mesPictureExplainImageClassName } from "@/components/mes/model/mesPage.data";
import Image from "next/image";
import DecorativeArrowCard from "@/components/shared/decorativeArrowCard";

export default function FinancialSystemPage() {
  return (
    <section className={"mb-5xl"}>
      <MediaPlaceholder variant="financial" />
      <NextPicture {...financeNextPictureProps} />
      <WordBanner {...financeWordBannerProps} />
      {financeDashboardProps.map((item) => (
        <TextDashboard
          key={item.eyebrow}
          eyebrow={item.eyebrow}
          title={item.title}
          description={item.description}
        />
      ))}
      <AIDecisionArchitecture
        {...financeArchitectureProps}
        imageSrc={"/image/finance/AIDetermineArchitecture.png"}
      />
      <div className="grid grid-cols-1 border-l border-border tablet:grid-cols-5 desktop:grid-cols-5">
        {financePictureExplainItems.map((item) => (
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
          variant={"financial"}
        />
      </div>
    </section>
  );
}
