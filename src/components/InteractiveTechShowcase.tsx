
import { useState, useEffect } from "react";
import { Cpu, Database, Shield, Network, Zap, Brain, Activity, TrendingUp, Settings, Monitor } from "lucide-react";

interface TechMetric {
  label: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}

interface Technology {
  id: string;
  name: string;
  icon: any;
  description: string;
  metrics: TechMetric[];
  status: 'active' | 'optimizing' | 'monitoring';
  gradient: string;
}

export const InteractiveTechShowcase = () => {
  const [selectedTech, setSelectedTech] = useState<string>('ml');
  const [realTimeData, setRealTimeData] = useState<{[key: string]: number}>({});

  const technologies: Technology[] = [
    {
      id: 'ml',
      name: 'Machine Learning',
      icon: Brain,
      description: 'Advanced ML algorithms for predictive analytics and process optimization with neural networks processing 10,000+ data points per second.',
      metrics: [
        { label: 'Prediction Accuracy', value: 99.7, unit: '%', trend: 'up' },
        { label: 'Processing Speed', value: 10000, unit: 'ops/sec', trend: 'up' },
        { label: 'Model Efficiency', value: 94.2, unit: '%', trend: 'stable' },
        { label: 'Data Throughput', value: 2.4, unit: 'GB/s', trend: 'up' }
      ],
      status: 'active',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'edge',
      name: 'Edge Computing',
      icon: Cpu,
      description: 'Real-time processing at the source for ultra-low latency operations with distributed computing nodes.',
      metrics: [
        { label: 'Response Time', value: 15, unit: 'ms', trend: 'down' },
        { label: 'Node Uptime', value: 99.9, unit: '%', trend: 'stable' },
        { label: 'Edge Efficiency', value: 87.5, unit: '%', trend: 'up' },
        { label: 'Bandwidth Usage', value: 45.2, unit: 'Mbps', trend: 'stable' }
      ],
      status: 'optimizing',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'bigdata',
      name: 'Big Data Analytics',
      icon: Database,
      description: 'Massive data processing for actionable industrial insights with real-time stream processing.',
      metrics: [
        { label: 'Data Processed', value: 847, unit: 'TB/day', trend: 'up' },
        { label: 'Query Performance', value: 1.2, unit: 's avg', trend: 'down' },
        { label: 'Storage Efficiency', value: 92.1, unit: '%', trend: 'up' },
        { label: 'Insight Generation', value: 156, unit: 'per hour', trend: 'up' }
      ],
      status: 'active',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 'iot',
      name: 'IoT Integration',
      icon: Network,
      description: 'Seamless connectivity across all industrial equipment and sensors with 5G and mesh networking.',
      metrics: [
        { label: 'Connected Devices', value: 15847, unit: 'devices', trend: 'up' },
        { label: 'Network Reliability', value: 99.8, unit: '%', trend: 'stable' },
        { label: 'Data Collection', value: 2.1, unit: 'M points/min', trend: 'up' },
        { label: 'Sensor Coverage', value: 97.3, unit: '%', trend: 'up' }
      ],
      status: 'monitoring',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'security',
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Enterprise-grade security for critical industrial systems with AI-powered threat detection.',
      metrics: [
        { label: 'Threat Detection', value: 99.95, unit: '%', trend: 'up' },
        { label: 'Response Time', value: 0.3, unit: 'seconds', trend: 'down' },
        { label: 'Security Score', value: 98.7, unit: '/100', trend: 'stable' },
        { label: 'Incidents Blocked', value: 1247, unit: 'today', trend: 'up' }
      ],
      status: 'active',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: Zap,
      description: 'Revolutionary quantum algorithms solving complex optimization problems 1000x faster than classical methods.',
      metrics: [
        { label: 'Quantum Advantage', value: 1000, unit: 'x faster', trend: 'up' },
        { label: 'Qubit Coherence', value: 127, unit: 'qubits', trend: 'stable' },
        { label: 'Error Rate', value: 0.1, unit: '%', trend: 'down' },
        { label: 'Optimization Efficiency', value: 89.4, unit: '%', trend: 'up' }
      ],
      status: 'optimizing',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => {
        const newData = { ...prev };
        technologies.forEach(tech => {
          tech.metrics.forEach(metric => {
            const key = `${tech.id}-${metric.label}`;
            const variance = Math.random() * 0.1 - 0.05; // ±5% variance
            newData[key] = metric.value * (1 + variance);
          });
        });
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const selectedTechData = technologies.find(tech => tech.id === selectedTech);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/10';
      case 'optimizing': return 'text-yellow-400 bg-yellow-400/10';
      case 'monitoring': return 'text-blue-400 bg-blue-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-3 w-3 text-green-400" />;
      case 'down': return <TrendingUp className="h-3 w-3 text-red-400 rotate-180" />;
      default: return <Activity className="h-3 w-3 text-gray-400" />;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
          <Settings className="h-4 w-4 text-cyan-400" />
          <span className="text-sm text-cyan-400">Live Technology Monitor</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Powered by
          </span>{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Innovation
          </span>
        </h2>
        
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Our cutting-edge technology stack drives the next generation of industrial automation and AI-powered solutions with real-time performance monitoring.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Technology Selector */}
        <div className="lg:col-span-1">
          <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Monitor className="h-5 w-5 text-cyan-400 mr-2" />
              Technology Stack
            </h3>
            
            <div className="space-y-3">
              {technologies.map((tech) => {
                const IconComponent = tech.icon;
                const isSelected = selectedTech === tech.id;
                
                return (
                  <button
                    key={tech.id}
                    onClick={() => setSelectedTech(tech.id)}
                    className={`w-full p-3 rounded-lg border transition-all duration-300 text-left ${
                      isSelected
                        ? 'border-cyan-500/50 bg-cyan-500/10'
                        : 'border-slate-700/50 bg-slate-900/30 hover:border-slate-600/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${tech.gradient} flex items-center justify-center`}>
                          <IconComponent className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium text-white">{tech.name}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(tech.status)}`}>
                        {tech.status}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed View */}
        <div className="lg:col-span-2">
          {selectedTechData && (
            <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${selectedTechData.gradient} flex items-center justify-center`}>
                  <selectedTechData.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedTechData.name}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${getStatusColor(selectedTechData.status)} mt-1`}>
                    {selectedTechData.status.toUpperCase()}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                {selectedTechData.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedTechData.metrics.map((metric, index) => {
                  const key = `${selectedTechData.id}-${metric.label}`;
                  const realTimeValue = realTimeData[key] || metric.value;
                  
                  return (
                    <div key={index} className="bg-slate-900/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400 text-sm">{metric.label}</span>
                        {getTrendIcon(metric.trend)}
                      </div>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-bold text-white">
                          {realTimeValue.toLocaleString(undefined, {
                            maximumFractionDigits: metric.value < 10 ? 1 : 0
                          })}
                        </span>
                        <span className="text-gray-400 text-sm">{metric.unit}</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-1 mt-3">
                        <div 
                          className={`h-1 rounded-full bg-gradient-to-r ${selectedTechData.gradient} transition-all duration-500`}
                          style={{ 
                            width: `${Math.min(100, Math.max(0, (realTimeValue / (metric.value * 1.2)) * 100))}%` 
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
