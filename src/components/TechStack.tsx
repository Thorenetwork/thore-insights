
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Database, Cloud, Code, Shield, Zap } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      category: "AI & Machine Learning",
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      technologies: ["TensorFlow", "PyTorch", "Hugging Face", "BERT", "GPT Models", "Custom NLP Models"]
    },
    {
      category: "Database & Storage",
      icon: <Database className="w-8 h-8 text-green-600" />,
      technologies: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "Apache Kafka", "HDFS"]
    },
    {
      category: "Cloud Infrastructure",
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "CloudFormation"]
    },
    {
      category: "Development Stack",
      icon: <Code className="w-8 h-8 text-orange-600" />,
      technologies: ["Python", "Node.js", "React", "FastAPI", "Django", "TypeScript"]
    },
    {
      category: "Security & Compliance",
      icon: <Shield className="w-8 h-8 text-red-600" />,
      technologies: ["OAuth 2.0", "JWT", "SSL/TLS", "Vault", "RBAC", "Audit Logging"]
    },
    {
      category: "Performance & Monitoring",
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      technologies: ["Prometheus", "Grafana", "ELK Stack", "New Relic", "DataDog", "Load Balancers"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with cutting-edge technologies to ensure scalability, reliability, and performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="mx-auto mb-3 p-3 bg-gray-50 rounded-full w-fit">
                  {tech.icon}
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">{tech.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tech.technologies.map((technology, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {technology}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
