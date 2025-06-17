
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { QrCode, Send, MessageCircle, Smartphone, Shield, Clock, Languages, CheckCircle, X, Mic, Volume2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  language: string;
}

const UpiPayment = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('hindi');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [recipientUpi, setRecipientUpi] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const languages = {
    hindi: {
      name: 'हिंदी',
      flag: '🇮🇳',
      title: 'UPI भुगतान',
      subtitle: 'तुरंत, सुरक्षित और आसान डिजिटल भुगतान',
      amount: 'राशि दर्ज करें',
      recipient: 'प्राप्तकर्ता का UPI ID',
      payNow: 'अभी भुगतान करें',
      features: {
        instant: 'तुरंत भुगतान',
        secure: '100% सुरक्षित',
        available: '24/7 उपलब्ध'
      },
      chatbot: {
        title: 'UPI सहायक',
        placeholder: 'अपना प्रश्न यहाँ टाइप करें...',
        welcome: 'नमस्ते! मैं आपका UPI सहायक हूँ। मैं आपकी भुगतान संबंधी सभी समस्याओं में आपकी मदद कर सकता हूँ।'
      }
    },
    tamil: {
      name: 'தமிழ்',
      flag: '🇮🇳',
      title: 'UPI கட்டணம்',
      subtitle: 'உடனடி, பாதுகாப்பான மற்றும் எளிதான டிஜிட்டல் கட்டணம்',
      amount: 'தொகையை உள்ளிடவும்',
      recipient: 'பெறுநரின் UPI ID',
      payNow: 'இப்போது செலுத்தவும்',
      features: {
        instant: 'உடனடி கட்டணம்',
        secure: '100% பாதுகாப்பு',
        available: '24/7 கிடைக்கும்'
      },
      chatbot: {
        title: 'UPI உதவியாளர்',
        placeholder: 'உங்கள் கேள்வியை இங்கே தட்டச்சு செய்யவும்...',
        welcome: 'வணக்கம்! நான் உங்கள் UPI உதவியாளர். கட்டணம் தொடர்பான அனைத்து பிரச்சினைகளிலும் உங்களுக்கு உதவ முடியும்.'
      }
    },
    bengali: {
      name: 'বাংলা',
      flag: '🇮🇳',
      title: 'UPI পেমেন্ট',
      subtitle: 'তাৎক্ষণিক, নিরাপদ এবং সহজ ডিজিটাল পেমেন্ট',
      amount: 'পরিমাণ লিখুন',
      recipient: 'প্রাপকের UPI ID',
      payNow: 'এখনই পেমেন্ট করুন',
      features: {
        instant: 'তাৎক্ষণিক পেমেন্ট',
        secure: '১০০% নিরাপদ',
        available: '২৪/৭ উপলব্ধ'
      },
      chatbot: {
        title: 'UPI সহায়ক',
        placeholder: 'এখানে আপনার প্রশ্ন টাইপ করুন...',
        welcome: 'নমস্কার! আমি আপনার UPI সহায়ক। পেমেন্ট সংক্রান্ত সব সমস্যায় আমি আপনাকে সাহায্য করতে পারি।'
      }
    }
  };

  const currentLang = languages[selectedLanguage as keyof typeof languages];

  const botResponses: { [key: string]: { [key: string]: string } } = {
    hindi: {
      balance: 'आपका खाता शेष जानने के लिए, कृपया अपने बैंक ऐप में लॉगिन करें या *99# डायल करें।',
      limit: 'UPI की दैनिक सीमा ₹1,00,000 है। यदि आपको अधिक राशि भेजनी है, तो कई लेन-देन करें।',
      failed: 'यदि आपका भुगतान असफल हो गया है, तो पैसा 24 घंटे में वापस आ जाएगा। अधिक जानकारी के लिए बैंक से संपर्क करें।',
      help: 'मैं UPI भुगतान, समस्या समाधान, और खाता संबंधी प्रश्नों में आपकी सहायता कर सकता हूँ। कुछ और पूछना चाहते हैं?'
    },
    tamil: {
      balance: 'உங்கள் கணக்கு நிலுவை அறிய, உங்கள் வங்கி ஆப்பில் உள்நுழையவும் அல்லது *99# டயல் செய்யவும்.',
      limit: 'UPI இன் நாளாந்த வரம்பு ₹1,00,000 ஆகும். அதிக தொகை அனுப்ப வேண்டுமெனில், பல பரிவர்த்தனைகள் செய்யவும்.',
      failed: 'உங்கள் கட்டணம் தோல்வியுற்றால், பணம் 24 மணி நேரத்தில் திரும்பும். மேல் விவரங்களுக்கு வங்கியை தொடர்பு கொள்ளவும்.',
      help: 'நான் UPI கட்டணம், பிரச்சினை தீர்வு மற்றும் கணக்கு தொடர்பான கேள்விகளில் உதவ முடியும். வேறு ஏதாவது கேட்க வேண்டுமா?'
    },
    bengali: {
      balance: 'আপনার অ্যাকাউন্ট ব্যালেন্স জানতে, আপনার ব্যাংক অ্যাপে লগইন করুন বা *99# ডায়াল করুন।',
      limit: 'UPI এর দৈনিক সীমা ₹১,০০,০০০। বেশি পরিমাণ পাঠাতে হলে, একাধিক লেনদেন করুন।',
      failed: 'আপনার পেমেন্ট ব্যর্থ হলে, টাকা ২৪ ঘন্টায় ফিরে আসবে। বিস্তারিত জানতে ব্যাংকের সাথে যোগাযোগ করুন।',
      help: 'আমি UPI পেমেন্ট, সমস্যা সমাধান এবং অ্যাকাউন্ট সংক্রান্ত প্রশ্নে সাহায্য করতে পারি। আর কিছু জানতে চান?'
    }
  };

  useEffect(() => {
    if (chatMessages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: '1',
        text: currentLang.chatbot.welcome,
        sender: 'bot',
        timestamp: new Date(),
        language: selectedLanguage
      };
      setChatMessages([welcomeMessage]);
    }
  }, [selectedLanguage]);

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

    // Simple bot response logic
    setTimeout(() => {
      let botResponse = botResponses[selectedLanguage].help;

      const message = currentMessage.toLowerCase();
      if (message.includes('बैलेंस') || message.includes('balance') || message.includes('நிலுவை') || message.includes('ব্যালেন্স')) {
        botResponse = botResponses[selectedLanguage].balance;
      } else if (message.includes('सीमा') || message.includes('limit') || message.includes('வரம্প') || message.includes('সীমা')) {
        botResponse = botResponses[selectedLanguage].limit;
      } else if (message.includes('असफल') || message.includes('failed') || message.includes('தோல்வி') || message.includes('ব্যর্থ')) {
        botResponse = botResponses[selectedLanguage].failed;
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

  const handlePayment = () => {
    if (!paymentAmount || !recipientUpi) {
      alert(selectedLanguage === 'hindi' ? 'कृपया सभी फील्ड भरें' : 
            selectedLanguage === 'tamil' ? 'தயவுசெய்து அனைத்து புலங்களையும் நிரப்பவும்' :
            'দয়া করে সব ক্ষেত্র পূরণ করুন');
      return;
    }

    // Simulate payment processing
    alert(selectedLanguage === 'hindi' ? `₹${paymentAmount} का भुगतान ${recipientUpi} को सफलतापূर্वक भेजा गया!` :
          selectedLanguage === 'tamil' ? `₹${paymentAmount} ${recipientUpi} க்கு வெற்றிகரமாக அனுப்பப்பட்டது!` :
          `₹${paymentAmount} সফলভাবে ${recipientUpi} এ পাঠানো হয়েছে!`);
  };

  const startVoiceInput = () => {
    setIsListening(true);
    // Simulate voice input (in real app, you'd use Web Speech API)
    setTimeout(() => {
      setCurrentMessage(selectedLanguage === 'hindi' ? 'मेरा बैलेंस क्या है?' :
                       selectedLanguage === 'tamil' ? 'என் நிலுவை என்ன?' :
                       'আমার ব্যালেন্স কত?');
      setIsListening(false);
    }, 2000);
  };

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLanguage === 'hindi' ? 'hi-IN' : 
                      selectedLanguage === 'tamil' ? 'ta-IN' : 'bn-IN';
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Header onWatchVideo={() => {}} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Language Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white rounded-lg p-1 shadow-lg">
            {Object.entries(languages).map(([key, lang]) => (
              <button
                key={key}
                onClick={() => setSelectedLanguage(key)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                  selectedLanguage === key
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span>{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Payment Section */}
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{currentLang.title}</h1>
              <p className="text-xl text-gray-600">{currentLang.subtitle}</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">{currentLang.features.instant}</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">{currentLang.features.secure}</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Smartphone className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">{currentLang.features.available}</p>
                </CardContent>
              </Card>
            </div>

            {/* Payment Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <QrCode className="w-6 h-6" />
                  <span>{currentLang.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{currentLang.amount}</label>
                  <Input
                    type="number"
                    placeholder="₹ 0"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{currentLang.recipient}</label>
                  <Input
                    placeholder="user@paytm"
                    value={recipientUpi}
                    onChange={(e) => setRecipientUpi(e.target.value)}
                  />
                </div>
                <Button
                  onClick={handlePayment}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg py-3"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {currentLang.payNow}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Chatbot Section */}
          <div className="relative">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-6 h-6" />
                  <span>{currentLang.chatbot.title}</span>
                  <Badge variant="secondary" className="ml-auto">AI</Badge>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      {message.sender === 'bot' && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => speakMessage(message.text)}
                          className="mt-2 h-6 text-xs"
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

              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder={currentLang.chatbot.placeholder}
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button
                    onClick={startVoiceInput}
                    disabled={isListening}
                    variant="outline"
                    size="icon"
                  >
                    <Mic className={`w-4 h-4 ${isListening ? 'text-red-500' : ''}`} />
                  </Button>
                  <Button onClick={handleSendMessage}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h3 className="font-bold">
                  {selectedLanguage === 'hindi' ? 'त्वरित भुगतान' :
                   selectedLanguage === 'tamil' ? 'விரைவான கட்டணம்' :
                   'দ্রুত পেমেন্ট'}
                </h3>
              </div>
              <p className="text-gray-600">
                {selectedLanguage === 'hindi' ? '24/7 तुरंत पैसा भेजें और प्राप्त करें' :
                 selectedLanguage === 'tamil' ? '24/7 உடனடியாக பணம் அனுப்பவும் மற்றும் பெறவும்' :
                 '24/7 তাৎক্ষণিক টাকা পাঠান এবং গ্রহণ করুন'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
                <h3 className="font-bold">
                  {selectedLanguage === 'hindi' ? 'सुरक्षा गारंटी' :
                   selectedLanguage === 'tamil' ? 'பாதுகாப்பு உத்தரவாதம்' :
                   'নিরাপত্তার গ্যারান্টি'}
                </h3>
              </div>
              <p className="text-gray-600">
                {selectedLanguage === 'hindi' ? 'बैंक-ग्रेड एन्क्रिप्शन और सुरक्षा' :
                 selectedLanguage === 'tamil' ? 'வங்கி-தர குறியாக்கம் மற்றும் பாதுகாப்பு' :
                 'ব্যাংক-গ্রেড এনক্রিপশন এবং নিরাপত্তা'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3 mb-4">
                <Languages className="w-8 h-8 text-purple-600" />
                <h3 className="font-bold">
                  {selectedLanguage === 'hindi' ? 'भाषा सहायता' :
                   selectedLanguage === 'tamil' ? 'மொழி ஆதரவு' :
                   'ভাষা সহায়তা'}
                </h3>
              </div>
              <p className="text-gray-600">
                {selectedLanguage === 'hindi' ? 'आपकी मातृभाষा में UPI सेवा' :
                 selectedLanguage === 'tamil' ? 'உங்கள் தாய்மொழியில் UPI சேவை' :
                 'আপনার মাতৃভাষায় UPI সেবা'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UpiPayment;
