
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Play, Brain, ChevronDown, Languages, Zap, Bot, Globe, Code, Smartphone, Mic, MessageCircle, FileText, GraduationCap } from 'lucide-react';

interface HeaderProps {
  onWatchVideo: () => void;
}

const Header = ({ onWatchVideo }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const languageOptions = [
    { name: 'Hindi', script: 'Devanagari', speakers: '600M+', status: 'Live' },
    { name: 'Bengali', script: 'Bengali', speakers: '300M+', status: 'Live' },
    { name: 'Tamil', script: 'Tamil', speakers: '80M+', status: 'Live' },
    { name: 'Telugu', script: 'Telugu', speakers: '95M+', status: 'Live' },
    { name: 'Marathi', script: 'Devanagari', speakers: '90M+', status: 'Live' },
    { name: 'Gujarati', script: 'Gujarati', speakers: '60M+', status: 'Beta' },
    { name: 'Kannada', script: 'Kannada', speakers: '50M+', status: 'Beta' },
    { name: 'Malayalam', script: 'Malayalam', speakers: '40M+', status: 'Beta' }
  ];

  const platformModules = [
    { icon: <Mic className="w-5 h-5" />, name: 'Voice Translation', desc: 'Real-time speech processing' },
    { icon: <Bot className="w-5 h-5" />, name: 'AI Chatbots', desc: 'Multilingual conversational AI' },
    { icon: <FileText className="w-5 h-5" />, name: 'Document OCR', desc: 'Text extraction from images' },
    { icon: <Code className="w-5 h-5" />, name: 'API Suite', desc: 'Developer-friendly APIs' },
    { icon: <Smartphone className="w-5 h-5" />, name: 'Mobile SDKs', desc: 'Native app integration' },
    { icon: <Globe className="w-5 h-5" />, name: 'Web Platform', desc: 'Browser-based tools' }
  ];

  const solutionCategories = [
    { 
      icon: <Mic className="w-5 h-5" />, 
      name: 'Voice Solutions', 
      items: ['Speech Recognition', 'Voice Synthesis', 'Accent Training'] 
    },
    { 
      icon: <MessageCircle className="w-5 h-5" />, 
      name: 'Chatbot Solutions', 
      items: ['Banking Bots', 'Healthcare Assistants', 'Government Portals'] 
    },
    { 
      icon: <Languages className="w-5 h-5" />, 
      name: 'Translation Services', 
      items: ['Real-time Translation', 'Document Translation', 'Website Localization'] 
    },
    { 
      icon: <GraduationCap className="w-5 h-5" />, 
      name: 'Education Tools', 
      items: ['Language Learning', 'Pronunciation Training', 'Interactive Lessons'] 
    }
  ];

  const navigationItems = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Solutions', href: '/#solutions', hasDropdown: true },
    { name: 'Languages', href: '/#languages', hasDropdown: true },
    { name: 'Platform', href: '/#platform', hasDropdown: true },
    { name: 'Impact', href: '/#impact' },
    { name: 'Insights', href: '/insights', isRoute: true }
  ];

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      return location.pathname === '/' && location.hash === href.substring(1);
    }
    return location.pathname === href;
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/ba9957ad-65c7-4fb1-8e5d-9e9e114037c2.png" 
              alt="ThoreCoin Logo" 
              className="w-16 h-16 object-contain"
            />
            <div>
              <h1 className="font-bold text-xl text-gray-900">Thore Network PVT LTD</h1>
              <p className="text-xs text-gray-600">Indic Language Revolution Project</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    className={`font-medium text-sm transition-colors flex items-center gap-2 ${
                      isActive(item.href) 
                        ? 'text-orange-600' 
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                  >
                    {item.name === 'Insights' && <Brain className="w-4 h-4" />}
                    {item.name}
                  </Link>
                ) : item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={`font-medium text-sm transition-colors flex items-center gap-1 ${
                        isActive(item.href) 
                          ? 'text-orange-600' 
                          : 'text-gray-700 hover:text-orange-600'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Content */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border z-50">
                        {item.name === 'Languages' && (
                          <div className="p-6">
                            <h3 className="font-bold text-lg text-gray-900 mb-4">Supported Languages</h3>
                            <div className="grid grid-cols-2 gap-3">
                              {languageOptions.map((lang, idx) => (
                                <div key={idx} className="p-3 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors cursor-pointer">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h4 className="font-semibold text-gray-900">{lang.name}</h4>
                                      <p className="text-xs text-gray-600">{lang.script} Script</p>
                                      <p className="text-xs text-gray-500">{lang.speakers} speakers</p>
                                    </div>
                                    <span className={`text-xs px-2 py-1 rounded-full ${
                                      lang.status === 'Live' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                    }`}>
                                      {lang.status}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {item.name === 'Platform' && (
                          <div className="p-6">
                            <h3 className="font-bold text-lg text-gray-900 mb-4">Platform Modules</h3>
                            <div className="space-y-3">
                              {platformModules.map((module, idx) => (
                                <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer">
                                  <div className="text-orange-600">{module.icon}</div>
                                  <div>
                                    <h4 className="font-semibold text-gray-900">{module.name}</h4>
                                    <p className="text-sm text-gray-600">{module.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="mt-4 pt-4 border-t">
                              <Button size="sm" className="w-full bg-gradient-to-r from-orange-500 to-red-500">
                                Access Platform
                              </Button>
                            </div>
                          </div>
                        )}
                        
                        {item.name === 'Solutions' && (
                          <div className="p-6">
                            <h3 className="font-bold text-lg text-gray-900 mb-4">AI Solutions</h3>
                            <div className="space-y-4">
                              {solutionCategories.map((category, idx) => (
                                <div key={idx} className="border-l-2 border-orange-200 pl-4">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <div className="text-orange-600">{category.icon}</div>
                                    <h4 className="font-semibold text-gray-900">{category.name}</h4>
                                  </div>
                                  <ul className="space-y-1">
                                    {category.items.map((item, itemIdx) => (
                                      <li key={itemIdx} className="text-sm text-gray-600 hover:text-orange-600 cursor-pointer">
                                        • {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`font-medium text-sm transition-colors ${
                      isActive(item.href) 
                        ? 'text-orange-600' 
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={onWatchVideo}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Presentation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium py-2 flex items-center gap-2 ${
                      isActive(item.href) 
                        ? 'text-orange-600' 
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name === 'Insights' && <Brain className="w-4 h-4" />}
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`font-medium py-2 ${
                      isActive(item.href) 
                        ? 'text-orange-600' 
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <Button 
                onClick={() => {
                  onWatchVideo();
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 w-full mt-4"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Presentation
              </Button>
            </nav>
          </div>
        )}
      </div>
      
      {/* Overlay to close dropdowns when clicking outside */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </header>
  );
};

export default Header;
