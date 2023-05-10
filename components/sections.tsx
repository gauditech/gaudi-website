import HeroBgModels from "@/public/images/gaudi/hero_models.png";
import HeroBgEntry from "@/public/images/gaudi/hero_entrypoints.png";
import ImageCarousel from "@/components/image-carousel";
import Link from "next/link";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";

type SectionOrientation = "right" | "left";

export default function Sections() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <h2
        className="h2 -mb-40 font-red-hat-display font-black text-center"
        data-aos="fade-down"
      >
        What is Gaudi?
      </h2>

      <Section
        orientation="left"
        title="It's a programming language"
        textContent={
          <>
            Gaudi is a declarative, domain specific, type safe programming
            language that makes it easier to build and maintain web application
            backends.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus
            nunc et velit malesuada, sit amet viverra augue auctor. Nullam
            blandit ultrices nunc, non fermentum felis malesuada quis. Proin
            maximus, leo vitae consequat blandit, quam orci dictum elit, sit
            amet sollicitudin enim ante at nisl.
          </>
        }
        ctaText="Learn more"
        imageContent={[HeroBgModels, HeroBgEntry]}
      />

      <Section
        orientation="right"
        title="It's a development kit"
        textContent={
          <>
            Gaudi provides a set of tools that supercharge your development
            experience.
            <br />
            <br />
            Out of the box you can run and automate commands using CLI,
            automatically create, migrate and populate your database, develop
            faster using development mode and generate type-safe APIs and
            clients that allow seamless integration with other parts of your
            application stack.
          </>
        }
        ctaText="Explore more"
        imageContent={[HeroBgModels, HeroBgEntry]}
      />

      <Section
        orientation="left"
        title="It's a runtime"
        textContent={
          <>
            Gaudi runs your app in a highly optimized web server environment
            with focus on performance and security.
            <br />
            <br />
            Query engine generates the best possible SQL queries tailored
            specifically for your app. Package and deploy your entire app
            runtime in a Docker image with a single command. Gain insight into
            how your application is used, how it performs, find bottlenecks with
            ease …
          </>
        }
        ctaText="Read more"
        imageContent={[HeroBgModels, HeroBgEntry]}
      />

      <Section
        orientation="right"
        title="It's an infrastructure"
        textContent={
          <>
            <span className="tags-animation">#Future plan#</span>
            Deploy your application to Gaudi Cloud and harness the full power of
            Gaudi.
            <br />
            <br />
            Effortless no-downtime database migrations, app health and
            performance monitoring, auto-scaling, ML/AI assistance and much
            more. All available out of the box with one command deployment.
          </>
        }
        imageContent={[HeroBgModels, HeroBgEntry]}
      />
    </section>
  );
}

type SectionProps = {
  orientation: SectionOrientation;
  title: string;
  textContent: ReactNode;
  ctaText?: ReactNode;
  imageContent: StaticImageData[];
};
function Section(props: SectionProps) {
  const descriptionPart = (
    <div>
      <h3 className="h3 font-red-hat-display mb-4">{props.title}</h3>

      <p className="text-xl text-gray-600 dark:text-gray-400">
        {props.textContent}
      </p>

      {props.ctaText && (
        <div className="text-center">
          <Link
            href="/contact"
            className="btn-sm text-white bg-teal-500 hover:bg-teal-400 m-4"
          >
            {props.ctaText}
          </Link>
        </div>
      )}
    </div>
  );
  const imagePart = (
    <ImageCarousel
      elements={props.imageContent.map((img) => ({ image: img }))}
    />
  );

  // column styles
  const colCommon = "md:col-span-6 text-left mt-auto mb-auto";
  const colFirst = `${colCommon} md:order-1 md:text-right`;
  const colSecond = `${colCommon} md:order-2 md:text-left`;

  // style variants
  const variants = {
    columns: {
      // alternate order for each orientation
      text: props.orientation === "left" ? colFirst : colSecond,
      image: props.orientation === "left" ? colSecond : colFirst,
    },
  };

  return (
    <section className="relative mt-30 md:mt-60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20">
          {/* text */}
          <div className={`${variants.columns.text}`}>{descriptionPart}</div>

          {/* image */}
          <div className={`${variants.columns.image}`}>{imagePart}</div>
        </div>
      </div>

      <SectionIllustration orientation={props.orientation} />
    </section>
  );
}

type SectionIllustrationProps = {
  orientation: SectionOrientation;
};
function SectionIllustration(props: SectionIllustrationProps) {
  // SVG elements' IDs must not repeat
  const sectionColorId = `sectionColor${props.orientation}`;

  let sectionColor1, sectionColor2;
  if (props.orientation === "left") {
    // purple
    sectionColor1 = "#667EEA";
    sectionColor2 = "#3ABAB4";
    // sectionColor2 = "#9F7AEA";
  } else {
    // green
    sectionColor1 = "#3ABAB4";
    // sectionColor2 = "#3ABAB4";
    sectionColor2 = "#9F7AEA";
  }

  const variants = {
    left: "-left-20 md:-left-40",
    right: "-left-20 md:left-auto md:-right-40 md:-scale-x-100",
  };

  return (
    <>
      {/* Glow illustration */}
      <svg
        className={`${
          variants[props.orientation]
        } absolute -top-20 md:-top-40 pointer-events-none -z-1 dark:opacity-20 hidden md:block`}
        aria-hidden="true"
        width={854}
        height="509"
        viewBox="0 0 854 509"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            cx="50%"
            cy="50%"
            fx="50%"
            fy="50%"
            r="39.386%"
            id={`${sectionColorId}__a`}
          >
            <stop stopColor={sectionColor1} offset="0%" />
            <stop stopColor={sectionColor1} stopOpacity="0" offset="100%" />
          </radialGradient>
          <radialGradient
            cx="50%"
            cy="50%"
            fx="50%"
            fy="50%"
            r="39.386%"
            id={`${sectionColorId}__b`}
          >
            <stop stopColor={sectionColor2} offset="0%" />
            <stop stopColor={sectionColor2} stopOpacity="0" offset="100%" />
          </radialGradient>
        </defs>
        <g transform="translate(-64 -64)" fill="none" fillRule="evenodd">
          <circle
            fillOpacity=".64"
            fill={`url(#${sectionColorId}__a`}
            cx="300"
            cy="300"
            r="300"
          />
          <circle
            fillOpacity=".72"
            fill={`url(#${sectionColorId}__b`}
            cx="729"
            cy="384"
            r="240"
          />
        </g>
      </svg>
    </>
  );
}
