import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Providers } from "./storeProvider";
import Navbar from "@/components/navbar/Navbar";
import { dmsans } from "@/styles/fonts";
import Breadcrumb from "@/components/ui/common/Breadcrumb";
import Banner from "@/components/homepage/Banner";

export const metadata: Metadata = {
  title: "Fromaj Artisan Cheese",
  description:
    "Fromaj Artisan Cheese Boards · Cutii cu brânzeturi delicate și mezeluri alese · Corporate Catering & Evenimente",
  metadataBase: new URL("https://dev.fromaj.ro"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${dmsans.className} bg-eerie-black-2`}>
        <Providers>
          <div className="grid grid-rows-[auto_1fr_auto] min-h-[100dvh]">
            <div>
              <Banner />
              <Navbar />{" "}
            </div>
            <main>
              <Breadcrumb />
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
