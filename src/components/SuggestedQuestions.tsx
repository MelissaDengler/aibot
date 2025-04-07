import React from 'react';
import { CommonQuestion, Language } from '../types';

interface SuggestedQuestionsProps {
  questions: CommonQuestion[];
  language: Language;
  onQuestionClick: (answer: string) => void;
}

export default function SuggestedQuestions({ questions, language, onQuestionClick }: SuggestedQuestionsProps) {
  return (
    <div className="mt-4 space-y-2">
      <h4 className="text-sm font-medium text-silver-400 mb-2">
        {language === 'en' ? 'Suggested Questions' : 'Voorgestelde Vrae'}
      </h4>
      <div className="flex flex-wrap gap-2">
        {questions.map((question) => (
          <button
            key={question.id}
            onClick={() => onQuestionClick(question.answer[language])}
            className="text-sm px-3 py-1.5 rounded-lg bg-charcoal-700/30 
                      hover:bg-charcoal-700/50 text-gray-300 transition-all 
                      duration-300 hover:shadow-glow whitespace-nowrap"
          >
            {question.question[language]}
          </button>
        ))}
      </div>
    </div>
  );
} 