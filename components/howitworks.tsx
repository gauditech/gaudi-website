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
          <p className="text-gray-600 dark:text-gray-400" data-aos="fade-right">
            Create a simple source file where you describe your application, its
            models, relations and APIs using Gaudi language. Using that file
            Gaudi will build your app that runs on top of Node.js, with builtin
            logging, optimized queries, monitoring and error handling.
            <br />
            <br />
            Additionally, Gaudi can generate database migration scripts, OpenAPI
            documentation, Client integration libraries, app Docker image, Admin
            interface, and more.
            <br />
            <br />
            In specific cases where Gaudi language might not be enough, we
            provide escape hatches with custom hooks written in JS (or Python?).
          </p>
        </div>

        {/* image */}
        <div className="col-span-6 mx-10 md:mx-0">
          <ImageCarousel elements={[{ image: HowGaudiWorks }]} />
        </div>
      </div>
    </section>
  );
}
