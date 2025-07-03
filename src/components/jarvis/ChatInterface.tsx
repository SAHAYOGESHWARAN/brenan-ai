import React, { useRef, useEffect } from "react";
import { MessageSquare, Mic, MicOff, Volume2, VolumeX, Zap, User, Bot, Copy, Trash2, RefreshCw, XCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  error?: boolean;
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
  onClearChat?: () => void;
  onDeleteMessage?: (id: string) => void;
  onRetryMessage?: (id: string) => void;
  onRegenerateLastAI?: () => void;
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
  onToggleSpeaking,
  onClearChat,
  onDeleteMessage,
  onRetryMessage,
  onRegenerateLastAI
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Copy message content
  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <MessageSquare className="h-5 w-5 text-purple-400" />
        <h2 className="text-xl font-semibold text-white">AI Conversation</h2>
        {onClearChat && (
          <button
            onClick={onClearChat}
            className="ml-auto px-2 py-1 text-xs bg-slate-700 text-gray-200 rounded hover:bg-red-600 hover:text-white flex items-center gap-1"
            aria-label="Clear chat"
          >
            <XCircle className="w-4 h-4" /> Clear
          </button>
        )}
        {onRegenerateLastAI && (
          <button
            onClick={onRegenerateLastAI}
            className="ml-2 px-2 py-1 text-xs bg-purple-700/30 text-purple-200 rounded hover:bg-purple-700/60 flex items-center gap-1"
            aria-label="Regenerate last AI response"
          >
            <RefreshCw className="w-4 h-4 animate-spin-slow" /> Regenerate
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto space-y-4 mb-4 p-4 bg-slate-900/50 rounded-lg">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`relative max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow group transition-all duration-200 ${
              message.type === 'user' 
                ? 'bg-purple-600 text-white' 
                : message.error
                  ? 'bg-red-700 text-white'
                  : 'bg-slate-700 text-gray-100'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                {message.type === 'user' ? <User className="w-4 h-4 text-purple-200" /> : <Bot className="w-4 h-4 text-blue-300" />}
                <span className="text-xs opacity-70">{message.timestamp.toLocaleTimeString()}</span>
              </div>
              {message.type === 'ai' ? (
                <ReactMarkdown className="prose prose-invert text-sm">{message.content}</ReactMarkdown>
              ) : (
                <p className="text-sm">{message.content}</p>
              )}
              {/* Message actions */}
              <div className="absolute top-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleCopy(message.content)}
                  className="p-1 rounded hover:bg-slate-600"
                  aria-label="Copy message"
                >
                  <Copy className="w-3 h-3" />
                </button>
                {onDeleteMessage && (
                  <button
                    onClick={() => onDeleteMessage(message.id)}
                    className="p-1 rounded hover:bg-red-600"
                    aria-label="Delete message"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
                {message.type === 'ai' && onRetryMessage && (
                  <button
                    onClick={() => onRetryMessage(message.id)}
                    className="p-1 rounded hover:bg-purple-700"
                    aria-label="Retry message"
                  >
                    <RefreshCw className="w-3 h-3" />
                  </button>
                )}
              </div>
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
        {/* User typing indicator */}
        {inputMessage.trim() && (
          <div className="flex justify-end">
            <div className="bg-purple-600/70 text-white px-3 py-1 rounded-lg text-xs animate-pulse">User is typing...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex items-center space-x-2">
        <input
          ref={inputRef}
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSendMessage()}
          placeholder="Ask Jarvis anything..."
          className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          disabled={isProcessing}
          aria-label="Chat input"
        />
        <button
          onClick={onToggleListening}
          className={`p-2 rounded-lg transition-colors ${
            isListening 
              ? 'bg-red-600 hover:bg-red-700' 
              : 'bg-slate-700 hover:bg-slate-600'
          }`}
          aria-label={isListening ? "Stop listening" : "Start listening"}
        >
          {isListening ? <MicOff className="h-5 w-5 text-white" /> : <Mic className="h-5 w-5 text-white" />}
        </button>
        <button
          onClick={onToggleSpeaking}
          className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
          aria-label={isSpeaking ? "Mute AI" : "Unmute AI"}
        >
          {isSpeaking ? <VolumeX className="h-5 w-5 text-white" /> : <Volume2 className="h-5 w-5 text-white" />}
        </button>
        <button
          onClick={onSendMessage}
          disabled={isProcessing || !inputMessage.trim()}
          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Send message"
        >
          <Zap className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
