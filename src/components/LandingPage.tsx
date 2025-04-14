import React, { useState, useMemo, useCallback } from 'react';
import { ChatBot, Language } from '../types';
import { iconMap } from '../constants/icons';
import { Search, X } from 'lucide-react';
import { getTranslation } from '../constants/translations';
import { useTranslation } from '../contexts/TranslationContext';
import { motion } from 'framer-motion';
import TechParticles from './TechParticles';

interface LandingPageProps {
  onBotSelect: (bot: ChatBot) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  chatbots: ChatBot[];
}

// Add a type for searchable fields
type SearchableField = keyof Pick<ChatBot, 'name' | 'description' | 'industry' | 'category'>;

// Add a helper function for text highlighting
const Highlight = ({ text, highlight }: { text: string; highlight: string }) => {
  if (!highlight.trim()) return <>{text}</>;
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);
  
  return (
    <>
      {parts.map((part, i) => 
        regex.test(part) ? (
          <span key={i} className="bg-silver-500/20 text-silver-300">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

// Add these animation constants at the top
const cardSpringTransition = {
  type: "spring",
  stiffness: 400,
  damping: 30
} as const;

const particleVariants = {
  animate: {
    y: [-20, -40, -20],
    opacity: [0.3, 0.8, 0.3],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
} as const;

export default function LandingPage({ onBotSelect, language, setLanguage, chatbots }: LandingPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { t } = useTranslation();

  const categories = useMemo(() => {
    return Array.from(new Set(chatbots.map(bot => bot.category)));
  }, [chatbots]);

  // Memoized search function
  const searchInField = useCallback((field: any, searchTerm: string): boolean => {
    const searchLower = searchTerm.toLowerCase();
    if (typeof field === 'object' && ('en' in field) && ('af' in field)) {
      return field.en.toLowerCase().includes(searchLower) || 
             field.af.toLowerCase().includes(searchLower);
    }
    return String(field).toLowerCase().includes(searchLower);
  }, []);

  // Improved filtered bots with debounced search
  const filteredBots = useMemo(() => {
    if (!searchTerm && !selectedCategory) return chatbots;

    return chatbots.filter(bot => {
      const searchLower = searchTerm.toLowerCase();
      
      const matchesSearch = !searchTerm || (
        (typeof bot.name === 'object' ? 
          (bot.name.en.toLowerCase().includes(searchLower) || 
           bot.name.af.toLowerCase().includes(searchLower)) :
          bot.name.toLowerCase().includes(searchLower)) ||
        (typeof bot.description === 'object' ?
          (bot.description.en.toLowerCase().includes(searchLower) || 
           bot.description.af.toLowerCase().includes(searchLower)) :
          bot.description.toLowerCase().includes(searchLower)) ||
        bot.industry.toLowerCase().includes(searchLower) ||
        bot.category.toLowerCase().includes(searchLower)
      );

      const matchesCategory = !selectedCategory || bot.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, chatbots]);

  // Add translations for categories
  const categoryTranslations = {
    'Professional Services': {
      en: 'Professional Services',
      af: 'Professionele Dienste'
    },
    'Healthcare': {
      en: 'Healthcare',
      af: 'Gesondheidsorg'
    },
    'Business Services': {
      en: 'Business Services',
      af: 'Besigheidsdienste'
    },
    'Education': {
      en: 'Education',
      af: 'Onderwys'
    },
    'Industry & Construction': {
      en: 'Industry & Construction',
      af: 'Industrie & Konstruksie'
    },
    'Hospitality & Tourism': {
      en: 'Hospitality & Tourism',
      af: 'Gasvryheid & Toerisme'
    },
    'Technology': {
      en: 'Technology',
      af: 'Tegnologie'
    },
    'Creative Services': {
      en: 'Creative Services',
      af: 'Kreatiewe Dienste'
    },
    'Operations': {
      en: 'Operations',
      af: 'Bedrywighede'
    },
    'Financial Services': {
      en: 'Financial Services',
      af: 'Finansiële Dienste'
    },
    'Primary Industries': {
      en: 'Primary Industries',
      af: 'Primêre Industrieë'
    },
    'Social Services': {
      en: 'Social Services',
      af: 'Maatskaplike Dienste'
    },
    'Property & Development': {
      en: 'Property & Development',
      af: 'Eiendom & Ontwikkeling'
    },
    'Sustainability': {
      en: 'Sustainability',
      af: 'Volhoubaarheid'
    },
    'Academic & Research': {
      en: 'Academic & Research',
      af: 'Akademies & Navorsing'
    }
  };

  // Update the bot card render to include highlighting
  const renderBotCard = (bot: ChatBot) => {
    const Icon = iconMap[bot.icon as keyof typeof iconMap];
    
    // Safely access translated content
    const name = typeof bot.name === 'object' ? bot.name[language] : String(bot.name);
    const description = typeof bot.description === 'object' ? 
      bot.description[language] : String(bot.description);

    return (
      <motion.button
        key={bot.id}
        onClick={() => onBotSelect(bot)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          scale: 1.02,
          transition: cardSpringTransition
        }}
        whileTap={{ scale: 0.98 }}
        className="relative w-full p-6 rounded-xl bg-gradient-to-br from-charcoal-800/50 to-charcoal-900/30 
                  backdrop-blur-sm border border-charcoal-700/30 hover:border-silver-500/20 
                  transition-all duration-300 group overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-silver-400/5 to-silver-600/5" />
          <div className="absolute -inset-1 bg-gradient-to-br from-silver-400/10 to-silver-600/10 blur-xl" />
        </div>

        {/* Floating particles */}
        <motion.div
          variants={particleVariants}
          animate="animate"
          className="absolute -top-2 left-1/4 w-1 h-1 rounded-full bg-silver-400/30"
        />
        <motion.div
          variants={particleVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
          className="absolute -top-2 left-2/4 w-1 h-1 rounded-full bg-silver-400/30"
        />
        <motion.div
          variants={particleVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute -top-2 left-3/4 w-1 h-1 rounded-full bg-silver-400/30"
        />

        {/* Gradient hover line */}
        <motion.div
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r 
                    from-transparent via-silver-400/50 to-transparent"
        />

        <div className="relative flex items-start gap-4">
          <div className="p-3 rounded-lg bg-gradient-to-br from-charcoal-700/50 to-charcoal-800/30 
                        group-hover:from-charcoal-700/70 group-hover:to-charcoal-800/50 
                        transition-all duration-300">
            <Icon className="w-6 h-6 text-silver-400 group-hover:text-silver-300 
                          transition-colors duration-300" />
          </div>
          <div className="flex-1 text-left min-w-0">
            <h3 className="text-lg font-semibold text-silver-300 group-hover:text-white 
                        transition-colors duration-300">
              <Highlight text={name} highlight={searchTerm} />
            </h3>
            <p className="text-sm text-silver-500 group-hover:text-silver-400 
                        transition-colors duration-300 mt-1 line-clamp-2">
              <Highlight text={description} highlight={searchTerm} />
            </p>
          </div>
        </div>
      </motion.button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-900 via-black to-charcoal-800 p-6 relative overflow-hidden">
      {/* Add TechParticles behind everything */}
      <TechParticles />
      
      {/* Add a subtle overlay to ensure content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/50 to-transparent pointer-events-none" />

      {/* Existing content with relative positioning */}
      <div className="relative">
        {/* Language Selection */}
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

        <div className="max-w-7xl mx-auto">
          {/* Update title section with enhanced animations */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-silver-300 mb-4 relative">
              <span className="relative z-10">{t('AI Assistant Hub')}</span>
              {/* Add glow effect behind text */}
              <div className="absolute inset-0 bg-silver-500/10 blur-xl -z-10" />
            </h1>
            <p className="text-xl text-silver-400 max-w-3xl mx-auto">
              {t('Choose your specialized AI assistant for professional guidance and support.')}
            </p>
          </motion.div>

          {/* Update search bar with glass effect */}
          <div className="max-w-2xl mx-auto mb-12 relative z-10">
            <div className="relative backdrop-blur-sm">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('Search AI assistants...')}
                className="w-full bg-charcoal-700/30 text-white rounded-xl px-4 py-3 pl-11 
                         focus:outline-none focus:ring-2 focus:ring-silver-500/30 
                         transition-all duration-300 shadow-inner-elegant 
                         placeholder-gray-400 backdrop-blur-sm"
              />
              <Search className="absolute left-3 top-3.5 text-silver-500" size={18} />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
                        ${!selectedCategory 
                          ? 'bg-silver-500 text-charcoal-900' 
                          : 'bg-charcoal-700/50 text-silver-400 hover:text-silver-300'}`}
            >
              {t('All')}
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
                          ${selectedCategory === category 
                            ? 'bg-silver-500 text-charcoal-900' 
                            : 'bg-charcoal-700/50 text-silver-400 hover:text-silver-300'}`}
              >
                {t(category)}
              </button>
            ))}
          </div>

          {/* Updated Bot Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBots.length > 0 ? (
              filteredBots.map(renderBotCard)
            ) : (
              <div className="col-span-full text-center text-silver-400 py-8">
                {t('No AI assistants found matching your search.')}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 