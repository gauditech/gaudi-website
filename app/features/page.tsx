export const metadata = {
  title: "Features - Gaudi",
  description: "Gaudi features list",
};

import PageIllustration from "@/components/page-illustration";
import FeaturesContent from "@/app/features/content";
import FeaturesHead from "@/app/features/head";

export default function FeaturesPage() {
  return (
    <>
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <FeaturesHead />

      <FeaturesContent />
    </>
  );
}
