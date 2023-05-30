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

import Image from "next/image";
import { FunctionComponent, ReactNode } from "react";

import { SectionHeading } from "@/components/SectionHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppWindowFrame } from "@/components/AppWindowFrame";
import { CodeSnippet } from "@/components/CodeSnippet";
import { HeroBackground } from "@/components/home/HeroBackground";
import GaudiApiClientImg from "@/public/images/screenshots/gaudi_api_client.png";
import GaudiApiSwaggerImg from "@/public/images/screenshots/gaudi_api_swagger.png";
import GaudiInitProjectImg from "@/public/images/screenshots/gaudi_init_project.png";
import GaudiIdeVscodeImg from "@/public/images/screenshots/gaudi_ide_vscode.png";
import GaudiDbMigrationsImg from "@/public/images/screenshots/gaudi_db_migrations.png";
import GaudiDbPopulatorImg from "@/public/images/screenshots/gaudi_db_populator.png";

export default function FeaturesContent() {
  return (
    <>
      <div className="h-32"></div>

      <ContentSection
        icon={{ fa: faObjectGroup }}
        title="Data modeling on steroids"
        description="Define your models and extend them with queries, computed values or assign custom data using hooks"
        firstSection
        subsections={[
          {
            title: "Data models",
            description:
              "Describe your data models and relations using intuitive, human-readable and database agnostic language",
            icon: { fa: faObjectGroup },
            screenshot: (
              <AppWindowFrame
                className="w-full"
                title="bookreviews.gaudi &mdash; bookreviews"
              >
                <CodeSnippet
                  className="text-sm md:text-sm"
                  code={`<div><span style="color: #c586c0;">model</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">field</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">name</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">type</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">string</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">relation</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Book</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">through</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">author</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">query</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books_count</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">count</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">}</span></div><br><div><span style="color: #c586c0;">model</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Book</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">reference</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">author</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">to</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">field</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">title</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">type</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">string</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">validate</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">min</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">4</span><span style="color: #cccccc;">, </span><span style="color: #9cdcfe;">max</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">40</span><span style="color: #cccccc;"> } }</span></div><div><span style="color: #cccccc;">}</span></div>`}
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
              <AppWindowFrame
                className="w-full"
                title="bookreviews.gaudi &mdash; bookreviews"
              >
                <CodeSnippet
                  className="text-sm md:text-sm"
                  code={`<div><span style="color: #c586c0;">model</span><span style="color: #d4d4d4;"> </span><span style="color: #4ec9b0;">BookReading</span><span style="color: #d4d4d4;"> {</span></div><div><span style="color: #d4d4d4;">    </span><span style="color: #c586c0;">reference</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">book</span><span style="color: #d4d4d4;"> { </span><span style="color: #c586c0;">to</span><span style="color: #d4d4d4;"> </span><span style="color: #4ec9b0;">Book</span><span style="color: #d4d4d4;"> }</span></div><div><span style="color: #d4d4d4;">    </span><span style="color: #c586c0;">reference</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">author</span><span style="color: #d4d4d4;"> { </span><span style="color: #c586c0;">to</span><span style="color: #d4d4d4;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #d4d4d4;"> }</span></div><div><span style="color: #d4d4d4;">    </span><span style="color: #c586c0;">field</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">pages_read</span><span style="color: #d4d4d4;"> { </span><span style="color: #c586c0;">type</span><span style="color: #d4d4d4;"> </span><span style="color: #4ec9b0;">integer</span><span style="color: #d4d4d4;"> }</span></div><br><div><span style="color: #d4d4d4;">    </span><span style="color: #c586c0;">computed</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">pages_total</span><span style="color: #d4d4d4;"> { </span><span style="color: #9cdcfe;">book</span><span style="color: #d4d4d4;">.</span><span style="color: #9cdcfe;">pages</span><span style="color: #d4d4d4;"> }</span></div><div><span style="color: #d4d4d4;">    </span><span style="color: #c586c0;">computed</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">pages_left</span><span style="color: #d4d4d4;"> { </span><span style="color: #9cdcfe;">pages_total</span><span style="color: #d4d4d4;"> </span><span style="color: #d4d4d4;">-</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">pages_read</span><span style="color: #d4d4d4;"> }</span></div><div><span style="color: #d4d4d4;">}</span></div>`}
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
              <AppWindowFrame
                className="w-full"
                title="bookreviews.gaudi &mdash; bookreviews"
              >
                <CodeSnippet
                  code={`<div><span style="color: #c586c0;">query</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">top_5_popular_books</span><span style="color: #d4d4d4;"> {</span></div><div><span style="color: #d4d4d4;">    </span><span style="color: #c586c0;">from</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #d4d4d4;">,</span></div><div><span style="color: #d4d4d4;">    </span><span style="color: #c586c0;">filter</span><span style="color: #d4d4d4;"> { </span><span style="color: #9cdcfe;">review_score</span><span style="color: #d4d4d4;"> </span><span style="color: #d4d4d4;">&gt;</span><span style="color: #d4d4d4;"> </span><span style="color: #b5cea8;">0</span><span style="color: #d4d4d4;"> },</span></div><div><span style="color: #d4d4d4;">    </span><span style="color: #c586c0;">order by</span><span style="color: #d4d4d4;"> { </span><span style="color: #9cdcfe;">positive_reviews_count</span><span style="color: #d4d4d4;"> </span><span style="color: #c586c0;">desc</span><span style="color: #d4d4d4;"> },</span></div><div><span style="color: #d4d4d4;">    </span><span style="color: #c586c0;">limit</span><span style="color: #d4d4d4;"> </span><span style="color: #b5cea8;">5</span></div><div><span style="color: #d4d4d4;">}</span></div>`}
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
              <AppWindowFrame
                className="w-full"
                title="bookreviews.gaudi &mdash; bookreviews"
              >
                <CodeSnippet
                  code={`<div><span style="color: #c586c0;">hook</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">nameAndDesc</span><span style="color: #d4d4d4;"> {</span></div><div><span style="color: #d4d4d4;">  </span><span style="color: #c586c0;">arg</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">test</span><span style="color: #d4d4d4;"> </span><span style="color: #c586c0;">query</span><span style="color: #d4d4d4;"> {</span></div><div><span style="color: #d4d4d4;">    </span><span style="color: #c586c0;">select</span><span style="color: #d4d4d4;"> { </span><span style="color: #9cdcfe;">name</span><span style="color: #d4d4d4;">, </span><span style="color: #9cdcfe;">description</span><span style="color: #d4d4d4;"> }</span></div><div><span style="color: #d4d4d4;">  }</span></div><div><span style="color: #d4d4d4;">  </span><span style="color: #c586c0;">inline</span><span style="color: #d4d4d4;"> </span><span style="color: #ce9178;">"test.name + ': ' + test.description"</span></div><div><span style="color: #d4d4d4;">}</span></div>`}
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
            description:
              "Expose only CRUD APIs that you actually need. With a single line of Gaudi",
            screenshot: (
              <AppWindowFrame
                className="w-full"
                title="bookreviews.gaudi &mdash; bookreviews"
              >
                <CodeSnippet
                  code={`<div><span style="color: #c586c0;">entrypoint</span><span style="color: #d4d4d4;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #d4d4d4;"> {</span></div><div><span style="color: #d4d4d4;">    </span><span style="color: #c586c0;">create</span><span style="color: #d4d4d4;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #d4d4d4;"> {}</span></div><div><span style="color: #d4d4d4;">    </span><span style="color: #c586c0;">list</span><span style="color: #d4d4d4;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #d4d4d4;"> {</span></div><div><span style="color: #d4d4d4;">        </span><span style="color: #c586c0;">pageable</span></div><div><span style="color: #d4d4d4;">    }</span></div><br><div><span style="color: #d4d4d4;">    </span><span style="color: #c586c0;">get</span><span style="color: #d4d4d4;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #d4d4d4;"> {}</span></div><div><span style="color: #d4d4d4;">    </span><span style="color: #c586c0;">update</span><span style="color: #d4d4d4;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #d4d4d4;"> {}</span></div><div><span style="color: #d4d4d4;">    </span><span style="color: #6a9955;">// delete endpoint {} // eg. NO delete endpoint</span></div><div><span style="color: #d4d4d4;">}</span></div><div><span style="color: #d4d4d4;"></span></div>`}
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
              <AppWindowFrame
                className="w-full"
                title="bookreviews.gaudi &mdash; bookreviews"
              >
                <CodeSnippet
                  code={`<div><span style="color: #c586c0;">entrypoint</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #d4d4d4;"> {</span></div><div><span style="color: #d4d4d4;">    </span><span style="color: #c586c0;">create</span><span style="color: #d4d4d4;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #d4d4d4;"> {</span></div><div><span style="color: #d4d4d4;">        </span><span style="color: #c586c0;">authorize</span><span style="color: #d4d4d4;"> {</span></div><div><span style="color: #d4d4d4;">            </span><span style="color: #9cdcfe;">@auth</span><span style="color: #d4d4d4;">.</span><span style="color: #9cdcfe;">id</span><span style="color: #d4d4d4;"> </span><span style="color: #c586c0;">is not</span><span style="color: #d4d4d4;"> </span><span style="color: #4fc1ff;">null</span></div><div><span style="color: #d4d4d4;">        }</span></div><br><div><span style="color: #d4d4d4;">        </span><span style="color: #c586c0;">action</span><span style="color: #d4d4d4;"> {</span></div><div><span style="color: #d4d4d4;">            </span><span style="color: #c586c0;">create</span><span style="color: #d4d4d4;"> </span><span style="color: #c586c0;">as</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">book</span><span style="color: #d4d4d4;"> {}</span></div><div><span style="color: #d4d4d4;">            </span><span style="color: #c586c0;">create</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">book</span><span style="color: #d4d4d4;">.</span><span style="color: #9cdcfe;">reviews</span><span style="color: #d4d4d4;"> </span><span style="color: #c586c0;">as</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">review</span><span style="color: #d4d4d4;"> {</span></div><div><span style="color: #d4d4d4;">                </span><span style="color: #c586c0;">set</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">is_positive</span><span style="color: #d4d4d4;"> </span><span style="color: #4fc1ff;">true</span></div><div><span style="color: #d4d4d4;">                </span><span style="color: #c586c0;">set</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">reviewer</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">book</span><span style="color: #d4d4d4;">.</span><span style="color: #9cdcfe;">author</span></div><div><span style="color: #d4d4d4;">            }</span></div><div><span style="color: #d4d4d4;">}   }   }</span></div>`}
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
              <AppWindowFrame
                className="w-full"
                title="bookreviews.gaudi &mdash; bookreviews"
              >
                <CodeSnippet
                  code={`<div><span style="color: #c586c0;">auth</span><span style="color: #d4d4d4;"> {</span></div><div><span style="color: #d4d4d4;">    </span><span style="color: #c586c0;">method</span><span style="color: #d4d4d4;"> </span><span style="color: #c586c0;">basic</span><span style="color: #d4d4d4;"> {}</span></div><div><span style="color: #d4d4d4;">}</span></div><div><span style="color: #c586c0;">api</span><span style="color: #d4d4d4;"> {</span></div><div><span style="color: #d4d4d4;">    </span><span style="color: #c586c0;">entrypoint</span><span style="color: #d4d4d4;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #d4d4d4;"> {</span></div><div><span style="color: #d4d4d4;">        </span><span style="color: #c586c0;">authorize</span><span style="color: #d4d4d4;"> {</span></div><div><span style="color: #d4d4d4;">            </span><span style="color: #9cdcfe;">@auth</span><span style="color: #d4d4d4;">.</span><span style="color: #9cdcfe;">id</span><span style="color: #d4d4d4;"> </span><span style="color: #c586c0;">is not</span><span style="color: #d4d4d4;"> </span><span style="color: #4fc1ff;">null</span><span style="color: #d4d4d4;"> </span><span style="color: #c586c0;">and</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">@auth</span><span style="color: #d4d4d4;">.</span><span style="color: #9cdcfe;">name</span><span style="color: #d4d4d4;"> </span><span style="color: #c586c0;">is</span><span style="color: #d4d4d4;"> </span><span style="color: #ce9178;">"Asimov"</span></div><div><span style="color: #d4d4d4;">        }</span></div><div><span style="color: #d4d4d4;">    }</span></div><div><span style="color: #d4d4d4;">}</span></div>`}
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
              <AppWindowFrame className="w-full" title="create_book.ts">
                <Image
                  src={GaudiApiClientImg.src}
                  alt="Gaudi client library screenshot"
                  width={481}
                  height={259}
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
              <AppWindowFrame
                className="w-full"
                title="https://your.domain/api-docs/#"
                bg="light"
                mode="browser"
              >
                <Image
                  src={GaudiApiSwaggerImg.src}
                  alt="OpenAPI screenshot"
                  width={481}
                  height={259}
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
              <AppWindowFrame
                className="w-full"
                title="Terminal - user@gaudi:~/gaudi-project"
              >
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
            ),
          },
          {
            title: "New project init",
            icon: { fa: faCube },
            description:
              "Initialize your next project in no-time and get completely setup Gaudi project ready for development.",
            screenshot: (
              <AppWindowFrame className="w-full" title="demo-project.gaudi">
                <Image
                  src={GaudiInitProjectImg.src}
                  alt="Gaudi project init screenshot"
                  width={728}
                  height={445}
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
              <AppWindowFrame
                className="w-full"
                title="Terminal - user@gaudi:~/gaudi-project"
              >
                <CodeSnippet
                  code={`user@gaudi:~/gaudi-project $ npx gaudi-cli build 
Building entire project ...
Compiling Gaudi blueprint ...
Starting command: node --enable-source-maps --stack-trace-limit=30 --stack-size=2048 node_modules/@gaudi/engine/engine.js
Pushing DB change ...
Copying static resources ...
`}
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
              <AppWindowFrame
                className="w-full"
                title="Terminal - user@gaudi:~/gaudi-project"
              >
                <CodeSnippet
                  code={`user@gaudi:~/gaudi-project $ npx gaudi-cli dev
Starting project dev build ...
Starting Gaudi project ...  ~/gaudi/demo-project
Compiling Gaudi blueprint ...
Starting command: node --enable-source-maps --stack-trace-limit=30 --stack-size=2048 node_modules/@gaudi/engine/engine.js
Pushing DB change ...
Copying static resources ...
Starting command: node_modules/@gaudi/engine/node_modules/.bin/nodemon --enable-source-maps --stack-trace-limit=30 --stack-size=2048 --watch false node_modules/@gaudi/runtime/runtime.js
[nodemon] starting \`node --enable-source-maps --stack-trace-limit=30 --stack-size=2048 node_modules/@gaudi/runtime/runtime.js\`

App is started on localhost:3001
`}
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
              <AppWindowFrame className="w-full" title="demo-project.gaudi">
                <Image
                  src={GaudiIdeVscodeImg.src}
                  alt="Gaudi IDE extension screenshot"
                  width={415}
                  height={252}
                />
              </AppWindowFrame>
            ),
          },
          {
            title: "Database migrations",
            icon: { fa: faDatabase },
            description:
              "Iterate your ideas during development and automatically sync your database. Once happy with your changes, create migration scripts, review them and apply to your production when ready.",
            screenshot: (
              <AppWindowFrame
                className="w-full"
                title="bookreviews.gaudi &mdash; bookreviews"
              >
                <Image
                  src={GaudiDbMigrationsImg.src}
                  alt="Database migrations"
                  width={572}
                  height={328}
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
              <AppWindowFrame
                className="w-full"
                title="bookreviews.gaudi &mdash; bookreviews"
              >
                <Image
                  src={GaudiDbPopulatorImg.src}
                  alt="Database populator"
                  width={438}
                  height={315}
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
  firstSection?: boolean;
  subsections: ContentSubsectionProps[];
};
const ContentSection: FunctionComponent<ContentSectionProps> = (props) => {
  return (
    <section className="relative px-6 sm:px-8">
      {/* the first section blends into page's default bg so no need for this one */}
      {!props.firstSection && <HeroBackground secondary className="-top-16" />}

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
      <div>
        {/* padding=icon width + flex gap */}
        <p className="pl-[2.5rem] text-lg lg:text-xl">{props.description}</p>
      </div>
    </div>
  );
};

const PLACEHOLDER_SCREENSHOT_SNIPPET = `<div><span style="color: #c586c0;">model</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">field</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">name</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">type</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">string</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">relation</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Book</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">through</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">author</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">query</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books_count</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">count</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">}</span></div><br><div><span style="color: #c586c0;">model</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Book</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">reference</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">author</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">to</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">field</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">title</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">type</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">string</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">validate</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">min</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">4</span><span style="color: #cccccc;">, </span><span style="color: #9cdcfe;">max</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">40</span><span style="color: #cccccc;"> } }</span></div><div><span style="color: #cccccc;">}</span></div>`;
