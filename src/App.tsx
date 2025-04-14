import React, { useState, useMemo } from 'react';
import { chatbots } from './data/chatbots';
import ChatInterface from './components/ChatInterface';
import { Language, ChatBot, ChatMessage } from './types';
import { 
  Scale, Stethoscope, UserRound, Calculator, Briefcase, GraduationCap, Hammer, ChefHat, Plane,
  Search, ArrowLeft, MessageSquare, MessageSquarePlus, Settings2,
  Calendar, Clock, Star, Trash2, Download, Share2, Moon, Sun, Volume2, VolumeX 
} from 'lucide-react';
import Toast from './components/Toast';
import LandingPage from './components/LandingPage';
import { iconMap } from './constants/icons';
import { getTranslation } from './constants/translations';
import { TranslationProvider } from './contexts/TranslationContext';
import Sidebar from './components/Sidebar';

function App() {
  const [selectedBot, setSelectedBot] = useState<ChatBot>(chatbots[0]);
  const [language, setLanguage] = useState<Language>('en');
  const [searchTerm, setSearchTerm] = useState('');
  const [isChangingBot, setIsChangingBot] = useState(false);
  const [toasts, setToasts] = useState<Array<{ id: number; message: string; type: 'success' | 'error' }>>([]);
  const [showLanding, setShowLanding] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  
  // New state variables
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [pinnedMessages, setPinnedMessages] = useState<ChatMessage[]>([]);
  const [showArchived, setShowArchived] = useState(false);

  const IconComponent = iconMap[selectedBot.icon as keyof typeof iconMap];

  const filteredBots = useMemo(() => {
    if (!searchTerm) return chatbots;
    
    return chatbots.filter(bot => {
      const searchLower = searchTerm.toLowerCase();
      
      const matchesName = bot.name && (
        bot.name.en?.toLowerCase().includes(searchLower) || 
        bot.name.af?.toLowerCase().includes(searchLower)
      );
      
      const matchesDescription = bot.description && (
        bot.description.en?.toLowerCase().includes(searchLower) || 
        bot.description.af?.toLowerCase().includes(searchLower)
      );
      
      const matchesIndustry = bot.industry?.toLowerCase().includes(searchLower);
      const matchesCategory = bot.category?.toLowerCase().includes(searchLower);
      
      return matchesName || matchesDescription || matchesIndustry || matchesCategory;
    });
  }, [searchTerm]);

  const categories = useMemo(() => {
    return Array.from(new Set(chatbots.map(bot => bot.category)));
  }, []);

  const handleBotSelect = (bot: ChatBot) => {
    setIsChangingBot(true);
    setSelectedBot(bot);
    setShowLanding(false);
    setTimeout(() => setIsChangingBot(false), 300);
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  };

  return (
    <TranslationProvider>
      {showLanding ? (
        <LandingPage 
          onBotSelect={handleBotSelect}
          language={language}
          setLanguage={setLanguage}
          chatbots={chatbots}
        />
      ) : (
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

          {/* Back to Landing Button */}
          <div className="fixed top-4 left-4 z-10">
            <button
              onClick={() => setShowLanding(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-charcoal-800/50 backdrop-blur-sm 
                       text-silver-400 hover:text-silver-300 transition-all duration-300 shadow-elegant"
            >
              <ArrowLeft size={16} />
              {getTranslation('Back to Hub', language)}
            </button>
          </div>

          {/* Sidebar */}
          <Sidebar
            selectedBot={selectedBot}
            language={language}
            messages={messages}
            isDarkMode={isDarkMode}
            isMuted={isMuted}
            onThemeToggle={() => setIsDarkMode(!isDarkMode)}
            onMuteToggle={() => setIsMuted(!isMuted)}
            onLanguageChange={setLanguage}
            onClearChat={() => setMessages([])}
            onBackToHub={() => setShowLanding(true)}
          />

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
                    <h2 className="text-lg font-semibold text-silver-300">
                      {selectedBot.name?.[language] || ''}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {selectedBot.description?.[language] || ''}
                    </p>
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
      )}
    </TranslationProvider>
  );
}

export default App;