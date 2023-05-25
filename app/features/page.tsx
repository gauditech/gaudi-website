export const metadata = {
  title: "Gaud - Features",
  description: "List of Gaudi features",
};

import FeaturesContent from "@/components/features/content";
import FeaturesHead from "@/components/features/head";

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHead />

      <FeaturesContent />
    </>
  );
}
