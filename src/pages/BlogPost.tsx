import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Heart, BookOpen, Bot, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { getProjectById } from "@/data/projects";
import { iconMap } from "@/utils/iconMap";

export default function BlogPost() {
  const { id } = useParams();
  const { toast } = useToast();
  const project = getProjectById(id || "");

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project?.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "The project URL has been copied to your clipboard.",
      });
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <Navigation />
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg font-semibold text-white hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />
      
      <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Projects</span>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} text-white`}>
              {project.category}
            </span>
            {project.tags.map((tag, index) => (
              <span key={index} className="text-sm px-3 py-1 bg-slate-800/50 text-gray-300 rounded-full border border-slate-700">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {project.title}
            </span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{project.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(project.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{project.readTime}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-cyan-500/50 rounded-lg transition-all duration-300"
              >
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
              
              <button className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-red-500/50 rounded-lg transition-all duration-300">
                <Heart className="h-4 w-4" />
                <span>Like</span>
              </button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="space-y-6 text-gray-300 leading-relaxed">
            {project.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-3xl font-bold text-white mt-12 mb-6">
                    {paragraph.replace('# ', '')}
                  </h1>
                );
              } else if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-white mt-8 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              } else if (paragraph.startsWith('#### ')) {
                return (
                  <h4 key={index} className="text-lg font-bold text-cyan-300 mt-6 mb-2">
                    {paragraph.replace('#### ', '')}
                  </h4>
                );
              } else if (paragraph.startsWith('- **')) {
                const items = paragraph.split('\n').filter(item => item.startsWith('- **'));
                return (
                  <ul key={index} className="space-y-2 ml-4">
                    {items.map((item, itemIndex) => {
                      const text = item.replace('- **', '').replace('**', '');
                      const [bold, normal] = text.split('**: ');
                      return (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          <span>
                            <strong className="text-cyan-400">{bold}</strong>
                            {normal && <span>: {normal}</span>}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                );
              } else if (paragraph.includes('```')) {
                const codeContent = paragraph.replace(/```\w*\n?/g, '').replace(/```/g, '');
                return (
                  <pre key={index} className="bg-slate-800/50 p-4 rounded-lg overflow-x-auto border border-slate-700">
                    <code className="text-green-400 text-sm">{codeContent}</code>
                  </pre>
                );
              } else if (paragraph.includes('*') && paragraph.length < 200) {
                return (
                  <p key={index} className="text-gray-400 italic bg-slate-800/30 p-4 rounded-lg border-l-4 border-cyan-500">
                    {paragraph.replace(/\*/g, '')}
                  </p>
                );
              } else {
                return (
                  <p key={index} className="text-gray-300 leading-relaxed">
                    {paragraph || '\u00A0'}
                  </p>
                );
              }
            })}
          </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">{project.author}</div>
                <div className="text-gray-400 text-sm">
                  AI Engineering Team at Brennan Machinery Inc.
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Found this helpful?</span>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-lg font-semibold text-white transition-all duration-300">
                <Heart className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </footer>
      </article>

      {/* Related Articles */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Continue Reading
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Related projects based on similar category */}
          {[2, 3, 4].map((relatedId) => {
            const relatedProject = getProjectById(relatedId.toString());
            if (!relatedProject || relatedProject.id === project.id) return null;
            
            return (
              <Link
                key={relatedId}
                to={`/blog/${relatedId}`}
                className="group block bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {relatedProject.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {relatedProject.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-3 w-3" />
                      <span>{relatedProject.readTime}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
