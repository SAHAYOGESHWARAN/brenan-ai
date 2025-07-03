
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest AI insights and innovations.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-slate-700/50 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 mb-6">
          <div className="flex items-center justify-center w-full h-full bg-slate-800 rounded-full">
            <Mail className="h-8 w-8 text-white" />
          </div>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Stay Ahead of the
          </span>{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            AI Curve
          </span>
        </h3>
        
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Get exclusive insights into the latest AI breakthroughs, industrial innovations, and emerging technologies 
          delivered directly to your inbox every week.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            required
          />
          <button
            type="submit"
            className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <span>Subscribe</span>
            <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-4">
          Join 10,000+ industry professionals. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};
