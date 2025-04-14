export type Language = 'en' | 'af';

export interface Translation {
  en: string;
  af: string;
}

export interface Translations {
  [key: string]: Translation;
}

export interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
} 