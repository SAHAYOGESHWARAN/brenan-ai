
import { Calendar, Clock, ArrowRight, Bot, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedProjects } from "@/data/projects";
import { iconMap } from "@/utils/iconMap";

export const FeaturedBlogs = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
          <Bot className="h-4 w-4 text-cyan-400" />
          <span className="text-sm text-cyan-400">Latest Insights</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured
          </span>{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Dive deep into the latest AI breakthroughs and industrial innovations that are shaping tomorrow's manufacturing landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => {
          // Use fallback icon if the mapped icon doesn't exist
          const IconComponent = iconMap[project.icon] || Zap;
          
          return (
            <Link
              key={project.id}
              to={`/blog/${project.id}`}
              className="group block"
            >
              <article className="h-full bg-slate-800/30 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="h-16 w-16 text-white/80" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(project.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{project.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <span className="text-sm text-gray-400">{project.author}</span>
                    <ArrowRight className="h-4 w-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </article>
            </Link>
          )
        })}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <Link
          to="/blog"
          className="group inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-cyan-500/20 hover:to-blue-500/20 px-8 py-4 rounded-lg font-semibold text-white border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <span>View All Projects</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
};
