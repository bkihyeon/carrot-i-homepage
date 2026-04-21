import Image from "next/image";
import BelowHeroImageText from "@/components/introduce/ui/belowHeroImageText";

export default function IntroducePage() {
  return (
    <section className="w-full">
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
    </section>
  );
}
