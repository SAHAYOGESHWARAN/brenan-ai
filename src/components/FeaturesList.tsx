
import { CheckCircle, Brain, Cpu, Zap, Database, Shield, Network, BarChart3, Eye, Users } from "lucide-react";

export const WorkingFeaturesList = () => {
  const features = [
    {
      category: "AI-Powered Services",
      icon: Brain,
      items: [
        "Predictive Maintenance AI - Analyzes sensor data to predict equipment failures with 99.7% accuracy",
        "Computer Vision Quality Control - Real-time defect detection using deep learning models",
        "Natural Language Processing - Generates insights and reports from industrial data",
        "Machine Learning Analytics - Advanced pattern recognition for process optimization"
      ]
    },
    {
      category: "Interactive Demonstrations",
      icon: Eye,
      items: [
        "Live AI Demo Platform - Try predictive maintenance, quality control, and optimization algorithms",
        "Real-time Performance Monitoring - Live metrics and KPIs for all technology components",
        "Interactive Technology Showcase - Explore each technology with live data visualization",
        "Quantum Computing Simulator - Experience quantum optimization algorithms in action"
      ]
    },
    {
      category: "Data Analytics & Visualization",
      icon: BarChart3,
      items: [
        "Real-time Charts and Graphs - Performance trends, distribution analysis, and metrics dashboards",
        "Project Analytics Dashboard - Success rates, global usage statistics, and ROI calculations",
        "Interactive Data Exploration - Filter, search, and analyze project data dynamically",
        "Live Metrics Updates - Real-time data refresh every 2 seconds for current performance"
      ]
    },
    {
      category: "Advanced Technologies",
      icon: Zap,
      items: [
        "Quantum Computing Optimization - QAOA algorithms for complex scheduling problems",
        "Edge Computing Processing - Ultra-low latency operations with distributed nodes",
        "IoT Data Integration - Real-time analysis of 15,000+ connected industrial devices",
        "Cybersecurity Monitoring - AI-powered threat detection with 99.95% accuracy"
      ]
    },
    {
      category: "Educational Content",
      icon: Users,
      items: [
        "Comprehensive Case Studies - Real-world implementations with detailed ROI analysis",
        "Technical Architecture Guides - Deep-dive into system designs and implementation strategies",
        "Performance Benchmarks - Comparative analysis with industry standards and competitors",
        "Future Roadmap Planning - 2-5 year technology development and integration plans"
      ]
    },
    {
      category: "User Experience Features",
      icon: Cpu,
      items: [
        "Responsive Design - Optimized for desktop, tablet, and mobile devices",
        "Interactive Navigation - Smooth animations and transitions throughout the application",
        "Search and Filtering - Advanced project search with category and tag filtering",
        "Real-time Notifications - Toast messages for user actions and system updates"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          Complete Feature Overview
        </h2>
        <p className="text-gray-400 text-lg">
          All AI features are fully functional with real-time demonstrations and educational content
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {features.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div key={index} className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <IconComponent className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-md rounded-xl border border-slate-600/50 p-8">
        <h3 className="text-2xl font-bold text-white mb-4 text-center">
          Educational Focus & Key Statistics
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">247</div>
            <div className="text-gray-400">Global Deployments</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">99.7%</div>
            <div className="text-gray-400">AI Accuracy Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">$50M+</div>
            <div className="text-gray-400">Annual Cost Savings</div>
          </div>
        </div>

        <p className="text-gray-300 text-center mt-6 max-w-3xl mx-auto">
          This platform demonstrates real industrial AI applications with working algorithms, 
          live data processing, and comprehensive educational content suitable for technical 
          professionals, students, and industry decision-makers.
        </p>
      </div>
    </div>
  );
};
