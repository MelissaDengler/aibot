import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { CommonQuestion, Language } from '../types';

interface QuickQuestionsProps {
  questions: CommonQuestion[];
  language: Language;
  onQuestionClick: (answer: string) => void;
}

export default function QuickQuestions({ questions, language, onQuestionClick }: QuickQuestionsProps) {
  return (
    <div className="p-6 border-t border-charcoal-700/30 bg-charcoal-800/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare size={16} className="text-silver-400" />
          <span className="text-sm font-medium text-silver-400">
            {language === 'en' ? 'Frequently Asked Questions' : 'Algemene Vrae'}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {questions.slice(0, 4).map((question) => (
            <button
              key={question.id}
              onClick={() => onQuestionClick(question.answer[language])}
              className="p-4 rounded-xl bg-charcoal-700/30 hover:bg-charcoal-700/50 
                       text-left group transition-all duration-300 hover:shadow-glow
                       border border-charcoal-600/30 hover:border-silver-600/30"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-silver-300 font-medium mb-1 group-hover:text-white transition-colors">
                    {question.question[language]}
                  </h4>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {question.answer[language].split('\n')[0]}
                  </p>
                </div>
                <ArrowRight size={18} className="text-silver-500 group-hover:text-silver-300 
                                               transform group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 