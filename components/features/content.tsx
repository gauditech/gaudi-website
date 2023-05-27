"use client";

import {
  faObjectGroup,
  faBattery,
  faGear,
  IconDefinition,
  faCode,
  faDatabase,
  faLessThanEqual,
  faServer,
  faLock,
  faBook,
  faTerminal,
  faCube,
  faCogs,
  faRobot,
  faLaptopCode,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";

import { FunctionComponent, ReactNode } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppWindowFrame } from "@/components/AppWindowFrame";
import { CodeSnippet } from "@/components/CodeSnippet";
import { HeroBackground } from "@/components/home/HeroBackground";

export default function FeaturesContent() {
  return (
    <>
      <div className="h-32"></div>

      <ContentSection
        icon={{ fa: faObjectGroup }}
        title="Data modeling on steroids"
        description="Define your models and extend them with queries, computed values or assign custom data using hooks"
        subsections={[
          {
            title: "Models",
            description:
              "Describe your data models and relations using intuitive, human-readable and database agnostic language",
            icon: { fa: faObjectGroup },
            screenshot: (
              <AppWindowFrame className="w-full">
                <CodeSnippet
                  code={
                    PLACEHOLDER_SCREENSHOT_SNIPPET +
                    "<br>" +
                    "// TODO: model snippet"
                  }
                />
              </AppWindowFrame>
            ),
          },
          {
            title: "Expression fields",
            icon: { fa: faLessThanEqual },
            description:
              "Extend your models using powerful and expressive expression language with type-safe support for models, fields and relations",
            screenshot: (
              <AppWindowFrame className="w-full">
                <CodeSnippet
                  code={
                    PLACEHOLDER_SCREENSHOT_SNIPPET +
                    "<br>" +
                    "// TODO: computed field code snippet"
                  }
                />
              </AppWindowFrame>
            ),
          },
          {
            title: "Query fields",
            icon: { fa: faDatabase },
            description:
              "Use the full power of query language to query your model's relations and create dynamic query fields. Use query fields in other query selects nad filters just as any other field.",
            screenshot: (
              <AppWindowFrame className="w-full">
                <CodeSnippet
                  code={
                    PLACEHOLDER_SCREENSHOT_SNIPPET +
                    "<br>" +
                    "// TODO: query field code snippet"
                  }
                />
              </AppWindowFrame>
            ),
          },
          {
            title: "Custom hook properties",
            icon: { fa: faCode },
            description:
              "If Gaudi queries and expressions are not enough you can even write your properties using custom code hooks.",
            screenshot: (
              <AppWindowFrame className="w-full">
                <CodeSnippet
                  code={
                    PLACEHOLDER_SCREENSHOT_SNIPPET +
                    "<br>" +
                    "// TODO: hook field code snippet"
                  }
                />
              </AppWindowFrame>
            ),
          },
        ]}
      />

      <div className="h-32 lg:h-64"></div>

      <ContentSection
        icon={{ fa: faBattery }}
        title="Application with batteries included"
        description="Write customizable and secure APIs and seamlessly integrate with other parts of your or third-party stack"
        subsections={[
          {
            title: "CRUD API",
            icon: { fa: faServer },
            description: "Expose your CRUD API with s single line of Gaudi",
            screenshot: (
              <AppWindowFrame className="w-full">
                <CodeSnippet
                  code={
                    PLACEHOLDER_SCREENSHOT_SNIPPET +
                    "<br>" +
                    "// TODO: CRUD endpoints snippet"
                  }
                />
              </AppWindowFrame>
            ),
          },
          {
            title: "Custom API",
            icon: { fa: faServer },
            description:
              "CRUD is not always enough. Extend default or write custom APIs using Gaudi or even custom hooks code.",
            screenshot: (
              <AppWindowFrame className="w-full">
                <CodeSnippet
                  code={
                    PLACEHOLDER_SCREENSHOT_SNIPPET +
                    "<br>" +
                    "// TODO: custom endpoint snippet"
                  }
                />
              </AppWindowFrame>
            ),
          },
          {
            title: "Authentication",
            icon: { fa: faLock },
            description:
              "Secure your application using authentication and authorization rules that fully support Gaudi expression langugage. Support for local auth, social, OAuth 2.0, ...",
            screenshot: (
              <AppWindowFrame className="w-full">
                <CodeSnippet
                  code={
                    PLACEHOLDER_SCREENSHOT_SNIPPET +
                    "<br>" +
                    "// TODO: auth block snippet"
                  }
                />
              </AppWindowFrame>
            ),
          },
          {
            title: "Client library",
            icon: { fa: faBook },
            description:
              "Build client library from your APIs with a few lines of Gaudi code and get type-safe integration with your or third-party libraries.",
            screenshot: (
              <AppWindowFrame className="w-full">
                <CodeSnippet
                  code={
                    PLACEHOLDER_SCREENSHOT_SNIPPET +
                    "<br>" +
                    "// TODO: client lib editor ss"
                  }
                />
              </AppWindowFrame>
            ),
          },
          {
            title: "OpenAPI",
            icon: { img: "/images/icons/openapi_logo.svg" },
            description:
              "Build an OpenAPI specification from your APIs and seamlessly integrate with any OpenaAPI compliant client.",
            screenshot: (
              <AppWindowFrame className="w-full">
                <CodeSnippet
                  code={
                    PLACEHOLDER_SCREENSHOT_SNIPPET +
                    "<br>" +
                    "// TODO: swagger ss"
                  }
                />
              </AppWindowFrame>
            ),
          },
        ]}
      />

      <div className="h-32 lg:h-64"></div>

      <ContentSection
        icon={{ fa: faGear }}
        title="Supercharge your development"
        description="Gaudi brings a set of modern development tools that promote best practices and enhance productivity."
        subsections={[
          {
            title: "CLI",
            icon: { fa: faTerminal },
            description:
              "Use Gaudi CLI commands to run and/or automate your project's actions",
            screenshot: (
              <AppWindowFrame className="w-full">
                <CodeSnippet
                  code={
                    PLACEHOLDER_SCREENSHOT_SNIPPET +
                    "<br>" +
                    "// TODO: CLI helpe message snippet"
                  }
                />
              </AppWindowFrame>
            ),
          },
          {
            title: "New project init",
            icon: { fa: faCube },
            description:
              "Initialize your next project in no-time and get completely setup Gaudi project ready for development.",
            screenshot: (
              <AppWindowFrame className="w-full">
                <CodeSnippet
                  code={
                    PLACEHOLDER_SCREENSHOT_SNIPPET +
                    "<br>" +
                    "// TODO: CLI init screenshot (or project folder structure?)"
                  }
                />
              </AppWindowFrame>
            ),
          },
          {
            title: "Compiler",
            icon: { fa: faCogs },
            description:
              "Gaudi compiler analyzes your code and writes best possible code and SQL queries tailored specifically for your app.",
            screenshot: (
              <AppWindowFrame className="w-full">
                <CodeSnippet
                  code={
                    PLACEHOLDER_SCREENSHOT_SNIPPET +
                    "<br>" +
                    "// TODO: compiler CLI output snippet"
                  }
                />
              </AppWindowFrame>
            ),
          },
          {
            title: "Development mode",
            icon: { fa: faRobot },
            description:
              "Development mode gives you automatic code rebuild, application restart, database sync, ... and many more tasks that allow you to concentrate on your ideas.",
            screenshot: (
              <AppWindowFrame className="w-full">
                <CodeSnippet
                  code={
                    PLACEHOLDER_SCREENSHOT_SNIPPET +
                    "<br>" +
                    "// TODO: dev mode cli output snippet"
                  }
                />
              </AppWindowFrame>
            ),
          },
          {
            title: "IDE extension",
            icon: { fa: faLaptopCode },
            description:
              "Gaudi syntax checking, highlighting and error reporting in your VSCode IDE.",
            screenshot: (
              <AppWindowFrame className="w-full">
                <CodeSnippet
                  code={
                    PLACEHOLDER_SCREENSHOT_SNIPPET +
                    "<br>" +
                    "// TODO: vscode editor ss"
                  }
                />
              </AppWindowFrame>
            ),
          },
          {
            title: "Database migrations",
            icon: { fa: faDatabase },
            description:
              "Iterate your ides during development and automatically sync your database. Once happy with your changes, create migration scripts, review them and apply to your production when ready.",
            screenshot: (
              <AppWindowFrame className="w-full">
                <CodeSnippet
                  code={
                    PLACEHOLDER_SCREENSHOT_SNIPPET +
                    "<br>" +
                    "// TODO: cli migration output ss // TODO: output it's probably only prisma, so maybe just CLI help message"
                  }
                />
              </AppWindowFrame>
            ),
          },

          {
            title: "Database populator",
            icon: { fa: faTableList },
            description:
              "Need a small set of data for development, a strict set of data for tests or a large amount of randomized data for application demo? Use populators to always have your database populated with appropriate data.",
            screenshot: (
              <AppWindowFrame className="w-full">
                <CodeSnippet
                  code={
                    PLACEHOLDER_SCREENSHOT_SNIPPET +
                    "<br>" +
                    "// TODO: JSON data ss"
                  }
                />
              </AppWindowFrame>
            ),
          },
        ]}
      />

      <div className="h-32"></div>
    </>
  );
}

type ContentSectionProps = {
  icon: { fa: IconDefinition } | { img: string };
  title: ReactNode;
  description: ReactNode;
  subsections: ContentSubsectionProps[];
};
const ContentSection: FunctionComponent<ContentSectionProps> = (props) => {
  return (
    <section className="relative px-6 sm:px-8">
      <HeroBackground secondary />

      <div className="lg:max-w-2xl xl:max-w-2xl lg:mx-auto">
        <div className="text-center">
          {"fa" in props.icon && (
            <FontAwesomeIcon
              icon={props.icon.fa}
              className="text-4xl md:text-6xl"
            />
          )}
          {"img" in props.icon && <img src={props.icon.img} />}
        </div>

        <div className="text-center mt-8">
          <SectionHeading level={3} className="text-white">
            {props.title}
          </SectionHeading>

          <p className="mt-8 hyphen-manual text-lg md:text-xl">
            {props.description}
          </p>
        </div>
      </div>

      <div className="h-8 lg:h-16"></div>

      <div className="xl:max-w-6xl lg:mx-auto">
        <div className="flex flex-row flex-wrap">
          {props.subsections.map((sub) => (
            <div className="inline-block w-full mb-16 p-8 lg:w-1/2">
              <ContentSubsection
                icon={sub.icon}
                title={sub.title}
                description={sub.description}
                screenshot={sub.screenshot}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

type ContentSubsectionProps = {
  icon: { fa: IconDefinition } | { img: string };
  title: ReactNode;
  description: ReactNode;
  screenshot: ReactNode;
};
const ContentSubsection: FunctionComponent<ContentSubsectionProps> = (
  props
) => {
  return (
    <div>
      <div>{props.screenshot}</div>
      <div className="flex flex-row items-center gap-4 mt-6 mb-2">
        {"fa" in props.icon && (
          <FontAwesomeIcon icon={props.icon.fa} className="text-[1.5rem]" />
        )}
        {"img" in props.icon && (
          <img src={props.icon.img} className="w-[1.5rem] grayscale" />
        )}

        <SectionHeading level={5}>{props.title}</SectionHeading>
      </div>
      {props.description}
    </div>
  );
};

const PLACEHOLDER_SCREENSHOT_SNIPPET = `<div><span style="color: #c586c0;">model</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">field</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">name</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">type</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">string</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">relation</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Book</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">through</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">author</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">query</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books_count</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">count</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">}</span></div><br><div><span style="color: #c586c0;">model</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Book</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">reference</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">author</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">to</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">field</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">title</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">type</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">string</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">validate</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">min</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">4</span><span style="color: #cccccc;">, </span><span style="color: #9cdcfe;">max</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">40</span><span style="color: #cccccc;"> } }</span></div><div><span style="color: #cccccc;">}</span></div>`;
