import HomeSection from "@/components/homepage/HomeSection";
import HowItStartSection from "@/components/homepage/HowItStartSection";
import MenuSection from "@/components/homepage/MenuSection";
import ServiceSection from "@/components/homepage/ServiceSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <ServiceSection />
      <MenuSection />
      <HowItStartSection />
    </>
  );
}
