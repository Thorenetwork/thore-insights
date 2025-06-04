
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Github, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Chief Technology Officer",
      expertise: ["NLP Research", "AI/ML", "Linguistics"],
      description: "15+ years in computational linguistics with PhD from IIT Delhi. Led multiple government AI initiatives.",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      name: "Priya Sharma",
      role: "Head of Product",
      expertise: ["Product Strategy", "UX Design", "Market Research"],
      description: "Former Google PM with expertise in language technologies and user experience design.",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Arjun Patel",
      role: "Lead Developer",
      expertise: ["Full Stack", "Cloud Architecture", "DevOps"],
      description: "Senior engineer with 12+ years building scalable systems for Fortune 500 companies.",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      name: "Dr. Meena Iyer",
      role: "Linguistics Director",
      expertise: ["Sanskrit", "Regional Languages", "Cultural Context"],
      description: "Renowned linguist specializing in Indian languages with 20+ years of research experience.",
      image: "photo-1461749280684-dccba630e2f6"
    }
  ];

  const advisors = [
    { name: "Prof. Vikram Singh", role: "AI Research Advisor", affiliation: "IIT Bombay" },
    { name: "Ms. Kavya Nair", role: "Government Relations", affiliation: "Former MEITY" },
    { name: "Mr. Ravi Gupta", role: "Business Strategy", affiliation: "Ex-Microsoft India" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experts behind India's most advanced Indic language processing platform
          </p>
        </div>

        {/* Core Team */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">{member.name}</CardTitle>
                <p className="text-sm text-orange-600 font-semibold">{member.role}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.expertise.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-center space-x-3">
                  <Linkedin className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
                  <Github className="w-4 h-4 text-gray-400 hover:text-gray-800 cursor-pointer" />
                  <Mail className="w-4 h-4 text-gray-400 hover:text-red-600 cursor-pointer" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advisors */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Advisory Board</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <Card key={index} className="bg-white border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <h4 className="font-bold text-gray-900 mb-1">{advisor.name}</h4>
                  <p className="text-sm text-orange-600 mb-1">{advisor.role}</p>
                  <p className="text-xs text-gray-500">{advisor.affiliation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
