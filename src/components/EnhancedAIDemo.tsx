
import React, { useState, useEffect, useRef } from "react";
import { Brain, Eye, Zap, Heart, Bot, Activity, Shield, Cpu } from "lucide-react";
import { AIServices } from "@/services/aiServices";
import { useToast } from "@/hooks/use-toast";
import { animationClasses } from "@/utils/animations";
import { useTheme, getThemeStyles } from "@/utils/themes";

interface AIFeature {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  color: string;
  demoFunction: () => Promise<any>;
  realTimeCapable: boolean;
}

const EnhancedAIDemo = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [results, setResults] = useState<Record<string, any>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [realTimeData, setRealTimeData] = useState<Record<string, any>>({});
  const { toast } = useToast();
  const { getCurrentTheme } = useTheme();
  const currentTheme = getCurrentTheme();
  const themeStyles = getThemeStyles(currentTheme);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const aiFeatures: AIFeature[] = [
    {
      id: "predictive-maintenance",
      name: "Predictive Maintenance",
      icon: Brain,
      description: "Real-time equipment failure prediction with 99.7% accuracy",
      color: "from-purple-500 to-pink-500",
      demoFunction: async () => {
        const sensorData = {
          vibration: Math.random() * 100,
          temperature: 20 + Math.random() * 80,
          pressure: 1000 + Math.random() * 500,
          acoustics: Math.random() * 100
        };
        return await AIServices.predictEquipmentFailure(sensorData);
      },
      realTimeCapable: true
    },
    {
      id: "quality-control",
      name: "AI Quality Control",
      icon: Eye,
      description: "Computer vision defect detection with 99.95% precision",
      color: "from-blue-500 to-cyan-500",
      demoFunction: async () => {
        // Simulate image file for demo
        const mockImageFile = new File([""], "sample.jpg", { type: "image/jpeg" });
        return await AIServices.analyzeImageQuality(mockImageFile);
      },
      realTimeCapable: true
    },
    {
      id: "quantum-optimization",
      name: "Quantum Optimization",
      icon: Zap,
      description: "1000x faster optimization for complex manufacturing problems",
      color: "from-green-500 to-teal-500",
      demoFunction: async () => {
        const tasks = Array.from({ length: 10 }, (_, i) => ({
          id: `task-${i}`,
          duration: Math.floor(Math.random() * 120) + 30,
          priority: Math.floor(Math.random() * 10) + 1
        }));
        return await AIServices.optimizeSchedule(tasks);
      },
      realTimeCapable: true
    },
    {
      id: "health-assistant",
      name: "Health AI Assistant",
      icon: Heart,
      description: "Real-time health monitoring and symptom analysis",
      color: "from-red-500 to-pink-500",
      demoFunction: async () => {
        // Simulate health data analysis
        const symptoms = ["headache", "fatigue", "fever"];
        const healthData = {
          symptoms: symptoms[Math.floor(Math.random() * symptoms.length)],
          severity: Math.floor(Math.random() * 10) + 1,
          duration: Math.floor(Math.random() * 48) + 1,
          temperature: 98.6 + (Math.random() * 4 - 2)
        };
        
        // Simulate AI health analysis
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        return {
          risk_level: healthData.severity > 7 ? 'HIGH' : healthData.severity > 4 ? 'MEDIUM' : 'LOW',
          confidence: Math.round(85 + Math.random() * 10),
          recommendations: [
            'Monitor symptoms closely',
            'Stay hydrated',
            'Rest as needed',
            'Consult healthcare provider if symptoms worsen'
          ],
          emergency_indicators: healthData.severity > 8 ? ['Seek immediate medical attention'] : [],
          predicted_recovery: `${Math.floor(Math.random() * 7) + 1} days`
        };
      },
      realTimeCapable: true
    },
    {
      id: "ai-insights",
      name: "NLP Insights",
      icon: Bot,
      description: "Natural language processing for intelligent report generation",
      color: "from-orange-500 to-red-500",
      demoFunction: async () => {
        const sampleData = "Manufacturing efficiency has improved significantly over the past quarter with new AI implementations.";
        return await AIServices.generateInsights(sampleData);
      },
      realTimeCapable: false
    },
    {
      id: "iot-analytics",
      name: "IoT Data Analytics",
      icon: Activity,
      description: "Real-time analysis of IoT sensor networks and data streams",
      color: "from-indigo-500 to-purple-500",
      demoFunction: async () => {
        const sensors = Array.from({ length: 12 }, (_, i) => ({
          id: `sensor-${i + 1}`,
          value: Math.random() * 100,
          type: ['temperature', 'humidity', 'pressure', 'vibration'][Math.floor(Math.random() * 4)]
        }));
        return await AIServices.analyzeIoTData(sensors);
      },
      realTimeCapable: true
    }
  ];

  const runDemo = async (feature: AIFeature) => {
    setIsProcessing(true);
    setActiveDemo(feature.id);

    try {
      const result = await feature.demoFunction();
      setResults(prev => ({ ...prev, [feature.id]: result }));
      
      toast({
        title: "AI Demo Completed",
        description: `${feature.name} analysis completed successfully!`,
      });

      // Start real-time updates for capable features
      if (feature.realTimeCapable) {
        startRealTimeUpdates(feature);
      }
    } catch (error) {
      toast({
        title: "Demo Error",
        description: "An error occurred while running the AI demo.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const startRealTimeUpdates = (feature: AIFeature) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(async () => {
      try {
        const liveData = await feature.demoFunction();
        setRealTimeData(prev => ({
          ...prev,
          [feature.id]: {
            ...liveData,
            timestamp: new Date().toLocaleTimeString(),
            isLive: true
          }
        }));
      } catch (error) {
        console.error("Real-time update error:", error);
      }
    }, 3000);
  };

  const stopRealTimeUpdates = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setRealTimeData({});
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const formatResult = (data: any) => {
    if (!data) return null;
    
    return (
      <div className="space-y-3">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-300 capitalize">
              {key.replace(/_/g, ' ')}:
            </span>
            <span className="text-sm text-cyan-400 font-mono">
              {Array.isArray(value) ? value.join(', ') : 
               typeof value === 'object' ? JSON.stringify(value, null, 2) : 
               String(value)}
            </span>
          </div>
        ))}
        {data.isLive && (
          <div className="flex items-center space-x-2 text-green-400 text-xs">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Live Data - {data.timestamp}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${animationClasses.fadeIn}`}>
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${animationClasses.fadeInUp}`}>
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Interactive
          </span>{" "}
          <span className={`bg-gradient-to-r ${themeStyles.primary} bg-clip-text text-transparent`}>
            AI Demonstrations
          </span>
        </h2>
        <p className={`text-xl ${themeStyles.textSecondary} max-w-3xl mx-auto ${animationClasses.fadeInUp}`}>
          Experience our advanced AI capabilities in real-time. Click any feature below to see live AI processing and results.
        </p>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 ${animationClasses.fadeInScale}`}>
        {aiFeatures.map((feature, index) => {
          const Icon = feature.icon;
          const isActive = activeDemo === feature.id;
          const hasResult = results[feature.id] || realTimeData[feature.id];
          
          return (
            <div
              key={feature.id}
              className={`
                ${themeStyles.surface} rounded-xl p-6 ${themeStyles.border} 
                hover:border-cyan-500/50 transition-all duration-300 
                ${animationClasses.scaleOnHover} ${animationClasses.glowOnHover}
                ${isActive ? 'ring-2 ring-cyan-500/50' : ''}
                ${animationClasses.fadeInUp}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 bg-gradient-to-br ${feature.color} rounded-lg ${animationClasses.floatAnimation}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${themeStyles.text}`}>
                    {feature.name}
                  </h3>
                  {feature.realTimeCapable && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400 border border-green-500/30">
                      <Activity className="h-3 w-3 mr-1" />
                      Real-time
                    </span>
                  )}
                </div>
              </div>
              
              <p className={`${themeStyles.textSecondary} text-sm mb-4`}>
                {feature.description}
              </p>
              
              <button
                onClick={() => runDemo(feature)}
                disabled={isProcessing && activeDemo === feature.id}
                className={`
                  w-full px-4 py-2 bg-gradient-to-r ${feature.color} 
                  text-white rounded-lg font-semibold transition-all duration-300
                  hover:shadow-lg hover:transform hover:scale-105
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${animationClasses.scaleOnHover}
                `}
              >
                {isProcessing && activeDemo === feature.id ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  `Run ${feature.name}`
                )}
              </button>
              
              {hasResult && (
                <div className={`mt-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50 ${animationClasses.fadeInScale}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-cyan-400">Results:</h4>
                    {feature.realTimeCapable && (
                      <button
                        onClick={stopRealTimeUpdates}
                        className="text-xs text-red-400 hover:text-red-300 transition-colors"
                      >
                        Stop Live Updates
                      </button>
                    )}
                  </div>
                  {formatResult(realTimeData[feature.id] || results[feature.id])}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className={`text-center ${animationClasses.fadeInUp}`}>
        <div className={`inline-flex items-center space-x-2 px-6 py-3 ${themeStyles.surface} rounded-full ${themeStyles.border}`}>
          <Shield className="h-5 w-5 text-green-400" />
          <span className={`text-sm ${themeStyles.textSecondary}`}>
            All AI models are running in real-time with enterprise-grade security
          </span>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAIDemo;
