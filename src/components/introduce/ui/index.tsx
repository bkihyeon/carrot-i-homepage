import Image from "next/image";

export default function IntroducePage() {
  return (
    <section className="relative h-[33.75rem] w-full">
      <Image
        src={"/image/introduce/introduceHeroImage.png"}
        alt={"introduceHeroImage"}
        fill
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}
