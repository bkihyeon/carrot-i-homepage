import Image from "next/image";
import BelowHeroImageText from "@/components/introduce/ui/belowHeroImageText";
import CompanyHistory from "@/components/introduce/ui/CompanyHistory";
import IntroduceWordBanner from "@/components/introduce/ui/introduceWordBanner";

export default function IntroducePage() {
  return (
    <section className="w-full pb-[9rem]">
      <div className="relative h-[33.75rem] w-full">
        <Image
          src={"/image/introduce/introduceHeroImage.png"}
          alt={"introduceHeroImage"}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <BelowHeroImageText />
      <IntroduceWordBanner />
      <CompanyHistory />
    </section>
  );
}
