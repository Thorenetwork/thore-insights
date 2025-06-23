
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Clock, Shield, AlertCircle, ArrowLeft } from 'lucide-react';

interface PaymentProcessorProps {
  amount: string;
  upiId: string;
  language: string;
  onBack: () => void;
  onComplete: (success: boolean) => void;
}

const PaymentProcessor = ({ amount, upiId, language, onBack, onComplete }: PaymentProcessorProps) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('initializing');
  const [timeLeft, setTimeLeft] = useState(240); // 4 minutes in seconds

  const languages = {
    hindi: {
      title: 'भुगतान प्रोसेसिंग',
      stages: {
        initializing: 'भुगतान शुरू कर रहे हैं...',
        validating: 'विवरण सत्यापित कर रहे हैं...',
        processing: 'बैंक से कनेक्ट कर रहे हैं...',
        completing: 'भुगतान पूरा कर रहे हैं...',
        success: 'भुगतान सफल!',
        failed: 'भुगतान असफल'
      },
      timeRemaining: 'समय शेष',
      cancel: 'रद्द करें',
      retry: 'पुनः प्रयास करें',
      secureTransaction: 'सुरक्षित लेनदेन',
      minutes: 'मिनट',
      seconds: 'सेकंड'
    },
    tamil: {
      title: 'கட்டணம் செயலாக்கம்',
      stages: {
        initializing: 'கட்டணம் தொடங்குகிறது...',
        validating: 'விவரங்களை சரிபார்க்கிறது...',
        processing: 'வங்கியுடன் இணைக்கிறது...',
        completing: 'கட்டணம் முடிக்கிறது...',
        success: 'கட்டணம் வெற்றி!',
        failed: 'கட்டணம் தோல்வி'
      },
      timeRemaining: 'மீதமுள்ள நேரம்',
      cancel: 'ரத்து செய்',
      retry: 'மீண்டும் முயற்சி',
      secureTransaction: 'பாதுகாப்பான பரிவர்த்தனை',
      minutes: 'நிமிடங்கள்',
      seconds: 'விநாடிகள்'
    },
    bengali: {
      title: 'পেমেন্ট প্রসেসিং',
      stages: {
        initializing: 'পেমেন্ট শুরু করা হচ্ছে...',
        validating: 'বিবরণ যাচাই করা হচ্ছে...',
        processing: 'ব্যাংকের সাথে সংযোগ করা হচ্ছে...',
        completing: 'পেমেন্ট সম্পূর্ণ করা হচ্ছে...',
        success: 'পেমেন্ট সফল!',
        failed: 'পেমেন্ট ব্যর্থ'
      },
      timeRemaining: 'অবশিষ্ট সময়',
      cancel: 'বাতিল করুন',
      retry: 'আবার চেষ্টা করুন',
      secureTransaction: 'নিরাপদ লেনদেন',
      minutes: 'মিনিট',
      seconds: 'সেকেন্ড'
    }
  };

  const currentLang = languages[language as keyof typeof languages] || languages.hindi;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setStage('success');
          setTimeout(() => onComplete(true), 1000);
          return 100;
        }
        
        // Update stage based on progress
        if (prev < 25) setStage('initializing');
        else if (prev < 50) setStage('validating');
        else if (prev < 75) setStage('processing');
        else setStage('completing');
        
        return prev + 2;
      });
      
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <CardTitle className="text-lg">{currentLang.title}</CardTitle>
          <div></div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Transaction Details */}
        <div className="text-center space-y-2">
          <div className="text-3xl font-bold text-green-600">₹{amount}</div>
          <div className="text-sm text-gray-600">{currentLang.title} to {upiId}</div>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{currentLang.stages[stage as keyof typeof currentLang.stages]}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Timer */}
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{currentLang.timeRemaining}: {formatTime(timeLeft)}</span>
        </div>

        {/* Security Badge */}
        <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
          <Shield className="w-4 h-4" />
          <span>{currentLang.secureTransaction}</span>
        </div>

        {/* Status Messages */}
        {stage === 'success' && (
          <div className="text-center space-y-2">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
            <p className="text-green-600 font-medium">{currentLang.stages.success}</p>
          </div>
        )}

        {stage === 'failed' && (
          <div className="text-center space-y-4">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
            <p className="text-red-600 font-medium">{currentLang.stages.failed}</p>
            <Button onClick={() => onComplete(false)} variant="outline">
              {currentLang.retry}
            </Button>
          </div>
        )}

        {/* Cancel Button */}
        {stage !== 'success' && stage !== 'failed' && (
          <Button variant="outline" className="w-full" onClick={onBack}>
            {currentLang.cancel}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentProcessor;
