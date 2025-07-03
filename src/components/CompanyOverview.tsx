
import { Target, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Target,
    number: "25+",
    label: "Years of Innovation",
    description: "Leading industrial AI transformation"
  },
  {
    icon: Users,
    number: "500+",
    label: "Global Clients",
    description: "Trusted by industry leaders worldwide"
  },
  {
    icon: Award,
    number: "50+",
    label: "AI Patents",
    description: "Breakthrough innovations in automation"
  },
  {
    icon: TrendingUp,
    number: "99%",
    label: "Client Satisfaction",
    description: "Delivering exceptional results consistently"
  }
];

export const CompanyOverview = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-500/30">
            <Target className="h-4 w-4 text-emerald-400" />
            <span className="text-sm text-emerald-400">About Brennan AI</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Pioneering the
            </span>{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              AI Revolution
            </span>
          </h2>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p className="text-lg">
              At Brennan Machinery Inc., we're not just building machines – we're crafting the intelligent systems that will power tomorrow's industries. Our mission is to seamlessly integrate cutting-edge AI technologies with traditional manufacturing processes.
            </p>
            
            <p>
              From predictive maintenance systems that prevent failures before they occur to autonomous quality control that ensures perfection at every step, our innovations are transforming how the world manufactures, processes, and produces.
            </p>
            
            <p>
              Join us as we explore the fascinating intersection of artificial intelligence and industrial engineering, where every breakthrough brings us closer to a more efficient, sustainable, and intelligent future.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 p-0.5 group-hover:scale-110 transition-transform duration-300">
                  <div className="flex items-center justify-center w-full h-full bg-slate-800 rounded-lg">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-white font-semibold text-sm">
                    {stat.label}
                  </div>
                  <div className="text-gray-400 text-xs mt-1">
                    {stat.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
