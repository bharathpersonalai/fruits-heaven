import React, { useState } from 'react';
import { ICONS } from '../constants';
import { getJuiceRecommendation } from '../services/gemini';

interface AIChatProps {
  onRecommendation: (id: string) => void;
}

const AIChat: React.FC<AIChatProps> = ({ onRecommendation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);

    const result = await getJuiceRecommendation(query);
    setResponse(result.text);
    if (result.recommendedId) {
      onRecommendation(result.recommendedId);
    }
    setLoading(false);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-brand-400 to-brand-500 text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
      >
        <ICONS.Sparkles className="w-6 h-6 animate-pulse" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium">Ask AI Concierge</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
      <div className="bg-gradient-to-r from-brand-400 to-brand-500 p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <ICONS.Sparkles className="w-5 h-5" />
          <h3 className="font-serif font-bold">Juice Concierge</h3>
        </div>
        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
          <ICONS.X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 bg-stone-50 h-64 overflow-y-auto flex flex-col gap-3">
        <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-stone-600 self-start max-w-[90%]">
          Hi! Tell me how you're feeling or what health goals you have today. I'll pick the perfect juice for you! 🍹
        </div>
        
        {response && (
           <div className="bg-brand-50 border border-brand-100 p-3 rounded-2xl rounded-tl-none text-sm text-stone-800 self-start max-w-[90%] animate-in fade-in">
             {response}
           </div>
        )}
        
        {loading && (
          <div className="self-start bg-white p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
             <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
             <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
             <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-stone-100 flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. I need energy..."
          className="flex-1 bg-stone-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-400 focus:outline-none"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="bg-stone-900 text-white p-2 rounded-xl hover:bg-stone-800 transition-colors disabled:opacity-50"
        >
          <ICONS.Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default AIChat;