
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import AIMitra from './AIMitra';

const AIMitraButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      {!isChatOpen && (
        <div className="fixed bottom-4 right-4 z-40">
          <Button
            onClick={() => setIsChatOpen(true)}
            className="h-14 w-14 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg"
            size="lg"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
          <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
            AI
          </div>
        </div>
      )}

      {/* AIMitra Chatbot */}
      <AIMitra 
        isOpen={isChatOpen} 
        onToggle={() => setIsChatOpen(!isChatOpen)} 
      />
    </>
  );
};

export default AIMitraButton;
