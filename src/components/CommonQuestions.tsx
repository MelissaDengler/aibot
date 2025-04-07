import React from 'react';
import { CommonQuestion, Language } from '../types';

interface CommonQuestionsProps {
  questions: CommonQuestion[];
  language: Language;
  onQuestionClick: (answer: string) => void;
}

export default function CommonQuestions({ questions, language, onQuestionClick }: CommonQuestionsProps) {
  const groupedQuestions = questions.reduce((acc, question) => {
    const category = question.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(question);
    return acc;
  }, {} as Record<string, CommonQuestion[]>);

  return (
    <div className="space-y-6">
      {Object.entries(groupedQuestions).map(([category, questions]) => (
        <div key={category}>
          <h3 className="text-sm font-medium text-silver-400 mb-3">{category}</h3>
          <div className="space-y-2">
            {questions.map((question) => (
              <button
                key={question.id}
                onClick={() => onQuestionClick(question.answer[language])}
                className="w-full text-left p-3 rounded-lg bg-charcoal-700/30 hover:bg-charcoal-700/50 
                          text-gray-300 transition-all duration-300 text-sm hover:shadow-glow"
              >
                {question.question[language]}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 