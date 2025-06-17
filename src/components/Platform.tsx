
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mic, Upload, BarChart3, Bot, Code, Smartphone, 
  Settings, Shield, Download, LogIn, UserPlus 
} from 'lucide-react';

const Platform = () => {
  const modules = [
    {
      icon: <Mic className="w-8 h-8 text-blue-600" />,
      title: "Voice Memo Translator",
      description: "Record voice memos and get instant translations in multiple languages",
      status: "Live"
    },
    {
      icon: <Upload className="w-8 h-8 text-green-600" />,
      title: "Document Upload & OCR",
      description: "Upload PDFs and images to extract text in local languages",
      status: "Live"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "State-wise Dashboard",
      description: "Analytics and insights for language usage across different states",
      status: "Live"
    },
    {
      icon: <Bot className="w-8 h-8 text-orange-600" />,
      title: "Voice Bot Builder",
      description: "Create interactive voice bots for customer service and support",
      status: "Beta"
    },
    {
      icon: <Code className="w-8 h-8 text-red-600" />,
      title: "API Marketplace",
      description: "Access to all language APIs with comprehensive documentation",
      status: "Live"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      title: "App Integrations",
      description: "WhatsApp, UPI Chatbot, and IVR system integrations",
      status: "Live"
    },
    {
      icon: <Settings className="w-8 h-8 text-gray-600" />,
      title: "Developer Playground",
      description: "Test and experiment with language models in real-time",
      status: "Live"
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      title: "Admin Console",
      description: "Management dashboard for NGOs and government organizations",
      status: "Live"
    }
  ];

  const integrations = [
    { name: "WhatsApp Business", icon: "💬", description: "Deploy language bots on WhatsApp" },
    { name: "UPI Chatbot", icon: "💳", description: "Payment assistance in local languages" },
    { name: "IVR Systems", icon: "📞", description: "Interactive voice response solutions" },
    { name: "Mobile Apps", icon: "📱", description: "Native mobile app integration" },
    { name: "Web APIs", icon: "🌐", description: "RESTful API endpoints" },
    { name: "Cloud Services", icon: "☁️", description: "AWS, Google Cloud, Azure" }
  ];

  return (
    <section id="platform" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore the Platform</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All-in-One Access to India's Largest Language AI Stack
          </p>
        </div>

        {/* Key Modules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {modules.map((module, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white border-0 shadow-md">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-3 p-3 bg-gray-50 rounded-full w-fit">
                  {module.icon}
                </div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <CardTitle className="text-lg font-bold text-gray-900">{module.title}</CardTitle>
                  <Badge variant={module.status === 'Live' ? 'default' : 'secondary'} className="text-xs">
                    {module.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">{module.description}</p>
                <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600">
                  Access Module
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* App Integrations */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">App Integrations</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((integration, index) => (
              <Card key={index} className="text-center bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="text-3xl mb-2">{integration.icon}</div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{integration.name}</h4>
                  <p className="text-xs text-gray-600">{integration.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Platform Access */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Platform Access</h3>
          <p className="text-xl mb-8 opacity-90">Choose your preferred way to access our language solutions</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <LogIn className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Login</h4>
              <p className="text-sm opacity-90 mb-4">Access your existing account and projects</p>
              <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                Sign In
              </Button>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <UserPlus className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Free Trial</h4>
              <p className="text-sm opacity-90 mb-4">Start with 1000 free API calls</p>
              <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                Register Free
              </Button>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <Download className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Mobile App</h4>
              <p className="text-sm opacity-90 mb-4">Download our Android application</p>
              <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                Download App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
