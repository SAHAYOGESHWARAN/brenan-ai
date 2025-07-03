
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Globe, Zap } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "support@brennanmachinery.ai",
    description: "Get in touch for inquiries and support",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Available Monday - Friday, 9AM - 6PM EST",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Global AI Headquarters",
    description: "India • USA • Europe",
    gradient: "from-purple-500 to-emerald-500"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    details: "Round-the-clock assistance",
    description: "Critical system support available anytime",
    gradient: "from-emerald-500 to-cyan-500"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    category: "general"
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      category: "general"
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
            <Mail className="h-4 w-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Get in Touch</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Build the
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Future Together
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your industrial processes with cutting-edge AI? 
            Our team of experts is here to help you explore the possibilities and create innovative solutions.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 text-center"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="flex items-center justify-center w-full h-full bg-slate-800 rounded-lg">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {info.title}
              </h3>
              <p className="text-cyan-400 font-medium mb-1">
                {info.details}
              </p>
              <p className="text-gray-400 text-sm">
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-slate-700/50">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Send us a Message
              </span>
            </h2>
            <p className="text-gray-400">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="support">Technical Support</option>
                  <option value="demo">Request Demo</option>
                  <option value="careers">Careers</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell us more about your project, requirements, or questions..."
              />
            </div>

            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <span>Send Message</span>
              <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              We typically respond within 24 hours. For urgent matters, please call us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/30 backdrop-blur-md rounded-xl p-8 border border-slate-700/50">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 mb-6">
              <div className="flex items-center justify-center w-full h-full bg-slate-800 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">Quick Response</h3>
            <p className="text-gray-400 leading-relaxed">
              Our dedicated team ensures rapid response times for all inquiries. 
              Most questions receive a detailed response within 24 hours.
            </p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-md rounded-xl p-8 border border-slate-700/50">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-0.5 mb-6">
              <div className="flex items-center justify-center w-full h-full bg-slate-800 rounded-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">Global Reach</h3>
            <p className="text-gray-400 leading-relaxed">
              With offices across India, USA, and Europe, we provide local support 
              with global expertise for all your industrial AI needs.
            </p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-md rounded-xl p-8 border border-slate-700/50">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-emerald-500 p-0.5 mb-6">
              <div className="flex items-center justify-center w-full h-full bg-slate-800 rounded-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">Expert Consultation</h3>
            <p className="text-gray-400 leading-relaxed">
              Connect directly with our AI specialists and industry experts for 
              personalized consultation on your specific requirements.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
