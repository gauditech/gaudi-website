import Image from "next/image";
import MockupImage02 from "@/public/images/mockup-image-02.jpg";
import MockupImage03 from "@/public/images/mockup-image-03.jpg";
import MockupImage04 from "@/public/images/mockup-image-04.jpg";
import IphoneMockup from "@/public/images/iphone-mockup.png";
import Link from "next/link";

export default function Sections() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">
      <h2
        className="h2 mb-4 font-red-hat-display font-black"
        data-aos="fade-down"
      >
        What is Gaudi?
      </h2>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h3 className="h3 font-red-hat-display mb-4">
                It's a programming language
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Gaudi is a declarative, domain specific, type safe programming
                language that makes it easier to build and maintain web
                application backends.
              </p>
              <Link
                href="/contact"
                className="btn-sm text-white bg-teal-500 hover:bg-teal-400 ml-6 mt-4"
              >
                View example applications
              </Link>
            </div>

            {/* Glow illustration */}
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 mt-20 lg:mt-40 pointer-events-none -z-1 dark:opacity-20 hidden md:block"
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
                  id="iphonesill__a"
                >
                  <stop stopColor="#667EEA" offset="0%" />
                  <stop stopColor="#667EEA" stopOpacity="0" offset="100%" />
                </radialGradient>
                <radialGradient
                  cx="50%"
                  cy="50%"
                  fx="50%"
                  fy="50%"
                  r="39.386%"
                  id="iphonesill__b"
                >
                  <stop stopColor="#9F7AEA" offset="0%" />
                  <stop stopColor="#9F7AEA" stopOpacity="0" offset="100%" />
                </radialGradient>
              </defs>
              <g transform="translate(-64 -64)" fill="none" fillRule="evenodd">
                <circle
                  fillOpacity=".64"
                  fill="url(#iphonesill__a)"
                  cx="300"
                  cy="300"
                  r="300"
                />
                <circle
                  fillOpacity=".72"
                  fill="url(#iphonesill__b)"
                  cx="729"
                  cy="384"
                  r="240"
                />
              </g>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
