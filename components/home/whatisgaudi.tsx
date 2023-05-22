import Link from "next/link";
import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

import { CodeSnippet } from "@/components/CodeSnippet";

type SectionOrientation = "right" | "left";
type SectionType = "language" | "devtoolkit" | "runtime" | "infrastructure";
type SectionTag = { text: string; link?: string };

export default function WhatIsGaudi() {
  return (
    <section className="relative">
      <Section
        type="language"
        orientation="left"
        supertitle="It's a language"
        title=<>
          Describe your application{" "}
          <span className="text-green-brand">models</span>,{" "}
          <span className="text-blue-brand">queries</span> and{" "}
          <span className="text-yellow-brand">APIs</span>
        </>
        textContent={
          <>
            <p className="mt-4">
              Gaudi is a declarative, domain specific, type safe programming
              language that makes it easier to build and maintain web
              application backends. Write your backend using declarative
              language and focus on <b className="text-white font-bold">what</b>{" "}
              needs to be done, instead of{" "}
              <b className="text-white font-bold">how</b>. This allows Gaudi to
              understand the intention behind your code and lets it write
              optimized code and automate a lot of the work around it.
            </p>
            <p className="mt-4">
              <span className="h6 block font-bold md:text-2xl text-white">
                Model
              </span>
              Describe your data models and relations between them using
              intuitive, human-readable and database agnostic language. Enrich
              your models through first-class support for computed fields,
              subquery fields or even custom code hooks fields.
            </p>
            <p className="mt-4">
              <span className="h6 block font-bold md:text-2xl text-white">
                Query
              </span>
              Query your data using powerful and expressive query language with
              type-safe support for models, fields and relations, including
              advanced types like computeds and subqueries.
            </p>
            <p className="mt-4">
              <span className="h6 block font-bold md:text-2xl text-white">
                API
              </span>
              Expose your data through default CRUD APIs without a single line
              of query. Customize default or write completely custom API
              endpoints using declarative and type-safe support for your models.
            </p>
          </>
        }
        ctaText="Learn more"
        snippetContent={
          <CodeSnippet
            code={`<div><div><span style="color: #c586c0;">model</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">field</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">name</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">type</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">string</span><span style="color: #cccccc;"> }</span></div><br><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">relation</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Book</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">through</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">author</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">query</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">top_5_popular_books</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">        </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">        </span><span style="color: #c586c0;">filter</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">review_score</span><span style="color: #cccccc;"> </span><span style="color: #d4d4d4;">&gt;</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">0</span><span style="color: #cccccc;"> },</span></div><div><span style="color: #cccccc;">        </span><span style="color: #c586c0;">order by</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">positive_reviews_count</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">desc</span><span style="color: #cccccc;"> },</span></div><div><span style="color: #cccccc;">        </span><span style="color: #c586c0;">limit</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">5</span></div><div><span style="color: #cccccc;">    }</span></div><div><span style="color: #cccccc;">}</span></div><br><div><span style="color: #c586c0;">entrypoint</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">response</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">        </span><span style="color: #9cdcfe;">id</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">        </span><span style="color: #9cdcfe;">name</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">        </span><span style="color: #9cdcfe;">top_5_popular_books</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">            </span><span style="color: #9cdcfe;">id</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">            </span><span style="color: #9cdcfe;">title</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">            </span><span style="color: #9cdcfe;">review_score</span></div><div><span style="color: #cccccc;">        }</span></div><div><span style="color: #cccccc;">    }</span></div><br><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">create</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">list</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">get</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">update</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">delete</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><div><span style="color: #cccccc;">}</span></div></div>`}
          />
        }
      />

      <Section
        type="devtoolkit"
        orientation="right"
        supertitle="It's a development kit"
        title=<>
          Tools that supercharge your{" "}
          <span className="text-yellow-brand">development</span>
        </>
        textContent={
          <>
            <p>
              Gaudi comes with set of useful tools aimed at improving your
              development experience.
            </p>
            <p>
              Out of the box you can run and automate commands using{" "}
              <b className="text-white font-bold">CLI</b>, automatically{" "}
              <b className="text-white font-bold">create</b>,{" "}
              <b className="text-white font-bold">migrate</b> and{" "}
              <b className="text-white font-bold">populate</b>
              your database, develop faster using{" "}
              <b className="text-white font-bold">development mode</b> and
              generate <b className="text-white font-bold">type-safe</b> APIs
              and <b className="text-white font-bold">client libraries</b> that
              allow seamless integration with other parts of your application
              stack.
            </p>
          </>
        }
        ctaText="Explore more"
        snippetContent={
          <CodeSnippet
            code={`<div><div><span style="color: #c586c0;">model</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Book</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">reference</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">author</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">to</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">field</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">title</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">type</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">string</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">validate</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">min</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">4</span><span style="color: #cccccc;">, </span><span style="color: #9cdcfe;">max</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">40</span><span style="color: #cccccc;"> } }</span></div><br><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">relation</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">reviews</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">BookReview</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">through</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">book</span><span style="color: #cccccc;"> }</span></div><br><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">computed</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">review_score</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">positive_reviews_count</span><span style="color: #cccccc;"> </span><span style="color: #d4d4d4;">-</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">negative_reviews_count</span><span style="color: #cccccc;"> }    </span></div><br><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">query</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">positive_reviews_count</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">reviews</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">filter</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">is_positive</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">is</span><span style="color: #cccccc;"> </span><span style="color: #4fc1ff;">true</span><span style="color: #cccccc;"> }, </span><span style="color: #c586c0;">count</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">query</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">negative_reviews_count</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">reviews</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">filter</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">is_positive</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">is</span><span style="color: #cccccc;"> </span><span style="color: #4fc1ff;">false</span><span style="color: #cccccc;"> }, </span><span style="color: #c586c0;">count</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">}</span></div></div>`}
          />
        }
      />

      <Section
        type="runtime"
        orientation="left"
        supertitle="It's a runtime"
        title=<>
          <span className="text-blue-brand">Performance</span> tailored for your
          application
        </>
        textContent={
          <>
            <p className="hyphen-manual text-lg md:text-xl">
              Gaudi generates the best possible{" "}
              <b className="text-white font-bold">code</b> and{" "}
              <b className="text-white font-bold">SQL queries</b> laser-focused
              on your app's specific needs and runs it in a highly optimized web
              server environment with focus on{" "}
              <b className="text-white font-bold">performance</b> and{" "}
              <b className="text-white font-bold">security</b>.
            </p>
            <p>
              Your app automatically comes with things like{" "}
              <b className="text-white font-bold">logging</b>,{" "}
              <b className="text-white font-bold">error handling</b>,{" "}
              <b className="text-white font-bold">authorization</b> and much
              more.
            </p>
          </>
        }
        ctaText="Read more"
        snippetContent={
          <CodeSnippet
            code={`<div><div><span style="color: #c586c0;">model</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Book</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">reference</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">author</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">to</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">field</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">title</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">type</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">string</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">validate</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">min</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">4</span><span style="color: #cccccc;">, </span><span style="color: #9cdcfe;">max</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">40</span><span style="color: #cccccc;"> } }</span></div><br><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">relation</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">reviews</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">BookReview</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">through</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">book</span><span style="color: #cccccc;"> }</span></div><br><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">computed</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">review_score</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">positive_reviews_count</span><span style="color: #cccccc;"> </span><span style="color: #d4d4d4;">-</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">negative_reviews_count</span><span style="color: #cccccc;"> }    </span></div><br><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">query</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">positive_reviews_count</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">reviews</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">filter</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">is_positive</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">is</span><span style="color: #cccccc;"> </span><span style="color: #4fc1ff;">true</span><span style="color: #cccccc;"> }, </span><span style="color: #c586c0;">count</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">query</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">negative_reviews_count</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">reviews</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">filter</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">is_positive</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">is</span><span style="color: #cccccc;"> </span><span style="color: #4fc1ff;">false</span><span style="color: #cccccc;"> }, </span><span style="color: #c586c0;">count</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">}</span></div></div>`}
          />
        }
      />

      {/* <Section
        type="infrastructure"
        orientation="right"
        title={
          <>
            It's an <span className="text-teal-brand">infrastructure</span>
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
  imageContent?: StaticImageData;
  snippetContent?: ReactNode;
  tags?: SectionTag[];
};
function Section(props: SectionProps) {
  // style variants
  const variants = {
    grid: {
      left: {
        title: "order-1",
        empty: "order-2",
        textContent: "order-3",
        image: "order-4 justify-self-start",
      },
      right: {
        title: "order-2 justify-self-start",
        empty: "order-1",
        textContent: "order-4 justify-self-start",
        image: "order-3",
      },
    },
  };

  const descriptionPart = (
    <>
      <div data-aos="fade-left">{props.textContent}</div>

      {props.ctaText && (
        <div className="text-center mt-8">
          <Link href="/contact" className="btn btn-blue">
            {props.ctaText}
          </Link>
        </div>
      )}
    </>
  );

  const imagePart = (
    <>
      {props.imageContent && (
        <Image
          {...props.imageContent}
          alt="Gaudi source screenshot"
          className="max-w-none"
        />
      )}
      {props.snippetContent && props.snippetContent}
    </>
  );

  return (
    <>
      <section className="px-6 sm:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-row lg:gap-10 lg:w-full lg:items-start lg:justify-between">
        <div className={`${variants.grid[props.orientation].title}`}>
          <div className="lg:max-w-2xl lg:mx-auto">
            <h2 className="font-extrabold text-white text-3xl sm:text-5xl lg:text-6xl xl:text-7xl">
              {props.title}
            </h2>
          </div>
        </div>
        <div className={`${variants.grid[props.orientation].empty}`}></div>

        <div className={`${variants.grid[props.orientation].textContent}`}>
          <div className="lg:max-w-2xl lg:mx-auto">
            <p className="hyphen-manual text-lg md:text-xl">
              {descriptionPart}
            </p>
          </div>
        </div>
        <div className={`${variants.grid[props.orientation].image}`}>
          <div className="lg:max-w-2xl lg:mx-auto">
            <div className="relative overflow-hidden bg-gray-800 p-3 text-sm sm:rounded-lg sm:text-base md:max-w-full lg:max-w-max xl:rounded-xl xl:p-4 hidden sm:block">
              {imagePart}
            </div>
          </div>
        </div>
      </section>

      <div className="h-32 lg:h-64"></div>
    </>
  );
}
