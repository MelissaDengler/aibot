import React from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeSnippetProps {
  code: string;
  language: string;
}

export default function CodeSnippet({ code, language }: CodeSnippetProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mt-2 rounded-lg bg-charcoal-800 overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 bg-charcoal-700/50">
        <span className="text-sm text-silver-400">{language}</span>
        <button
          onClick={handleCopy}
          className="p-1 rounded hover:bg-charcoal-600/50 transition-colors"
          title="Copy code"
        >
          {copied ? (
            <Check size={16} className="text-green-400" />
          ) : (
            <Copy size={16} className="text-silver-400" />
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-silver-300">{code}</code>
      </pre>
    </div>
  );
} 