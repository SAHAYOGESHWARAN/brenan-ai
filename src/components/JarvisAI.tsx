import React, { useState, useEffect } from "react";
import { Bot, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AICapabilities from "./jarvis/AICapabilities";
import ChatInterface from "./jarvis/ChatInterface";

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  error?: boolean;
}

interface AICapability {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'processing' | 'idle';
  category?: string;
  details?: string;
  actions?: { label: string; href?: string; onClick?: () => void }[];
}

// Plugin system for extensibility
interface JarvisPlugin {
  id: string;
  name: string;
  description: string;
  run: (input: string) => Promise<string>;
}

const defaultPlugins: JarvisPlugin[] = [
  {
    id: 'summarizer',
    name: 'Text Summarizer',
    description: 'Summarizes long text using AI.',
    run: async (input) => `Summary: ${input.split(' ').slice(0, 10).join(' ')}...`,
  },
  {
    id: 'sentiment',
    name: 'Sentiment Analysis',
    description: 'Analyzes sentiment of the input.',
    run: async (input) => `Sentiment: ${input.includes('good') ? 'Positive' : 'Neutral/Negative'}`,
  },
];

const JarvisAI = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [plugins] = useState<JarvisPlugin[]>(defaultPlugins);
  const { toast } = useToast();

  const aiCapabilities: AICapability[] = [
    {
      id: 'nlp',
      name: 'Natural Language Processing',
      description: 'Advanced text analysis and generation',
      status: 'active',
      category: 'Language',
      details: 'Supports summarization, translation, and Q&A.',
      actions: [
        { label: 'Docs', href: 'https://openai.com/research' },
        { label: 'Demo', href: 'https://platform.openai.com/examples' },
      ],
    },
    {
      id: 'cv',
      name: 'Computer Vision',
      description: 'Image and video analysis',
      status: 'active',
      category: 'Vision',
      details: 'Detects objects, faces, and scenes in images.',
      actions: [
        { label: 'Docs', href: 'https://cloud.google.com/vision/docs' },
      ],
    },
    {
      id: 'ml',
      name: 'Machine Learning',
      description: 'Predictive analytics and pattern recognition',
      status: 'active',
      category: 'Analytics',
      details: 'Supports regression, classification, and clustering.',
    },
    {
      id: 'blockchain',
      name: 'Blockchain Analytics',
      description: 'Crypto trading and DeFi analysis',
      status: 'idle',
      category: 'Finance',
      details: 'Analyzes blockchain data for trends and anomalies.',
      actions: [
        { label: 'Market Dashboard', href: 'https://www.coingecko.com/' },
      ],
    },
    {
      id: 'medical',
      name: 'Medical AI',
      description: 'Health diagnostics and analysis',
      status: 'active',
      category: 'Healthcare',
      details: 'Assists with diagnosis, triage, and health reports.',
      actions: [
        { label: 'Docs', href: 'https://www.ibm.com/watson-health' },
      ],
    },
    {
      id: 'business',
      name: 'Business Intelligence',
      description: 'Data-driven insights and reporting',
      status: 'processing',
      category: 'Analytics',
      details: 'Provides dashboards, KPIs, and optimization suggestions.',
    },
  ];

  useEffect(() => {
    // Initialize Jarvis with a welcome message
    const welcomeMessage: Message = {
      id: 'welcome',
      type: 'ai',
      content: `Hello! I'm Jarvis, your AI-powered virtual assistant.\n\n**Capabilities:**\n- Analytics, blockchain, medical, business intelligence, and more.\n- Try: Summarize this text..., Analyze sentiment..., or Show me blockchain trends.\n\nHow can I assist you today?`,
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, []);

  const simulateAIResponse = async (userMessage: string): Promise<string> => {
    // Plugin system: run plugin if user asks for it
    if (userMessage.toLowerCase().startsWith('plugin:')) {
      const [_, pluginId, ...rest] = userMessage.split(':');
      const plugin = plugins.find(p => p.id === pluginId.trim());
      if (plugin) {
        return await plugin.run(rest.join(':').trim());
      }
      return `Plugin not found. Available: ${plugins.map(p => p.id).join(', ')}`;
    }
    // Simulate different AI capabilities based on message content
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('blockchain') || lowerMessage.includes('crypto')) {
      return `**Blockchain Analytics:**\nBased on current blockchain analytics, I've identified several trading opportunities. The market sentiment is currently **bullish** with a 78% confidence rate. Would you like me to execute any trades or provide detailed market analysis?`;
    }
    if (lowerMessage.includes('health') || lowerMessage.includes('medical')) {
      return `**Medical AI:**\nI've analyzed the medical data. Based on the symptoms and parameters provided, my medical AI suggests scheduling a consultation. The risk assessment shows moderate attention needed. Shall I prepare a detailed health report?`;
    }
    if (lowerMessage.includes('business') || lowerMessage.includes('analytics')) {
      return `**Business Intelligence:**\nBusiness intelligence analysis complete. Revenue is up 23% this quarter, with customer satisfaction at 94%. I've identified 3 key optimization opportunities that could increase efficiency by 15%. Would you like the detailed BI dashboard?`;
    }
    if (lowerMessage.includes('image') || lowerMessage.includes('vision')) {
      return `**Computer Vision:**\nAnalysis complete. I've processed the images and identified 12 objects with 97% accuracy. The quality control system flagged 2 items for review. Shall I generate the detailed vision report?`;
    }
    // Default intelligent response
    return `I understand you're asking about '${userMessage}'. I'm processing this through my neural networks and can provide comprehensive analysis including predictive modeling, natural language generation, and real-time insights. What specific aspect would you like me to focus on?`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsProcessing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      const aiResponse = await simulateAIResponse(inputMessage);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      // Simulate text-to-speech
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(aiResponse.replace(/\*\*/g, ''));
        utterance.rate = 0.9;
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
        setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
      }
    } catch (error) {
      setMessages(prev => [...prev, { id: Date.now() + '-err', type: 'ai', content: 'Error: AI failed to respond.', timestamp: new Date(), error: true }]);
      toast({
        title: "AI Processing Error",
        description: "There was an error processing your request.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // Advanced chat actions
  const handleClearChat = () => setMessages([]);
  const handleDeleteMessage = (id: string) => setMessages(prev => prev.filter(m => m.id !== id));
  const handleRetryMessage = async (id: string) => {
    const msg = messages.find(m => m.id === id);
    if (msg && msg.type === 'ai') {
      setIsProcessing(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const aiResponse = await simulateAIResponse(messages[messages.length - 2]?.content || '');
        setMessages(prev => prev.map(m => m.id === id ? { ...m, content: aiResponse, error: false } : m));
      } finally {
        setIsProcessing(false);
      }
    }
  };
  const handleRegenerateLastAI = async () => {
    const lastUser = [...messages].reverse().find(m => m.type === 'user');
    if (lastUser) {
      setIsProcessing(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const aiResponse = await simulateAIResponse(lastUser.content);
        setMessages(prev => [...prev, { id: Date.now() + '-regen', type: 'ai', content: aiResponse, timestamp: new Date() }]);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  // Download chat history as JSON
  const handleDownloadChat = () => {
    const blob = new Blob([JSON.stringify(messages, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'jarvis-chat-history.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      toast({
        title: "Speech Recognition Unavailable",
        description: "Your browser doesn't support speech recognition.",
        variant: "destructive",
      });
      return;
    }
    if (isListening) {
      setIsListening(false);
    } else {
      setIsListening(true);
      setTimeout(() => setIsListening(false), 5000);
    }
  };

  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse-glow">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                JARVIS AI Assistant
              </h1>
              <p className="text-gray-400">Advanced AI-Powered Virtual Assistant</p>
            </div>
          </div>
          {/* Download chat history & context memory */}
          <div className="flex justify-center gap-4 mt-2">
            <button
              onClick={handleDownloadChat}
              className="flex items-center gap-1 px-3 py-1 text-xs bg-slate-700 text-gray-200 rounded hover:bg-purple-700"
              aria-label="Download chat history"
            >
              <Download className="w-4 h-4" /> Download Chat
            </button>
            <span className="text-xs text-gray-400 bg-slate-800 px-2 py-1 rounded">Context: {messages.length} messages</span>
          </div>
        </div>
        {/* AI Capabilities Status */}
        <AICapabilities capabilities={aiCapabilities} />
        {/* Chat Interface */}
        <ChatInterface
          messages={messages}
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          isProcessing={isProcessing}
          isListening={isListening}
          isSpeaking={isSpeaking}
          onSendMessage={handleSendMessage}
          onToggleListening={toggleListening}
          onToggleSpeaking={toggleSpeaking}
          onClearChat={handleClearChat}
          onDeleteMessage={handleDeleteMessage}
          onRetryMessage={handleRetryMessage}
          onRegenerateLastAI={handleRegenerateLastAI}
        />
      </div>
    </div>
  );
};

export default JarvisAI;
