import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AdvancedFilters from "@/components/AdvancedFilters";
import CasePreviews from "@/components/CasePreviews";
import PetitionAutomation from "@/components/PetitionAutomation";
import ResearchSection from "@/components/ResearchSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <AdvancedFilters />
        <CasePreviews />
        <PetitionAutomation />
        <ResearchSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
