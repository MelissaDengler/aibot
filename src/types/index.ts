export type Language = 'en' | 'af';

export interface TranslatedText {
  en: string;
  af: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  context?: {
    topic?: string;
    sentiment?: 'positive' | 'negative' | 'neutral';
  };
}

export interface ChatBot {
  id: string;
  name: TranslatedText;
  icon: string;
  description: TranslatedText;
  industry: string;
  category: string;
  languages: Language[];
  welcomeMessage: TranslatedText;
  commonQuestions: Array<{
    id: string;
    category: string;
    question: TranslatedText;
    answer: TranslatedText;
  }>;
} 