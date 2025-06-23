
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { QrCode, Download, Share2, Copy } from 'lucide-react';

interface QRCodeGeneratorProps {
  amount: string;
  upiId: string;
  language: string;
}

const QRCodeGenerator = ({ amount, upiId, language }: QRCodeGeneratorProps) => {
  const [qrGenerated, setQrGenerated] = useState(false);

  const languages = {
    hindi: {
      title: 'QR कोड जेनरेट करें',
      generate: 'QR कोड बनाएं',
      download: 'डाउनलोड करें',
      share: 'शेयर करें',
      copy: 'कॉपी करें',
      instructions: 'किसी भी UPI ऐप से इस QR कोड को स्कैन करें'
    },
    tamil: {
      title: 'QR குறியீடு உருவாக்க',
      generate: 'QR குறியீடு உருவாக்கவும்',
      download: 'பதிவிறக்கவும்',
      share: 'பகிரவும்',
      copy: 'நகலெடுக்கவும்',
      instructions: 'எந்த UPI ஆப்பிலிருந்தும் இந்த QR குறியீட்டை ஸ்கேன் செய்யவும்'
    },
    bengali: {
      title: 'QR কোড তৈরি করুন',
      generate: 'QR কোড তৈরি করুন',
      download: 'ডাউনলোড করুন',
      share: 'শেয়ার করুন',
      copy: 'কপি করুন',
      instructions: 'যেকোনো UPI অ্যাপ থেকে এই QR কোড স্ক্যান করুন'
    }
  };

  const currentLang = languages[language as keyof typeof languages] || languages.hindi;

  const generateQR = () => {
    setQrGenerated(true);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <QrCode className="w-6 h-6" />
          <span>{currentLang.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!qrGenerated ? (
          <div className="text-center">
            <Button onClick={generateQR} className="w-full bg-blue-600 hover:bg-blue-700">
              <QrCode className="w-4 h-4 mr-2" />
              {currentLang.generate}
            </Button>
          </div>
        ) : (
          <div className="text-center space-y-4">
            {/* QR Code Placeholder */}
            <div className="mx-auto w-48 h-48 bg-white border-2 border-gray-300 flex items-center justify-center">
              <div className="grid grid-cols-8 gap-1">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 ${
                      Math.random() > 0.5 ? 'bg-black' : 'bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">₹{amount} to {upiId}</p>
              <p className="text-xs text-gray-600">{currentLang.instructions}</p>
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Download className="w-4 h-4 mr-1" />
                {currentLang.download}
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Share2 className="w-4 h-4 mr-1" />
                {currentLang.share}
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Copy className="w-4 h-4 mr-1" />
                {currentLang.copy}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QRCodeGenerator;
