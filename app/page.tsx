export const metadata = {
  title: "Home - Appy",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Stats from "@/components/stats";
import Carousel from "@/components/carousel";
import Tabs from "@/components/tabs";
import Process from "@/components/process";
import PricingTables from "@/components/pricing-tables";
import TestimonialsBlocks from "@/components/testimonials-blocks";
import FeaturesBlocks from "@/components/features-blocks";
import Cta from "@/components/cta";
import Sections from "@/components/sections";
import HowItWorks from "@/components/howitworks";
import MailinglistCta from "@/components/mailinglist-cta";

export default function Home() {
  return (
    <>
      {/* page decorations */}
      <>
        {/* Background gradient (light version only) */}
        <div
          className="absolute inset-0 -z-1 bg-gradient-to-b from-gray-100 to-white pointer-events-none dark:hidden"
          aria-hidden="true"
        ></div>
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>
      </>

      <Hero />

      {/* -------------- */}
      {/* <Stats /> */}
      <Sections />
      {/* <Carousel /> */}
      <HowItWorks />
      {/* <Process />
      <PricingTables />
      <TestimonialsBlocks />
      <FeaturesBlocks /> */}
      <MailinglistCta />
    </>
  );
}
