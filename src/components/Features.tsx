
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Languages, Brain, Shield, Zap, Users, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Languages className="w-12 h-12 text-orange-500" />,
      title: "Multi-Language Support",
      description: "Comprehensive support for 22+ official Indian languages with advanced linguistic processing capabilities.",
      highlights: ["Real-time translation", "Context-aware processing", "Cultural nuances preserved"]
    },
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: "AI-Powered NLP",
      description: "State-of-the-art natural language processing specifically trained on Indic language patterns and structures.",
      highlights: ["Deep learning models", "Continuous improvement", "High accuracy rates"]
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption ensuring complete data protection and privacy.",
      highlights: ["ISO 27001 compliant", "Data sovereignty", "Audit trails"]
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-500" />,
      title: "High Performance",
      description: "Lightning-fast processing with scalable architecture capable of handling millions of requests per day.",
      highlights: ["Sub-second response", "Auto-scaling", "99.9% uptime"]
    },
    {
      icon: <Users className="w-12 h-12 text-red-500" />,
      title: "Developer Friendly",
      description: "Comprehensive APIs and SDKs with extensive documentation for seamless integration.",
      highlights: ["RESTful APIs", "Multiple SDKs", "24/7 support"]
    },
    {
      icon: <Globe className="w-12 h-12 text-indigo-500" />,
      title: "Cloud Native",
      description: "Built for the cloud with containerized deployment and multi-region availability.",
      highlights: ["Kubernetes ready", "Global CDN", "Edge computing"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful capabilities that make our Indic language platform the choice of enterprises across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  {feature.description}
                </CardDescription>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
