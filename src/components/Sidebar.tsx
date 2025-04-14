import React, { useState } from 'react';
import { 
  MessageSquarePlus, UserRound, ArrowLeft, MessageSquare, 
  Settings2, Moon, Sun, Volume2, VolumeX, Star, Download, 
  Share2, Trash2, Search, Bell, BellOff, Clock, Calendar, Filter, 
  SlidersHorizontal, ChevronDown, ChevronUp 
} from 'lucide-react';
import { ChatBot, ChatMessage, Language } from '../types';
import { getTranslation } from '../constants/translations';
import { AnimatePresence, motion } from 'framer-motion';

interface SidebarProps {
  selectedBot: ChatBot;
  language: Language;
  messages: ChatMessage[];
  isDarkMode: boolean;
  isMuted: boolean;
  onThemeToggle: () => void;
  onMuteToggle: () => void;
  onLanguageChange: (lang: Language) => void;
  onClearChat: () => void;
  onBackToHub: () => void;
}

// Move these animation constants outside the component
const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 30
} as const;

const hoverSpring = {
  type: "spring",
  stiffness: 500,
  damping: 25
} as const;

const cardVariants = {
  initial: { 
    scale: 1, 
    boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
    background: "linear-gradient(135deg, rgba(45, 45, 45, 0.5), rgba(35, 35, 35, 0.3))"
  },
  hover: { 
    scale: 1.02,
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    background: "linear-gradient(135deg, rgba(55, 55, 55, 0.5), rgba(45, 45, 45, 0.3))",
    transition: hoverSpring
  },
  tap: { 
    scale: 0.98,
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.1 }
  }
} as const;

const buttonVariants = {
  initial: { scale: 1, opacity: 1 },
  hover: { 
    scale: 1.05,
    opacity: 0.9,
    transition: hoverSpring
  },
  tap: { 
    scale: 0.95,
    opacity: 0.8,
    transition: { duration: 0.1 }
  }
} as const;

const slideIn = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 }
} as const;

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
} as const;

const expandCollapse = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1 }
} as const;

export default function Sidebar({
  selectedBot,
  language,
  messages,
  isDarkMode,
  isMuted,
  onThemeToggle,
  onMuteToggle,
  onLanguageChange,
  onClearChat,
  onBackToHub
}: SidebarProps) {
  const [searchHistory, setSearchHistory] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [searchFilters, setSearchFilters] = useState({
    dateRange: 'all' as 'all' | 'today' | 'week' | 'month',
    onlyStarred: false,
  });
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [autoScroll, setAutoScroll] = useState(true);
  const [messageGrouping, setMessageGrouping] = useState<'time' | 'topic'>('time');
  const [chatBubbleStyle, setChatBubbleStyle] = useState<'modern' | 'classic'>('modern');
  const [timestampFormat, setTimestampFormat] = useState<'12h' | '24h'>('12h');
  const [enterToSend, setEnterToSend] = useState(true);

  const filteredMessages = messages
    .filter(msg => msg.role === 'user')
    .filter(msg => 
      searchHistory ? msg.content.toLowerCase().includes(searchHistory.toLowerCase()) : true
    );

  return (
    <div className="w-[320px] flex flex-col bg-charcoal-800/50 backdrop-blur-sm border-r border-charcoal-700/30">
      {/* Header with Back Button */}
      <div className="p-6 border-b border-charcoal-700/30">
        <button
          onClick={onBackToHub}
          className="flex items-center gap-3 px-4 py-3 rounded-lg 
                    bg-charcoal-700/30 hover:bg-charcoal-700/50 text-silver-400 
                    hover:text-silver-300 transition-all duration-300 w-full"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium flex-1 text-left">
            {getTranslation('Back to Hub', language)}
          </span>
        </button>
      </div>

      {/* Profile Section - Increased padding and spacing */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={slideIn}
        transition={{ duration: 0.3 }}
        className="p-6 border-b border-charcoal-700/30"
      >
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-silver-400 to-silver-600 
                        flex items-center justify-center shadow-elegant">
            <UserRound size={28} className="text-charcoal-900" />
          </div>
          <div className="flex-1">
            <h3 className="text-silver-300 font-medium mb-1">
              {getTranslation('Guest User', language)}
            </h3>
            <p className="text-sm text-silver-500">
              {selectedBot.name[language]}
            </p>
          </div>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-3 rounded-lg bg-charcoal-700/30 hover:bg-charcoal-700/50 
                     text-silver-400 hover:text-silver-300 transition-all duration-300"
          >
            <Settings2 size={20} />
          </button>
        </div>
      </motion.div>

      {/* Settings Panel - Increased spacing between items */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={expandCollapse}
            transition={{ duration: 0.3 }}
            className="px-6 py-4 space-y-4"
          >
            <div className="p-4 rounded-lg bg-charcoal-700/30 space-y-4">
              {/* Settings buttons with increased padding */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-silver-400">
                  {getTranslation('Theme', language)}
                </span>
                <motion.button
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  onClick={onThemeToggle}
                  className="p-3 rounded-lg hover:bg-charcoal-600/50 
                           text-silver-400 hover:text-silver-300"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-silver-400">
                  {getTranslation('Sound', language)}
                </span>
                <motion.button
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  onClick={onMuteToggle}
                  className="p-3 rounded-lg hover:bg-charcoal-600/50 
                           text-silver-400 hover:text-silver-300"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </motion.button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-silver-400">
                  {getTranslation('Notifications', language)}
                </span>
                <motion.button
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  onClick={() => setNotifications(!notifications)}
                  className="p-3 rounded-lg hover:bg-charcoal-600/50 
                           text-silver-400 hover:text-silver-300"
                >
                  {notifications ? <Bell size={20} /> : <BellOff size={20} />}
                </motion.button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-silver-400">
                  {getTranslation('Language', language)}
                </span>
                <LanguageToggle
                  language={language}
                  onLanguageChange={onLanguageChange}
                />
              </div>
            </div>

            {/* Advanced Settings Toggle */}
            <motion.button
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
              className="w-full flex items-center justify-between p-4 rounded-lg 
                        bg-charcoal-700/30 hover:bg-charcoal-700/50 text-silver-400 
                        hover:text-silver-300 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={16} />
                <span className="text-sm">
                  {getTranslation('Advanced Settings', language)}
                </span>
              </div>
              {showAdvancedSettings ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </motion.button>

            {/* Advanced Settings Panel */}
            {showAdvancedSettings && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="p-3 rounded-lg bg-charcoal-700/30 space-y-4"
              >
                {/* Chat History Retention */}
                <div className="space-y-2">
                  <label className="text-sm text-silver-400">
                    {getTranslation('Chat History Retention', language)}
                  </label>
                  <select
                    className="w-full bg-charcoal-600/50 text-silver-300 rounded-lg px-3 py-2 
                             text-sm focus:outline-none focus:ring-1 focus:ring-silver-500/30"
                  >
                    <option value="7">{getTranslation('7 days', language)}</option>
                    <option value="30">{getTranslation('30 days', language)}</option>
                    <option value="90">{getTranslation('90 days', language)}</option>
                    <option value="all">{getTranslation('All time', language)}</option>
                  </select>
                </div>

                {/* Font Size */}
                <div className="space-y-2">
                  <label className="text-sm text-silver-400">
                    {getTranslation('Font Size', language)}
                  </label>
                  <div className="flex gap-2">
                    {(['sm', 'md', 'lg'] as const).map((size) => (
                      <motion.button
                        key={size}
                        whileHover="hover"
                        whileTap="tap"
                        variants={buttonVariants}
                        onClick={() => setFontSize(size)}
                        className={`flex-1 py-2 rounded-lg text-sm transition-all duration-300 ${
                          fontSize === size
                            ? 'bg-silver-500 text-charcoal-900'
                            : 'bg-charcoal-600/50 text-silver-400 hover:text-silver-300'
                        }`}
                      >
                        {getTranslation(size.toUpperCase(), language)}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Message Grouping */}
                <div className="space-y-2">
                  <label className="text-sm text-silver-400">
                    {getTranslation('Message Grouping', language)}
                  </label>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonVariants}
                      onClick={() => setMessageGrouping('time')}
                      className={`flex-1 py-2 rounded-lg text-sm transition-all duration-300 ${
                        messageGrouping === 'time'
                          ? 'bg-silver-500 text-charcoal-900'
                          : 'bg-charcoal-600/50 text-silver-400 hover:text-silver-300'
                      }`}
                    >
                      {getTranslation('By Time', language)}
                    </motion.button>
                    <motion.button
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonVariants}
                      onClick={() => setMessageGrouping('topic')}
                      className={`flex-1 py-2 rounded-lg text-sm transition-all duration-300 ${
                        messageGrouping === 'topic'
                          ? 'bg-silver-500 text-charcoal-900'
                          : 'bg-charcoal-600/50 text-silver-400 hover:text-silver-300'
                      }`}
                    >
                      {getTranslation('By Topic', language)}
                    </motion.button>
                  </div>
                </div>

                {/* Auto-scroll Toggle */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-silver-400">
                    {getTranslation('Auto-scroll to Bottom', language)}
                  </span>
                  <motion.button
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                    onClick={() => setAutoScroll(!autoScroll)}
                    className={`w-12 h-6 rounded-full transition-all duration-300 ${
                      autoScroll ? 'bg-silver-500' : 'bg-charcoal-600/50'
                    }`}
                  >
                    <motion.div
                      animate={{ x: autoScroll ? 24 : 2 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="w-5 h-5 bg-white rounded-full shadow-md"
                    />
                  </motion.button>
                </div>

                {/* Chat Style */}
                <div className="space-y-2">
                  <label className="text-sm text-silver-400">
                    {getTranslation('Chat Style', language)}
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setChatBubbleStyle('modern')}
                      className={`flex-1 py-2 rounded-lg text-sm transition-all duration-300 ${
                        chatBubbleStyle === 'modern'
                          ? 'bg-silver-500 text-charcoal-900'
                          : 'bg-charcoal-600/50 text-silver-400 hover:text-silver-300'
                      }`}
                    >
                      {getTranslation('Modern', language)}
                    </button>
                    <button
                      onClick={() => setChatBubbleStyle('classic')}
                      className={`flex-1 py-2 rounded-lg text-sm transition-all duration-300 ${
                        chatBubbleStyle === 'classic'
                          ? 'bg-silver-500 text-charcoal-900'
                          : 'bg-charcoal-600/50 text-silver-400 hover:text-silver-300'
                      }`}
                    >
                      {getTranslation('Classic', language)}
                    </button>
                  </div>
                </div>

                {/* Time Format */}
                <div className="space-y-2">
                  <label className="text-sm text-silver-400">
                    {getTranslation('Time Format', language)}
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setTimestampFormat('12h')}
                      className={`flex-1 py-2 rounded-lg text-sm transition-all duration-300 ${
                        timestampFormat === '12h'
                          ? 'bg-silver-500 text-charcoal-900'
                          : 'bg-charcoal-600/50 text-silver-400 hover:text-silver-300'
                      }`}
                    >
                      12h
                    </button>
                    <button
                      onClick={() => setTimestampFormat('24h')}
                      className={`flex-1 py-2 rounded-lg text-sm transition-all duration-300 ${
                        timestampFormat === '24h'
                          ? 'bg-silver-500 text-charcoal-900'
                          : 'bg-charcoal-600/50 text-silver-400 hover:text-silver-300'
                      }`}
                    >
                      24h
                    </button>
                  </div>
                </div>

                {/* Enter to Send */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-silver-400">
                    {getTranslation('Enter to Send', language)}
                  </span>
                  <button
                    onClick={() => setEnterToSend(!enterToSend)}
                    className={`w-12 h-6 rounded-full transition-all duration-300 ${
                      enterToSend ? 'bg-silver-500' : 'bg-charcoal-600/50'
                    }`}
                  >
                    <motion.div
                      animate={{ x: enterToSend ? 24 : 2 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="w-5 h-5 bg-white rounded-full shadow-md"
                    />
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* New Chat Button - Increased padding */}
      <div className="p-6 border-b border-charcoal-700/30">
        <button 
          onClick={onClearChat}
          className="w-full bg-gradient-to-r from-silver-500 to-silver-600 text-charcoal-900 
                    rounded-xl p-4 font-medium shadow-button hover:shadow-glow 
                    transition-all duration-300 flex items-center justify-center gap-3"
        >
          <MessageSquarePlus size={20} />
          {getTranslation('New Chat', language)}
        </button>
      </div>

      {/* Chat History Section - Improved spacing */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-silver-400">
              {getTranslation('Chat History', language)}
            </h3>
            <div className="flex items-center gap-3">
              <button
                onClick={onClearChat}
                className="p-2 rounded-lg hover:bg-charcoal-700/30 text-silver-500 
                         hover:text-silver-400 transition-all duration-300"
                title={getTranslation('Clear History', language)}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          {/* Search Bar - Increased spacing */}
          <div className="mb-6 space-y-4">
            <div className="relative group">
              <input
                type="text"
                value={searchHistory}
                onChange={(e) => setSearchHistory(e.target.value)}
                placeholder={getTranslation('Search messages...', language)}
                className="w-full bg-gradient-to-br from-charcoal-700/50 to-charcoal-700/30 
                          text-silver-300 rounded-lg px-5 py-3 pl-11
                          placeholder-silver-600 text-sm focus:outline-none 
                          border border-charcoal-600/20 focus:border-silver-500/20
                          transition-all duration-300 group-hover:border-silver-500/10"
              />
              <Search className="absolute left-4 top-3.5 text-silver-500 
                                group-hover:text-silver-400 transition-all duration-300" 
                        size={16} />
            </div>

            {/* Search Filters */}
            <AnimatePresence>
              {searchHistory && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex gap-2"
                >
                  <select
                    value={searchFilters.dateRange}
                    onChange={(e) => setSearchFilters(prev => ({ 
                      ...prev, 
                      dateRange: e.target.value as typeof searchFilters.dateRange 
                    }))}
                    className="flex-1 bg-charcoal-700/30 text-silver-300 rounded-lg px-3 py-1.5 
                             text-sm focus:outline-none focus:ring-1 focus:ring-silver-500/30"
                  >
                    <option value="all">{getTranslation('All time', language)}</option>
                    <option value="today">{getTranslation('Today', language)}</option>
                    <option value="week">{getTranslation('This week', language)}</option>
                    <option value="month">{getTranslation('This month', language)}</option>
                  </select>
                  <button
                    onClick={() => setSearchFilters(prev => ({ ...prev, onlyStarred: !prev.onlyStarred }))}
                    className={`p-1.5 rounded-lg transition-all duration-300 ${
                      searchFilters.onlyStarred
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-charcoal-700/30 text-silver-500 hover:text-silver-400'
                    }`}
                    title={getTranslation('Show starred only', language)}
                  >
                    <Star size={16} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-3">
            {filteredMessages.length > 0 ? (
              filteredMessages
                .slice(-5)
                .reverse()
                .map((msg, index) => (
                  <ChatHistoryItem
                    key={index}
                    message={msg}
                    language={language}
                  />
                ))
            ) : (
              <EmptyHistory language={language} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
const ChatHistoryItem = ({ message, language }: { message: ChatMessage; language: Language }) => (
  <motion.div
    variants={cardVariants}
    initial="initial"
    whileHover="hover"
    whileTap="tap"
    className="p-4 rounded-lg backdrop-blur-sm border border-charcoal-600/20 
              hover:border-silver-500/20 group cursor-pointer relative
              overflow-hidden"
    style={{
      backgroundImage: "linear-gradient(135deg, rgba(45, 45, 45, 0.5), rgba(35, 35, 35, 0.3))"
    }}
  >
    {/* Add subtle animated gradient overlay */}
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      whileHover={{ opacity: 0.1, x: "100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="absolute inset-0 bg-gradient-to-r from-transparent via-silver-400/10 to-transparent"
    />

    <div className="relative flex items-start gap-3">
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
        className="p-2 rounded-lg bg-charcoal-600/30 group-hover:bg-charcoal-600/50
                  transition-all duration-300"
      >
        <MessageSquare size={16} className="text-silver-500 group-hover:text-silver-300" />
      </motion.div>

      {/* Content section with enhanced animations */}
      <div className="flex-1 min-w-0">
        <motion.p
          initial={{ y: 0 }}
          whileHover={{ y: -2 }}
          transition={springTransition}
          className="text-sm text-silver-300 truncate group-hover:text-white
                    transition-all duration-300"
        >
          {message.content}
        </motion.p>
        <div className="flex items-center gap-2 mt-2">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-xs text-silver-500 group-hover:text-silver-400
                     transition-all duration-300"
          >
            {new Date(message.timestamp).toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </motion.span>
          <div className="h-1 w-1 rounded-full bg-silver-700 group-hover:bg-silver-600" />
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-xs text-silver-500 group-hover:text-silver-400
                     transition-all duration-300"
          >
            {message.context?.topic || 'General'}
          </motion.span>
        </div>
      </div>

      {/* Action buttons with enhanced animations */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={springTransition}
        className="flex gap-2"
      >
        <ActionButton icon={Star} title="Pin" color="yellow" />
        <ActionButton icon={Download} title="Download" color="blue" />
        <ActionButton icon={Share2} title="Share" color="green" />
      </motion.div>
    </div>
  </motion.div>
);

const EmptyHistory = ({ language }: { language: Language }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={springTransition}
    className="text-center py-12 px-6"
  >
    <motion.div
      animate={{ 
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0],
        y: [0, -5, 0]
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className="mb-4 relative"
    >
      {/* Add floating particles effect */}
      <motion.div
        animate={{
          opacity: [0, 0.5, 0],
          scale: [0.8, 1.2, 0.8],
          y: [-20, -40, -20]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute -top-2 left-1/2 w-2 h-2 rounded-full bg-silver-500/20"
      />
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-charcoal-600/50 to-charcoal-700/30 
                    border border-charcoal-600/20 mx-auto flex items-center justify-center
                    relative overflow-hidden group"
      >
        <motion.div
          animate={{
            background: [
              "linear-gradient(0deg, rgba(75,75,75,0.1) 0%, rgba(35,35,35,0.1) 100%)",
              "linear-gradient(180deg, rgba(75,75,75,0.1) 0%, rgba(35,35,35,0.1) 100%)",
              "linear-gradient(360deg, rgba(75,75,75,0.1) 0%, rgba(35,35,35,0.1) 100%)"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0"
        />
        <MessageSquare size={32} className="text-silver-600 group-hover:text-silver-500 
                                          transition-all duration-300" />
      </div>
    </motion.div>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, ...springTransition }}
      className="text-sm text-silver-500 mb-2"
    >
      {getTranslation('No chat history yet', language)}
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, ...springTransition }}
      className="text-xs text-silver-600"
    >
      {getTranslation('Start a new conversation', language)}
    </motion.p>
  </motion.div>
);

const ActionButton = ({ 
  icon: Icon, 
  title, 
  color 
}: { 
  icon: any; 
  title: string;
  color?: 'yellow' | 'blue' | 'green';
}) => {
  const getColorClasses = () => {
    switch (color) {
      case 'yellow':
        return 'hover:bg-yellow-500/20 hover:text-yellow-400';
      case 'blue':
        return 'hover:bg-blue-500/20 hover:text-blue-400';
      case 'green':
        return 'hover:bg-green-500/20 hover:text-green-400';
      default:
        return 'hover:bg-charcoal-600/50 hover:text-silver-300';
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
      whileTap={{ scale: 0.9 }}
      transition={springTransition}
      className={`p-2 rounded-lg bg-charcoal-600/30 text-silver-500 
                transition-all duration-300 ${getColorClasses()}`}
      title={title}
    >
      <Icon size={14} />
    </motion.button>
  );
};

const LanguageToggle = ({ 
  language, 
  onLanguageChange 
}: { 
  language: Language; 
  onLanguageChange: (lang: Language) => void;
}) => (
  <div className="flex space-x-2">
    <button
      onClick={() => onLanguageChange('en')}
      className={`px-2.5 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
        language === 'en'
          ? 'bg-silver-500 text-charcoal-900'
          : 'text-silver-400 hover:text-silver-300'
      }`}
    >
      EN
    </button>
    <button
      onClick={() => onLanguageChange('af')}
      className={`px-2.5 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
        language === 'af'
          ? 'bg-silver-500 text-charcoal-900'
          : 'text-silver-400 hover:text-silver-300'
      }`}
    >
      AF
    </button>
  </div>
); 