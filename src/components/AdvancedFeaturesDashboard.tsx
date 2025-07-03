
import React from 'react';
import RealTimeDataStream from './RealTimeDataStream';
import AIImageGenerator from './AIImageGenerator';
import NFTMarketplace from './NFTMarketplace';
import { Cpu, Zap, Sparkles } from 'lucide-react';

const AdvancedFeaturesDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
          <Cpu className="h-4 w-4 text-cyan-400" />
          <span className="text-sm text-cyan-400">Advanced AI Features</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Next-Gen
          </span>{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            AI Platform
          </span>
        </h2>
        
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Experience cutting-edge AI capabilities with real-time processing, advanced image generation, 
          blockchain integration, and intelligent automation.
        </p>
      </div>

      {/* Real-time Data Stream */}
      <section>
        <div className="flex items-center space-x-2 mb-4">
          <Zap className="h-5 w-5 text-yellow-400" />
          <h3 className="text-2xl font-bold text-white">Live Data Processing</h3>
        </div>
        <RealTimeDataStream />
      </section>

      {/* AI Image Generator */}
      <section>
        <div className="flex items-center space-x-2 mb-4">
          <Sparkles className="h-5 w-5 text-purple-400" />
          <h3 className="text-2xl font-bold text-white">AI-Powered Creation</h3>
        </div>
        <AIImageGenerator />
      </section>

      {/* NFT Marketplace */}
      <section>
        <div className="flex items-center space-x-2 mb-4">
          <Cpu className="h-5 w-5 text-green-400" />
          <h3 className="text-2xl font-bold text-white">Digital Asset Trading</h3>
        </div>
        <NFTMarketplace />
      </section>
    </div>
  );
};

export default AdvancedFeaturesDashboard;
