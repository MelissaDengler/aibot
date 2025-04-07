import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, ChatBot, Language, CommonQuestion } from '../types';
import { mockResponses } from '../data/mockData';
import { Send, RefreshCw } from 'lucide-react';
import CommonQuestions from './CommonQuestions';
import SuggestedQuestions from './SuggestedQuestions';
import ChatToolbar from './ChatToolbar';
import MessageContent from './MessageContent';
import VoiceInput from './VoiceInput';
import CodeSnippet from './CodeSnippet';
import QuickQuestions from './QuickQuestions';
import ScrollProgress from './ScrollProgress';
import TypingText from './TypingText';

interface ChatInterfaceProps {
  selectedBot: ChatBot;
  language: Language;
}

export default function ChatInterface({ selectedBot, language }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [suggestedQuestions, setSuggestedQuestions] = useState<CommonQuestion[]>([]);
  const [isListening, setIsListening] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (selectedBot.welcomeMessage) {
      setMessages([{
        role: 'assistant',
        content: selectedBot.welcomeMessage[language],
        timestamp: new Date().toISOString()
      }]);
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedBot.id, language]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString(language === 'en' ? 'en-US' : 'af-ZA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getMockResponse = () => {
    const categoryKeys = Object.keys(mockResponses[selectedBot.id]);
    const randomCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
    const responses = mockResponses[selectedBot.id][randomCategory];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    return randomResponse[language];
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: input,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Find relevant questions based on input keywords
    const relevantQuestions = selectedBot.commonQuestions.filter(q => 
      q.question.en.toLowerCase().includes(input.toLowerCase()) ||
      q.category.toLowerCase().includes(input.toLowerCase())
    ).slice(0, 3);

    setSuggestedQuestions(relevantQuestions);

    // Simulate AI response delay
    setTimeout(() => {
      const botMessage: ChatMessage = {
        role: 'assistant',
        content: getMockResponse(),
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, Math.random() * 1000 + 500);
  };

  const clearChat = () => {
    setMessages(selectedBot.welcomeMessage ? [{
      role: 'assistant',
      content: selectedBot.welcomeMessage[language],
      timestamp: new Date().toISOString()
    }] : []);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const shouldShowDate = (index: number, messages: ChatMessage[]) => {
    if (index === 0) return true;
    const currentDate = new Date(messages[index].timestamp).toDateString();
    const previousDate = new Date(messages[index - 1].timestamp).toDateString();
    return currentDate !== previousDate;
  };

  const handleQuestionClick = (answer: string) => {
    const userMessage: ChatMessage = {
      role: 'user',
      content: input || 'Tell me more about this topic',
      timestamp: new Date().toISOString()
    };

    const botMessage: ChatMessage = {
      role: 'assistant',
      content: answer,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  const handleExport = () => {
    const chatContent = messages.map(msg => 
      `${msg.role}: ${msg.content} (${formatTime(msg.timestamp)})`
    ).join('\n\n');
    
    const blob = new Blob([chatContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-${new Date().toISOString()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Chat History',
          text: messages.map(msg => `${msg.role}: ${msg.content}`).join('\n\n')
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };

  const handleCopy = () => {
    const chatContent = messages.map(msg => 
      `${msg.role}: ${msg.content}`
    ).join('\n\n');
    navigator.clipboard.writeText(chatContent);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleVoiceTranscript = (text: string) => {
    setInput(text);
  };

  const detectCodeBlock = (content: string) => {
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    const matches = Array.from(content.matchAll(codeBlockRegex));
    
    if (matches.length === 0) return null;
    
    return matches.map(match => ({
      language: match[1] || 'plaintext',
      code: match[2].trim()
    }));
  };

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-charcoal-700/30">
        <ChatToolbar
          onClearChat={clearChat}
          onExport={handleExport}
          onShare={handleShare}
          onCopy={handleCopy}
          onPrint={handlePrint}
          language={language}
        />
      </div>
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 relative" ref={messagesContainerRef}>
        <ScrollProgress containerRef={messagesContainerRef} />
        {messages.length === 0 ? (
          <div className="animate-fade-in">
            <h3 className="text-lg font-medium text-silver-300 mb-4">
              <TypingText text={selectedBot.name} speed={70} />
            </h3>
            <CommonQuestions 
              questions={selectedBot.commonQuestions}
              language={language}
              onQuestionClick={handleQuestionClick}
            />
          </div>
        ) : (
          <>
            {messages.map((message, index) => (
              <div key={index}>
                {shouldShowDate(index, messages) && (
                  <div className="text-center text-sm text-gray-500 my-4">
                    {formatDate(message.timestamp)}
                  </div>
                )}
                <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                  <div className={`max-w-[80%] rounded-xl p-4 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-silver-500 to-silver-600 text-charcoal-900 shadow-button'
                      : 'bg-charcoal-700/50 text-white shadow-elegant backdrop-blur-sm'
                  }`}>
                    <MessageContent 
                      content={message.content} 
                      attachments={message.attachments}
                      codeBlocks={detectCodeBlock(message.content)}
                    />
                    <div className={`text-xs mt-2 ${
                      message.role === 'user' ? 'text-charcoal-800' : 'text-gray-400'
                    }`}>
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {!isTyping && suggestedQuestions.length > 0 && (
              <SuggestedQuestions
                questions={suggestedQuestions}
                language={language}
                onQuestionClick={handleQuestionClick}
              />
            )}
          </>
        )}
        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-charcoal-700/50 text-white rounded-xl p-4 shadow-elegant">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-silver-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-silver-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-silver-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      {messages.length > 0 && (
        <QuickQuestions
          questions={selectedBot.commonQuestions}
          language={language}
          onQuestionClick={handleQuestionClick}
        />
      )}

      {/* Input Area */}
      <div className="p-6 border-t border-charcoal-700/30 bg-charcoal-800/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 bg-charcoal-700/50 rounded-xl p-2 
                          shadow-inner-elegant focus-within:ring-2 focus-within:ring-silver-500/30">
            <VoiceInput
              onTranscript={handleVoiceTranscript}
              language={language}
              isListening={isListening}
              setIsListening={setIsListening}
            />
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-transparent text-white px-2 py-2 focus:outline-none 
                        placeholder-gray-400"
              placeholder={language === 'en' ? 'Type your message...' : 'Tik jou boodskap...'}
            />
            <button
              onClick={handleSend}
              disabled={isTyping || !input.trim()}
              className="bg-gradient-to-r from-silver-500 to-silver-600 text-charcoal-900 
                        rounded-lg p-2.5 hover:from-silver-400 hover:to-silver-500 
                        transition-all duration-300 shadow-button disabled:opacity-50 
                        disabled:cursor-not-allowed hover:shadow-glow active:scale-95"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}