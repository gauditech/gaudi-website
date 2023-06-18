import { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

import "@/app/css/style.css";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Gaudi | Build better apps in a fraction of time",
  description:
    "Describe your models and APIs in a declarative way and instantly get your app with batteries included.",
  metadataBase: new URL("https://gaudi.tech/"),

  openGraph: {
    title: "Gaudi | Build better apps in a fraction of time",
    description:
      "Describe your models and APIs in a declarative way and instantly get your app with batteries included.",
    type: "website",
    images: "/images/openapi-image.png",
  },
  twitter: {
    card: "summary_large_image",
  },

  icons: [
    {
      url: "/images/logo/gaudi_favicon.svg",
      type: "image/svg",
    },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${inter.variable} font-inter antialiased bg-gray-900 text-gray-300 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />

          <main className="grow">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
