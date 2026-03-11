import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";

import WorkshopSectionOne from "@/components/workshopsectionOne"; // 1. Import the new component
import TreatmentFailureSection from "@/components/TreatmentFailureSection"; 
import FM4MethodSection from "@/components/FM4MethodSection";
import WorkshopLearningSection from "@/components/WorkshopLearningSection";
import WorkshopAudience from "@/components/WorkshopAudience";
import WorkshopOverview from "@/components/WorkshopOverview";
import AboutExpert from "@/components/AboutExpert";
import FinalCTA from "@/components/FinalCTA";
import VideoReviewsSection from "@/components/VideoReviewsSection";

import PainPointsSection from "@/components/PainPointsSection";
import WorkshopSection from "@/components/WorkshopSection";
import AudienceSection from "@/components/AudienceSection";
import ExpertSection from "@/components/ExpertSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import UrgencySection from "@/components/UrgencySection";
import FooterSection from "@/components/FooterSection";
import StickyFooter from "@/components/StickyFooter";
import { useNonFBPixel } from "@/hooks/useNonFBPixel";

const Index = () => {
  useNonFBPixel({ eventName: "PageView" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      
      {/* Social Proof (The 10,000+ Stats) */}
      <SocialProofSection />

       
      <WorkshopSectionOne />
      <VideoReviewsSection/>
       <TreatmentFailureSection />
       <FM4MethodSection />
       <WorkshopLearningSection />
       <WorkshopOverview />
       <AboutExpert />
       <FinalCTA />


      <TestimonialsSection />
      <PainPointsSection />
      
      {/* This is your existing WorkshopSection */}
      <WorkshopSection /> 
      
      {/* <AudienceSection /> */}
      <WorkshopAudience />
      <ExpertSection />
      
      <PricingSection />
      <FAQSection />
      <UrgencySection />
      <FooterSection />
      <StickyFooter />
    </div>
  );
};

export default Index;