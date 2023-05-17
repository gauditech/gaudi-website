import ImageCarousel from "@/components/image-carousel";
import HowGaudiWorks from "@/public/images/how_gaudi_works.png";

export default function HowItWorks() {
  return (
    <section className="relative max-w-6xl mx-auto px-5 md:px-6 py-10">
      {/* Background gradient */}
      <div
        className={`absolute inset-0 -z-[2] text-gray-600 dark:text-gray-400 pointer-events-none dark:hidden`}
        aria-hidden="true"
      ></div>

      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h2
          className="h2 font-red-hat-display font-black text-center"
          data-aos="fade-down"
        >
          How it Works?
        </h2>
      </div>

      <div className="md:grid gap-10 grid-cols-12">
        {/* text */}
        <div className="col-span-6 mb-10">
          <div className="flex flex-col gap-4">
            <p>
              Create a simple Gaudi source file in your favourite IDE and
              describe your models, relations and APIs using Gaudi language. In
              specific cases where Gaudi language might not be enough, Gaudi
              provides escape hatches for custom hooks written in JS (or
              Python?).
            </p>
            <p>
              Use Gaudi CLI to run Gaudi compiler and feed it your Gaudi file.
              It will create, migrate and populate your database, create all
              required API endpoints, generate API specs and client libs, ...
              and, ofc, run your application in web server.
            </p>
            <p>
              Declarativeness is where Gaudi's real powers come from. By simply
              declaring your intentions Gaudi is able to analyze your models,
              queries and yourcode and output only what's needed and in an
              optimal way.
            </p>
            <p>
              Currently, Gaudi produces applications in JS that run on{" "}
              <a href="https://nodejs.org/" className="link" target="_blank">
                Node.js
              </a>{" "}
              and use{" "}
              <a href="https://prisma.io" className="link" target="_blank">
                Prisma
              </a>{" "}
              for handling database. Gaudi, being declarative, will in the
              future be able to create apps that run some other language (eg.
              Python, Go), framework or web server.
            </p>
          </div>
        </div>

        {/* image */}
        <div className="col-span-6 mx-10 md:mx-0">
          <ImageCarousel elements={[{ image: HowGaudiWorks }]} />
        </div>
      </div>
    </section>
  );
}
