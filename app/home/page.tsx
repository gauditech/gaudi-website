export const metadata = {
  title: "Home - Gaudi",
  description: "Gaudi home page",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import WhatIsGaudi from "@/components/whatisgaudi";
import HowItWorks from "@/components/howitworks";
import MailinglistCta from "@/components/mailinglist-cta";

export default function Home() {
  return (
    <>
      {/* page decorations */}
      <>
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>
      </>

      <Hero />

      <div id="what-is-gaudi"></div>
      <WhatIsGaudi />

      <div id="how-it-works"></div>
      <HowItWorks />

      <div id="contact"></div>
      <MailinglistCta />
    </>
  );
}
