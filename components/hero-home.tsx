import HeroBgModels from "@/public/images/screenshots/hero_models.png";
import HeroBgEntry from "@/public/images/screenshots/hero_entrypoints.png";
import ImageCarousel from "@/components/image-carousel";
import Link from "next/link";

export default function HeroHome() {
  return (
    <section className="relative mb-10 md:mb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1
                className="h1 lg:text-6xl mb-4 font-red-hat-display font-black"
                data-aos="fade-down"
              >
                Build your app in a{" "}
                <span className="text-teal-500">fraction</span> of time!
              </h1>
              <p
                className="text-xl text-gray-600 dark:text-gray-400"
                data-aos="fade-down"
                data-aos-delay="150"
              >
                Describe your application backend using simple, expressive
                language. Focus on the bigger picture, and get your app with
                batteries included.{" "}
              </p>

              <div className="md:mt-8">
                <Link
                  href="/contact"
                  className="btn text-white bg-teal-500 hover:bg-teal-400 ml-6 mt-4 font-bold"
                >
                  Quickstart &nbsp;
                  <svg
                    className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* hero image */}
            <div
              className="md:col-span-5 lg:col-span-5 text-center md:text-right"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              {/* Background image */}
              <div className="-z-1">
                <ImageCarousel
                  elements={[{ image: HeroBgModels }, { image: HeroBgEntry }]}
                />
                <div
                  className="bg-gradient-to-t from-white dark:from-gray-900"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
