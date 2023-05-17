import HeroBgModels from "@/public/images/screenshots/hero_models2.png";
import HeroBgEntry from "@/public/images/screenshots/hero_entrypoints2.png";
import ImageCarousel from "@/components/image-carousel";
import Link from "next/link";

export default function HeroHome() {
  return (
    <section className="relative px-5 md:px-6 pt-[100px] pb-10 md:pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero content */}
        <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
            <h1
              className="h1 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 font-red-hat-display font-black"
              data-aos="fade-down"
            >
              Build <span className="text-teal-500">better</span> apps in a{" "}
              <span className="text-teal-500">fraction</span> of time
            </h1>
            <p
              className="text-xl text-gray-600 dark:text-gray-400"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              Gaudi is a declarative programming language and a backend
              framework that makes it easier to build and maintain web
              application APIs. Simply describe your models and APIs in a
              declarative way and instantly get your app with batteries
              included.
              <br />
              <br />
              With Gaudi out of the box you get expressive data modeling,
              customizable APIs, automatic database migration and population,
              powerful declarative database query engine, full stack type
              safety, client libary generators and much more.
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

          {/* Background gradient (light version only) */}
          <div
            className="absolute inset-0 -z-[2] bg-gradient-to-t from-gray-100 to-white pointer-events-none dark:hidden"
            aria-hidden="true"
          ></div>

          {/* hero image */}
          <div
            className="md:col-span-5 lg:col-span-5 text-center md:text-right"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            {/* Background image */}
            <div className="-z-1 mx-10 md:mx-0">
              <ImageCarousel
                elements={[{ image: HeroBgModels }, { image: HeroBgEntry }]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
