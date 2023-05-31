import FeaturesContent from "@/components/features/content";
import FeaturesHead from "@/components/features/head";
import MailinglistCta from "@/components/mailinglist-cta";

export const metadata = {
  title: "Gaudi - Features",
  description: "List of Gaudi features",
};

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHead />

      <FeaturesContent />

      <MailinglistCta />
    </>
  );
}
