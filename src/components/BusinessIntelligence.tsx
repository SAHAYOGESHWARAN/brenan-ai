
import React, { useState, useEffect } from "react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { TrendingUp, DollarSign, Users, ShoppingCart, Brain, Zap, Target, Globe } from "lucide-react";

interface KPI {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
  icon: React.ElementType;
}

const BusinessIntelligence = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('revenue');
  const [realTimeData, setRealTimeData] = useState<any>({});

  const kpis: KPI[] = [
    { label: 'Total Revenue', value: '$2.4M', change: '+23.5%', trend: 'up', icon: DollarSign },
    { label: 'Active Users', value: '15.8K', change: '+18.2%', trend: 'up', icon: Users },
    { label: 'Conversion Rate', value: '3.4%', change: '-0.8%', trend: 'down', icon: Target },
    { label: 'Global Reach', value: '47 Countries', change: '+3', trend: 'up', icon: Globe }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 185000, profit: 125000, expenses: 60000 },
    { month: 'Feb', revenue: 195000, profit: 135000, expenses: 60000 },
    { month: 'Mar', revenue: 225000, profit: 155000, expenses: 70000 },
    { month: 'Apr', revenue: 245000, profit: 175000, expenses: 70000 },
    { month: 'May', revenue: 285000, profit: 205000, expenses: 80000 },
    { month: 'Jun', revenue: 320000, profit: 235000, expenses: 85000 }
  ];

  const userEngagementData = [
    { time: '00:00', active: 1200, new: 45 },
    { time: '04:00', active: 800, new: 23 },
    { time: '08:00', active: 2400, new: 156 },
    { time: '12:00', active: 3200, new: 234 },
    { time: '16:00', active: 2800, new: 187 },
    { time: '20:00', active: 2100, new: 98 }
  ];

  const marketSegmentData = [
    { name: 'Enterprise', value: 45, color: '#8B5CF6' },
    { name: 'SMB', value: 30, color: '#06B6D4' },
    { name: 'Startup', value: 15, color: '#10B981' },
    { name: 'Individual', value: 10, color: '#F59E0B' }
  ];

  const predictiveAnalytics = [
    { month: 'Jul', predicted: 350000, confidence: 87 },
    { month: 'Aug', predicted: 385000, confidence: 84 },
    { month: 'Sep', predicted: 420000, confidence: 81 },
    { month: 'Oct', predicted: 465000, confidence: 78 }
  ];

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setRealTimeData({
        liveUsers: Math.floor(2000 + Math.random() * 1000),
        currentRevenue: Math.floor(320000 + Math.random() * 50000),
        activeTransactions: Math.floor(150 + Math.random() * 50),
        systemLoad: Math.floor(65 + Math.random() * 20),
        timestamp: new Date().toLocaleTimeString()
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-400" />;
      case 'down': return <TrendingUp className="h-4 w-4 text-red-400 rotate-180" />;
      default: return <div className="h-4 w-4" />;
    }
  };

  const generateInsights = () => {
    const insights = [
      "Revenue growth acceleration detected - 23.5% increase driven by enterprise segment expansion",
      "User engagement peaks at 12:00 PM - optimal time for product launches and announcements",
      "Predictive model shows 87% confidence in reaching $350K revenue next month",
      "Market segment analysis reveals untapped potential in startup category (+40% growth opportunity)",
      "Real-time analytics indicate system performance is optimal with 15% headroom for scaling"
    ];
    
    return insights[Math.floor(Math.random() * insights.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Business Intelligence Dashboard
            </h1>
            <p className="text-gray-400">AI-Powered Analytics & Insights</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
            >
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
              <option value="1y">Last Year</option>
            </select>
            
            <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-lg border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">Live Data</span>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => {
            const IconComponent = kpi.icon;
            return (
              <div key={index} className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className="h-8 w-8 text-blue-400" />
                  <div className="flex items-center space-x-1">
                    {getTrendIcon(kpi.trend)}
                    <span className={`text-sm font-medium ${
                      kpi.trend === 'up' ? 'text-green-400' : 
                      kpi.trend === 'down' ? 'text-red-400' : 'text-gray-400'
                    }`}>
                      {kpi.change}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{kpi.value}</p>
                  <p className="text-gray-400 text-sm">{kpi.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Analytics */}
          <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Revenue Analytics</h3>
              <Brain className="h-5 w-5 text-blue-400" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
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
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#06B6D4" fill="#06B6D4" fillOpacity={0.8} />
                <Area type="monotone" dataKey="profit" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* User Engagement */}
          <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">User Engagement</h3>
              <Users className="h-5 w-5 text-green-400" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userEngagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="time" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip />
                <Line type="monotone" dataKey="active" stroke="#8B5CF6" strokeWidth={2} />
                <Line type="monotone" dataKey="new" stroke="#F59E0B" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Advanced Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Market Segments */}
          <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Market Segments</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={marketSegmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {marketSegmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Predictive Analytics */}
          <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-5 w-5 text-yellow-400" />
              <h3 className="text-lg font-semibold text-white">Predictive Forecast</h3>
            </div>
            <div className="space-y-4">
              {predictiveAnalytics.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{item.month}</p>
                    <p className="text-sm text-gray-400">${item.predicted.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-medium">{item.confidence}%</p>
                    <p className="text-xs text-gray-400">Confidence</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Insights */}
          <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">AI Insights</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
                <p className="text-blue-300 text-sm">{generateInsights()}</p>
              </div>
              
              {realTimeData.timestamp && (
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Live Users</span>
                    <span className="text-green-400 font-mono">{realTimeData.liveUsers?.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Current Revenue</span>
                    <span className="text-blue-400 font-mono">${realTimeData.currentRevenue?.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Active Transactions</span>
                    <span className="text-purple-400 font-mono">{realTimeData.activeTransactions}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Last updated: {realTimeData.timestamp}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessIntelligence;
