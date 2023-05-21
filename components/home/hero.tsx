import { CodeSnippet } from "@/components/CodeSnippet";

export default function Hero() {
  return (
    <>
      <section className="px-6 sm:px-8 lg:flex lg:w-full lg:items-center lg:justify-between lg:gap-12 mb-32">
        <div className="lg:mb-10 lg:w-1/2">
          <div className="lg:mx-auto lg:max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-5xl lg:text-[length:64px] lg:leading-[56px] xl:text-7xl">
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
              powerful declarative database query engine, full stack type
              safety, client libary generators and much more.
            </p>
            <div className="h-9 xl:h-10"></div>
            <div className="xl: flex flex-col gap-4 xl:flex-row">
              <a
                className="btn btn-lg btn-blue t text-white border-2 w-full xl:w-60"
                href="/docs"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <div className="relative -mx-6 mt-6 overflow-hidden p-4 sm:-mx-8 sm:p-8 md:p-10 lg:mt-0 lg:h-[51rem] lg:w-1/2 lg:rounded-l-2xl lg:p-8">
          <svg
            className="absolute top-0 left-0 h-full xl:rounded-3xl"
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_137_6)">
              <path
                d="M0 73.3333H90V100H180V55H270V28.3333H360V73.3333H450V55H540V28.3333H630V91.6667H720V110H810V91.6667H900V65H990V128.333H1080V55H1170V38.3333H1260V100H1350V46.6667H1440V55V0H1350H1260H1170H1080H990H900H810H720H630H540H450H360H270H180H90H0V73.3333Z"
                fill="#1A8FE3"
              />
              <path
                d="M0 181.667H90V208.333H180V100H270V110H360V155H450V91.6667H540V83.3333H630V118.333H720V163.333H810V190H900V163.333H990V226.667H1080V155H1170V118.333H1260V173.333H1350V100H1440V128.333V51.6667V43.3333H1350V96.6667H1260V35H1170V51.6667H1080V125H990V61.6667H900V88.3333H810V106.667H720V88.3333H630V25H540V51.6667H450V70H360V25H270V51.6667H180V96.6667H90V70H0V181.667Z"
                fill="#00B8C3"
              />
              <path
                d="M0 263.333H90V271.667H180V335H270V208.333H360V226.667H450V325H540V218.333H630V173.333H720V308.333H810V370H900V353.333H990V361.667H1080V353.333H1170V253.333H1260V226.667H1350V200H1440V125V96.6667H1350V170H1260V115H1170V151.667H1080V223.333H990V160H900V186.667H810V160H720V115H630V80H540V88.3333H450V151.667H360V106.667H270V96.6667H180V205H90V178.333H0V263.333Z"
                fill="#72CA6E"
              />
              <path
                d="M0 353.333H90V451.667H180V488.333H270V335H360V533.333H450V425H540V325H630V550H720V496.667H810V460H900V515H990V550H1080V478.333H1170V568.333H1260V398.333H1350V415H1440V196.667H1350V223.333H1260V250H1170V350H1080V358.333H990V350H900V366.667H810V305H720V170H630V215H540V321.667H450V223.333H360V205H270V331.667H180V268.333H90V260H0V353.333Z"
                fill="#E6C229"
              />
              <path
                d="M0 388.333H90V533.333H180V505H270V415H360V560H450V496.667H540V388.333H630V595H720V541.667H810V505H900V533.333H990V595H1080V560H1170V631.667H1260V460H1350H1440V433.333V411.667H1350V395H1260V565H1170V475H1080V546.667H990V511.667H900V456.667H810V493.333H720V546.667H630V321.667H540V421.667H450V530H360V331.667H270V485H180V448.333H90V350H0V388.333Z"
                fill="#E6C229"
              />
              <path
                d="M0 713.333H90V811.667H180V766.667H270V775H360V721.667H450V793.333H540V685H630V721.667H720V713.333H810V803.333H900V748.333H990H1080V811.667H1170V748.333H1260H1350V695H1440V730V430V456.667H1350H1260V628.333H1170V556.667H1080V591.667H990V530H900V501.667H810V538.333H720V591.667H630V385H540V493.333H450V556.667H360V411.667H270V501.667H180V530H90V385H0V713.333Z"
                fill="#72CA6E"
              />
              <path
                d="M0 748.333H90V865H180V848.333H270V856.667H360V811.667H450V865H540V775H630V785H720V758.333H810V865H900V793.333H990V820H1080V865H1170V775H1260V811.667H1350V721.667H1440V820V726.667V691.667H1350V745H1260H1170V808.333H1080V745H990H900V800H810V710H720V718.333H630V681.667H540V790H450V718.333H360V771.667H270V763.333H180V808.333H90V710H0V748.333Z"
                fill="#00B8C3"
              />
              <path
                d="M0 901.667H90H180H270H360H450H540H630H720H810H900H990H1080H1170H1260H1350H1440V816.667V718.333H1350V808.333H1260V771.667H1170V861.667H1080V816.667H990V790H900V861.667H810V755H720V781.667H630V771.667H540V861.667H450V808.333H360V853.333H270V845H180V861.667H90V745H0V901.667Z"
                fill="#1A8FE3"
              />
            </g>
            <defs>
              <clipPath id="clip0_137_6">
                <rect width="1440" height="900" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {/* Gaudi hero code snippet */}
          <CodeSnippet
            code={`<div><div><span style="color: #c586c0;">model</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">field</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">name</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">type</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">string</span><span style="color: #cccccc;"> }</span></div><br><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">relation</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #cccccc;"> { </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Book</span><span style="color: #cccccc;">, </span><span style="color: #c586c0;">through</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">author</span><span style="color: #cccccc;"> }</span></div><div><span style="color: #cccccc;">    </span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">query</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">top_5_popular_books</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">        </span><span style="color: #c586c0;">from</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">books</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">        </span><span style="color: #c586c0;">filter</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">review_score</span><span style="color: #cccccc;"> </span><span style="color: #d4d4d4;">&gt;</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">0</span><span style="color: #cccccc;"> },</span></div><div><span style="color: #cccccc;">        </span><span style="color: #c586c0;">order by</span><span style="color: #cccccc;"> { </span><span style="color: #9cdcfe;">positive_reviews_count</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">desc</span><span style="color: #cccccc;"> },</span></div><div><span style="color: #cccccc;">        </span><span style="color: #c586c0;">limit</span><span style="color: #cccccc;"> </span><span style="color: #b5cea8;">5</span></div><div><span style="color: #cccccc;">    }</span></div><div><span style="color: #cccccc;">}</span></div><br><div><span style="color: #c586c0;">entrypoint</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">Author</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">response</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">        </span><span style="color: #9cdcfe;">id</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">        </span><span style="color: #9cdcfe;">name</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">        </span><span style="color: #9cdcfe;">top_5_popular_books</span><span style="color: #cccccc;"> {</span></div><div><span style="color: #cccccc;">            </span><span style="color: #9cdcfe;">id</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">            </span><span style="color: #9cdcfe;">title</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">            </span><span style="color: #9cdcfe;">review_score</span></div><div><span style="color: #cccccc;">        }</span></div><div><span style="color: #cccccc;">    }</span></div><br><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">create</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">list</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">get</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">update</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><div><span style="color: #cccccc;">    </span><span style="color: #c586c0;">delete</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">endpoint</span><span style="color: #cccccc;"> {}</span></div><div><span style="color: #cccccc;">}</span></div></div>`}
          />
        </div>
      </section>

      <div className="h-32 lg:h-64"></div>
    </>
  );
}
