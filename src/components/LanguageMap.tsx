
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Users, MapPin } from 'lucide-react';

const LanguageMap = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('hindi');

  const languages = {
    hindi: { name: "Hindi", speakers: "600M+", region: "North India", color: "bg-red-500" },
    bengali: { name: "Bengali", speakers: "300M+", region: "West Bengal, Bangladesh", color: "bg-green-500" },
    tamil: { name: "Tamil", speakers: "75M+", region: "Tamil Nadu, Sri Lanka", color: "bg-blue-500" },
    telugu: { name: "Telugu", speakers: "75M+", region: "Andhra Pradesh, Telangana", color: "bg-purple-500" },
    marathi: { name: "Marathi", speakers: "83M+", region: "Maharashtra", color: "bg-orange-500" },
    gujarati: { name: "Gujarati", speakers: "56M+", region: "Gujarat", color: "bg-yellow-500" },
    kannada: { name: "Kannada", speakers: "44M+", region: "Karnataka", color: "bg-pink-500" },
    odia: { name: "Odia", speakers: "38M+", region: "Odisha", color: "bg-indigo-500" },
    malayalam: { name: "Malayalam", speakers: "35M+", region: "Kerala", color: "bg-teal-500" },
    punjabi: { name: "Punjabi", speakers: "33M+", region: "Punjab", color: "bg-cyan-500" }
  };

  const allLanguages = [
    "Hindi", "Bengali", "Tamil", "Telugu", "Marathi", "Gujarati", "Kannada", 
    "Odia", "Malayalam", "Punjabi", "Assamese", "Maithili", "Urdu", "Konkani", 
    "Bodo", "Dogri", "Santali", "Manipuri", "Kashmiri", "Sindhi", "Sanskrit", "Nepali"
  ];

  return (
    <section id="languages" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Supported Languages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive language support across India with interactive demos and tools
          </p>
        </div>

        {/* Interactive Map Placeholder */}
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
                  className={`${lang.color} text-white rounded-lg p-3 text-sm font-semibold hover:scale-110 transition-transform shadow-lg ${
                    selectedLanguage === key ? 'ring-4 ring-white' : ''
                  }`}
                >
                  {lang.name}
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
                  </div>
                  
                  <div className="text-center space-y-3">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100 w-full">
                      <Play className="w-4 h-4 mr-2" />
                      Try Voice Demo
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 w-full">
                      View Examples
                    </Button>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div>✓ Speech Recognition</div>
                    <div>✓ Text Translation</div>
                    <div>✓ Voice Synthesis</div>
                    <div>✓ OCR Support</div>
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
              <div key={index} className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow">
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
