
import { useState } from 'react';
import { Play, Globe, Users, Award, ChevronRight, Languages, Database, Cpu, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import VideoPlayer from '@/components/VideoPlayer';
import TechStack from '@/components/TechStack';
import Impact from '@/components/Impact';
import Team from '@/components/Team';

const Index = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Languages className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">Thore Network</h1>
              <p className="text-sm text-gray-600">Indic Language Solutions</p>
            </div>
          </div>
          <Button 
            onClick={() => setShowVideo(true)}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
          >
            <Play className="w-4 h-4 mr-2" />
            Watch Presentation
          </Button>
        </div>
      </header>

      {/* Video Modal */}
      {showVideo && (
        <VideoPlayer onClose={() => setShowVideo(false)} />
      )}

      {/* Hero Section */}
      <Hero onWatchVideo={() => setShowVideo(true)} />

      {/* Features Section */}
      <Features />

      {/* Tech Stack */}
      <TechStack />

      {/* Impact Metrics */}
      <Impact />

      {/* Detailed Project Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive details about our Indic Language Processing Platform
            </p>
          </div>

          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="features">Core Features</TabsTrigger>
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Database className="w-8 h-8 text-blue-600" />,
                    title: "Multi-lingual Database",
                    description: "Comprehensive database supporting 22+ Indian languages with advanced indexing"
                  },
                  {
                    icon: <Cpu className="w-8 h-8 text-green-600" />,
                    title: "AI-Powered Processing",
                    description: "Advanced NLP algorithms specifically trained for Indic language patterns"
                  },
                  {
                    icon: <Shield className="w-8 h-8 text-purple-600" />,
                    title: "Enterprise Security",
                    description: "Bank-grade security with end-to-end encryption for sensitive data"
                  }
                ].map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mb-2">{feature.icon}</div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="languages" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  'Hindi', 'Bengali', 'Telugu', 'Marathi', 'Tamil', 'Gujarati', 'Urdu', 'Kannada',
                  'Odia', 'Malayalam', 'Punjabi', 'Assamese', 'Maithili', 'Sanskrit', 'Nepali', 'Konkani'
                ].map((language, index) => (
                  <Badge key={index} variant="outline" className="p-3 text-center justify-center">
                    {language}
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="applications" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Government Services",
                    items: ["Digital India initiatives", "E-governance platforms", "Citizen service portals", "Document management"]
                  },
                  {
                    title: "Education & Research",
                    items: ["Online learning platforms", "Research databases", "Academic content management", "Language preservation"]
                  },
                  {
                    title: "Business Solutions",
                    items: ["Customer support systems", "Content localization", "Market research tools", "Communication platforms"]
                  },
                  {
                    title: "Healthcare",
                    items: ["Telemedicine platforms", "Patient record systems", "Medical transcription", "Health information systems"]
                  }
                ].map((application, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">{application.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {application.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-gray-600">
                            <ChevronRight className="w-4 h-4 mr-2 text-orange-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="roadmap" className="mt-8">
              <div className="space-y-8">
                {[
                  {
                    phase: "Phase 1 - Foundation",
                    timeline: "Q1 2024",
                    status: "Completed",
                    items: ["Core platform development", "Basic language support", "API framework"]
                  },
                  {
                    phase: "Phase 2 - Enhancement",
                    timeline: "Q2-Q3 2024",
                    status: "In Progress",
                    items: ["Advanced NLP features", "Machine learning integration", "Performance optimization"]
                  },
                  {
                    phase: "Phase 3 - Scale",
                    timeline: "Q4 2024",
                    status: "Planned",
                    items: ["Enterprise deployment", "Regional partnerships", "Mobile applications"]
                  },
                  {
                    phase: "Phase 4 - Innovation",
                    timeline: "2025",
                    status: "Future",
                    items: ["AI voice recognition", "Real-time translation", "AR/VR integration"]
                  }
                ].map((phase, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-4 h-4 bg-orange-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                        <Badge variant={phase.status === 'Completed' ? 'default' : phase.status === 'In Progress' ? 'destructive' : 'secondary'}>
                          {phase.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{phase.timeline}</p>
                      <ul className="space-y-1">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-600 flex items-center">
                            <ChevronRight className="w-4 h-4 mr-2 text-orange-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Languages className="w-6 h-6 text-orange-500" />
                <span className="font-bold text-xl">Thore Network</span>
              </div>
              <p className="text-gray-400">
                Empowering India's digital future through advanced Indic language technologies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Language Processing</li>
                <li>Content Management</li>
                <li>Translation Services</li>
                <li>API Integration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Government</li>
                <li>Education</li>
                <li>Healthcare</li>
                <li>Banking & Finance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@thorenetwork.com</li>
                <li>+91 (0) 000 000 0000</li>
                <li>Mumbai, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Thore Network PVT LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
