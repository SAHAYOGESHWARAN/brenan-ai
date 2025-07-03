
import React, { useState, useEffect } from "react";
import { Heart, Brain, Activity, Stethoscope, FileText, AlertCircle, CheckCircle, Clock, Camera } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

interface VitalSigns {
  heartRate: number;
  bloodPressure: { systolic: number; diastolic: number };
  temperature: number;
  oxygenSaturation: number;
  respiratoryRate: number;
}

interface DiagnosisResult {
  condition: string;
  probability: number;
  severity: 'low' | 'medium' | 'high';
  recommendations: string[];
  confidence: number;
}

const MedicalAI = () => {
  const [selectedPatient, setSelectedPatient] = useState('patient1');
  const [vitals, setVitals] = useState<VitalSigns>({
    heartRate: 72,
    bloodPressure: { systolic: 120, diastolic: 80 },
    temperature: 98.6,
    oxygenSaturation: 98,
    respiratoryRate: 16
  });
  const [diagnosisResults, setDiagnosisResults] = useState<DiagnosisResult[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const patientData = [
    { id: 'patient1', name: 'John Doe', age: 45, gender: 'Male', condition: 'Routine Checkup' },
    { id: 'patient2', name: 'Jane Smith', age: 32, gender: 'Female', condition: 'Cardiac Monitoring' },
    { id: 'patient3', name: 'Robert Johnson', age: 67, gender: 'Male', condition: 'Diabetes Management' }
  ];

  const vitalsHistory = [
    { time: '00:00', heartRate: 68, temperature: 98.4, oxygen: 97 },
    { time: '04:00', heartRate: 65, temperature: 98.2, oxygen: 98 },
    { time: '08:00', heartRate: 72, temperature: 98.6, oxygen: 98 },
    { time: '12:00', heartRate: 78, temperature: 99.1, oxygen: 97 },
    { time: '16:00', heartRate: 74, temperature: 98.8, oxygen: 98 },
    { time: '20:00', heartRate: 70, temperature: 98.5, oxygen: 98 }
  ];

  const healthMetrics = [
    { category: 'Cardiovascular', score: 85, max: 100 },
    { category: 'Respiratory', score: 92, max: 100 },
    { category: 'Neurological', score: 88, max: 100 },
    { category: 'Metabolic', score: 78, max: 100 },
    { category: 'Immune', score: 90, max: 100 }
  ];

  useEffect(() => {
    // Simulate real-time vital signs monitoring
    const interval = setInterval(() => {
      setVitals(prev => ({
        heartRate: Math.max(60, Math.min(100, prev.heartRate + (Math.random() - 0.5) * 5)),
        bloodPressure: {
          systolic: Math.max(90, Math.min(140, prev.bloodPressure.systolic + (Math.random() - 0.5) * 8)),
          diastolic: Math.max(60, Math.min(90, prev.bloodPressure.diastolic + (Math.random() - 0.5) * 4))
        },
        temperature: Math.max(97, Math.min(101, prev.temperature + (Math.random() - 0.5) * 0.5)),
        oxygenSaturation: Math.max(95, Math.min(100, prev.oxygenSaturation + (Math.random() - 0.5) * 2)),
        respiratoryRate: Math.max(12, Math.min(20, prev.respiratoryRate + (Math.random() - 0.5) * 2))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const runDiagnosis = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI diagnosis processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockResults: DiagnosisResult[] = [
      {
        condition: 'Mild Hypertension',
        probability: 73,
        severity: 'medium',
        recommendations: [
          'Monitor blood pressure regularly',
          'Reduce sodium intake',
          'Increase physical activity',
          'Consider lifestyle modifications'
        ],
        confidence: 87
      },
      {
        condition: 'Normal Cardiac Function',
        probability: 89,
        severity: 'low',
        recommendations: [
          'Continue regular exercise',
          'Maintain healthy diet',
          'Annual cardiac screening'
        ],
        confidence: 94
      },
      {
        condition: 'Optimal Respiratory Health',
        probability: 92,
        severity: 'low',
        recommendations: [
          'No immediate action required',
          'Continue current lifestyle',
          'Regular health checkups'
        ],
        confidence: 96
      }
    ];
    
    setDiagnosisResults(mockResults);
    setIsAnalyzing(false);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      default: return 'text-green-400 bg-green-400/10 border-green-400/30';
    }
  };

  const getVitalStatus = (vital: string, value: number) => {
    const ranges: { [key: string]: { min: number; max: number } } = {
      heartRate: { min: 60, max: 100 },
      systolic: { min: 90, max: 120 },
      diastolic: { min: 60, max: 80 },
      temperature: { min: 97.0, max: 99.5 },
      oxygen: { min: 95, max: 100 },
      respiratory: { min: 12, max: 20 }
    };
    
    const range = ranges[vital];
    if (!range) return 'normal';
    
    if (value < range.min || value > range.max) return 'abnormal';
    return 'normal';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Medical AI Assistant
              </h1>
              <p className="text-gray-400">Advanced Health Diagnosis & Monitoring</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={selectedPatient}
              onChange={(e) => setSelectedPatient(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
            >
              {patientData.map(patient => (
                <option key={patient.id} value={patient.id}>
                  {patient.name} - {patient.condition}
                </option>
              ))}
            </select>
            
            <button
              onClick={runDiagnosis}
              disabled={isAnalyzing}
              className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50"
            >
              {isAnalyzing ? 'Analyzing...' : 'Run AI Diagnosis'}
            </button>
          </div>
        </div>

        {/* Real-time Vitals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-slate-800/30 backdrop-blur-md rounded-lg border border-slate-700/50 p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Heart className="h-5 w-5 text-red-400" />
              <span className="text-sm text-gray-400">Heart Rate</span>
            </div>
            <p className={`text-2xl font-bold ${
              getVitalStatus('heartRate', vitals.heartRate) === 'normal' ? 'text-green-400' : 'text-red-400'
            }`}>
              {Math.round(vitals.heartRate)} BPM
            </p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-md rounded-lg border border-slate-700/50 p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Activity className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-gray-400">Blood Pressure</span>
            </div>
            <p className={`text-2xl font-bold ${
              getVitalStatus('systolic', vitals.bloodPressure.systolic) === 'normal' ? 'text-green-400' : 'text-red-400'
            }`}>
              {Math.round(vitals.bloodPressure.systolic)}/{Math.round(vitals.bloodPressure.diastolic)}
            </p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-md rounded-lg border border-slate-700/50 p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Stethoscope className="h-5 w-5 text-green-400" />
              <span className="text-sm text-gray-400">Temperature</span>
            </div>
            <p className={`text-2xl font-bold ${
              getVitalStatus('temperature', vitals.temperature) === 'normal' ? 'text-green-400' : 'text-red-400'
            }`}>
              {vitals.temperature.toFixed(1)}°F
            </p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-md rounded-lg border border-slate-700/50 p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Brain className="h-5 w-5 text-purple-400" />
              <span className="text-sm text-gray-400">Oxygen Sat</span>
            </div>
            <p className={`text-2xl font-bold ${
              getVitalStatus('oxygen', vitals.oxygenSaturation) === 'normal' ? 'text-green-400' : 'text-red-400'
            }`}>
              {Math.round(vitals.oxygenSaturation)}%
            </p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-md rounded-lg border border-slate-700/50 p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Activity className="h-5 w-5 text-cyan-400" />
              <span className="text-sm text-gray-400">Respiratory</span>
            </div>
            <p className={`text-2xl font-bold ${
              getVitalStatus('respiratory', vitals.respiratoryRate) === 'normal' ? 'text-green-400' : 'text-red-400'
            }`}>
              {Math.round(vitals.respiratoryRate)} /min
            </p>
          </div>
        </div>

        {/* Charts and Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Vitals Trend */}
          <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Vitals Trend (24h)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={vitalsHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="time" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #475569',
                    borderRadius: '8px'
                  }}
                />
                <Line type="monotone" dataKey="heartRate" stroke="#EF4444" strokeWidth={2} />
                <Line type="monotone" dataKey="temperature" stroke="#F97316" strokeWidth={2} />
                <Line type="monotone" dataKey="oxygen" stroke="#22C55E" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Health Metrics Radar */}
          <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Health Assessment</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={healthMetrics}>
                <PolarGrid />
                <PolarAngleAxis dataKey="category" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="Health Score" dataKey="score" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Diagnosis Results */}
        {diagnosisResults.length > 0 && (
          <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Brain className="h-5 w-5 text-purple-400" />
              <h3 className="text-lg font-semibold text-white">AI Diagnosis Results</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {diagnosisResults.map((result, index) => (
                <div key={index} className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-white">{result.condition}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-medium border ${getSeverityColor(result.severity)}`}>
                      {result.severity}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Probability</span>
                        <span className="text-white">{result.probability}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                          style={{ width: `${result.probability}%` }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-400 mb-2">Recommendations:</p>
                      <ul className="space-y-1">
                        {result.recommendations.slice(0, 2).map((rec, i) => (
                          <li key={i} className="text-xs text-gray-300 flex items-start space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Confidence: {result.confidence}%</span>
                      <span className="text-gray-500">AI Generated</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {isAnalyzing && (
          <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-8 text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-8 h-8 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
              <Brain className="h-8 w-8 text-purple-400 animate-pulse" />
            </div>
            <p className="text-lg text-white font-medium">AI Analysis in Progress...</p>
            <p className="text-sm text-gray-400 mt-2">Processing medical data and generating diagnosis</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalAI;
