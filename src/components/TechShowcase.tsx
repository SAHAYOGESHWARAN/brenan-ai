
import { Brain, Cpu, Database, Zap, Shield, Globe } from "lucide-react";

const technologies = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Advanced ML algorithms for predictive analytics and process optimization",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Real-time processing at the source for ultra-low latency operations",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Database,
    title: "Big Data Analytics",
    description: "Massive data processing for actionable industrial insights",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "IoT Integration",
    description: "Seamless connectivity across all industrial equipment and sensors",
    gradient: "from-pink-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise-grade security for critical industrial systems",
    gradient: "from-emerald-500 to-cyan-500"
  },
  {
    icon: Globe,
    title: "Digital Twins",
    description: "Virtual replicas for simulation and optimization",
    gradient: "from-cyan-500 to-blue-500"
  }
];

export const TechShowcase = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-full border border-purple-500/30 mb-6">
          <Cpu className="h-4 w-4 text-purple-400" />
          <span className="text-sm text-purple-400">Core Technologies</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Powered by
          </span>{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Innovation
          </span>
        </h2>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Our cutting-edge technology stack drives the next generation of industrial automation and AI-powered solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="group relative bg-slate-800/30 backdrop-blur-md rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
            {/* Icon */}
            <div className="relative mb-6">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${tech.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                <div className="flex items-center justify-center w-full h-full bg-slate-800 rounded-xl">
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative space-y-4">
              <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                {tech.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {tech.description}
              </p>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-purple-500/20 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};
