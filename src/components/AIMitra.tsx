
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Send, Mic, Volume2, X, Minimize2, Maximize2, Bot } from 'lucide-react';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  language: string;
}

interface AIMitraProps {
  isOpen: boolean;
  onToggle: () => void;
}

const AIMitra = ({ isOpen, onToggle }: AIMitraProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState('hindi');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const languages = {
    hindi: {
      name: 'हिंदी',
      flag: '🇮🇳',
      welcome: 'नमस्ते! मैं AIMitra हूँ। मैं आपकी भाषा में आपकी सहायता करने के लिए यहाँ हूँ।',
      placeholder: 'अपना संदेश यहाँ लिखें...',
      title: 'AIMitra - आपका भाषा सहायक'
    },
    tamil: {
      name: 'தமிழ்',
      flag: '🇮🇳',
      welcome: 'வணக்கம்! நான் AIMitra. உங்கள் மொழியில் உங்களுக்கு உதவ இங்கே இருக்கிறேன்.',
      placeholder: 'உங்கள் செய்தியை இங்கே தட்டச்சு செய்யவும்...',
      title: 'AIMitra - உங்கள் மொழி உதவியாளர்'
    },
    bengali: {
      name: 'বাংলা',
      flag: '🇮🇳',
      welcome: 'নমস্কার! আমি AIMitra। আপনার ভাষায় আপনাকে সাহায্য করতে এখানে আছি।',
      placeholder: 'এখানে আপনার বার্তা টাইপ করুন...',
      title: 'AIMitra - আপনার ভাষা সহায়ক'
    },
    gujarati: {
      name: 'ગુજરાતી',
      flag: '🇮🇳',
      welcome: 'નમસ્તે! હું AIMitra છું। તમારી ભાષામાં તમારી સહાય કરવા માટે અહીં છું।',
      placeholder: 'અહીં તમારો સંદેશ ટાઇપ કરો...',
      title: 'AIMitra - તમારો ભાષા સહાયક'
    },
    marathi: {
      name: 'मराठी',
      flag: '🇮🇳',
      welcome: 'नमस्कार! मी AIMitra आहे। तुमच्या भाषेत तुमची मदत करण्यासाठी येथे आहे।',
      placeholder: 'तुमचा संदेश येथे टाइप करा...',
      title: 'AIMitra - तुमचा भाषा सहाय्यक'
    }
  };

  const currentLang = languages[selectedLanguage as keyof typeof languages];

  const botResponses: { [key: string]: { [key: string]: string } } = {
    hindi: {
      greeting: 'नमस्ते! मैं AIMitra हूँ। आज मैं आपकी कैसे सहायता कर सकता हूँ?',
      help: 'मैं भाषा अनुवाद, तकनीकी सहायता, और सामान्य जानकारी में आपकी मदद कर सकता हूँ।',
      translation: 'मैं विभिन्न भारतीय भाषाओं में अनुवाद कर सकता हूँ। कृपया बताएं कि आप क्या अनुवाद करना चाहते हैं।',
      tech: 'तकनीकी सहायता के लिए, कृपया अपनी समस्या का विस्तार से वर्णन करें।'
    },
    tamil: {
      greeting: 'வணக்கம்! நான் AIMitra. இன்று உங்களுக்கு எப்படி உதவ முடியும்?',
      help: 'நான் மொழி மொழிபெயர்ப்பு, தொழில்நுட்ப உதவி மற்றும் பொதுவான தகவல்களில் உதவ முடியும்.',
      translation: 'நான் பல்வேறு இந்திய மொழிகளில் மொழிபெயர்க்க முடியும். தயவுசெய்து நீங்கள் எதை மொழிபெயர்க்க விரும்புகிறீர்கள் என்று சொல்லுங்கள்.',
      tech: 'தொழில்நுட்ப உதவிக்கு, தயவுசெய்து உங்கள் பிரச்சினையை விரிவாக விவரிக்கவும்.'
    },
    bengali: {
      greeting: 'নমস্কার! আমি AIMitra। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?',
      help: 'আমি ভাষা অনুবাদ, প্রযুক্তিগত সহায়তা এবং সাধারণ তথ্যে আপনাকে সাহায্য করতে পারি।',
      translation: 'আমি বিভিন্ন ভারতীয় ভাষায় অনুবাদ করতে পারি। আপনি কী অনুবাদ করতে চান তা বলুন।',
      tech: 'প্রযুক্তিগত সহায়তার জন্য, আপনার সমস্যার বিস্তারিত বর্ণনা দিন।'
    },
    gujarati: {
      greeting: 'નમસ્તે! હું AIMitra છું। આજે હું તમારી કેવી રીતે મદદ કરી શકું?',
      help: 'હું ભાષા અનુવાદ, તકનીકી સહાય અને સામાન્ય માહિતીમાં તમારી મદદ કરી શકું છું।',
      translation: 'હું વિવિધ ભારતીય ભાષાઓમાં અનુવાદ કરી શકું છું. કૃપા કરીને કહો કે તમે શું અનુવાદ કરવા માંગો છો.',
      tech: 'તકનીકી સહાય માટે, કૃપા કરીને તમારી સમસ્યાનું વિગતવાર વર્ણન કરો.'
    },
    marathi: {
      greeting: 'नमस्कार! मी AIMitra आहे। आज मी तुमची कशी मदत करू शकतो?',
      help: 'मी भाषा अनुवाद, तांत्रिक मदत आणि सामान्य माहितीत तुमची मदत करू शकतो।',
      translation: 'मी विविध भारतीय भाषांमध्ये अनुवाद करू शकतो. कृपया सांगा की तुम्हाला काय अनुवाद करायचे आहे.',
      tech: 'तांत्रिक मदतीसाठी, कृपया तुमच्या समस्येचे तपशीलवार वर्णन करा.'
    }
  };

  useEffect(() => {
    if (chatMessages.length === 0 && isOpen) {
      const welcomeMessage: ChatMessage = {
        id: '1',
        text: currentLang.welcome,
        sender: 'bot',
        timestamp: new Date(),
        language: selectedLanguage
      };
      setChatMessages([welcomeMessage]);
    }
  }, [selectedLanguage, isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: currentMessage,
      sender: 'user',
      timestamp: new Date(),
      language: selectedLanguage
    };

    setChatMessages(prev => [...prev, userMessage]);

    // Bot response logic
    setTimeout(() => {
      let botResponse = botResponses[selectedLanguage].help;

      const message = currentMessage.toLowerCase();
      if (message.includes('नमस्ते') || message.includes('hello') || message.includes('hi') || message.includes('வணக்கம்') || message.includes('নমস্কার')) {
        botResponse = botResponses[selectedLanguage].greeting;
      } else if (message.includes('अनुवाद') || message.includes('translate') || message.includes('मொழিபெयர्প्पு') || message.includes('অনুবাদ')) {
        botResponse = botResponses[selectedLanguage].translation;
      } else if (message.includes('तकनीकी') || message.includes('tech') || message.includes('तொझील्नुট्पа') || message.includes('প্রযুক্তি')) {
        botResponse = botResponses[selectedLanguage].tech;
      }

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
        language: selectedLanguage
      };

      setChatMessages(prev => [...prev, botMessage]);
    }, 1000);

    setCurrentMessage('');
  };

  const startVoiceInput = () => {
    setIsListening(true);
    setTimeout(() => {
      setCurrentMessage(selectedLanguage === 'hindi' ? 'मुझे मदद चाहिए' :
                       selectedLanguage === 'tamil' ? 'எனக்கு உதவி வேண்டும்' :
                       selectedLanguage === 'bengali' ? 'আমার সাহায্য লাগবে' :
                       selectedLanguage === 'gujarati' ? 'મને મદદ જોઈએ' :
                       'मला मदत हवी');
      setIsListening(false);
    }, 2000);
  };

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLanguage === 'hindi' ? 'hi-IN' : 
                      selectedLanguage === 'tamil' ? 'ta-IN' : 
                      selectedLanguage === 'bengali' ? 'bn-IN' :
                      selectedLanguage === 'gujarati' ? 'gu-IN' : 'mr-IN';
      speechSynthesis.speak(utterance);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className={`w-96 transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[500px]'} flex flex-col shadow-2xl border-2 border-orange-200`}>
        <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6" />
              <div>
                <CardTitle className="text-sm font-bold">AIMitra</CardTitle>
                <p className="text-xs opacity-90">भारतीय भाषा सहायक</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Badge variant="secondary" className="text-xs">AI</Badge>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-6 w-6 p-0 text-white hover:bg-white/20"
              >
                {isMinimized ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={onToggle}
                className="h-6 w-6 p-0 text-white hover:bg-white/20"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            {/* Language Selector */}
            <div className="p-2 border-b">
              <div className="flex space-x-1 overflow-x-auto">
                {Object.entries(languages).map(([key, lang]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedLanguage(key)}
                    className={`flex items-center space-x-1 px-2 py-1 rounded text-xs whitespace-nowrap transition-all ${
                      selectedLanguage === key
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Messages */}
            <CardContent className="flex-1 overflow-y-auto p-3 space-y-2">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-2 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p>{message.text}</p>
                    {message.sender === 'bot' && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => speakMessage(message.text)}
                        className="mt-1 h-5 text-xs p-0"
                      >
                        <Volume2 className="w-3 h-3 mr-1" />
                        सुनें
                      </Button>
                    )}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </CardContent>

            {/* Input Area */}
            <div className="border-t p-3">
              <div className="flex space-x-2">
                <Input
                  placeholder={currentLang.placeholder}
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 text-sm"
                />
                <Button
                  onClick={startVoiceInput}
                  disabled={isListening}
                  variant="outline"
                  size="sm"
                  className="px-2"
                >
                  <Mic className={`w-4 h-4 ${isListening ? 'text-red-500' : ''}`} />
                </Button>
                <Button onClick={handleSendMessage} size="sm" className="px-2">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default AIMitra;
