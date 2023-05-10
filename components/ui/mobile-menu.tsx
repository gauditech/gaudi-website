"use client";

import { useState, useRef, useEffect, MouseEvent, useCallback } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Logo from "./logo";
import { smoothNavigation } from "@/components/utils/navigation";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  const clickHandler = useCallback((e: MouseEvent<HTMLAnchorElement>): void => {
    smoothNavigation(e);

    setMobileNavOpen(false);
  }, []);

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="inline-flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/* Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg no-scrollbar"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="py-6 pr-4 pl-20">
            {/* Logo */}
            <div className="h-10">
              <Link
                href="/"
                className="inline-block mb-4 h-full"
                aria-label="Cruip"
                onClick={clickHandler}
              >
                <Logo />
              </Link>
            </div>

            {/* Links */}
            <ul>
              <li>
                <a
                  href="#what-is-gaudi"
                  className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                  onClick={clickHandler}
                >
                  Gaudi
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                  onClick={clickHandler}
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                  onClick={clickHandler}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  );
}
