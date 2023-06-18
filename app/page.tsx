import { HeroBackground } from "@/components/home/HeroBackground";
import Hero from "@/components/home/hero";
import WhatIsGaudi from "@/components/home/whatisgaudi";
import MailinglistCta from "@/components/mailinglist-cta";

export default function Home() {
  return (
    <>
      <HeroBackground className="top-[88px]" />

      <Hero />

      <WhatIsGaudi />

      {/* <HowItWorks /> */}

      <MailinglistCta />
    </>
  );
}
