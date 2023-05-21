import { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/css/style.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Home - Gaudi",
  description: "Gaudi home page",
  icons: [
    {
      url: "/images/gaudi_favicon.svg",
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
