import { HeroBackground } from "@/components/home/HeroBackground";

export default function FeaturesHead() {
  return (
    <section className="relative px-6 sm:px-8 lg:w-full lg:items-center lg:justify-between lg:gap-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">
          <div className="w-[75%] mx-auto text-center text-white">
            <h2 className="font-extrabold text-white text-3xl sm:text-5xl lg:text-6xl xl:text-7xl">
              Explore Gaudi <span className="text-yellow-500">features</span>
            </h2>
            <div className="h-6"></div>
            <p className="text-lg lg:text-xl">
              Detailed list of Gaudi features
            </p>
          </div>
        </div>
      </div>

      <HeroBackground />

      <div className="h-32 lg:h-64"></div>
    </section>
  );
}
