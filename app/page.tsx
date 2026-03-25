import { HeroSection } from "@/sections/HeroSection/HeroSection";
import { TrustSection } from "@/sections/TrustSection/TrustSection";
import { WhyTrustSection } from "@/sections/WhyTrustSection/WhyTrustSection";
import { ServicesShowcase } from "@/sections/ServicesShowcase/ServicesShowcase";
import { FeatureStories } from "@/sections/FeatureStories/FeatureStories";
import { TechStackSection } from "@/sections/TechStackSection/TechStackSection";
import { ProcessSticky } from "@/sections/ProcessSticky/ProcessSticky";
import { PortfolioStrip } from "@/sections/PortfolioStrip/PortfolioStrip";
import { IndustriesSection } from "@/sections/IndustriesSection/IndustriesSection";
import { TestimonialsSlider } from "@/sections/TestimonialsSlider/TestimonialsSlider";
import { FinalCtaSection } from "@/sections/FinalCtaSection/FinalCtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <WhyTrustSection />
      <ServicesShowcase />
      <FeatureStories />
      <TechStackSection />
      <ProcessSticky />
      <PortfolioStrip />
      <IndustriesSection />
      <TestimonialsSlider />
      <FinalCtaSection />
    </>
  );
}
