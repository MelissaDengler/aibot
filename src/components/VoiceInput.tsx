import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Loader2 } from 'lucide-react';
import { Language } from '../types';

interface VoiceInputProps {
  onTranscript: (text: string) => void;
  language: Language;
  isListening: boolean;
  setIsListening: (isListening: boolean) => void;
}

export default function VoiceInput({ onTranscript, language, isListening, setIsListening }: VoiceInputProps) {
  const [error, setError] = useState<string>('');
  
  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('Voice input is not supported in this browser');
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = language === 'en' ? 'en-US' : 'af-ZA';

    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0])
        .map(result => result.transcript)
        .join('');
      
      onTranscript(transcript);
    };

    recognition.onerror = (event: any) => {
      setError(event.error);
      setIsListening(false);
    };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening, language]);

  return (
    <button
      onClick={() => setIsListening(!isListening)}
      disabled={!!error}
      className={`p-3 rounded-xl transition-all duration-300 ${
        error
          ? 'bg-red-500/20 text-red-400 cursor-not-allowed'
          : isListening
          ? 'bg-green-500/20 text-green-400 animate-pulse'
          : 'bg-charcoal-700/50 text-silver-400 hover:bg-charcoal-700/70'
      }`}
      title={error || (language === 'en' ? 'Toggle voice input' : 'Skakel steminvoer')}
    >
      {error ? (
        <MicOff size={20} />
      ) : isListening ? (
        <Loader2 size={20} className="animate-spin" />
      ) : (
        <Mic size={20} />
      )}
    </button>
  );
} 