
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, MessageCircle, Languages, FileText, GraduationCap } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Mic className="w-12 h-12 text-blue-600" />,
      title: "Voice Recognition & Transcription",
      description: "Real-time speech-to-text in regional dialects with 99%+ accuracy",
      features: ["Multi-dialect support", "Real-time processing", "Noise cancellation", "Custom voice training"],
      color: "blue"
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-green-600" />,
      title: "Multilingual Chatbots",
      description: "AI Assistants in local languages for banks, government portals, and hospitals",
      features: ["Context awareness", "Domain-specific training", "24/7 availability", "Multi-platform integration"],
      color: "green"
    },
    {
      icon: <Languages className="w-12 h-12 text-purple-600" />,
      title: "Language Translation API",
      description: "Plug into websites/apps to offer instant regional translations",
      features: ["Real-time translation", "Cultural context preservation", "Batch processing", "High-speed API"],
      color: "purple"
    },
    {
      icon: <FileText className="w-12 h-12 text-orange-600" />,
      title: "OCR & Document AI",
      description: "Extract data from physical forms in local scripts with high precision",
      features: ["Handwriting recognition", "Multiple script support", "Form digitization", "Data validation"],
      color: "orange"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-red-600" />,
      title: "Educational Tools",
      description: "Language learning bots and speech feedback systems for students",
      features: ["Pronunciation training", "Interactive lessons", "Progress tracking", "Gamified learning"],
      color: "red"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive language technology solutions designed to bridge the digital divide across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                  {solution.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  Try Demo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Digital Services?</h3>
          <p className="text-gray-600 mb-6">Join hundreds of organizations already using our language solutions</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
