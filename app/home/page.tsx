import Hero from "@/components/home/hero";
import WhatIsGaudi from "@/components/home/whatisgaudi";
import MailinglistCta from "@/components/mailinglist-cta";

export const metadata = {
  title: "Gaud - Home",
  description: "Gaudi home page",
};

export default function Home() {
  return (
    <>
      <Hero />

      <WhatIsGaudi />

      {/* <HowItWorks /> */}

      <MailinglistCta />
    </>
  );
}
