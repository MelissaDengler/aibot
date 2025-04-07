import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 transition-all duration-300 transform
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
      <div className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-elegant
                      ${type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
        {type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
        <span className="text-sm">{message}</span>
        <button onClick={() => setIsVisible(false)} className="ml-2 hover:opacity-80">
          <X size={16} />
        </button>
      </div>
    </div>
  );
} 