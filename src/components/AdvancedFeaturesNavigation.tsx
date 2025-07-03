
import React from "react";
import { Bot, BarChart3, Bitcoin, Brain, Cpu, Heart } from "lucide-react";

interface AdvancedFeature {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
}

interface AdvancedFeaturesNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const AdvancedFeaturesNavigation: React.FC<AdvancedFeaturesNavigationProps> = ({
  activeSection,
  setActiveSection
}) => {
  const advancedFeatures: AdvancedFeature[] = [
    {
      id: 'main',
      name: 'Main Dashboard',
      icon: Cpu,
      description: 'Complete AI-powered platform overview'
    },
    {
      id: 'jarvis',
      name: 'Jarvis AI Assistant',
      icon: Bot,
      description: 'Advanced virtual assistant with NLP and ML capabilities'
    },
    {
      id: 'business',
      name: 'Business Intelligence',
      icon: BarChart3,
      description: 'Real-time analytics and predictive insights'
    },
    {
      id: 'blockchain',
      name: 'Blockchain Analytics',
      icon: Bitcoin,
      description: 'Crypto trading and DeFi analysis platform'
    },
    {
      id: 'medical',
      name: 'Medical AI',
      icon: Heart,
      description: 'Advanced health diagnosis and monitoring system'
    }
  ];

  if (activeSection !== 'main') {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-cyan-400" />
                <span className="text-xl font-bold text-white">Advanced AI Platform</span>
              </div>
              
              <nav className="hidden md:flex space-x-6">
                {advancedFeatures.map((feature) => {
                  const IconComponent = feature.icon;
                  return (
                    <button
                      key={feature.id}
                      onClick={() => setActiveSection(feature.id)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                        activeSection === feature.id
                          ? 'bg-cyan-500/20 text-cyan-400'
                          : 'text-gray-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span className="text-sm font-medium">{feature.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
            
            <button
              onClick={() => setActiveSection('main')}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Back to Main
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Advanced
          </span>{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            AI Features
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Access our comprehensive suite of AI-powered tools and analytics platforms
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {advancedFeatures.slice(1).map((feature) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={feature.id}
              onClick={() => setActiveSection(feature.id)}
              className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6 cursor-pointer hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.name}</h3>
              </div>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                Launch Platform
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AdvancedFeaturesNavigation;
