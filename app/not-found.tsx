import { HeroBackground } from "@/components/home/HeroBackground";
import { SectionHeading } from "@/components/SectionHeading";

export default function NotFound() {
  return (
    <>
      <HeroBackground className="top-[88px]" />

      <section className="relative px-6 sm:px-8 lg:w-full lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-10 md:pt-40 md:pb-16">
            <div className="w-[75%] mx-auto text-center text-white">
              <div className="h-12"></div>

              <SectionHeading level={3}>
                Hmmm, the page you were looking for doesn't exist anymore ...
              </SectionHeading>

              <div className="h-12"></div>

              <p>
                <a
                  className="btn btn-blue text-white border-2 w-full xl:w-60"
                  href="/"
                >
                  Back to home page
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-32"></div>
      <div className="h-32"></div>
      <div className="h-32"></div>
      <div className="h-32"></div>
    </>
  );
}
