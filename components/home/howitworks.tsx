import HowGaudiWorks from "@/public/images/how_gaudi_works.png";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="px-6 sm:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-row lg:gap-10 lg:w-full lg:items-start lg:justify-between">
      <div>
        <div className="lg:max-w-2xl lg:mx-auto">
          <h2 className="font-display text-4xl font-extrabold text-white md:text-7xl">
            How it <span className="text-green-brand">Works</span>?
          </h2>
        </div>
      </div>
      <div></div>
      <div>
        <div className="lg:max-w-2xl lg:mx-auto">
          <p className="hyphen-manual text-lg md:text-xl [&>*]:mt-4">
            <p>
              Create a simple{" "}
              <b className="text-white font-bold">Gaudi source file</b> in your
              favourite IDE and describe your{" "}
              <b className="text-white font-bold">models</b>,{" "}
              <b className="text-white font-bold">relations</b> and{" "}
              <b className="text-white font-bold">APIs</b> using Gaudi language.
              In specific cases where Gaudi language might not be enough, Gaudi
              provides escape hatches for{" "}
              <b className="text-white font-bold">custom hooks</b> written in JS
              (or Python?).
            </p>
            <p>
              Use <b className="text-white font-bold">Gaudi CLI</b> to run{" "}
              <b className="text-white font-bold">Gaudi compiler</b> and feed it
              your Gaudi file. It will create, migrate and populate your
              database, create all required API endpoints, generate API specs
              and client libs, ... and, ofc, run your application in web server.
            </p>
            <p>
              Declarativeness is where Gaudi's real powers come from. By simply
              declaring your intentions Gaudi is able to analyze your models,
              queries and yourcode and output only what's needed and in an
              optimal way.
            </p>
          </p>
        </div>
      </div>
      <div>
        <div className="lg:max-w-2xl lg:mx-auto">
          <div className="relative overflow-hidden bg-gray-800 p-3 text-sm sm:rounded-lg sm:text-base md:max-w-full lg:max-w-max xl:rounded-xl xl:p-4 hidden sm:block">
            <Image {...HowGaudiWorks} alt="How Gaudi works diagram" />
          </div>
        </div>
      </div>
      <div className="h-32 lg:h-64"></div>
    </section>
  );
}
