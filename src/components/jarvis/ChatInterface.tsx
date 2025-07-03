
import React, { useRef, useEffect } from "react";
import { MessageSquare, Mic, MicOff, Volume2, VolumeX, Zap } from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  messages: Message[];
  inputMessage: string;
  setInputMessage: (message: string) => void;
  isProcessing: boolean;
  isListening: boolean;
  isSpeaking: boolean;
  onSendMessage: () => void;
  onToggleListening: () => void;
  onToggleSpeaking: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  messages,
  inputMessage,
  setInputMessage,
  isProcessing,
  isListening,
  isSpeaking,
  onSendMessage,
  onToggleListening,
  onToggleSpeaking
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <MessageSquare className="h-5 w-5 text-purple-400" />
        <h2 className="text-xl font-semibold text-white">AI Conversation</h2>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto space-y-4 mb-4 p-4 bg-slate-900/50 rounded-lg">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
              message.type === 'user' 
                ? 'bg-purple-600 text-white' 
                : 'bg-slate-700 text-gray-100'
            }`}>
              <p className="text-sm">{message.content}</p>
              <span className="text-xs opacity-70">
                {message.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
        {isProcessing && (
          <div className="flex justify-start">
            <div className="bg-slate-700 text-gray-100 px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <span className="text-sm">AI is thinking...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onSendMessage()}
          placeholder="Ask Jarvis anything..."
          className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          disabled={isProcessing}
        />
        
        <button
          onClick={onToggleListening}
          className={`p-2 rounded-lg transition-colors ${
            isListening 
              ? 'bg-red-600 hover:bg-red-700' 
              : 'bg-slate-700 hover:bg-slate-600'
          }`}
        >
          {isListening ? <MicOff className="h-5 w-5 text-white" /> : <Mic className="h-5 w-5 text-white" />}
        </button>
        
        <button
          onClick={onToggleSpeaking}
          className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
        >
          {isSpeaking ? <VolumeX className="h-5 w-5 text-white" /> : <Volume2 className="h-5 w-5 text-white" />}
        </button>
        
        <button
          onClick={onSendMessage}
          disabled={isProcessing || !inputMessage.trim()}
          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Zap className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
