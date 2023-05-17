import HeroBgModels from "@/public/images/screenshots/hero_models2.png";
import HeroBgEntry from "@/public/images/screenshots/hero_entrypoints2.png";
import GaudiBookreviewsModels from "@/public/images/screenshots/hero_models2.png";
import ImageCarousel from "@/components/image-carousel";
import Link from "next/link";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";

type SectionOrientation = "right" | "left";
type SectionType = "language" | "devtoolkit" | "runtime" | "infrastructure";
type SectionTag = { text: string; link?: string };

export default function WhatIsGaudi() {
  return (
    <section className="relative">
      {/* <h2
        className="max-w-6xl mx-auto h2 font-red-hat-display font-black text-center -mb-10 md:-mb-20"
        data-aos="fade-down"
      >
        What is Gaudi?
      </h2> */}

      <Section
        type="language"
        orientation="left"
        supertitle="It's a language"
        title="Describe your app"
        textContent={
          <div className="flex flex-col gap-4">
            <div>
              Gaudi is a declarative, domain specific, type safe programming
              language that makes it easier to build and maintain web
              application backends. Write your backend using declarative
              language and focus on <b>what</b> needs to be done, instead of{" "}
              <b>how</b>. This allows Gaudi to understand the intention behind
              your code and lets it write optimized code and automate a lot of
              the work around it.
            </div>
            <div>
              <h6 className="h6 uppercase font-bold">Model</h6>
              Describe your data models and relations between them using
              intuitive, human-readable and database agnostic language. Enrich
              your models through first-class support for computed fields,
              subquery fields or even custom code hooks fields.
            </div>
            <div>
              <h6 className="h6 uppercase font-bold">Query</h6>
              Query your data using powerful and expressive query language with
              type-safe support for models, fields and relations, including
              advanced types like computeds and subqueries.
            </div>
            <div>
              <h6 className="h6 uppercase font-bold">API</h6>
              Expose your data through default CRUD APIs without a single line
              of query. Customize default or write completely custom API
              endpoints using declarative and type-safe support for your models.
            </div>
          </div>
        }
        ctaText="Learn more"
        imageContent={[GaudiBookreviewsModels]}
        tags={[
          { text: "Feature 1" },
          { text: "Feature two", link: "https://example.com" },
          { text: "Feature three" },
        ]}
      />

      <Section
        type="devtoolkit"
        orientation="right"
        supertitle="It's a development kit"
        title="Supercharge your development"
        textContent={
          <>
            Gaudi comes with set of useful tools aimed at improving your
            development experience. Out of the box you can run and automate
            commands using CLI, automatically create, migrate and populate your
            database, develop faster using development mode and generate
            type-safe APIs and client libraries that allow seamless integration
            with other parts of your application stack.
          </>
        }
        ctaText="Explore more"
        imageContent={[HeroBgModels]}
        tags={[
          { text: "Feature 1" },
          { text: "Feature two", link: "https://example.com" },
          { text: "Feature three" },
        ]}
      />

      <Section
        type="runtime"
        orientation="left"
        supertitle="It's a runtime"
        title="Perfomance tailored for your app"
        textContent={
          <>
            Gaudi generates the best possible code and SQL queries laser-focused
            on your app's specific needs and runs it in a highly optimized web
            server environment with focus on performance and security. Your app
            automatically comes with things like logging, error handling,
            authorization and much more.
          </>
        }
        ctaText="Read more"
        imageContent={[HeroBgEntry]}
        tags={[
          { text: "Runtime 1" },
          { text: "Feature two", link: "https://example.com" },
          { text: "Feature three" },
          { text: "Feature four" },
          { text: "Feature 5" },
        ]}
      />

      {/* <Section
        type="infrastructure"
        orientation="right"
        title={
          <>
            It's an <span className="text-teal-500">infrastructure</span>
          </>
        }
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
      /> */}
    </section>
  );
}

type SectionProps = {
  type: SectionType;
  orientation: SectionOrientation;
  supertitle: ReactNode;
  title: ReactNode;
  textContent: ReactNode;
  ctaText?: ReactNode;
  imageContent: StaticImageData[];
  tags?: SectionTag[];
};
function Section(props: SectionProps) {
  // column styles
  const colFirst = `col-span-6 md:order-1 text-left`;
  const colSecond = `col-span-6 md:order-2 text-left`;

  // bg colors
  const colors = {
    text: {
      language: "text-gray-600 dark:text-gray-400",
      devtoolkit: "text-gray-100 dark:text-gray-400",
      runtime: "text-gray-600 dark:text-gray-400",
      infrastructure: "text-gray-600 dark:text-gray-400",
    },
    bg: {
      language: "bg-white",
      devtoolkit: "bg-gray-800",
      runtime: "bg-gradient-to-t from-indigo-100 to-white",
      infrastructure: "bg-gradient-to-b from-white to-white",
    },
    illustration: {
      language: "rgb(45 212 191)", // teal-300
      devtoolkit: "rgb(209, 213, 219)", // bg-gray-300
      runtime: "rgb(147, 197, 253)", // blue-300
      infrastructure: "bg-gradient-to-b from-indigo-100 to-white",
    },
  };

  // style variants
  const variants = {
    columns: {
      // alternate order for each orientation
      text: props.orientation === "left" ? colFirst : colSecond,
      image: props.orientation === "left" ? colSecond : colFirst,
    },
    bg: {
      gradient: [
        // rounded corner
        // props.orientation === "left"
        //   ? "rounded-tl-[100px]"
        //   : "rounded-tr-[100px]",

        // color
        colors.bg[props.type],
      ].join(" "),
    },
  };

  const descriptionPart = (
    <>
      <h6
        className={`h6 uppercase font-bold`}
        style={{ color: colors.illustration[props.type] }}
        data-aos="fade-down"
      >
        {props.supertitle}
      </h6>
      <h3 className="h3 font-red-hat-display mb-4" data-aos="fade-down">
        {props.title}
      </h3>

      <div data-aos="fade-left">{props.textContent}</div>

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
    </>
  );

  const imagePart = (
    <ImageCarousel
      elements={props.imageContent.map((img, idx) => ({
        key: `${img.src}-${idx}`,
        image: img,
      }))}
    />
  );

  return (
    <section type={props.type} className="relative px-5 md:px-6 py-10">
      <div className={`max-w-6xl mx-auto ${colors.text[props.type]}`}>
        <div className="md:grid gap-10 grid-cols-12 items-center">
          {/* text */}
          <div className={`${variants.columns.text} mb-10`}>
            {descriptionPart}
          </div>

          {/* image */}
          <div
            className={`relative ${variants.columns.image} mx-10 md:mx-0`}
            data-aos="fade-up"
          >
            {imagePart}
            <SectionIllustration
              orientation={props.orientation}
              color={colors.illustration[props.type]}
            />
          </div>
        </div>

        {/* feature tags */}
        {props.tags && props.tags.length > 0 && (
          <div
            className={`${
              props.orientation === "right" ? "md:ml-[50%]" : ""
            } m-5`}
          >
            <h5
              className={`h5 uppercase font-bold`}
              style={{ color: colors.illustration[props.type] }}
            >
              Features
            </h5>
            <div className="flex gap-2 my-5 flex-wrap">
              {props.tags.map((tag) => {
                const tagContent = (
                  <div className="text-s inline-block items-center font-bold uppercase px-3 py-1 rounded bg-gray-200 text-gray-700 gap-4">
                    {tag.text}
                  </div>
                );

                return tag.link ? (
                  <a href={tag.link}>{tagContent}</a>
                ) : (
                  tagContent
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Background gradient (light version only) */}
      <div
        className={`absolute inset-0 -z-[2] ${variants.bg.gradient} pointer-events-none dark:hidden`}
        aria-hidden="true"
      ></div>
    </section>
  );
}

let svgIdCounter = 0;
type SectionIllustrationProps = {
  orientation: SectionOrientation;
  color: string;
};
function SectionIllustration(props: SectionIllustrationProps) {
  // SVG elements' IDs must not repeat
  const sectionColorId = `sectionColor${props.orientation}_${svgIdCounter++}`;

  let sectionColor1, sectionColor2;
  // if (props.orientation === "left") {
  //   // purple
  //   sectionColor1 = "#667EEA";
  //   // sectionColor2 = "#3ABAB4";
  //   sectionColor2 = "#9F7AEA";
  // } else {
  //   // green
  //   sectionColor1 = "#3ABAB4";
  //   sectionColor2 = "#3ABAB4";
  //   // sectionColor2 = "#9F7AEA";
  // }

  sectionColor1 = props.color;
  sectionColor2 = props.color;

  const variants = {
    right: "-top-20 -left-6 md:-left-20",
    left: "-top-20 -left-4 md:left-auto md:-right-20 md:-scale-x-100",
  };

  return (
    <svg
      className={`absolute ${variants[props.orientation]}`}
      width="130%"
      height="130%"
      viewBox="0 0 594 548"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter={`url(#${sectionColorId}_filter)`}>
        <rect
          x="26.4939"
          y="74.1213"
          width="500"
          height="450"
          rx="80"
          transform="rotate(-5.52628 26.4939 74.1213)"
          fill={`url(#${sectionColorId}_paint_radial)`}
        />
      </g>
      <defs>
        <filter
          id={`${sectionColorId}_filter`}
          x="0.706787"
          y="0.18306"
          width="592.586"
          height="547.634"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="15"
            result="effect1_foregroundBlur_120_25"
          />
        </filter>
        <radialGradient
          id={`${sectionColorId}_paint_radial`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(276.494 299.121) rotate(90) scale(325.5 361.667)"
        >
          <stop stopColor={`${sectionColor1}`} />
          <stop offset="1" stopColor={`${sectionColor2}`} stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>

    // <>
    //   {/* Glow illustration */}
    //   <svg
    //     className={`${
    //       variants[props.orientation]
    //     } absolute -top-20 md:-top-40 pointer-events-none -z-1 dark:opacity-20 hidden md:block`}
    //     aria-hidden="true"
    //     width={854}
    //     height="509"
    //     viewBox="0 0 854 509"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <defs>
    //       <radialGradient
    //         cx="50%"
    //         cy="50%"
    //         fx="50%"
    //         fy="50%"
    //         r="39.386%"
    //         id={`${sectionColorId}__a`}
    //       >
    //         <stop stopColor={sectionColor1} offset="0%" />
    //         <stop stopColor={sectionColor1} stopOpacity="0" offset="100%" />
    //       </radialGradient>
    //       <radialGradient
    //         cx="50%"
    //         cy="50%"
    //         fx="50%"
    //         fy="50%"
    //         r="39.386%"
    //         id={`${sectionColorId}__b`}
    //       >
    //         <stop stopColor={sectionColor2} offset="0%" />
    //         <stop stopColor={sectionColor2} stopOpacity="0" offset="100%" />
    //       </radialGradient>
    //     </defs>
    //     <g transform="translate(-64 -64)" fill="none" fillRule="evenodd">
    //       <circle
    //         fillOpacity=".64"
    //         fill={`url(#${sectionColorId}__a`}
    //         cx="300"
    //         cy="300"
    //         r="300"
    //       />
    //       <circle
    //         fillOpacity=".72"
    //         fill={`url(#${sectionColorId}__b`}
    //         cx="729"
    //         cy="384"
    //         r="240"
    //       />
    //     </g>
    //   </svg>
    // </>
  );
}
