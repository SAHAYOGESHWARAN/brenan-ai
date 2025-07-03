
import { Hero } from "@/components/Hero";
import { FeaturedBlogs } from "@/components/FeaturedBlogs";
import { CompanyOverview } from "@/components/CompanyOverview";
import { InteractiveTechShowcase } from "@/components/InteractiveTechShowcase";
import EnhancedAIDemo from "@/components/EnhancedAIDemo";
import { ProjectAnalytics } from "@/components/ProjectAnalytics";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import JarvisAI from "@/components/JarvisAI";
import BusinessIntelligence from "@/components/BusinessIntelligence";
import BlockchainAnalytics from "@/components/BlockchainAnalytics";
import MedicalAI from "@/components/MedicalAI";
import AdvancedFeaturesNavigation from "@/components/AdvancedFeaturesNavigation";
import AdvancedFeaturesDashboard from "@/components/AdvancedFeaturesDashboard";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>('main');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'jarvis':
        return <JarvisAI />;
      case 'business':
        return <BusinessIntelligence />;
      case 'blockchain':
        return <BlockchainAnalytics />;
      case 'medical':
        return <MedicalAI />;
      default:
        return (
          <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
            <Navigation />
            <Hero />
            <FeaturedBlogs />
            <InteractiveTechShowcase />
            <EnhancedAIDemo />
            
            {/* Advanced Features Dashboard */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <AdvancedFeaturesDashboard />
            </section>
            
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Real-Time
                  </span>{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Analytics
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Monitor performance metrics and insights from our AI-powered industrial solutions in real-time.
                </p>
              </div>
              <ProjectAnalytics />
            </section>
            <CompanyOverview />
            <Newsletter />
            <Footer />
          </div>
        );
    }
  };

  if (activeSection !== 'main') {
    return (
      <div className="min-h-screen">
        <AdvancedFeaturesNavigation 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />
        <div className="pt-16">
          {renderActiveSection()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />
      <Hero />
      <AdvancedFeaturesNavigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      <FeaturedBlogs />
      <InteractiveTechShowcase />
      <EnhancedAIDemo />
      
      {/* Advanced Features Dashboard */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AdvancedFeaturesDashboard />
      </section>
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Real-Time
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Analytics
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Monitor performance metrics and insights from our AI-powered industrial solutions in real-time.
          </p>
        </div>
        <ProjectAnalytics />
      </section>
      <CompanyOverview />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
