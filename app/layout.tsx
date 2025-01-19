import { Suspense } from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Loading from "./loading";
import Footer from "@/components/footer/Footer";
import Providers from "./storeProvider";
import Navbar from "@/components/navbar/Navbar";

const dmsans = DM_Sans({
  subsets: ["latin"],
  variable: "--fontFamily-dm_sans",
});

export const metadata: Metadata = {
  title: "Fromaj Artisan Cheese",
  description:
    "Fromaj Artisan Cheese Boards · Cutii cu brânzeturi delicate și mezeluri alese · Corporate Catering & Evenimente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmsans.className} bg-eerie-black-2`}>
        <Providers>
          <Suspense fallback={<Loading />}>
            <div className="grid grid-rows-[auto_1fr_auto] h-[100dvh]">
              <Navbar />
              <main>{children}</main>
              {/* <Footer /> */}
            </div>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
