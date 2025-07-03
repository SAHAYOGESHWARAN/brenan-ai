
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Activity, Users, Zap } from "lucide-react";

export const ProjectAnalytics = () => {
  const [selectedMetric, setSelectedMetric] = useState('performance');

  const performanceData = [
    { month: 'Jan', efficiency: 85, quality: 92, cost: 78 },
    { month: 'Feb', efficiency: 87, quality: 94, cost: 82 },
    { month: 'Mar', efficiency: 91, quality: 96, cost: 85 },
    { month: 'Apr', efficiency: 93, quality: 97, cost: 87 },
    { month: 'May', efficiency: 95, quality: 98, cost: 90 },
    { month: 'Jun', efficiency: 97, quality: 99, cost: 92 }
  ];

  const projectDistribution = [
    { name: 'AI Innovation', value: 35, color: '#8B5CF6' },
    { name: 'Automation', value: 28, color: '#06B6D4' },
    { name: 'Quantum Tech', value: 22, color: '#10B981' },
    { name: 'Edge Computing', value: 15, color: '#F59E0B' }
  ];

  const realTimeMetrics = [
    { label: 'Active Projects', value: 247, change: '+12%', icon: Activity },
    { label: 'Success Rate', value: '99.7%', change: '+0.3%', icon: TrendingUp },
    { label: 'Global Users', value: '15.8K', change: '+8.2%', icon: Users },
    { label: 'AI Processing', value: '2.4M', change: '+15%', icon: Zap }
  ];

  return (
    <div className="space-y-8">
      {/* Real-time Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {realTimeMetrics.map((metric) => {
          const IconComponent = metric.icon;
          return (
            <div key={metric.label} className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
              <div className="flex items-center justify-between mb-4">
                <IconComponent className="h-8 w-8 text-cyan-400" />
                <span className="text-green-400 text-sm font-medium">{metric.change}</span>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-white">{metric.value}</p>
                <p className="text-gray-400 text-sm">{metric.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Performance Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #475569',
                  borderRadius: '8px'
                }}
              />
              <Line type="monotone" dataKey="efficiency" stroke="#06B6D4" strokeWidth={2} />
              <Line type="monotone" dataKey="quality" stroke="#10B981" strokeWidth={2} />
              <Line type="monotone" dataKey="cost" stroke="#F59E0B" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Project Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={projectDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {projectDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
