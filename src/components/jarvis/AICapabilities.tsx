
import React from "react";
import { Activity, Zap } from "lucide-react";

interface AICapability {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'processing' | 'idle';
}

interface AICapabilitiesProps {
  capabilities: AICapability[];
}

const AICapabilities: React.FC<AICapabilitiesProps> = ({ capabilities }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/10';
      case 'processing': return 'text-yellow-400 bg-yellow-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Activity className="h-3 w-3" />;
      case 'processing': return <div className="w-3 h-3 border border-yellow-400 border-t-transparent rounded-full animate-spin" />;
      default: return <Zap className="h-3 w-3" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {capabilities.map((capability) => (
        <div key={capability.id} className="bg-slate-800/50 backdrop-blur-md rounded-lg border border-slate-700/50 p-4 hover:border-purple-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white font-semibold">{capability.name}</h3>
            <div className={`px-2 py-1 rounded-full text-xs flex items-center space-x-1 ${getStatusColor(capability.status)}`}>
              {getStatusIcon(capability.status)}
              <span>{capability.status}</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm">{capability.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AICapabilities;
