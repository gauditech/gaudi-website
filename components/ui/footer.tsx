import { HeroBackground } from "@/components/home/HeroBackground";

export default function Footer() {
  return (
    <footer className="relative">
      <HeroBackground secondary className="h-32 -top-32 overflow-hidden" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-t border-gray-200">
          <div className="md:flex md:items-center md:justify-center">
            <div className="text-sm mr-4">
              &copy; Gaudi 2023 All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
