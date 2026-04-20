import MediaPlaceholder from "@/components/main/ui/media-placeholder";
import {
  castDashboardProps,
  castInsightDashboardProps,
  castNextPictureProps,
  castWordBannerProps,
} from "@/components/cast/model/castPage.data";
import InsightDashboard from "@/components/cast/ui/insightDashboard";
import NextPicture from "@/components/shared/nextPicture/ui/nextPicture";
import WordBanner from "@/components/shared/wordBanner";
import DashBoard from "@/components/shared/dashBoard";

export default function CastPage() {
  return (
    <section>
      <MediaPlaceholder variant="cast" />
      <NextPicture {...castNextPictureProps} />
      <WordBanner {...castWordBannerProps} />
      <DashBoard {...castDashboardProps} />
      <InsightDashboard {...castInsightDashboardProps} />
    </section>
  );
}
