
import { Button } from '@/components/ui/button';
import { Play, Globe, ArrowRight, Mic, Upload, Users } from 'lucide-react';

interface HeroProps {
  onWatchVideo: () => void;
}

const Hero = ({ onWatchVideo }: HeroProps) => {
  return (
    <section id="home" className="py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="container mx-auto text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Indic Language
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Revolution</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            Bridging India's Digital Divide
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
            Empowering Bharat with AI-powered Language Solutions for 22+ Indian languages.
            Breaking barriers and connecting millions to technology in their native tongue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={onWatchVideo}
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 text-lg animate-fade-in hover-scale"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Full Presentation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg animate-fade-in hover-scale border-orange-500 text-orange-600 hover:bg-orange-50"
            >
              <Globe className="w-5 h-5 mr-2" />
              Explore Platform
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Call-to-Actions */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Mic className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Try Voice-to-Text Demo</h3>
              <p className="text-gray-600 mb-4">Experience real-time speech recognition in your language</p>
              <Button className="w-full bg-orange-500 hover:bg-orange-600">Try Demo</Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Upload className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Upload Document to Translate</h3>
              <p className="text-gray-600 mb-4">Instant translation for documents in local languages</p>
              <Button className="w-full bg-blue-500 hover:bg-blue-600">Upload Now</Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Join AI Bhasha Fellowship</h3>
              <p className="text-gray-600 mb-4">Be part of India's language AI revolution</p>
              <Button className="w-full bg-green-500 hover:bg-green-600">Join Fellowship</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
