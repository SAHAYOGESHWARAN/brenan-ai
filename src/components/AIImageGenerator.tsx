
import React, { useState } from 'react';
import { Image, Wand2, Download, Sparkles } from 'lucide-react';

const AIImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI image generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // For demo purposes, using a placeholder image
    setGeneratedImage(`https://picsum.photos/512/512?random=${Date.now()}`);
    setIsGenerating(false);
  };

  return (
    <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Sparkles className="h-5 w-5 text-purple-400" />
        <h3 className="text-lg font-semibold text-white">AI Image Generator</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Image Prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image you want to generate..."
            className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows={3}
          />
        </div>

        <button
          onClick={generateImage}
          disabled={isGenerating || !prompt.trim()}
          className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
        >
          {isGenerating ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Wand2 className="h-4 w-4" />
              <span>Generate Image</span>
            </>
          )}
        </button>

        {generatedImage && (
          <div className="space-y-3">
            <div className="relative">
              <img
                src={generatedImage}
                alt="Generated"
                className="w-full rounded-lg border border-slate-600"
              />
            </div>
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = generatedImage;
                link.download = 'ai-generated-image.jpg';
                link.click();
              }}
              className="w-full px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Download Image</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIImageGenerator;
