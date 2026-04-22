import Image from "next/image";
import BelowHeroImageText from "@/components/introduce/ui/belowHeroImageText";
import CompanyHistory from "@/components/introduce/ui/CompanyHistory";
import IntroduceWordBanner from "@/components/introduce/ui/introduceWordBanner";

export default function IntroducePage() {
  return (
    <section className="w-full pb-[9rem]">
      <Image
        src={"/image/introduce/introduceHeroImage.png"}
        alt={"introduceHeroImage"}
        width={4324}
        height={2164}
        sizes="100vw"
        className="h-auto w-full"
      />
      <BelowHeroImageText />
      <IntroduceWordBanner />
      <CompanyHistory />
    </section>
  );
}
