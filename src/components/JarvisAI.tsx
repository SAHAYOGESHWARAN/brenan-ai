
import React, { useState, useEffect } from "react";
import { Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AICapabilities from "./jarvis/AICapabilities";
import ChatInterface from "./jarvis/ChatInterface";

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface AICapability {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'processing' | 'idle';
}

const JarvisAI = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const aiCapabilities: AICapability[] = [
    { id: 'nlp', name: 'Natural Language Processing', description: 'Advanced text analysis and generation', status: 'active' },
    { id: 'cv', name: 'Computer Vision', description: 'Image and video analysis', status: 'active' },
    { id: 'ml', name: 'Machine Learning', description: 'Predictive analytics and pattern recognition', status: 'active' },
    { id: 'blockchain', name: 'Blockchain Analytics', description: 'Crypto trading and DeFi analysis', status: 'idle' },
    { id: 'medical', name: 'Medical AI', description: 'Health diagnostics and analysis', status: 'active' },
    { id: 'business', name: 'Business Intelligence', description: 'Data-driven insights and reporting', status: 'processing' }
  ];

  useEffect(() => {
    // Initialize Jarvis with a welcome message
    const welcomeMessage: Message = {
      id: 'welcome',
      type: 'ai',
      content: 'Hello! I\'m Jarvis, your AI-powered virtual assistant. I can help you with analytics, blockchain operations, medical diagnosis, business intelligence, and much more. How can I assist you today?',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, []);

  const simulateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate different AI capabilities based on message content
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('blockchain') || lowerMessage.includes('crypto')) {
      return `Based on current blockchain analytics, I've identified several trading opportunities. The market sentiment is currently bullish with a 78% confidence rate. Would you like me to execute any trades or provide detailed market analysis?`;
    }
    
    if (lowerMessage.includes('health') || lowerMessage.includes('medical')) {
      return `I've analyzed the medical data. Based on the symptoms and parameters provided, my medical AI suggests scheduling a consultation. The risk assessment shows moderate attention needed. Shall I prepare a detailed health report?`;
    }
    
    if (lowerMessage.includes('business') || lowerMessage.includes('analytics')) {
      return `Business intelligence analysis complete. Revenue is up 23% this quarter, with customer satisfaction at 94%. I've identified 3 key optimization opportunities that could increase efficiency by 15%. Would you like the detailed BI dashboard?`;
    }
    
    if (lowerMessage.includes('image') || lowerMessage.includes('vision')) {
      return `Computer vision analysis complete. I've processed the images and identified 12 objects with 97% accuracy. The quality control system flagged 2 items for review. Shall I generate the detailed vision report?`;
    }
    
    // Default intelligent response
    return `I understand you're asking about "${userMessage}". I'm processing this through my neural networks and can provide comprehensive analysis including predictive modeling, natural language generation, and real-time insights. What specific aspect would you like me to focus on?`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsProcessing(true);

    try {
      // Simulate AI processing delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const aiResponse = await simulateAIResponse(inputMessage);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      
      // Simulate text-to-speech
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(aiResponse);
        utterance.rate = 0.9;
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
        setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
      }
      
    } catch (error) {
      toast({
        title: "AI Processing Error",
        description: "There was an error processing your request.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
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
      // Implement speech recognition logic here
      setTimeout(() => setIsListening(false), 5000); // Auto-stop after 5 seconds
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
        />
      </div>
    </div>
  );
};

export default JarvisAI;
