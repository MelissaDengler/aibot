import React, { useState, useMemo } from 'react';
import { chatbots } from './data/chatbots';
import ChatInterface from './components/ChatInterface';
import { Language, ChatBot } from './types';
import { Scale, Stethoscope, UserRound, Calculator, Briefcase, GraduationCap, Hammer, ChefHat, Plane, Search } from 'lucide-react';
import Toast from './components/Toast';

const iconMap = {
  Scale,
  Stethoscope,
  UserRound,
  Calculator,
  Briefcase,
  GraduationCap,
  Hammer,
  ChefHat,
  Plane
};

function App() {
  const [selectedBot, setSelectedBot] = useState<ChatBot>(chatbots[0]);
  const [language, setLanguage] = useState<Language>('en');
  const [searchTerm, setSearchTerm] = useState('');
  const [isChangingBot, setIsChangingBot] = useState(false);
  const [toasts, setToasts] = useState<Array<{ id: number; message: string; type: 'success' | 'error' }>>([]);

  const IconComponent = iconMap[selectedBot.icon as keyof typeof iconMap];

  const filteredBots = useMemo(() => {
    return chatbots.filter(bot => 
      bot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bot.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bot.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bot.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const categories = useMemo(() => {
    return Array.from(new Set(chatbots.map(bot => bot.category)));
  }, []);

  const handleBotSelect = (bot: ChatBot) => {
    setIsChangingBot(true);
    setSelectedBot(bot);
    setTimeout(() => setIsChangingBot(false), 300);
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gradient-to-br from-charcoal-900 via-black to-charcoal-800">
      {/* Language Selection - Now at top right */}
      <div className="fixed top-4 right-4 z-10">
        <div className="flex space-x-2 bg-charcoal-800/50 backdrop-blur-sm rounded-lg p-1 shadow-elegant">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
              language === 'en'
                ? 'bg-silver-500 text-charcoal-900'
                : 'text-silver-400 hover:text-silver-300'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('af')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
              language === 'af'
                ? 'bg-silver-500 text-charcoal-900'
                : 'text-silver-400 hover:text-silver-300'
            }`}
          >
            Afrikaans
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-[280px] flex flex-col bg-charcoal-800/50 backdrop-blur-sm border-r border-charcoal-700/30">
        {/* New Chat Button */}
        <div className="p-4">
          <button 
            onClick={() => setMessages([])}
            className="w-full bg-gradient-to-r from-silver-500 to-silver-600 text-charcoal-900 rounded-xl p-3 font-medium shadow-button hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Search size={18} />
            {language === 'en' ? 'New Chat' : 'Nuwe Gesprek'}
          </button>
        </div>

        {/* Bot Selection */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder={language === 'en' ? 'Search bots...' : 'Soek bots...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-charcoal-700/50 text-white rounded-xl px-4 py-3 pl-11 focus:outline-none focus:ring-2 focus:ring-silver-500/30 transition-all duration-300 shadow-inner-elegant placeholder-gray-400"
            />
            <Search className="absolute left-3 top-3.5 text-silver-500" size={18} />
          </div>

          {categories.map(category => (
            <div key={category}>
              <h3 className="text-sm font-medium text-silver-400 mb-2 px-2">
                {category}
              </h3>
              <div className="space-y-1">
                {filteredBots
                  .filter(bot => bot.category === category)
                  .map((bot) => (
                    <button
                      key={bot.id}
                      onClick={() => handleBotSelect(bot)}
                      className={`w-full text-left p-3 rounded-lg flex items-center space-x-3 transition-all duration-300 ${
                        selectedBot.id === bot.id
                          ? 'bg-charcoal-700/70 text-white'
                          : 'hover:bg-charcoal-700/30 text-gray-300'
                      }`}
                    >
                      {React.createElement(iconMap[bot.icon as keyof typeof iconMap], {
                        size: 18,
                        className: selectedBot.id === bot.id ? 'text-silver-400' : 'text-silver-600'
                      })}
                      <span className="text-sm">{bot.name}</span>
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-screen">
        <div className={`transition-opacity duration-300 ${isChangingBot ? 'opacity-50' : 'opacity-100'}`}>
          {/* Bot Info Header */}
          <div className="bg-charcoal-800/50 backdrop-blur-sm border-b border-charcoal-700/30 p-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gradient-to-br from-silver-400 to-silver-600 rounded-lg shadow-elegant 
                            transform transition-transform duration-300 hover:scale-105">
                <IconComponent size={20} className="text-charcoal-900" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-silver-300">{selectedBot.name}</h2>
                <p className="text-sm text-gray-400">{selectedBot.description}</p>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="flex-1 overflow-hidden">
            <ChatInterface selectedBot={selectedBot} language={language} />
          </div>
        </div>
      </div>

      {/* Toasts */}
      <div className="fixed bottom-4 right-4 space-y-2">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
          />
        ))}
      </div>
    </div>
  );
}

export default App;