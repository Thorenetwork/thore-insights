
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Languages, Mail, Phone, MapPin, Github, 
  Twitter, Linkedin, Youtube, Globe, Send 
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "News & Media", href: "#news" },
      { name: "Contact", href: "#contact" }
    ],
    solutions: [
      { name: "Voice Recognition", href: "#solutions" },
      { name: "Language Translation", href: "#solutions" },
      { name: "OCR & Document AI", href: "#solutions" },
      { name: "Multilingual Chatbots", href: "#solutions" },
      { name: "Educational Tools", href: "#solutions" }
    ],
    resources: [
      { name: "Developer Docs", href: "#resources" },
      { name: "API Reference", href: "#resources" },
      { name: "Open Source", href: "#resources" },
      { name: "Research Papers", href: "#resources" },
      { name: "Community Forum", href: "#resources" }
    ],
    support: [
      { name: "Help Center", href: "#support" },
      { name: "Platform Status", href: "#status" },
      { name: "Report Issue", href: "#contact" },
      { name: "Feature Requests", href: "#contact" },
      { name: "Security", href: "#security" }
    ]
  };

  const languages = [
    { name: "Hindi", code: "🇮🇳" },
    { name: "Tamil", code: "🇮🇳" },
    { name: "Bengali", code: "🇮🇳" },
    { name: "Telugu", code: "🇮🇳" },
    { name: "Marathi", code: "🇮🇳" },
    { name: "Gujarati", code: "🇮🇳" }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#", name: "GitHub" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", name: "YouTube" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated with AI Bhasha</h3>
            <p className="text-xl text-white/90 mb-8">
              Get the latest updates on Indic language technology, new features, and research insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="bg-white text-gray-900 border-0"
              />
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-white/80 mt-4">
              Join 25,000+ subscribers. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Languages className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Indic Language Revolution</h3>
                  <p className="text-sm text-gray-400">Empowering Bharat with AI-powered Language Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Breaking down language barriers and connecting millions of Indians to technology 
                in their native tongue through advanced AI and NLP solutions.
              </p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-orange-500" />
                  <span className="text-gray-400">hello@indiclanguage.in</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-orange-500" />
                  <span className="text-gray-400">+91-80-4567-8901</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-orange-500" />
                  <span className="text-gray-400">Bangalore, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-orange-500 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Solutions</h4>
              <ul className="space-y-3 text-sm">
                {footerLinks.solutions.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-orange-500 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-3 text-sm">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-orange-500 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-3 text-sm">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-orange-500 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Language Selector & Social Links */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Language Selector */}
            <div className="flex items-center space-x-4 mb-6 lg:mb-0">
              <Globe className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 text-sm">Choose Language:</span>
              <div className="flex space-x-2">
                {languages.map((lang, index) => (
                  <button
                    key={index}
                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors flex items-center space-x-1"
                  >
                    <span>{lang.code}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              © 2024 Indic Language Revolution. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-orange-500 transition-colors">Terms of Use</a>
              <a href="#cookies" className="hover:text-orange-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
