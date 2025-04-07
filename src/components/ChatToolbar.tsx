import React from 'react';
import { Download, Share2, Copy, Printer, RefreshCw } from 'lucide-react';
import { Language } from '../types';

interface ChatToolbarProps {
  onClearChat: () => void;
  onExport: () => void;
  onShare: () => void;
  onCopy: () => void;
  onPrint: () => void;
  language: Language;
}

export default function ChatToolbar({ 
  onClearChat, 
  onExport, 
  onShare, 
  onCopy, 
  onPrint,
  language 
}: ChatToolbarProps) {
  return (
    <div className="flex items-center gap-2 p-2">
      <button
        onClick={onClearChat}
        className="p-2 rounded-lg text-silver-500 hover:text-silver-300 
                 hover:bg-charcoal-700/30 transition-all duration-300"
        title={language === 'en' ? 'Clear chat' : 'Maak skoon'}
      >
        <RefreshCw size={18} />
      </button>
      <button
        onClick={onExport}
        className="p-2 rounded-lg text-silver-500 hover:text-silver-300 
                 hover:bg-charcoal-700/30 transition-all duration-300"
        title={language === 'en' ? 'Export chat' : 'Voer gesprek uit'}
      >
        <Download size={18} />
      </button>
      <button
        onClick={onShare}
        className="p-2 rounded-lg text-silver-500 hover:text-silver-300 
                 hover:bg-charcoal-700/30 transition-all duration-300"
        title={language === 'en' ? 'Share chat' : 'Deel gesprek'}
      >
        <Share2 size={18} />
      </button>
      <button
        onClick={onCopy}
        className="p-2 rounded-lg text-silver-500 hover:text-silver-300 
                 hover:bg-charcoal-700/30 transition-all duration-300"
        title={language === 'en' ? 'Copy to clipboard' : 'Kopieer na knipbord'}
      >
        <Copy size={18} />
      </button>
      <button
        onClick={onPrint}
        className="p-2 rounded-lg text-silver-500 hover:text-silver-300 
                 hover:bg-charcoal-700/30 transition-all duration-300"
        title={language === 'en' ? 'Print chat' : 'Druk gesprek'}
      >
        <Printer size={18} />
      </button>
    </div>
  );
} 