
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Users, MapPin, Square, Volume2 } from 'lucide-react';
import { toast } from 'sonner';

const LanguageMap = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('hindi');
  const [isPlaying, setIsPlaying] = useState(false);

  const languages = {
    hindi: { 
      name: "Hindi", 
      speakers: "600M+", 
      region: "North India", 
      color: "bg-red-500",
      sampleText: "नमस्ते, मैं हिंदी में बात कर सकता हूं।",
      voiceLang: "hi-IN"
    },
    bengali: { 
      name: "Bengali", 
      speakers: "300M+", 
      region: "West Bengal, Bangladesh", 
      color: "bg-green-500",
      sampleText: "নমস্কার, আমি বাংলায় কথা বলতে পারি।",
      voiceLang: "bn-IN"
    },
    tamil: { 
      name: "Tamil", 
      speakers: "75M+", 
      region: "Tamil Nadu, Sri Lanka", 
      color: "bg-blue-500",
      sampleText: "வணக்கம், நான் தமிழில் பேச முடியும்.",
      voiceLang: "ta-IN"
    },
    telugu: { 
      name: "Telugu", 
      speakers: "75M+", 
      region: "Andhra Pradesh, Telangana", 
      color: "bg-purple-500",
      sampleText: "నమస్కారం, నేను తెలుగులో మాట్లాడగలను.",
      voiceLang: "te-IN"
    },
    marathi: { 
      name: "Marathi", 
      speakers: "83M+", 
      region: "Maharashtra", 
      color: "bg-orange-500",
      sampleText: "नमस्कार, मी मराठीत बोलू शकतो.",
      voiceLang: "mr-IN"
    },
    gujarati: { 
      name: "Gujarati", 
      speakers: "56M+", 
      region: "Gujarat", 
      color: "bg-yellow-500",
      sampleText: "નમસ્તે, હું ગુજરાતીમાં બોલી શકું છું.",
      voiceLang: "gu-IN"
    },
    kannada: { 
      name: "Kannada", 
      speakers: "44M+", 
      region: "Karnataka", 
      color: "bg-pink-500",
      sampleText: "ನಮಸ್ಕಾರ, ನಾನು ಕನ್ನಡದಲ್ಲಿ ಮಾತನಾಡಬಲ್ಲೆ.",
      voiceLang: "kn-IN"
    },
    odia: { 
      name: "Odia", 
      speakers: "38M+", 
      region: "Odisha", 
      color: "bg-indigo-500",
      sampleText: "ନମସ୍କାର, ମୁଁ ଓଡ଼ିଆରେ କହିପାରିବି।",
      voiceLang: "or-IN"
    },
    malayalam: { 
      name: "Malayalam", 
      speakers: "35M+", 
      region: "Kerala", 
      color: "bg-teal-500",
      sampleText: "നമസ്കാരം, എനിക്ക് മലയാളത്തിൽ സംസാരിക്കാൻ കഴിയും.",
      voiceLang: "ml-IN"
    },
    punjabi: { 
      name: "Punjabi", 
      speakers: "33M+", 
      region: "Punjab", 
      color: "bg-cyan-500",
      sampleText: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਮੈਂ ਪੰਜਾਬੀ ਵਿੱਚ ਬੋਲ ਸਕਦਾ ਹਾਂ।",
      voiceLang: "pa-IN"
    }
  };

  const allLanguages = [
    "Hindi", "Bengali", "Tamil", "Telugu", "Marathi", "Gujarati", "Kannada", 
    "Odia", "Malayalam", "Punjabi", "Assamese", "Maithili", "Urdu", "Konkani", 
    "Bodo", "Dogri", "Santali", "Manipuri", "Kashmiri", "Sindhi", "Sanskrit", "Nepali"
  ];

  const playVoiceDemo = async (languageKey: string) => {
    const language = languages[languageKey];
    if (!language) return;

    try {
      setIsPlaying(true);
      
      // Check if browser supports speech synthesis
      if (!window.speechSynthesis) {
        toast.error("Speech synthesis not supported in this browser");
        return;
      }

      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(language.sampleText);
      
      // Try to find the appropriate voice
      const voices = window.speechSynthesis.getVoices();
      const targetVoice = voices.find(voice => 
        voice.lang.startsWith(language.voiceLang.split('-')[0]) || 
        voice.lang === language.voiceLang
      );
      
      if (targetVoice) {
        utterance.voice = targetVoice;
      }
      
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onstart = () => {
        toast.success(`Playing ${language.name} voice demo`);
      };

      utterance.onend = () => {
        setIsPlaying(false);
      };

      utterance.onerror = (error) => {
        console.error('Speech synthesis error:', error);
        toast.error(`Voice demo failed for ${language.name}`);
        setIsPlaying(false);
      };

      window.speechSynthesis.speak(utterance);
      
    } catch (error) {
      console.error('Voice demo error:', error);
      toast.error("Voice demo failed. Please try again.");
      setIsPlaying(false);
    }
  };

  const viewExamples = (languageKey: string) => {
    const language = languages[languageKey];
    if (!language) return;
    
    toast.info(`${language.name} Examples:\n• Translation API\n• Voice Recognition\n• Text Processing\n• OCR Support`, {
      duration: 4000
    });
  };

  const stopVoice = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  return (
    <section id="languages" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Supported Languages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive language support across India with interactive demos and voice samples
          </p>
        </div>

        {/* Interactive Map */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Language Map</h3>
            <p className="text-gray-600">Click on any language to explore tools, examples, and voice demos</p>
          </div>

          {/* Map Container */}
          <div className="relative bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-12 min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-4 bg-white/20 rounded-lg flex items-center justify-center">
              <MapPin className="w-16 h-16 text-orange-500 mb-4" />
            </div>
            
            {/* Language Hotspots */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 absolute inset-8">
              {Object.entries(languages).slice(0, 10).map(([key, lang]) => (
                <button
                  key={key}
                  onClick={() => setSelectedLanguage(key)}
                  className={`${lang.color} text-white rounded-lg p-3 text-sm font-semibold hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl ${
                    selectedLanguage === key ? 'ring-4 ring-white scale-105' : ''
                  }`}
                >
                  <div className="flex items-center justify-center mb-1">
                    <Square className="w-3 h-3 mr-1" />
                    {lang.name}
                  </div>
                  <div className="text-xs opacity-90">{lang.speakers}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Language Details */}
          {selectedLanguage && languages[selectedLanguage] && (
            <Card className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold mb-2">{languages[selectedLanguage].name}</h4>
                    <div className="flex items-center justify-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span className="font-semibold">{languages[selectedLanguage].speakers}</span>
                    </div>
                    <p className="text-sm opacity-90 mt-1">{languages[selectedLanguage].region}</p>
                    <div className="mt-3 text-xs bg-white/20 rounded p-2">
                      <p className="opacity-90">Sample Text:</p>
                      <p className="font-medium">{languages[selectedLanguage].sampleText}</p>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-3">
                    {!isPlaying ? (
                      <Button 
                        onClick={() => playVoiceDemo(selectedLanguage)}
                        className="bg-white text-gray-900 hover:bg-gray-100 w-full"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Try Voice Demo
                      </Button>
                    ) : (
                      <Button 
                        onClick={stopVoice}
                        className="bg-red-600 text-white hover:bg-red-700 w-full"
                      >
                        <Square className="w-4 h-4 mr-2" />
                        Stop Voice
                      </Button>
                    )}
                    <Button 
                      onClick={() => viewExamples(selectedLanguage)}
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-gray-900 w-full"
                    >
                      View Examples
                    </Button>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Volume2 className="w-4 h-4 mr-2" />
                      Speech Recognition
                    </div>
                    <div className="flex items-center">
                      <Volume2 className="w-4 h-4 mr-2" />
                      Text Translation
                    </div>
                    <div className="flex items-center">
                      <Volume2 className="w-4 h-4 mr-2" />
                      Voice Synthesis
                    </div>
                    <div className="flex items-center">
                      <Volume2 className="w-4 h-4 mr-2" />
                      OCR Support
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* All Languages Grid */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">All Supported Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {allLanguages.map((language, index) => (
              <div key={index} className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow cursor-pointer hover:bg-orange-50">
                <span className="text-sm font-medium text-gray-700">{language}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageMap;
