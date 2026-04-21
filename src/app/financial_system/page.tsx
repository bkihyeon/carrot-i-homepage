import FinancialSystemPage from "@/components/finance/ui";
import { castNextPictureProps } from "@/components/cast/model/castPage.data";
import NextPicture from "@/components/shared/nextPicture/ui/nextPicture";

export default function FinancialSystem() {
  return (
    <section className="content-shell flex flex-col px-xs pt-md tablet:px-2xl tablet:pt-xl desktop:px-0 desktop:pt-2xl">
      <div>
        <FinancialSystemPage />
        <NextPicture {...castNextPictureProps} />
      </div>
    </section>
  );
}
