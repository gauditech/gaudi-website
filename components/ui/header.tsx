import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import { MouseEvent, useCallback } from "react";
import { smoothNavigation } from "@/components/utils/navigation";

export default function Header() {
  const navigationClickHandler = useCallback(smoothNavigation, []);

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-5 h-10">
            <Link href="/" className="block h-full" aria-label="Cruip">
              <Logo />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center font-medium">
              <li>
                <a
                  href="#what-is-gaudi"
                  onClick={navigationClickHandler}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Gaudi
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={navigationClickHandler}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  How it works
                </a>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={navigationClickHandler}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
