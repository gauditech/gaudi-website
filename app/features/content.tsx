"use client";

import { ReactNode, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlassChart,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import VsCodeImg from "@/public/images/icons/vscode.png";

type FeatureCategory = "development" | "runtime" | "deployment";

export default function FeaturesContent() {
  const [category, setCategory] = useState<FeatureCategory | null>(null);

  const categoryFeatures = useMemo(() => {
    return FEATURES.filter(
      (feature) => category == null || feature.categories.includes(category)
    );
  }, [category]);

  return (
    <section className="relative border-t border-transparent dark:border-gray-800">
      {/* Background gradient (dark version only) */}
      <div
        className="absolute inset-0 opacity-25 bg-gradient-to-b from-gray-800 to-gray-900 pointer-events-none hidden dark:block"
        aria-hidden="true"
      ></div>
      {/* End background gradient (dark version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 md:py-4">
          <div data-aos="fade-up" data-aos-delay="450">
            {/* Category buttons */}
            <div className="mb-10">
              <div className="flex flex-wrap justify-center -m-1">
                <CategoryFilterButton
                  title="View All"
                  selected={!category}
                  icon={<FontAwesomeIcon icon={faBars} />}
                  onClick={() => {
                    setCategory(null);
                  }}
                />

                <CategoryFilterButton
                  title="Development"
                  selected={category === "development"}
                  icon={<FontAwesomeIcon icon={faCode} />}
                  onClick={() => {
                    setCategory("development");
                  }}
                />

                <CategoryFilterButton
                  title="Runtime"
                  selected={category === "runtime"}
                  icon={<FontAwesomeIcon icon={faStopwatch} />}
                  onClick={() => {
                    setCategory("runtime");
                  }}
                />

                <CategoryFilterButton
                  title="Deployment"
                  selected={category === "deployment"}
                  icon={<FontAwesomeIcon icon={faRocket} />}
                  onClick={() => {
                    setCategory("deployment");
                  }}
                />
              </div>
            </div>

            {/* Articles */}
            <div className="-mb-2">
              {categoryFeatures.map((feature) => (
                <Feature {...feature} key={feature.key} />
              ))}
              {categoryFeatures.length === 0 && (
                <div className="md:flex md:items-center md:justify-center">
                  <div className="text-gray-600 dark:text-gray-400 text-sm my-8">
                    No features found in this category.Yet!
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type CategoryFilterButtonProps = {
  title: string;
  icon: ReactNode;
  selected?: boolean;
  onClick?: () => void;
};
function CategoryFilterButton(props: CategoryFilterButtonProps) {
  return (
    <button
      className={`font-medium px-4 py-2 transition duration-150 ease-in-out rounded-full inline-flex items-center justify-center m-1 shadow ${
        props.selected
          ? "bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25"
          : "bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
      }`}
      onClick={props.onClick}
    >
      <span
        className={`fill-current mr-2 ${
          props.selected ? "text-white" : "text-teal-400"
        }`}
      >
        {props.icon}
      </span>
      <span
        className={`${
          props.selected ? "text-white" : "text-gray-600"
        } dark:text-gray-300 transition duration-150 ease-in-out`}
      >
        {props.title}
      </span>
    </button>
  );
}

type FeatureProps = {
  key: string;
  categories: FeatureCategory[];
  icon: ReactNode;
  title: ReactNode;
  content: ReactNode;
  link?: string;
};

function Feature(props: FeatureProps) {
  return (
    <article id={props.key} className="mb-2">
      <div className="flex pr-6 py-5 bg-white dark:bg-gray-800 divide-x divide-gray-200 dark:divide-gray-700 shadow-2xl">
        {/* Category icon */}
        <div className="flex items-center px-4 sm:px-8 text-teal-400 ">
          <span
            className={`p-2 rounded-lg ${
              props.categories.length > 0
                ? CategoryVariants[props.categories[0]]
                : ""
            }`}
          >
            {props.icon}
          </span>
        </div>

        {/* Content */}
        <div className="pl-6">
          <header>
            <h3 className="font-red-hat-display text-xl font-black tracking-tighter mb-1">
              <a href="#0">{props.title}</a>
            </h3>
          </header>

          <p className="text-gray-600 dark:text-gray-400">{props.content}</p>

          {props.link && (
            <a
              className="inline-flex items-center font-medium text-teal-500 hover:underline mt-2"
              href={props.link}
            >
              <span>Learn more</span>
              <svg
                className="w-3 h-3 shrink-0 mt-px ml-2"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current"
                  d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                />
              </svg>
            </a>
          )}
          <footer className="text-sm flex items-center mt-3">
            {props.categories.map((cat) => (
              <FeatureCategory key={cat} type={cat} />
            ))}
          </footer>
        </div>
      </div>
    </article>
  );
}

type FeatureCategoryProps = {
  type: FeatureCategory;
};
function FeatureCategory(props: FeatureCategoryProps) {
  return (
    <div
      className={`text-xs inline-flex items-center font-bold uppercase px-3 py-1 rounded-full ${
        CategoryVariants[props.type]
      }`}
    >
      {props.type}
    </div>
  );
}

const CategoryVariants: Partial<Record<FeatureCategory, string>> = {
  development: "bg-blue-200 text-blue-700",
  runtime: "bg-red-200 text-red-700",
  deployment: "bg-green-200 text-green-700",
};

const FEATURES: FeatureProps[] = [
  {
    key: "programming-language",
    title: "Dedicated programming language",
    content:
      "Complete freedom to design a language for the best developer experience we can imagine!",
    categories: ["development"],
    icon: <FontAwesomeIcon size="xl" icon={faCode} />,
    link: "https://example.com",
  },
  {
    key: "language-compiler",
    title: "Compiler & type-checker",
    content:
      "Gaudi runs various compile-time checks that help you make less mistakes during development",
    categories: ["development", "runtime"],
    icon: <FontAwesomeIcon size="xl" icon={faMagnifyingGlassChart} />,
    link: "https://example.com",
  },
  {
    key: "authentication",
    title: "Authentication",
    content: "Support local auth (username & password), Supertokens, Auth0",
    categories: ["runtime"],
    icon: <FontAwesomeIcon size="xl" icon={faUserGroup} />,
  },
  {
    key: "vscode-extension",
    title: "VS Code",
    content:
      "A VSCode extension featuring syntax highlighting, inline errors, autocomplete, snippets, insights and more",
    categories: ["development"],
    icon: <img src={VsCodeImg.src} className="w-6" />,
  },
];
