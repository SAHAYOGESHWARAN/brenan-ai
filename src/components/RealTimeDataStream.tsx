
import React, { useState, useEffect } from 'react';
import { Activity, TrendingUp, Zap, Database } from 'lucide-react';

interface DataPoint {
  timestamp: string;
  value: number;
  type: string;
}

const RealTimeDataStream = () => {
  const [dataStream, setDataStream] = useState<DataPoint[]>([]);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDataPoint: DataPoint = {
        timestamp: new Date().toISOString(),
        value: Math.random() * 100,
        type: ['AI_Processing', 'Blockchain_Tx', 'Medical_Analysis', 'Business_Intel'][Math.floor(Math.random() * 4)]
      };

      setDataStream(prev => [...prev.slice(-20), newDataPoint]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Activity className="h-5 w-5 text-green-400" />
          <h3 className="text-lg font-semibold text-white">Real-Time Data Stream</h3>
        </div>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
          <span className="text-sm text-gray-400">{isConnected ? 'Connected' : 'Disconnected'}</span>
        </div>
      </div>

      <div className="space-y-2 max-h-60 overflow-y-auto">
        {dataStream.map((data, index) => (
          <div key={index} className="flex items-center justify-between p-2 bg-slate-900/50 rounded-lg">
            <div className="flex items-center space-x-2">
              <Database className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-white">{data.type}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-green-400">{data.value.toFixed(2)}</span>
              <span className="text-xs text-gray-500">{new Date(data.timestamp).toLocaleTimeString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealTimeDataStream;
