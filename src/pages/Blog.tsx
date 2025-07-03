
import { useState } from "react";
import { Search, Filter, Calendar, Clock, ArrowRight, Bot, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectAnalytics } from "@/components/ProjectAnalytics";
import { projects, getProjectsByCategory, searchProjects } from "@/data/projects";
import { iconMap } from "@/utils/iconMap";

const categories = ["All", "AI Innovation", "Automation", "Quantum Tech", "Edge Computing", "Big Data"];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAnalytics, setShowAnalytics] = useState(false);

  let filteredProjects = projects;
  
  if (searchTerm) {
    filteredProjects = searchProjects(searchTerm);
  }
  
  if (selectedCategory !== "All") {
    filteredProjects = filteredProjects.filter(project => project.category === selectedCategory);
  }

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
            <Bot className="h-4 w-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">AI Innovation Hub</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Industrial AI
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore cutting-edge AI innovations, breakthrough case studies, and the latest advancements 
            in industrial machinery that are reshaping manufacturing worldwide.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects, technologies, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <button
            onClick={() => setShowAnalytics(!showAnalytics)}
            className={`flex items-center space-x-2 px-4 py-3 rounded-lg border transition-all duration-300 ${
              showAnalytics 
                ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' 
                : 'bg-slate-800/50 border-slate-600 text-gray-400 hover:border-cyan-500/50'
            }`}
          >
            <BarChart3 className="h-5 w-5" />
            <span>Analytics</span>
          </button>
        </div>

        {/* Analytics Dashboard */}
        {showAnalytics && (
          <div className="mb-12">
            <ProjectAnalytics />
          </div>
        )}
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-cyan-400">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <BlogCard key={project.id} project={project} featured />
            ))}
          </div>
        </section>
      )}

      {/* Regular Projects */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {regularProjects.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-8 text-white">Latest Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularProjects.map((project) => (
                <BlogCard key={project.id} project={project} featured={false} />
              ))}
            </div>
          </>
        )}
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <Bot className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No projects found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

function BlogCard({ project, featured }: { project: any; featured: boolean }) {
  const IconComponent = iconMap[project.icon as keyof typeof iconMap];
  
  return (
    <Link to={`/blog/${project.id}`} className="group block">
      <article className={`h-full bg-slate-800/30 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${featured ? 'ring-1 ring-cyan-500/20' : ''}`}>
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
          {featured && (
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500 text-white">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag: string, index: number) => (
              <span key={index} className="text-xs px-2 py-1 bg-slate-700/50 text-gray-300 rounded-md">
                {tag}
              </span>
            ))}
          </div>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-slate-700/50">
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
            <ArrowRight className="h-4 w-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
          </div>

          <div className="text-sm text-gray-400">
            By {project.author}
          </div>
        </div>
      </article>
    </Link>
  );
}
