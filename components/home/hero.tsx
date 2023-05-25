import { AppWindowFrame } from "@/components/AppWindowFrame";
import { CodeSnippet } from "@/components/CodeSnippet";
import { FunctionComponent } from "react";

export default function Hero() {
  return (
    <>
      <section className="relative px-6 sm:px-8 lg:flex lg:w-full lg:items-center lg:justify-between lg:gap-12">
        <div className="lg:mb-10 lg:w-1/2">
          <div className="lg:mx-auto lg:max-w-2xl text-white">
            <h2 className="font-extrabold text-white text-3xl sm:text-5xl lg:text-6xl xl:text-7xl">
              Build <span className="text-yellow-500">better</span> apps in a{" "}
              <span className="text-blue-500">fraction</span> of time
            </h2>
            <div className="h-6"></div>
            <p className="text-lg lg:text-xl">
              Gaudi is a declarative programming language and a backend
              framework that makes it easier to build and maintain web
              application APIs. Simply describe your models and APIs in a
              declarative way and instantly get your app with batteries
              included.
              <br />
              <br />
              With Gaudi out of the box you get expressive data modeling,
              customizable APIs, automatic database migration and population,
              powerful declarative database query engine, full stack
              type-safety, client libary generators and much more.
            </p>
            <div className="h-9 xl:h-10"></div>
            <div className="xl: flex flex-col gap-4 xl:flex-row">
              <a
                className="btn btn-lg btn-blue text-white border-2 w-full xl:w-60"
                href="/docs"
              >
                Quick start
              </a>
              <a className="btn btn-lg w-full xl:w-60" href="/docs">
                Read the docs
              </a>
            </div>
          </div>
        </div>
        <div className="relative -mx-6 mt-6 overflow-hidden p-4 sm:-mx-8 sm:p-8 md:p-10 lg:mt-0 lg:w-1/2 lg:rounded-l-lg lg:p-16">
          <BgImage className="block lg:hidden -z-1" />

          {/* Gaudi hero code snippet */}
          <AppWindowFrame title="bookreviews.gaudi">
            <CodeSnippet
              code={`<div><div><span style="color: #c586c0;">model</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">field</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">name</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">type</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">string</span><span style="color: #cccccc;"> }</span></div><br><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">relation</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Book</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">through</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">author</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">query</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">top_5_popular_books</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">        </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">        </span><span style="color: #c586c0;">filter</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">review_score</span><span style="color: #cccccc;"> </span><span style="color: #d4d4d4;">&gt;</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">0</span><span style="color: #cccccc;"> },</span></div><div><span style="color: #cccccc;">        </span><span style="color: #c586c0;">order by</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">positive_reviews_count</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">desc</span><span style="color: #cccccc;"> },</span></div><div><span style="color: #cccccc;">        </span><span style="color: #c586c0;">limit</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">5</span></div><div><span style="color: #cccccc;">    }</span></div><div><span style="color: #cccccc;">}</span></div><br><div><span style="color: #c586c0;">entrypoint</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">response</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">        </span><span style="color: #9cdcfe;">id</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">        </span><span style="color: #9cdcfe;">name</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">        </span><span style="color: #9cdcfe;">top_5_popular_books</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">            </span><span style="color: #9cdcfe;">id</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">            </span><span style="color: #9cdcfe;">title</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">            </span><span style="color: #9cdcfe;">review_score</span></div><div><span style="color: #cccccc;">        }</span></div><div><span style="color: #cccccc;">    }</span></div><br><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">create</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">list</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">get</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">update</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">delete</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><div><span style="color: #cccccc;">}</span></div></div>`}
            />
          </AppWindowFrame>
        </div>

        <div className="absolute hidden lg:block top-0 left-0 w-full h-full -z-1">
          <BgImage />

          <div className="absolute hidden lg:block inset-0 h-full w-full box-content">
            <div
              className="absolute inset-0 -start-[25%]  bg-gradient-to-r from-gray-900"
              aria-hidden="true"
            ></div>

            <div
              className="absolute inset-0 -start-[25%] bg-gradient-to-t from-gray-900"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </section>

      <div className="h-32 lg:h-64"></div>
    </>
  );
}

type BgImageProps = {
  className?: string;
};
const BgImage: FunctionComponent<BgImageProps> = (props) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full ${props.className ?? ""}`}
      style={{ backgroundImage: `url(/images/gaudi_pattern4.svg)` }}
    ></div>
  );
};
