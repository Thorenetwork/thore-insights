import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, Phone, MapPin, MessageCircle, Users, 
  Building, Globe, Clock, Send 
} from 'lucide-react';

const Contact = () => {
  const contactOptions = [
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "General Inquiries",
      description: "For general questions about our platform and services",
      contact: "hello@thorenetwork.com",
      responseTime: "24 hours"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-600" />,
      title: "Platform Support",
      description: "Technical support for developers and API users",
      contact: "support@thorenetwork.com",
      responseTime: "4 hours"
    },
    {
      icon: <Building className="w-8 h-8 text-purple-600" />,
      title: "NGO/Govt Partnerships",
      description: "Collaboration opportunities for organizations",
      contact: "partnerships@thorenetwork.com",
      responseTime: "48 hours"
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "Contribute a Language",
      description: "Help us add support for new languages or dialects",
      contact: "community@thorenetwork.com",
      responseTime: "72 hours"
    }
  ];

  const officeLocations = [
    {
      city: "Bangalore",
      address: "Koramangala, Bangalore, Karnataka 560034",
      type: "Headquarters",
      phone: "+91-80-4567-8901"
    },
    {
      city: "Delhi",
      address: "Connaught Place, New Delhi, Delhi 110001",
      type: "Government Relations",
      phone: "+91-11-2345-6789"
    },
    {
      city: "Mumbai",
      address: "Bandra Kurla Complex, Mumbai, Maharashtra 400051",
      type: "Business Development",
      phone: "+91-22-9876-5432"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for support, partnerships, or to contribute to the language revolution
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactOptions.map((option, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto mb-3 p-3 bg-gray-50 rounded-full w-fit">
                  {option.icon}
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                <div className="space-y-2">
                  <a href={`mailto:${option.contact}`} className="text-orange-600 hover:text-orange-700 font-semibold text-sm block">
                    {option.contact}
                  </a>
                  <div className="flex items-center justify-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    Response in {option.responseTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <Send className="w-6 h-6 mr-3 text-orange-500" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                    <Input placeholder="Your organization (optional)" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input placeholder="Brief subject of your inquiry" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry, project, or how we can help..."
                    rows={5}
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 py-3">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Office Locations */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="w-6 h-6 mr-3 text-orange-500" />
              Our Offices
            </h3>
            <div className="space-y-6">
              {officeLocations.map((office, index) => (
                <Card key={index} className="bg-gray-50 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-gray-900">{office.city}</h4>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                        {office.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{office.address}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Phone className="w-4 h-4 mr-2" />
                      {office.phone}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Stats */}
            <Card className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold mb-4">We're Here to Help</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-xs opacity-90">Support Available</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1000+</div>
                    <div className="text-xs opacity-90">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15min</div>
                    <div className="text-xs opacity-90">Avg Response Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            Check out our comprehensive FAQ section or join our community forums for quick answers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600">
              View FAQ
            </Button>
            <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
              <Users className="w-4 h-4 mr-2" />
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
