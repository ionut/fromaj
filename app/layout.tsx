// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Providers } from "./storeProvider";
import Navbar from "@/components/navbar/Navbar";
import { dmsans } from "@/styles/fonts";
import Breadcrumb from "@/components/ui/common/Breadcrumb";
import Banner from "@/components/homepage/Banner";
import MaintenanceWrapper from "@/components/homepage/MaintenanceWrapper";

// Flag pentru vacation mode
const VACATION_MODE = true;

export const metadata: Metadata = {
  title: VACATION_MODE
    ? "În dezvoltare - Fromaj Artisan Cheese"
    : "Fromaj Artisan Cheese",
  description: VACATION_MODE
    ? "Fromaj Artisan Cheese - Suntem în dezvoltare și revenim curând cu noutăți!"
    : "Fromaj Artisan Cheese Boards · Cutii cu brânzeturi delicate și mezeluri alese · Corporate Catering & Evenimente",
  metadataBase: new URL("https://dev.fromaj.ro"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${dmsans.className} bg-white`}>
        <Providers>
          {VACATION_MODE ? (
            <MaintenanceWrapper />
          ) : (
            <div className="">
              <div>
                <Banner />
                <Navbar />
              </div>
              <main className="min-h-[100dvh]">
                <Breadcrumb />
                {children}
              </main>
              <Footer />
            </div>
          )}
        </Providers>
      </body>
    </html>
  );
}
