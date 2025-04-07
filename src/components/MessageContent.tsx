import React from 'react';
import { FileText, Link, Download } from 'lucide-react';
import CodeSnippet from './CodeSnippet';

interface MessageContentProps {
  content: string;
  attachments?: {
    type: 'link' | 'file' | 'image';
    url: string;
    name: string;
  }[];
  codeBlocks?: { language: string; code: string; }[] | null;
}

export default function MessageContent({ content, attachments, codeBlocks }: MessageContentProps) {
  const contentWithoutCode = codeBlocks 
    ? content.replace(/```(\w+)?\n[\s\S]*?```/g, '')
    : content;

  const formattedContent = contentWithoutCode.split('\n').map((line, i) => (
    <React.Fragment key={i}>
      {line}
      {i < contentWithoutCode.split('\n').length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <div className="space-y-3">
      <div className="prose prose-invert max-w-none">
        {formattedContent}
        {codeBlocks && codeBlocks.map((block, index) => (
          <CodeSnippet
            key={index}
            code={block.code}
            language={block.language}
          />
        ))}
      </div>
      {attachments && attachments.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {attachments.map((attachment, index) => (
            <a
              key={index}
              href={attachment.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-charcoal-700/30 
                       hover:bg-charcoal-700/50 text-gray-300 transition-all duration-300"
            >
              {attachment.type === 'file' && <FileText size={16} />}
              {attachment.type === 'link' && <Link size={16} />}
              {attachment.type === 'image' && <Download size={16} />}
              <span className="text-sm truncate max-w-[200px]">{attachment.name}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
} 