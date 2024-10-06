import { Suspense } from "react";
import type { Metadata } from "next";
import { DM_Sans, Forum } from "next/font/google";
import "./globals.css";
import Loading from "./loading";
import Footer from "@/components/footer/Footer";
import Providers from "./storeProvider";
import Navbar from "@/components/navbar/Navbar";
import Cart from "@/components/cart/Cart";

const dmsans = DM_Sans({
  subsets: ["latin"],
  variable: "--fontFamily-dm_sans",
});
const forum = Forum({
  subsets: ["latin"],
  weight: "400",
  variable: "--fontFamily-forum",
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
      <body className={`${dmsans.variable} ${forum.variable}`}>
        <Providers>
          <Suspense fallback={<Loading />}>
            <div className="main-grid">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
            <Cart />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
