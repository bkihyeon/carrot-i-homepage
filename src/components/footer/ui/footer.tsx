import Image from "next/image";
import Link from "next/link";
import { OpenLegalDocumentButton } from "@/components/shared/modal/ui/modal-trigger";

const solutionLinks = [
  { label: "Preci.MES", href: "/mes" },
  { label: "Preci.CAST", href: "/cast" },
  { label: "Financial System", href: "/financial_system" },
];

export default function Footer() {
  return (
    <footer className="mt-auto">
      <section className="flex self-stretch flex-col items-center gap-3xl bg-primary px-xl py-3xl tablet:gap-4xl tablet:px-2xl tablet:py-5xl">
        <div className="mx-auto flex w-full max-w-[67.5rem] flex-col items-start gap-3xl tablet:gap-[5rem]">
          <h2 className="break-keep text-[1.75rem] leading-[1.4] font-bold tracking-[-1px] text-white tablet:text-[42px]">
            <span className="tablet:hidden">
              데이터는 분석이 아니라
              <br />
              실행입니다.
              <br />
              캐롯아이와 함께,
              <br />
              결정으로 이어지는 AI를
              <br />
              시작하세요.
            </span>
            <span className="hidden tablet:inline">
              데이터는 분석이 아니라 실행입니다.
              <br />
              캐롯아이와 함께, 결정으로 이어지는 AI를 시작하세요.
            </span>
          </h2>
          <Link href="/" className="shrink-0">
            <Image
              src="/icon/header/mainTitle.svg"
              alt="Carrot i"
              width={154}
              height={42}
              className="h-7 w-auto invert brightness-0 tablet:h-[42px] tablet:w-[154px]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
        </div>
      </section>

      <section className="flex self-stretch flex-col items-center gap-xl bg-secondary px-xl pt-3xl pb-5xl text-[#52525B] tablet:gap-3xl tablet:px-2xl tablet:pt-20 tablet:pb-[11.25rem]">
        <div className="mx-auto flex w-full max-w-[67.5rem] flex-col items-start gap-3xl">
          <div className="flex w-full max-w-none flex-col items-start gap-5  tablet:flex-row tablet:gap-5xl">
            <div className="flex w-full max-w-none flex-col items-start gap-xs ">
              <p className="text-[14px] leading-[21px] tracking-[0.07px] font-bold text-foreground">
                솔루션
              </p>
              {solutionLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="type-body text-[#52525B] transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex w-full max-w-none flex-col items-start gap-xs ">
              <p className="text-[14px] leading-[21px] tracking-[0.07px] font-bold text-foreground">
                문의
              </p>
              <a
                href="mailto:support@carrot-i.com"
                className="type-body text-[#52525B] transition-colors hover:text-foreground"
              >
                이메일 : support@carrot-i.com
              </a>
              <a
                href="tel:0319263191"
                className="type-body text-[#52525B] transition-colors hover:text-foreground"
              >
                전화번호 : 031-926-3191
              </a>
            </div>
          </div>

          <div className="flex w-full max-w-none flex-col items-start gap-md ">
            <h3 className="text-[20px] leading-6 font-bold tracking-[0] text-[#52525B]">
              ㈜캐롯아이
            </h3>
            <p className="type-body whitespace-pre-line text-[#52525B] tablet:hidden">
              사업자 등록번호 : 807-81-00069
              {"\n"}대표 : 안선희
              {"\n"}HQ : 경기도 고양시 덕양구 삼원로 83 915호,
              {"\n"}916호
              {"\n"}BR : 서울시 강남구 선릉로 100길 54 삼성빌딩
              {"\n"}4층
            </p>
            <p className="hidden whitespace-pre-line tablet:block tablet:type-body tablet:text-[#52525B]">
              사업자 등록번호 : 807-81-00069 | 대표 : 안선희
              {"\n"}HQ : 경기도 고양시 덕양구 삼원로 83 915호, 916호 | BR :
              서울시 강남구 선릉로 100길 54 삼성빌딩 4층
            </p>
          </div>

          <div className="flex w-full max-w-none flex-wrap items-center gap-2 tablet:max-w-[263px] tablet:gap-3 tablet:whitespace-nowrap">
            <OpenLegalDocumentButton
              documentType="privacy"
              className="type-body font-bold text-[#52525B] transition-colors hover:text-foreground cursor-pointer"
            >
              개인정보처리방침
            </OpenLegalDocumentButton>
            <OpenLegalDocumentButton
              documentType="no-email-collection"
              className="type-body text-[#52525B] transition-colors hover:text-foreground cursor-pointer"
            >
              이메일무단수집거부
            </OpenLegalDocumentButton>
          </div>
        </div>
      </section>
    </footer>
  );
}
