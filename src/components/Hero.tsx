
import { ArrowRight, Brain, Cpu, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <Brain className="h-8 w-8 text-cyan-400/30" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-2000">
          <Cpu className="h-12 w-12 text-blue-400/20" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce delay-3000">
          <Zap className="h-6 w-6 text-emerald-400/40" />
        </div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/30">
            <Zap className="h-4 w-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">AI-Powered Industrial Innovation</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
              The Future of
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
              Industrial AI
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge AI innovations, breakthrough case studies, and the latest advancements 
            in industrial machinery that are reshaping manufacturing worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/blog"
              className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg font-semibold text-white hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              to="/about"
              className="group inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
            >
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "500+", label: "AI Innovations" },
            { number: "50+", label: "Case Studies" },
            { number: "10M+", label: "Lives Impacted" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-md rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-3xl font-bold text-cyan-400">{stat.number}</div>
              <div className="text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
