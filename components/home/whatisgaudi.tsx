import Link from "next/link";
import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

import { CodeSnippet } from "@/components/CodeSnippet";
import { AppWindowFrame } from "@/components/AppWindowFrame";
import GaudiApiClientImg from "@/public/images/screenshots/gaudi_api_client.png";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroBackground } from "@/components/home/HeroBackground";

type SectionOrientation = "right" | "left";
type SectionTag = { text: string; link?: string };

export default function WhatIsGaudi() {
  return (
    <>
      <ContentSection
        orientation="left"
        headingLevel={2}
        title=<>
          What is <H color="blue">Gaudi</H>?
        </>
        textContent={
          <>
            <p>
              Gaudi is a <H color="white">declarative</H>,{" "}
              <H color="white">domain specific</H> and{" "}
              <H color="white">type-safe</H> programming language that makes it
              easier to build and maintain web application backends. Write your
              backend using declarative language and focus on{" "}
              <H color="white">what</H> needs to be done, instead of{" "}
              <H color="white">how</H>. This allows Gaudi to understand the
              intention behind your code and lets it write optimized code and
              automate a lot of the work around it.
            </p>
            <p className="mt-4">Lets' see how it all works ...</p>
          </>
        }
      />

      <ContentSection
        orientation="right"
        title=<>
          Describe your <span className="text-green-brand">models</span>
        </>
        textContent={
          <>
            <p>
              Create a simple text file in your favorite IDE (eg.{" "}
              <code className="text-white italic">bookreviews.gaudi</code>) and
              describe your data models and relations between them using{" "}
              <H color="white">intuitive</H>,{" "}
              <H color="white">human-readable</H> and{" "}
              <H color="white">database agnostic</H> language. Enrich your
              models through first-class support for{" "}
              <H color="white">computed</H> fields, <H color="white">query</H>{" "}
              fields or even custom code <H color="white">hooks</H> fields.
            </p>
          </>
        }
        snippetContent={
          <AppWindowFrame title="bookreviews.gaudi &mdash; bookreviews">
            <CodeSnippet
              code={`<div><span style="color: #c586c0;">model</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">field</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">name</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">type</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">string</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">relation</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Book</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">through</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">author</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">query</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books_count</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">count</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">}</span></div><br><div><span style="color: #c586c0;">model</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Book</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">reference</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">author</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">to</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">field</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">title</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">type</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">string</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">validate</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">min</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">4</span><span style="color: #cccccc;">, </span><span style="color: #9cdcfe;">max</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">40</span><span style="color: #cccccc;"> } }</span></div><div><span style="color: #cccccc;">}</span></div>`}
            />
          </AppWindowFrame>
        }
      />

      <ContentSection
        orientation="left"
        title=<>
          <span className="text-blue-brand">Query</span> your data
        </>
        textContent={
          <>
            <p>
              Query your data using powerful and expressive{" "}
              <H color="white">query language</H> with type-safe support for
              models, fields and relations. You can use queries and expressions
              to create powerful <H color="white">query fields</H> and{" "}
              <H color="white">computed fields</H> directly in your models and
              even use them in other queries and filters.
            </p>
          </>
        }
        snippetContent={
          <AppWindowFrame title="bookreviews.gaudi &mdash; bookreviews">
            <CodeSnippet
              code={`<div><span style="color: #c586c0;">model</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">field</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">name</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">type</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">string</span><span style="color: #cccccc;"> }</span></div><br><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">relation</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Book</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">through</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">author</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">query</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">top_5_popular_books</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">        </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">        </span><span style="color: #c586c0;">filter</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">review_score</span><span style="color: #cccccc;"> </span><span style="color: #d4d4d4;">&gt;</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">0</span><span style="color: #cccccc;"> },</span></div><div><span style="color: #cccccc;">        </span><span style="color: #c586c0;">order by</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">positive_reviews_count</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">desc</span><span style="color: #cccccc;"> },</span></div><div><span style="color: #cccccc;">        </span><span style="color: #c586c0;">limit</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">5</span></div><div><span style="color: #cccccc;">    }</span></div><div><span style="color: #cccccc;">}</span></div>`}
            />
          </AppWindowFrame>
        }
      />

      <ContentSection
        orientation="right"
        title=<>
          Expose your <span className="text-yellow-brand">APIs</span>
        </>
        textContent={
          <>
            <p>
              Expose your data through default{" "}
              <H color="white">CRUD endpoints</H> with a single line of Gaudi
              code. Go beyond CRUD and customize default or write completely{" "}
              <H color="white">custom endpoints</H> using full declarativeness
              and type-safety of Gaudi or even custom code hooks.
            </p>
          </>
        }
        snippetContent={
          <AppWindowFrame title="bookreviews.gaudi &mdash; bookreviews">
            <CodeSnippet
              code={`<div><span style="color: #c586c0;">entrypoint</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">response</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">id</span><span style="color: #cccccc;">, </span><span style="color: #9cdcfe;">name</span><span style="color: #cccccc;"> }</span></div><br><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">list</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">get</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">update</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><br><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">entrypoint</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">        </span><span style="color: #c586c0;">response</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">id</span><span style="color: #cccccc;">, </span><span style="color: #9cdcfe;">title</span><span style="color: #cccccc;">, </span><span style="color: #9cdcfe;">review_score</span><span style="color: #cccccc;"> }</span></div><br><div><span style="color: #cccccc;">        </span><span style="color: #c586c0;">list</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><div><span style="color: #cccccc;">    }</span></div><div><span style="color: #cccccc;">}</span></div>`}
            />
          </AppWindowFrame>
        }
      />

      <ContentSection
        orientation="left"
        title=<>
          Build your <H color="blue">app</H>
        </>
        textContent={
          <>
            <p>
              Gaudi analyzes your code and automatically generates the{" "}
              <H color="white">optimized</H> code and SQL queries{" "}
              <H color="white">laser-focused</H> on your app's specific needs
              and runs it in a highly optimized web server environment with
              focus on <H color="white">performance</H> and{" "}
              <H color="white">security</H>. Your app automatically comes with
              things like <H color="white">logging</H>,{" "}
              <H color="white">error handling</H>,{" "}
              <H color="white">authorization</H> and much more.
            </p>

            <p className="mt-4">
              Run your code through <H color="white">Gaudi compiler</H> and it
              will instantly build your app and you can run it, publish it or
              deploy it directly to your server. And that's it! :)
            </p>
          </>
        }
        snippetContent={
          <AppWindowFrame title="https://your.domain/api/authors">
            <CodeSnippet
              code={`<div><span style="color: #cccccc;">[</span></div><div><span style="color: #cccccc;">  {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #9cdcfe;">"id"</span><span style="color: #cccccc;">: </span><span style="color: #b5cea8;">1920</span><span style="color: #cccccc;">, </span><span style="color: #9cdcfe;">"name"</span><span style="color: #cccccc;">: </span><span style="color: #ce9178;">"Isaac Asimov"</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">    </span><span style="color: #9cdcfe;">"books"</span><span style="color: #cccccc;">: [</span></div><div><span style="color: #cccccc;">      { </span><span style="color: #9cdcfe;">"id"</span><span style="color: #cccccc;">: </span><span style="color: #b5cea8;">1950</span><span style="color: #cccccc;">, </span><span style="color: #9cdcfe;">"title"</span><span style="color: #cccccc;">: </span><span style="color: #ce9178;">"I, Robot"</span><span style="color: #cccccc;">, </span><span style="color: #9cdcfe;">"review_score"</span><span style="color: #cccccc;">: </span><span style="color: #b5cea8;">31138</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">      { </span><span style="color: #9cdcfe;">"id"</span><span style="color: #cccccc;">: </span><span style="color: #b5cea8;">1985</span><span style="color: #cccccc;">, </span><span style="color: #9cdcfe;">"title"</span><span style="color: #cccccc;">: </span><span style="color: #ce9178;">"Robots and Empire"</span><span style="color: #cccccc;">, </span><span style="color: #9cdcfe;">"review_score"</span><span style="color: #cccccc;">: </span><span style="color: #b5cea8;">2048</span><span style="color: #cccccc;"> },</span></div><div><span style="color: #cccccc;">    ]</span></div><div><span style="color: #cccccc;">  }</span></div><div><span style="color: #cccccc;">  </span><span style="color: #6a9955;">// ...</span></div><div><span style="color: #cccccc;">]</span></div>`}
            />
          </AppWindowFrame>
        }
      />

      <div className="h-32"></div>

      <ContentSection
        orientation="left"
        headingLevel={2}
        title=<>
          Tools that supercharge your{" "}
          <span className="text-yellow-brand">development</span>
        </>
        textContent={
          <>
            <p>
              Gaudi comes with a set of modern development tools that promote
              best practices aimed at improving your{" "}
              <H color="white">productivity</H> and{" "}
              <H color="white">development experience</H>.
            </p>

            <p className="mt-8 font-bold text-white">
              Let's go through some of them ...
            </p>
          </>
        }
      />

      <ContentSection
        orientation="right"
        title=<>
          Faster project <span className="text-yellow-brand">setup</span> and{" "}
          <span className="text-green-brand">development</span>
        </>
        textContent={
          <>
            <p>
              Most of Gaudi's tools are easily available through Gaudi{" "}
              <H color="white">CLI</H>. Whether you want to{" "}
              <H color="white">setup</H> your next project,{" "}
              <H color="white">re/build</H> your existing Gaudi project, start
              developing in <H color="white">development mode</H> or simply run
              your project in <H color="white">production</H> ... all available
              with one line of <H color="white">Gaudi CLI</H>.
            </p>
          </>
        }
        snippetContent={
          <AppWindowFrame title="Terminal - user@gaudi:~/gaudi-project">
            <CodeSnippet
              code={`user@gaudi:~/gaudi-project $ npx gaudi-cli
gaudi-cli &lt;command&gt; [arguments]

Commands:
  gaudi-cli build        Build entire project. Compiles Gaudi blueprint, pushes
                          changes to DB and copies files to output folder
  gaudi-cli dev          Start project dev builder which rebuilds project on
                          detected blueprint changes.
  gaudi-cli start        Start Gaudi project
  gaudi-cli init <name>  Init new Gaudi project
  gaudi-cli db           Executes a database command. Run 'gaudi-cli db' for
                          more info.
            `}
            />
          </AppWindowFrame>
        }
      />

      <ContentSection
        orientation="left"
        title=<>
          Easy database <span className="text-blue-brand">migrations</span>
        </>
        textContent={
          <>
            <p>
              Gaudi offers first-class database migration support both in
              development and in production.
            </p>

            <p className="mt-4">
              Quickly <H color="white">iterate</H> your ideas, add{" "}
              <H color="white">new or change</H> existing models, run{" "}
              <H color="white">tests</H> or even switch between{" "}
              <H color="white">Git branches</H> with completely different
              database models ... Gaudi will make sure your database is always
              in <H color="white">sync</H> with current model and{" "}
              <H color="white">populated</H> with appropriate data.
              <br />
              No database hassle, just code!
            </p>

            <p className="mt-4">
              Once satisfied with your changes, create{" "}
              <H color="white">migration scripts</H> and apply them to your
              production at your own time and convenience.
            </p>
          </>
        }
        snippetContent={
          <AppWindowFrame title="Terminal - user@gaudi:~/gaudi-project">
            <CodeSnippet
              code={`
user@gaudi:~/gaudi-project $ npx gaudi-cli db -h
gaudi-cli db &lt;command&gt;

Executes a database command. Run 'gaudi-cli db' for more info.

Commands:
  gaudi-cli db push      Push model changes to development database
  gaudi-cli db reset     Reset DB
  gaudi-cli db populate  Reset DB and populate it using populator
  gaudi-cli db migrate   Create DB migration file
  gaudi-cli db deploy    Deploy migrations to production database
  `}
            />
          </AppWindowFrame>
        }
      />

      <ContentSection
        orientation="right"
        title=<>
          Type-safe <H color="blue">APIs</H> and{" "}
          <H color="green">client libraries</H>
        </>
        textContent={
          <>
            <p>
              Want to use your new API in your frontend, call it from another
              backend API, allow third party integrations ... Gaudi
              automatically generates <H color="white">OpenAPI</H>{" "}
              specifications and <H color="white">client libraries</H> that are
              self-documented, type-safe and easily integrated in other
              development tools.
            </p>
          </>
        }
        snippetContent={
          <AppWindowFrame title="create_book.ts">
            <Image
              src={GaudiApiClientImg.src}
              alt="Gaudi API client screenshot"
              width={481}
              height={259}
            />
          </AppWindowFrame>
        }
      />

      <div className="lg:h-32"></div>

      <ContentSection
        orientation="left"
        singleCol
        title=<>
          Start your <H color="green">new</H> <H color="blue">Gaudi</H>{" "}
          <H color="yellow">project</H>
        </>
        textContent={
          <>
            <section>
              <div className="xl:flex flex-col gap-4 xl:flex-row justify-center">
                <a className="btn btn-lg btn-blue w-full xl:w-60" href="/docs">
                  Read the docs
                </a>
                {/*a className="btn btn-lg w-full xl:w-60" href="/docs">
                  Quick start
                </a>*/}
              </div>
            </section>
          </>
        }
      />
      <div className="lg:h-32"></div>
    </>
  );
}

/**
 * Render content section
 */
type ContentSectionProps = {
  orientation: SectionOrientation;
  title?: ReactNode;
  textContent: ReactNode;
  cta?: { title: ReactNode; link: string };
  imageContent?: StaticImageData;
  snippetContent?: ReactNode;
  tags?: SectionTag[];
  singleCol?: boolean;
  // heading level also renders some artifacts
  headingLevel?: 2 | 3;
};
function ContentSection(props: ContentSectionProps) {
  // style variants
  const variants = {
    section: props.singleCol ?? false ? "lg:grid-cols-1" : "lg:grid-cols-2",
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
        image: "order-3 justify-self-center",
      },
    },
    heading: props.singleCol ? "text-center" : "",
  };

  const titlePart = props.title && (
    <>
      <SectionHeading
        level={props.headingLevel ?? 3}
        className={`${variants.heading}`}
      >
        {props.title}
      </SectionHeading>
    </>
  );

  const descriptionPart = (
    <>
      {props.textContent && <div>{props.textContent}</div>}

      {props.cta && (
        <div className="text-center mt-8">
          <Link href={props.cta.link} className="btn btn-blue">
            {props.cta.title}
          </Link>
        </div>
      )}
    </>
  );

  const imagePart = (props.imageContent || props.snippetContent) && (
    <>
      {props.imageContent && (
        <Image
          {...props.imageContent}
          alt="Gaudi source screenshot"
          className="max-w-none"
        />
      )}

      {props.snippetContent}
    </>
  );

  return (
    <>
      <section
        className={`relative px-6 sm:px-8 lg:grid ${variants.section} lg:grid-flow-row lg:gap-10 lg:w-full lg:items-start lg:justify-between`}
      >
        {/* draw bg only on level 2 */}
        {props.headingLevel === 2 && <HeroBackground secondary />}

        {titlePart && (
          <>
            <div className={`${variants.grid[props.orientation].title}`}>
              <div className="lg:max-w-xl xl:max-w-2xl lg:mx-auto">
                {titlePart}
              </div>
            </div>
            <div className={`${variants.grid[props.orientation].empty}`}>
              &nbsp;
            </div>
          </>
        )}

        {(descriptionPart || imagePart) && (
          <>
            <div className={`${variants.grid[props.orientation].textContent}`}>
              <div className="lg:max-w-xl xl:max-w-2xl lg:mx-auto">
                <div className="hyphen-manual text-lg md:text-xl">
                  {descriptionPart}
                </div>
              </div>
            </div>
            <div className={`${variants.grid[props.orientation].image}`}>
              <div className="md:px-8 lg:p-0 mt-8 mx-auto lg:max-w-lg xl:max-w-2xl">
                {imagePart}
              </div>
            </div>
          </>
        )}
      </section>

      <div className="h-32"></div>
    </>
  );
}

/** Make children highlighted */
type HighlightedProps = PropsWithChildren<{
  color: "white" | "green" | "blue" | "yellow";
}>;
const Highlighted: FunctionComponent<HighlightedProps> = (props) => {
  const variants: Record<HighlightedProps["color"], string> = {
    white: "text-white",
    green: "text-green-brand",
    blue: "text-blue-brand",
    yellow: "text-yellow-brand",
  };
  return (
    <span className={`font-extrabold ${variants[props.color]}`}>
      {props.children}
    </span>
  );
};
// shorter name for component for easier use
const H = Highlighted;
