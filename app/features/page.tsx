import FeaturesContent from "@/components/features/content";
import FeaturesHead from "@/components/features/head";
import { HeroBackground } from "@/components/home/HeroBackground";
import MailinglistCta from "@/components/mailinglist-cta";

export default function FeaturesPage() {
  return (
    <>
      <HeroBackground className="top-[88px]" />

      <FeaturesHead />

      <FeaturesContent />

      <MailinglistCta />
    </>
  );
}
