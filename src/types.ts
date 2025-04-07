export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  context?: {
    topic?: string;
    sentiment?: 'positive' | 'negative' | 'neutral';
  };
}

export interface CommonQuestion {
  id: string;
  question: {
    en: string;
    af: string;
  };
  answer: {
    en: string;
    af: string;
  };
  category: string;
}

export interface ChatBot {
  id: string;
  name: string;
  icon: string;
  description: string;
  industry: string;
  category: string;
  languages: Language[];
  welcomeMessage: Record<Language, string>;
  commonQuestions: CommonQuestion[];
}

export type Language = 'en' | 'af';

export interface MockResponse {
  en: string;
  af: string;
}

export interface ChatContext {
  topic: string;
  relevantQuestions: string[];
  lastMessageType: 'question' | 'statement' | 'greeting';
}