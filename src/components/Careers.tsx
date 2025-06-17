
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, MapPin, Clock, Users, Heart, 
  GraduationCap, Code, Mic, Globe 
} from 'lucide-react';

const Careers = () => {
  const openRoles = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Bangalore",
      type: "Full-time",
      experience: "5+ years",
      skills: ["Python", "TensorFlow", "NLP", "PyTorch"],
      description: "Lead development of next-generation language models for Indic languages"
    },
    {
      title: "Field Linguist",
      department: "Research",
      location: "Multiple Cities",
      type: "Full-time",
      experience: "3+ years",
      skills: ["Linguistics", "Regional Languages", "Data Collection", "Research"],
      description: "Work with communities to improve language model accuracy and cultural relevance"
    },
    {
      title: "Product Manager - Language Solutions",
      department: "Product",
      location: "Delhi",
      type: "Full-time",
      experience: "4+ years",
      skills: ["Product Strategy", "User Experience", "Market Research", "Agile"],
      description: "Drive product strategy for our multilingual platform and API offerings"
    },
    {
      title: "Community Outreach Specialist",
      department: "Outreach",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      skills: ["Community Building", "NGO Relations", "Hindi/English", "Presentations"],
      description: "Build partnerships with NGOs and government organizations across India"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Hyderabad",
      type: "Full-time",
      experience: "3+ years",
      skills: ["Kubernetes", "AWS", "Docker", "CI/CD"],
      description: "Scale our infrastructure to support millions of language processing requests"
    },
    {
      title: "ML Research Scientist",
      department: "Research",
      location: "Bangalore",
      type: "Full-time",
      experience: "PhD/6+ years",
      skills: ["Machine Learning", "Research", "Publications", "Statistics"],
      description: "Pioneer research in cross-lingual transfer learning and low-resource languages"
    }
  ];

  const internshipPrograms = [
    {
      title: "Summer Research Internship",
      duration: "3 months",
      stipend: "₹50,000/month",
      description: "Work on cutting-edge NLP research projects with our team"
    },
    {
      title: "Product Development Internship",
      duration: "6 months",
      stipend: "₹40,000/month",
      description: "Contribute to product features and user experience improvements"
    },
    {
      title: "Community Engagement Internship",
      duration: "4 months",
      stipend: "₹35,000/month",
      description: "Help connect with communities and gather linguistic insights"
    }
  ];

  const fellowshipPrograms = [
    {
      title: "Women in AI & Language Fellowship",
      duration: "12 months",
      benefits: ["₹1,00,000 grant", "Mentorship", "Conference sponsorship"],
      description: "Supporting women researchers and engineers in language AI"
    },
    {
      title: "Rural Tech Access Fellowship",
      duration: "18 months",
      benefits: ["₹1,50,000 grant", "Field work opportunity", "Publication support"],
      description: "Deploy language solutions in rural communities"
    }
  ];

  const benefits = [
    { icon: <Heart className="w-6 h-6 text-red-500" />, title: "Health & Wellness", description: "Comprehensive health insurance and wellness programs" },
    { icon: <GraduationCap className="w-6 h-6 text-blue-500" />, title: "Learning & Development", description: "Conference attendance, courses, and skill development budget" },
    { icon: <Globe className="w-6 h-6 text-green-500" />, title: "Remote Work", description: "Flexible work arrangements and remote work options" },
    { icon: <Users className="w-6 h-6 text-purple-500" />, title: "Inclusive Culture", description: "Diverse, inclusive workplace celebrating all backgrounds" }
  ];

  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join the Language Revolution</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of the team that's breaking down language barriers and empowering millions across India
          </p>
        </div>

        {/* Open Roles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Open Positions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {openRoles.map((role, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">{role.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {role.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {role.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {role.type}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-orange-50 text-orange-700">
                      {role.experience}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{role.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {role.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Internship Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Internship Programs</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {internshipPrograms.map((program, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardHeader className="text-center">
                  <GraduationCap className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                  <CardTitle className="text-lg font-bold text-gray-900">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-green-600">{program.stipend}</div>
                    <div className="text-sm text-gray-500">{program.duration}</div>
                  </div>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    Apply for Internship
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fellowship Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Fellowship Programs</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {fellowshipPrograms.map((fellowship, index) => (
              <Card key={index} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{fellowship.title}</CardTitle>
                  <div className="text-sm opacity-90">{fellowship.duration}</div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 opacity-90">{fellowship.description}</p>
                  <div className="space-y-2 mb-6">
                    {fellowship.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                    Apply for Fellowship
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Work With Us</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-0 shadow-md text-center">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join us in building technology that empowers every Indian to access digital services in their native language
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              View All Open Positions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Submit Your Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
