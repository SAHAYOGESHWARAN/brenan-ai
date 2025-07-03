
import { Target, Users, Award, TrendingUp, Zap, Brain, Cpu, Globe } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const stats = [
  {
    icon: Target,
    number: "25+",
    label: "Years of Innovation",
    description: "Leading industrial AI transformation since 1999"
  },
  {
    icon: Users,
    number: "500+",
    label: "Global Clients",
    description: "Trusted by Fortune 500 companies worldwide"
  },
  {
    icon: Award,
    number: "50+",
    label: "AI Patents",
    description: "Breakthrough innovations in automation technology"
  },
  {
    icon: TrendingUp,
    number: "99.2%",
    label: "Client Satisfaction",
    description: "Delivering exceptional results consistently"
  }
];

const values = [
  {
    icon: Brain,
    title: "Innovation First",
    description: "We push the boundaries of what's possible with AI and industrial automation, constantly seeking breakthrough solutions.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Users,
    title: "Human-Centered AI",
    description: "Our AI solutions augment human capabilities rather than replace them, creating better working environments.",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We're committed to creating solutions that benefit industries worldwide and drive sustainable growth.",
    gradient: "from-purple-500 to-emerald-500"
  },
  {
    icon: Cpu,
    title: "Technical Excellence",
    description: "We maintain the highest standards in engineering, ensuring our solutions are robust, scalable, and reliable.",
    gradient: "from-emerald-500 to-cyan-500"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-500/30 mb-6">
            <Target className="h-4 w-4 text-emerald-400" />
            <span className="text-sm text-emerald-400">About Brennan AI</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Pioneering the
            </span>{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              AI Revolution
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            For over two decades, Brennan Machinery Inc. has been at the forefront of industrial innovation, 
            transforming how the world manufactures, processes, and produces through cutting-edge AI technologies.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:transform hover:scale-105 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 p-0.5 mb-4">
                <div className="flex items-center justify-center w-full h-full bg-slate-800 rounded-lg">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                {stat.number}
              </div>
              <div className="text-white font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Mission
              </span>
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                We believe that the future of manufacturing lies at the intersection of human expertise and artificial intelligence. 
                Our mission is to create intelligent systems that enhance human capabilities, optimize industrial processes, 
                and drive sustainable growth across global industries.
              </p>
              
              <p>
                Every day, we work to bridge the gap between cutting-edge AI research and practical industrial applications. 
                Our solutions don't just automate processes—they transform entire industries, creating new possibilities 
                for efficiency, safety, and innovation.
              </p>
              
              <p>
                From predictive maintenance systems that prevent failures before they occur to autonomous quality control 
                that ensures perfection at every step, we're building the intelligent infrastructure that will power 
                tomorrow's industries.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Vision 2030</h3>
                    <p className="text-gray-400">Shaping the next decade of industrial AI</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  "By 2030, we envision a world where every industrial process is intelligently optimized, 
                  where predictive insights prevent failures before they occur, and where human creativity 
                  is amplified by AI to solve humanity's greatest challenges."
                </p>
                
                <div className="text-sm text-emerald-400 font-semibold">
                  — Saha Yogeshwaran, Chief Innovation Officer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Core
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The principles that guide our innovation and drive our commitment to transforming industries through AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-md rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="flex items-center justify-center w-full h-full bg-slate-800 rounded-xl">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {value.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Journey
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From industrial automation pioneers to AI innovation leaders.
          </p>
        </div>

        <div className="space-y-8">
          {[
            {
              year: "1999",
              title: "Foundation",
              description: "Brennan Machinery Inc. founded with a vision to revolutionize industrial automation."
            },
            {
              year: "2005",
              title: "First Patents",
              description: "Breakthrough innovations in predictive maintenance and smart manufacturing systems."
            },
            {
              year: "2012",
              title: "AI Integration",
              description: "Pioneered the integration of machine learning algorithms into industrial processes."
            },
            {
              year: "2018",
              title: "Global Expansion",
              description: "Established AI research centers in India, USA, and Europe."
            },
            {
              year: "2024",
              title: "AI Revolution",
              description: "Leading the next generation of industrial AI with quantum-enhanced systems."
            }
          ].map((milestone, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"></div>
                {index < 4 && <div className="w-0.5 h-16 bg-gradient-to-b from-emerald-500/50 to-transparent"></div>}
              </div>
              
              <div className="flex-1 pb-8">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-2xl font-bold text-emerald-400">{milestone.year}</span>
                  <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                </div>
                <p className="text-gray-400">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
