import React, { useState } from "react";
import { Activity, Zap, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

interface AICapabilityAction {
  label: string;
  onClick?: () => void; // Make onClick optional for link-only actions
  href?: string;
}

interface AICapability {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'processing' | 'idle';
  category?: string;
  details?: string;
  actions?: AICapabilityAction[];
}

interface AICapabilitiesProps {
  capabilities: AICapability[];
}

const AICapabilities: React.FC<AICapabilitiesProps> = ({ capabilities }) => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/10';
      case 'processing': return 'text-yellow-400 bg-yellow-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Activity className="h-3 w-3" />;
      case 'processing': return <div className="w-3 h-3 border border-yellow-400 border-t-transparent rounded-full animate-spin" />;
      default: return <Zap className="h-3 w-3" />;
    }
  };

  // Get unique categories
  const categories = Array.from(new Set(capabilities.map(c => c.category).filter(Boolean)));

  // Filter capabilities
  const filtered = capabilities.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !categoryFilter || c.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Search and filter bar */}
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Search capabilities..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-3 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-purple-500 w-full md:w-1/2"
        />
        {categories.length > 0 && (
          <select
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
            className="px-3 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-purple-500 w-full md:w-1/4"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {filtered.map((capability) => (
          <div key={capability.id} className="bg-slate-800/50 backdrop-blur-md rounded-lg border border-slate-700/50 p-4 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-white font-semibold flex items-center gap-2">
                  {capability.name}
                  {capability.category && (
                    <span className="ml-2 text-xs px-2 py-0.5 rounded bg-purple-700/30 text-purple-300">{capability.category}</span>
                  )}
                </h3>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs flex items-center space-x-1 ${getStatusColor(capability.status)}`}>
                {getStatusIcon(capability.status)}
                <span>{capability.status}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-2">{capability.description}</p>
            <div className="flex items-center justify-between">
              {capability.details && (
                <button
                  className="text-xs text-purple-400 hover:underline flex items-center gap-1"
                  onClick={() => setExpanded(expanded === capability.id ? null : capability.id)}
                  aria-expanded={expanded === capability.id}
                >
                  {expanded === capability.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  Details
                </button>
              )}
              {capability.actions && capability.actions.length > 0 && (
                <div className="flex gap-2">
                  {capability.actions.map((action, idx) =>
                    action.href ? (
                      <a
                        key={idx}
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-2 py-1 rounded bg-purple-700/30 text-purple-200 hover:bg-purple-700/60 flex items-center gap-1"
                      >
                        {action.label} <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <button
                        key={idx}
                        onClick={action.onClick}
                        className="text-xs px-2 py-1 rounded bg-purple-700/30 text-purple-200 hover:bg-purple-700/60"
                      >
                        {action.label}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
            {expanded === capability.id && capability.details && (
              <div className="mt-3 p-2 rounded bg-slate-900/70 text-gray-300 text-xs border border-slate-700 animate-fade-in">
                {capability.details}
              </div>
            )}
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="text-center text-gray-400">No capabilities found.</div>
      )}
    </div>
  );
};

export default AICapabilities;
