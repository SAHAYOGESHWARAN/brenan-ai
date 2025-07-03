
import React, { useState, useEffect } from "react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Bitcoin, TrendingUp, Activity, Shield, Zap, DollarSign, AlertTriangle, CheckCircle } from "lucide-react";

interface CryptoAsset {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume: number;
  marketCap: number;
  trend: 'up' | 'down' | 'stable';
}

interface TradingSignal {
  pair: string;
  signal: 'BUY' | 'SELL' | 'HOLD';
  confidence: number;
  reason: string;
  timestamp: Date;
}

const BlockchainAnalytics = () => {
  const [selectedAsset, setSelectedAsset] = useState('BTC');
  const [tradingMode, setTradingMode] = useState<'manual' | 'auto'>('manual');
  const [realTimeData, setRealTimeData] = useState<any>({});
  const [tradingSignals, setTradingSignals] = useState<TradingSignal[]>([]);

  const cryptoAssets: CryptoAsset[] = [
    { symbol: 'BTC', name: 'Bitcoin', price: 67450, change24h: 3.2, volume: 28500000000, marketCap: 1320000000000, trend: 'up' },
    { symbol: 'ETH', name: 'Ethereum', price: 3850, change24h: -1.5, volume: 15200000000, marketCap: 465000000000, trend: 'down' },
    { symbol: 'ADA', name: 'Cardano', price: 0.58, change24h: 5.7, volume: 890000000, marketCap: 20500000000, trend: 'up' },
    { symbol: 'SOL', name: 'Solana', price: 145.2, change24h: 2.1, volume: 2100000000, marketCap: 68500000000, trend: 'up' },
    { symbol: 'DOT', name: 'Polkadot', price: 7.85, change24h: -0.8, volume: 245000000, marketCap: 10200000000, trend: 'stable' }
  ];

  const priceHistoryData = [
    { time: '00:00', BTC: 65200, ETH: 3920, ADA: 0.54, SOL: 142.1 },
    { time: '04:00', BTC: 66100, ETH: 3885, ADA: 0.55, SOL: 143.8 },
    { time: '08:00', BTC: 66800, ETH: 3910, ADA: 0.57, SOL: 144.5 },
    { time: '12:00', BTC: 67200, ETH: 3875, ADA: 0.58, SOL: 145.0 },
    { time: '16:00', BTC: 67450, ETH: 3850, ADA: 0.58, SOL: 145.2 },
    { time: '20:00', BTC: 67350, ETH: 3840, ADA: 0.57, SOL: 144.8 }
  ];

  const volumeData = [
    { hour: '1h', volume: 1200000, transactions: 15670 },
    { hour: '2h', volume: 1150000, transactions: 14890 },
    { hour: '3h', volume: 1580000, transactions: 18320 },
    { hour: '4h', volume: 1420000, transactions: 16740 },
    { hour: '5h', volume: 1680000, transactions: 19250 },
    { hour: '6h', volume: 1750000, transactions: 20100 }
  ];

  const defiMetrics = [
    { protocol: 'Uniswap', tvl: 4200000000, volume24h: 1200000000, change: 5.2 },
    { protocol: 'Aave', tvl: 6800000000, volume24h: 890000000, change: 2.8 },
    { protocol: 'Compound', tvl: 3200000000, volume24h: 450000000, change: -1.2 },
    { protocol: 'MakerDAO', tvl: 8900000000, volume24h: 2100000000, change: 3.9 }
  ];

  useEffect(() => {
    // Simulate real-time crypto data updates
    const interval = setInterval(() => {
      const btcPrice = 67450 + (Math.random() - 0.5) * 1000;
      const ethPrice = 3850 + (Math.random() - 0.5) * 100;
      
      setRealTimeData({
        btcPrice: btcPrice.toFixed(2),
        ethPrice: ethPrice.toFixed(2),
        totalMarketCap: (2.1e12 + Math.random() * 1e11).toFixed(0),
        dominance: (42.5 + (Math.random() - 0.5) * 2).toFixed(1),
        fearGreedIndex: Math.floor(65 + Math.random() * 20),
        timestamp: new Date().toLocaleTimeString()
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Generate trading signals
    const generateSignals = () => {
      const signals: TradingSignal[] = [
        {
          pair: 'BTC/USDT',
          signal: 'BUY',
          confidence: 87,
          reason: 'RSI oversold, bullish divergence detected',
          timestamp: new Date()
        },
        {
          pair: 'ETH/USDT',
          signal: 'HOLD',
          confidence: 72,
          reason: 'Consolidation phase, await breakout',
          timestamp: new Date()
        },
        {
          pair: 'ADA/USDT',
          signal: 'BUY',
          confidence: 91,
          reason: 'Strong uptrend, volume surge',
          timestamp: new Date()
        }
      ];
      setTradingSignals(signals);
    };

    generateSignals();
    const interval = setInterval(generateSignals, 30000);
    return () => clearInterval(interval);
  }, []);

  const executeAutoTrade = (signal: TradingSignal) => {
    // Simulate automated trading execution
    console.log(`Executing ${signal.signal} order for ${signal.pair}`);
    // In a real implementation, this would connect to exchange APIs
  };

  const getSignalColor = (signal: string) => {
    switch (signal) {
      case 'BUY': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'SELL': return 'text-red-400 bg-red-400/10 border-red-400/30';
      default: return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900/20 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
              <Bitcoin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Blockchain Analytics
              </h1>
              <p className="text-gray-400">AI-Powered Crypto Trading & DeFi Analysis</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">Trading Mode:</span>
              <button
                onClick={() => setTradingMode(tradingMode === 'manual' ? 'auto' : 'manual')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  tradingMode === 'auto'
                    ? 'bg-green-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {tradingMode === 'auto' ? 'Auto Trading ON' : 'Manual Trading'}
              </button>
            </div>
          </div>
        </div>

        {/* Market Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {cryptoAssets.map((asset) => (
            <div
              key={asset.symbol}
              onClick={() => setSelectedAsset(asset.symbol)}
              className={`bg-slate-800/30 backdrop-blur-md rounded-lg border p-4 cursor-pointer transition-all duration-300 ${
                selectedAsset === asset.symbol
                  ? 'border-orange-500/50 bg-orange-500/10'
                  : 'border-slate-700/50 hover:border-slate-600/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white">{asset.symbol}</span>
                <TrendingUp className={`h-4 w-4 ${
                  asset.trend === 'up' ? 'text-green-400' : 
                  asset.trend === 'down' ? 'text-red-400 rotate-180' : 'text-gray-400'
                }`} />
              </div>
              <p className="text-lg font-semibold text-white">${asset.price.toLocaleString()}</p>
              <p className={`text-sm ${
                asset.change24h > 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {asset.change24h > 0 ? '+' : ''}{asset.change24h}%
              </p>
            </div>
          ))}
        </div>

        {/* Real-time Data */}
        {realTimeData.timestamp && (
          <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Real-time Market Data</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Live - {realTimeData.timestamp}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-400">${realTimeData.btcPrice}</p>
                <p className="text-sm text-gray-400">Bitcoin Price</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">${realTimeData.ethPrice}</p>
                <p className="text-sm text-gray-400">Ethereum Price</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">{realTimeData.dominance}%</p>
                <p className="text-sm text-gray-400">BTC Dominance</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-400">{realTimeData.fearGreedIndex}</p>
                <p className="text-sm text-gray-400">Fear & Greed Index</p>
              </div>
            </div>
          </div>
        )}

        {/* Charts and Trading Signals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Price Chart */}
          <div className="lg:col-span-2 bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Price Analysis - {selectedAsset}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={priceHistoryData}>
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
                <Line type="monotone" dataKey={selectedAsset} stroke="#F97316" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Trading Signals */}
          <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">AI Trading Signals</h3>
              <Activity className="h-5 w-5 text-orange-400" />
            </div>
            
            <div className="space-y-3">
              {tradingSignals.map((signal, index) => (
                <div key={index} className="p-3 bg-slate-900/50 rounded-lg border border-slate-700/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-white">{signal.pair}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium border ${getSignalColor(signal.signal)}`}>
                      {signal.signal}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{signal.reason}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Confidence: {signal.confidence}%</span>
                    {tradingMode === 'auto' && (
                      <button
                        onClick={() => executeAutoTrade(signal)}
                        className="px-2 py-1 bg-orange-600 hover:bg-orange-700 text-white text-xs rounded"
                      >
                        Execute
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DeFi Analytics */}
        <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Shield className="h-5 w-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">DeFi Protocol Analytics</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {defiMetrics.map((protocol, index) => (
              <div key={index} className="p-4 bg-slate-900/50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-white">{protocol.protocol}</h4>
                  <div className={`flex items-center space-x-1 ${
                    protocol.change > 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <TrendingUp className={`h-3 w-3 ${protocol.change < 0 ? 'rotate-180' : ''}`} />
                    <span className="text-xs">{Math.abs(protocol.change)}%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-gray-400">TVL</p>
                    <p className="text-lg font-semibold text-white">${(protocol.tvl / 1e9).toFixed(1)}B</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">24h Volume</p>
                    <p className="text-sm text-blue-400">${(protocol.volume24h / 1e6).toFixed(0)}M</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainAnalytics;
