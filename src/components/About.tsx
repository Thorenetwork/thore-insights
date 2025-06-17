
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Clock, Award } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: "2020", event: "Founded with vision to bridge digital divide" },
    { year: "2021", event: "First AI models for Hindi and Bengali launched" },
    { year: "2022", event: "Partnership with Digital India & Bhashini" },
    { year: "2023", event: "25 language models deployed nationwide" },
    { year: "2024", event: "1 billion+ speakers coverage achieved" }
  ];

  const backers = [
    "Ministry of Electronics & IT (MeitY)",
    "Digital India Corporation",
    "Bhashini Initiative",
    "Microsoft India",
    "IIT AI Labs"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging India's digital divide through advanced NLP and AI-powered language solutions
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Target className="w-8 h-8 text-orange-500" />
                <CardTitle className="text-2xl font-bold text-gray-900">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To create a digitally inclusive India where every citizen can access technology and digital services in their native language, breaking down barriers and empowering communities across all regions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-blue-500" />
                <CardTitle className="text-2xl font-bold text-gray-900">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To develop and deploy cutting-edge AI language technologies that make digital services accessible to over 1 billion Indians in their preferred language, fostering innovation and inclusion.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Digital Language Gap */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center">The Digital Language Gap in India</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">70%</div>
              <p className="text-sm opacity-90">Indians prefer local languages online</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">22+</div>
              <p className="text-sm opacity-90">Official languages need digital support</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">800M</div>
              <p className="text-sm opacity-90">People lack access in native languages</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Timeline of the Indic AI Movement</h3>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-6">
                  {milestone.year}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backers */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Backed By</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {backers.map((backer, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm bg-white">
                {backer}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
