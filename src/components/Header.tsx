
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Play, Brain } from 'lucide-react';

interface HeaderProps {
  onWatchVideo: () => void;
}

const Header = ({ onWatchVideo }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Solutions', href: '/#solutions' },
    { name: 'Languages', href: '/#languages' },
    { name: 'Platform', href: '/#platform' },
    { name: 'Impact', href: '/#impact' },
    { name: 'Insights', href: '/insights', isRoute: true }
  ];

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      return location.pathname === '/' && location.hash === href.substring(1);
    }
    return location.pathname === href;
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
              item.isRoute ? (
                <Link
                  key={item.name}
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
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium text-sm transition-colors ${
                    isActive(item.href) 
                      ? 'text-orange-600' 
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  {item.name}
                </a>
              )
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
    </header>
  );
};

export default Header;
