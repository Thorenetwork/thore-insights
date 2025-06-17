
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuickStats from '@/components/QuickStats';
import About from '@/components/About';
import Solutions from '@/components/Solutions';
import LanguageMap from '@/components/LanguageMap';
import Platform from '@/components/Platform';
import Impact from '@/components/Impact';
import Partners from '@/components/Partners';
import Resources from '@/components/Resources';
import Careers from '@/components/Careers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import VideoPlayer from '@/components/VideoPlayer';

const Index = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header onWatchVideo={() => setShowVideo(true)} />

      {/* Video Modal */}
      {showVideo && (
        <VideoPlayer onClose={() => setShowVideo(false)} />
      )}

      {/* Hero Section */}
      <Hero onWatchVideo={() => setShowVideo(true)} />

      {/* Quick Stats */}
      <QuickStats />

      {/* About Section */}
      <About />

      {/* Solutions Section */}
      <Solutions />

      {/* Language Map */}
      <LanguageMap />

      {/* Platform Section */}
      <Platform />

      {/* Impact Section */}
      <Impact />

      {/* Partners Section */}
      <Partners />

      {/* Resources Section */}
      <Resources />

      {/* Careers Section */}
      <Careers />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
