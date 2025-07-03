
import { Github, Linkedin, Twitter, Mail, Brain, Cpu, Database, Zap } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const teamMembers = [
  {
    name: "Saha Yogeshwaran",
    role: "Chief Innovation Officer & Full Stack Developer",
    bio: "Leading AI innovation and full-stack development with over 10 years of experience in industrial automation and machine learning.",
    image: "/placeholder.svg",
    skills: ["AI/ML", "Full Stack Development", "Industrial IoT", "Cloud Architecture"],
    social: {
      github: "https://github.com/sahayogeshwaran",
      linkedin: "https://linkedin.com/in/sahayogeshwaran",
      twitter: "https://twitter.com/sahayogeshwaran",
      email: "saha@brennanmachinery.ai"
    },
    gradient: "from-cyan-500 to-blue-500",
    icon: Brain
  },
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Lead",
    bio: "PhD in Machine Learning from MIT, specializing in predictive maintenance algorithms and industrial AI applications.",
    image: "/placeholder.svg",
    skills: ["Machine Learning", "Predictive Analytics", "Research", "Algorithm Design"],
    social: {
      github: "https://github.com/sarahchen",
      linkedin: "https://linkedin.com/in/dr-sarah-chen",
      email: "sarah.chen@brennanmachinery.ai"
    },
    gradient: "from-blue-500 to-purple-500",
    icon: Cpu
  },
  {
    name: "Michael Rodriguez",
    role: "Senior Automation Engineer",
    bio: "Expert in Industry 4.0 technologies with 15+ years experience in smart manufacturing and process optimization.",
    image: "/placeholder.svg",
    skills: ["Automation", "Industry 4.0", "Process Optimization", "System Integration"],
    social: {
      github: "https://github.com/mrodriguez",
      linkedin: "https://linkedin.com/in/michael-rodriguez",
      email: "michael@brennanmachinery.ai"
    },
    gradient: "from-purple-500 to-emerald-500",
    icon: Database
  },
  {
    name: "Dr. Raj Patel",
    role: "Quantum Computing Specialist",
    bio: "Leading our quantum-enhanced AI initiatives, with expertise in quantum algorithms and their industrial applications.",
    image: "/placeholder.svg",
    skills: ["Quantum Computing", "Quantum Algorithms", "Advanced Analytics", "Research"],
    social: {
      github: "https://github.com/rajpatel",
      linkedin: "https://linkedin.com/in/dr-raj-patel",
      email: "raj.patel@brennanmachinery.ai"
    },
    gradient: "from-emerald-500 to-cyan-500",
    icon: Zap
  },
  {
    name: "Lisa Park",
    role: "Computer Vision Engineer",
    bio: "Specializing in neural networks for quality control and defect detection systems in manufacturing environments.",
    image: "/placeholder.svg",
    skills: ["Computer Vision", "Neural Networks", "Quality Control", "Deep Learning"],
    social: {
      github: "https://github.com/lisapark",
      linkedin: "https://linkedin.com/in/lisa-park",
      email: "lisa.park@brennanmachinery.ai"
    },
    gradient: "from-cyan-500 to-blue-500",
    icon: Brain
  },
  {
    name: "James Wilson",
    role: "Edge Computing Architect",
    bio: "Designing edge computing solutions for real-time industrial data processing and decision making.",
    image: "/placeholder.svg",
    skills: ["Edge Computing", "Real-time Systems", "IoT Architecture", "Distributed Systems"],
    social: {
      github: "https://github.com/jameswilson",
      linkedin: "https://linkedin.com/in/james-wilson",
      email: "james.wilson@brennanmachinery.ai"
    },
    gradient: "from-blue-500 to-purple-500",
    icon: Cpu
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-full border border-purple-500/30 mb-6">
            <Brain className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-400">Meet Our Team</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The Minds Behind
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Meet the brilliant engineers, researchers, and innovators who are transforming industries 
            through cutting-edge AI technologies and industrial automation solutions.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Profile Image */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <member.icon className="h-24 w-24 text-white/80" />
                </div>
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${member.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                      <member.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.role}
                  </p>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {member.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs px-2 py-1 bg-slate-700/50 text-gray-300 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-slate-700/50 text-gray-400 rounded-md">
                      +{member.skills.length - 3} more
                    </span>
                  )}
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <div className="flex space-x-3">
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-700/30 hover:bg-purple-500/20 rounded-lg transition-all duration-300 group/social"
                      >
                        <Github className="h-4 w-4 text-gray-400 group-hover/social:text-purple-400 transition-colors duration-300" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-700/30 hover:bg-purple-500/20 rounded-lg transition-all duration-300 group/social"
                      >
                        <Linkedin className="h-4 w-4 text-gray-400 group-hover/social:text-purple-400 transition-colors duration-300" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-700/30 hover:bg-purple-500/20 rounded-lg transition-all duration-300 group/social"
                      >
                        <Twitter className="h-4 w-4 text-gray-400 group-hover/social:text-purple-400 transition-colors duration-300" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-2 bg-slate-700/30 hover:bg-purple-500/20 rounded-lg transition-all duration-300 group/social"
                      >
                        <Mail className="h-4 w-4 text-gray-400 group-hover/social:text-purple-400 transition-colors duration-300" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-slate-700/50 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 mb-6">
            <div className="flex items-center justify-center w-full h-full bg-slate-800 rounded-full">
              <Zap className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Join Our
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mission
            </span>
          </h3>
          
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for brilliant minds to join our team. If you're passionate about AI, 
            industrial innovation, and transforming the future of manufacturing, we'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@brennanmachinery.ai"
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span>View Open Positions</span>
              <Mail className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a
              href="/contact"
              className="group inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold text-purple-400 border border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
