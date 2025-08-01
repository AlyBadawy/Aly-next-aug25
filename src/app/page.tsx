import { ContactHireSection } from "@/components/home/ContactHireSection";
import { HireSection } from "@/components/home/HireSection";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeSolutionSection } from "@/components/home/HomeSolutionSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { QuickStats } from "@/components/home/QuickStates";
import { TestimonialsSection } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeSolutionSection />
      <HireSection />
      <PortfolioSection />
      <TestimonialsSection />
      <QuickStats />
      <ContactHireSection />
    </>
  );
}
