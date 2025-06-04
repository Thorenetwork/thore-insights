
import { Button } from '@/components/ui/button';
import { Play, Globe, ArrowRight } from 'lucide-react';

interface HeroProps {
  onWatchVideo: () => void;
}

const Hero = ({ onWatchVideo }: HeroProps) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Indic Language
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Revolution</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
            Bridging the digital divide with advanced NLP solutions for 22+ Indian languages.
            Empowering millions to access technology in their native tongue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={onWatchVideo}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg animate-fade-in hover-scale"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Full Presentation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg animate-fade-in hover-scale"
            >
              <Globe className="w-5 h-5 mr-2" />
              Explore Platform
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { number: "22+", label: "Indian Languages Supported" },
              { number: "1M+", label: "Documents Processed" },
              { number: "99.5%", label: "Accuracy Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
