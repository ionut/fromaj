import HeroSection from "@/components/homepage/HeroSection";
import ProductsSection from "@/components/homepage/ProductsSection";
import ServiceSection from "@/components/homepage/ServiceSection";
import AboutSection from "@/components/homepage/AboutSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ServiceSection />
    </>
  );
}
