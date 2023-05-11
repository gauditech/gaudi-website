"use client";

import { ReactNode, useCallback, useMemo, useState } from "react";

type FeatureCategory = "development" | "runtime" | "deployment";

export default function FeaturesContent() {
  const [category, setCategory] = useState<FeatureCategory | null>(null);

  const categoryFeatures = useMemo(() => {
    return FEATURES.filter(
      (feature) => category == null || feature.categories.includes(category)
    );
  }, [category]);

  const isSelected = useCallback(
    (targetCategory: FeatureCategory | null) => {
      return targetCategory === category;
    },
    [category]
  );

  const variants = {
    color: {
      categoryButton: {
        default: "text-teal-400",
        selected: "text-white",
      },
    },
  };

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
                  icon={
                    <span className="text-red">
                      <svg
                        className="w-4 h-4 shrink-0 mr-2"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className={`fill-current ${
                            isSelected(null)
                              ? variants.color.categoryButton.selected
                              : variants.color.categoryButton.default
                          }`}
                          d="M11 7H1a1 1 0 000 2h10v3l5-4-5-4v3zM8 3H1a1 1 0 010-2h7a1 1 0 010 2zM8 15H1a1 1 0 010-2h7a1 1 0 010 2z"
                        />
                      </svg>
                    </span>
                  }
                  onClick={() => {
                    setCategory(null);
                  }}
                />

                <CategoryFilterButton
                  title="Development"
                  selected={category === "development"}
                  icon={
                    <svg
                      className="w-4 h-4 shrink-0 mr-2"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className={`fill-current ${
                          isSelected("development")
                            ? variants.color.categoryButton.selected
                            : variants.color.categoryButton.default
                        }`}
                        d="M5 16H4a4 4 0 01-4-4v-1h2v1a2 2 0 002 2h1v2zM13 10h-1.686l-1.207-1.207L14.37 4.63a2.121 2.121 0 00-3-3L7.207 5.793 5.99 4.576 5.98 3.02 3.038.079 0 3.117 3 6h1.586l1.207 1.207L4 9l3 3 1.793-1.793L10 11.414V13l3.01 3.01 2.98-2.979L13 10z"
                      />
                    </svg>
                  }
                  onClick={() => {
                    setCategory("development");
                  }}
                />

                <CategoryFilterButton
                  title="Runtime"
                  selected={category === "runtime"}
                  icon={
                    <svg
                      className="w-4 h-4 shrink-0 mr-2"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className={`fill-current ${
                          isSelected("runtime")
                            ? variants.color.categoryButton.selected
                            : variants.color.categoryButton.default
                        }`}
                        d="M12.071 0L15 2.929v4.142L12.071 10H12V7.101L7.9 3H5v-.071L7.929 0h4.142zm-5 5L10 7.929v4.142L7.071 15H2.929L0 12.071V7.929L2.929 5h4.142z"
                      />
                    </svg>
                  }
                  onClick={() => {
                    setCategory("runtime");
                  }}
                />

                <CategoryFilterButton
                  title="Deployment"
                  selected={category === "deployment"}
                  icon={
                    <svg
                      className="w-4 h-4 shrink-0 mr-2"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className={`fill-current ${
                          isSelected("deployment")
                            ? variants.color.categoryButton.selected
                            : variants.color.categoryButton.default
                        }`}
                        d="M1 0h8a1 1 0 011 1v10a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1zm14.124 4.085v-.001a1 1 0 01.868 1.116l-1.243 9.932a1 1 0 01-1.117.868l-7.938-1 .248-1.988 6.946.871.995-7.938-2.007-.251.248-1.984 3 .375z"
                      />
                    </svg>
                  }
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
      className={`font-medium px-4 py-2  transition duration-150 ease-in-out rounded-full inline-flex items-center justify-center m-1 shadow ${
        props.selected
          ? "bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25"
          : "bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
      }`}
      onClick={props.onClick}
    >
      {props.icon}
      <span className="text-gray-600 dark:text-gray-300 transition duration-150 ease-in-out">
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
        <div className="flex items-center px-4 sm:px-8">{props.icon}</div>
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
  const variants: Partial<Record<FeatureCategory, string>> = {
    development: "bg-blue-200 text-blue-700",
    runtime: "bg-red-200 text-red-700",
    deployment: "bg-green-200 text-green-700",
  };

  return (
    <div
      className={`text-xs inline-flex items-center font-bold uppercase px-3 py-1 rounded-full ${
        variants[props.type]
      }`}
    >
      {props.type}
    </div>
  );
}

const FEATURES: FeatureProps[] = [
  {
    key: "programming-language",
    title: "Dedicated programming language",
    content:
      "Complete freedom to design a language for the best developer experience we can imagine!",
    categories: ["development"],
    icon: <div>lang</div>,
    link: "https://example.com",
  },
  {
    key: "language-compiler",
    title: "Compiler & type-checker",
    content:
      "Gaudi runs various compile-time checks that help you make less mistakes during development",
    categories: ["development", "runtime"],
    icon: <div>comp</div>,
    link: "https://example.com",
  },
  {
    key: "authentication",
    title: "Authentication",
    content: "Support local auth (username & password), Supertokens, Auth0",
    categories: ["runtime"],
    icon: <div>auth</div>,
  },
];
