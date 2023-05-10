import ImageCarousel from "@/components/image-carousel";
import HowGaudiWorks from "@/public/images/how_gaudi_works.png";

export default function HowItWorks() {
  return (
    <section className="relative border-t border-transparent dark:border-gray-800">
      {/* Background gradient */}
      <div
        className="absolute inset-0 h-128 dark:opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      {/* End background gradient */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2
              className="h2 font-red-hat-display font-black text-center"
              data-aos="fade-down"
            >
              How it Works?
            </h2>
          </div>

          {/* Section content */}
          <div>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-6">
              {/* Category buttons */}
              <div className="lg:col-span-1 lg:pr-16 flex flex-wrap justify-center lg:flex-col lg:justify-start -m-1 lg:mx-0">
                <p
                  className="text-xl text-gray-600 dark:text-gray-400"
                  data-aos="fade-right"
                >
                  Create a simple source file where you describe your
                  application, its models, relations and APIs using Gaudi
                  language. Using that file Gaudi will build your app that runs
                  on top of Node.js, with builtin logging, optimized queries,
                  monitoring and error handling.
                  <br />
                  <br />
                  Additionally, Gaudi can generate database migration scripts,
                  OpenAPI documentation, Client integration libraries, app
                  Docker image, Admin interface, and more.
                  <br />
                  <br />
                  In specific cases where Gaudi language might not be enough, we
                  provide escape hatches with custom hooks written in JS (or
                  Python?).
                </p>
              </div>

              {/* Videos */}
              <div className="lg:col-span-1 max-w-sm mx-auto md:max-w-3xl lg:max-w-none">
                <ImageCarousel elements={[{ image: HowGaudiWorks }]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
