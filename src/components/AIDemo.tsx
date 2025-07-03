
import { useState } from "react";
import { Brain, Cpu, Zap, Database, Shield, Network, Play, Loader2, CheckCircle, AlertTriangle } from "lucide-react";
import { AIServices } from "@/services/aiServices";

interface DemoResult {
  type: string;
  data: any;
  timestamp: Date;
}

export const AIDemo = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [results, setResults] = useState<DemoResult[]>([]);
  const [loading, setLoading] = useState(false);

  const demos = [
    {
      id: 'predictive-maintenance',
      title: 'Predictive Maintenance AI',
      icon: Brain,
      description: 'Analyze sensor data to predict equipment failures',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'quality-control',
      title: 'Computer Vision QC',
      icon: Cpu,
      description: 'AI-powered visual inspection and defect detection',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'quantum-optimization',
      title: 'Quantum Optimization',
      icon: Zap,
      description: 'Solve complex scheduling and resource allocation',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'iot-analytics',
      title: 'IoT Data Analytics',
      icon: Database,
      description: 'Real-time analysis of industrial sensor networks',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const runDemo = async (demoId: string) => {
    setLoading(true);
    setActiveDemo(demoId);

    try {
      let result;
      
      switch (demoId) {
        case 'predictive-maintenance':
          result = await AIServices.predictEquipmentFailure({
            vibration: Math.random() * 100,
            temperature: 65 + Math.random() * 30,
            pressure: 14.5 + Math.random() * 2,
            acoustics: Math.random() * 80
          });
          break;
          
        case 'quality-control':
          // Simulate image upload
          const mockFile = new File([''], 'sample.jpg', { type: 'image/jpeg' });
          result = await AIServices.analyzeImageQuality(mockFile);
          break;
          
        case 'quantum-optimization':
          result = await AIServices.optimizeSchedule([
            { id: 'Task-A', duration: 2, priority: 8 },
            { id: 'Task-B', duration: 3, priority: 6 },
            { id: 'Task-C', duration: 1, priority: 9 },
            { id: 'Task-D', duration: 4, priority: 7 }
          ]);
          break;
          
        case 'iot-analytics':
          result = await AIServices.analyzeIoTData([
            { id: 'Temp-01', value: 72.5, type: 'temperature' },
            { id: 'Vibr-02', value: 0.8, type: 'vibration' },
            { id: 'Press-03', value: 15.2, type: 'pressure' }
          ]);
          break;
          
        default:
          result = { error: 'Demo not implemented' };
      }

      setResults(prev => [{
        type: demoId,
        data: result,
        timestamp: new Date()
      }, ...prev.slice(0, 4)]);

    } catch (error) {
      console.error('Demo error:', error);
    } finally {
      setLoading(false);
      setActiveDemo(null);
    }
  };

  const formatResult = (result: DemoResult) => {
    const { type, data } = result;
    
    switch (type) {
      case 'predictive-maintenance':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Risk Level:</span>
              <span className={`px-2 py-1 rounded text-sm ${
                data.riskLevel === 'HIGH' ? 'bg-red-500' : 
                data.riskLevel === 'MEDIUM' ? 'bg-yellow-500' : 'bg-green-500'
              } text-white`}>
                {data.riskLevel}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Confidence:</span>
              <span>{data.confidence}%</span>
            </div>
            <div className="text-sm">
              <strong>Recommendations:</strong>
              <ul className="list-disc list-inside mt-1">
                {data.maintenanceRecommendations.map((rec: string, idx: number) => (
                  <li key={idx}>{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        );
        
      case 'quality-control':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Quality Score:</span>
              <span className="text-cyan-400">{data.qualityScore}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Recommendation:</span>
              <span className={`px-2 py-1 rounded text-sm ${
                data.recommendation === 'ACCEPT' ? 'bg-green-500' : 'bg-red-500'
              } text-white`}>
                {data.recommendation}
              </span>
            </div>
            {data.defectsDetected && (
              <div className="text-sm">
                <strong>Defects:</strong> {data.defectTypes.join(', ')}
              </div>
            )}
          </div>
        );
        
      case 'quantum-optimization':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Efficiency Gain:</span>
              <span className="text-green-400">{data.efficiency_improvement}%</span>
            </div>
            <div className="text-sm">
              <strong>Method:</strong> {data.processing_method}
            </div>
            <div className="text-sm">
              <strong>Quantum Advantage:</strong> {data.quantum_advantage}
            </div>
          </div>
        );
        
      case 'iot-analytics':
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Anomalies:</span>
              <span>{data.anomalies.length} detected</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Efficiency Forecast:</span>
              <span className="text-cyan-400">{data.predictions.efficiency_forecast}%</span>
            </div>
            <div className="text-sm">
              <strong>Energy Optimization:</strong> {data.predictions.energy_optimization}
            </div>
          </div>
        );
        
      default:
        return <div>Unknown result type</div>;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
          <Brain className="h-4 w-4 text-cyan-400" />
          <span className="text-sm text-cyan-400">Interactive AI Demos</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Experience AI
          </span>{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            In Action
          </span>
        </h2>
        
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Try our AI-powered industrial solutions with real-time demonstrations and see the technology in action.
        </p>
      </div>

      {/* Demo Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {demos.map((demo) => {
          const IconComponent = demo.icon;
          return (
            <button
              key={demo.id}
              onClick={() => runDemo(demo.id)}
              disabled={loading}
              className={`group p-6 bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-left ${
                activeDemo === demo.id ? 'ring-2 ring-cyan-500' : ''
              }`}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${demo.color} rounded-lg flex items-center justify-center mb-4`}>
                {loading && activeDemo === demo.id ? (
                  <Loader2 className="h-6 w-6 text-white animate-spin" />
                ) : (
                  <IconComponent className="h-6 w-6 text-white" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{demo.title}</h3>
              <p className="text-gray-400 text-sm">{demo.description}</p>
              
              <div className="mt-4 flex items-center space-x-2 text-cyan-400">
                <Play className="h-4 w-4" />
                <span className="text-sm">Run Demo</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Results Display */}
      {results.length > 0 && (
        <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
            Demo Results
          </h3>
          
          <div className="space-y-6">
            {results.map((result, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-cyan-400 capitalize">
                    {result.type.replace('-', ' ')} Analysis
                  </h4>
                  <span className="text-sm text-gray-400">
                    {result.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                {formatResult(result)}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
