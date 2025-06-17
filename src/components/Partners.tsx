
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Users, Briefcase, Heart } from 'lucide-react';

const Partners = () => {
  const governmentPartners = [
    { name: "Ministry of Electronics & IT (MeitY)", type: "Government", logo: "🏛️" },
    { name: "Digital India Corporation", type: "Government", logo: "🇮🇳" },
    { name: "Bhashini Initiative", type: "Government", logo: "🗣️" },
    { name: "National Informatics Centre", type: "Government", logo: "💻" }
  ];

  const corporatePartners = [
    { name: "Microsoft India", type: "Technology", logo: "🖥️" },
    { name: "Google Cloud India", type: "Technology", logo: "☁️" },
    { name: "Amazon Web Services", type: "Technology", logo: "🔧" },
    { name: "Tata Consultancy Services", type: "Technology", logo: "🏢" }
  ];

  const academicPartners = [
    { name: "IIT Bombay - AI Lab", type: "Academic", logo: "🎓" },
    { name: "IISc Bangalore - NLP Research", type: "Academic", logo: "🔬" },
    { name: "IIIT Hyderabad - Language Technologies", type: "Academic", logo: "📚" },
    { name: "ISI Kolkata - Computational Linguistics", type: "Academic", logo: "📊" }
  ];

  const ngoPartners = [
    { name: "SEWA (Self Employed Women's Association)", type: "NGO", logo: "👥" },
    { name: "Pratham Education Foundation", type: "NGO", logo: "📖" },
    { name: "Digital Empowerment Foundation", type: "NGO", logo: "💡" },
    { name: "Center for Internet & Society", type: "NGO", logo: "🌐" }
  ];

  const internationalPartners = [
    { name: "Mozilla Foundation", type: "International", logo: "🦊" },
    { name: "Common Voice Project", type: "International", logo: "🎤" },
    { name: "Wikimedia Foundation", type: "International", logo: "📝" },
    { name: "Unicode Consortium", type: "International", logo: "🔤" }
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Partners & Supporters</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with leading organizations to drive India's language technology revolution
          </p>
        </div>

        {/* Government Partners */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Building className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-2xl font-bold text-gray-900">Government & Public Sector</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governmentPartners.map((partner, index) => (
              <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{partner.logo}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{partner.name}</h4>
                  <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">
                    {partner.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Corporate Partners */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Briefcase className="w-6 h-6 text-green-600 mr-2" />
            <h3 className="text-2xl font-bold text-gray-900">Corporate Partners</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporatePartners.map((partner, index) => (
              <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{partner.logo}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{partner.name}</h4>
                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                    {partner.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Partners */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-6 h-6 text-purple-600 mr-2" />
            <h3 className="text-2xl font-bold text-gray-900">Academic & Research Institutions</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicPartners.map((partner, index) => (
              <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{partner.logo}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{partner.name}</h4>
                  <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700">
                    {partner.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* NGO Partners */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-6 h-6 text-red-600 mr-2" />
            <h3 className="text-2xl font-bold text-gray-900">NGO & Social Impact Partners</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ngoPartners.map((partner, index) => (
              <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{partner.logo}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{partner.name}</h4>
                  <Badge variant="outline" className="text-xs bg-red-50 text-red-700">
                    {partner.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* International Partners */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">International Collaborators</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internationalPartners.map((partner, index) => (
              <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{partner.logo}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{partner.name}</h4>
                  <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700">
                    {partner.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Become a Partner</h3>
          <p className="text-xl mb-6 opacity-90">
            Join us in building India's most comprehensive language technology ecosystem
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-bold mb-2">Technology Partners</h4>
              <p className="text-sm opacity-90">API integrations and technical collaborations</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-bold mb-2">Implementation Partners</h4>
              <p className="text-sm opacity-90">Deploy solutions in communities and organizations</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-bold mb-2">Research Partners</h4>
              <p className="text-sm opacity-90">Contribute to language AI research and development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
