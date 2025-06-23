
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download, Share2, Home, RotateCcw } from 'lucide-react';

interface PaymentSuccessProps {
  amount: string;
  upiId: string;
  language: string;
  transactionId: string;
  onNewPayment: () => void;
  onHome: () => void;
}

const PaymentSuccess = ({ amount, upiId, language, transactionId, onNewPayment, onHome }: PaymentSuccessProps) => {
  const languages = {
    hindi: {
      title: 'भुगतान सफल!',
      amount: 'राशि',
      to: 'को भेजा गया',
      transactionId: 'लेनदेन आईडी',
      timestamp: 'समय',
      downloadReceipt: 'रसीद डाउनलोड करें',
      shareReceipt: 'रसीद शेयर करें',
      newPayment: 'नया भुगतान',
      home: 'होम पेज',
      thankYou: 'UPI के माध्यम से भुगतान के लिए धन्यवाद!'
    },
    tamil: {
      title: 'கட்டணம் வெற்றி!',
      amount: 'தொகை',
      to: 'க்கு அனुப்பப்பட்டது',
      transactionId: 'பரிவர்த்தனை ஐடி',
      timestamp: 'நேரம்',
      downloadReceipt: 'ரசீதை பதிவிறக்கவும்',
      shareReceipt: 'ரசீதை பகிரவும்',
      newPayment: 'புதია கட்டணம்',
      home: 'முகப்புப் பக்கம்',
      thankYou: 'UPI மூலம் கட்டணம் செலுத்தியதற்கு நன்றி!'
    },
    bengali: {
      title: 'পেমেন্ট সফল!',
      amount: 'পরিমাণ',
      to: 'এ পাঠানো হয়েছে',
      transactionId: 'লেনদেন আইডি',
      timestamp: 'সময়',
      downloadReceipt: 'রসিদ ডাউনলোড করুন',
      shareReceipt: 'রসিদ শেয়ার করুন',
      newPayment: 'নতুন পেমেন্ট',
      home: 'হোম পেজ',
      thankYou: 'UPI এর মাধ্যমে পেমেন্টের জন্য ধন্যবাদ!'
    }
  };

  const currentLang = languages[language as keyof typeof languages] || languages.hindi;
  const currentTime = new Date().toLocaleString();

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <CardTitle className="text-xl text-green-600">{currentLang.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Transaction Summary */}
        <div className="bg-green-50 p-4 rounded-lg space-y-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">₹{amount}</div>
            <div className="text-sm text-gray-600">{currentLang.amount} {upiId} {currentLang.to}</div>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">{currentLang.transactionId}:</span>
              <span className="font-mono">{transactionId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{currentLang.timestamp}:</span>
              <span>{currentTime}</span>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center">
          <p className="text-gray-600">{currentLang.thankYou}</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <div className="flex space-x-2">
            <Button variant="outline" className="flex-1">
              <Download className="w-4 h-4 mr-2" />
              {currentLang.downloadReceipt}
            </Button>
            <Button variant="outline" className="flex-1">
              <Share2 className="w-4 h-4 mr-2" />
              {currentLang.shareReceipt}
            </Button>
          </div>
          
          <div className="flex space-x-2">
            <Button onClick={onNewPayment} className="flex-1 bg-orange-500 hover:bg-orange-600">
              <RotateCcw className="w-4 h-4 mr-2" />
              {currentLang.newPayment}
            </Button>
            <Button onClick={onHome} variant="outline" className="flex-1">
              <Home className="w-4 h-4 mr-2" />
              {currentLang.home}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentSuccess;
