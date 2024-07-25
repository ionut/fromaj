import HowItStartSection from "@/components/homepage/HowItStartSection";
import MainSection from "@/components/homepage/MainSection";
import MenuSection from "@/components/homepage/MenuSection";
import ServiceSection from "@/components/homepage/ServiceSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <ServiceSection />
      <MenuSection />
      <HowItStartSection />
    </>
  );
}
