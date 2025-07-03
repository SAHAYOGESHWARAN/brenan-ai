
import { Github, Twitter, Linkedin, Mail, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "White Papers", href: "/whitepapers" },
    { name: "API Docs", href: "/docs" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Community", href: "/community" },
    { name: "Status", href: "/status" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/brennanai", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/brennanai", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/brennanai", label: "LinkedIn" },
  { icon: Mail, href: "mailto:support@brennanmachinery.ai", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Zap className="h-8 w-8 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-lg"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Brennan AI
              </span>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Pioneering the future of industrial AI with cutting-edge innovations that transform manufacturing, 
              optimize processes, and drive sustainable growth across global industries.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group"
                >
                  <social.icon className="h-4 w-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Brennan Machinery Inc. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link
              to="/terms"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </Link>
            <div className="text-gray-500 text-sm">
              Made with ❤️ by Brennan AI Team
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
