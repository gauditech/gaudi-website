export const metadata = {
  title: "Home - Appy",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Sections from "@/components/whatisgaudi";
import HowItWorks from "@/components/howitworks";
import MailinglistCta from "@/components/mailinglist-cta";
import Newsletter from "@/components/newsletter";

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

      <Sections />
      <HowItWorks />
      <Newsletter />
      <MailinglistCta />
    </>
  );
}
