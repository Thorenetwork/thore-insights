
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, Code, Github, Database, Newspaper, 
  BookOpen, Download, ExternalLink, Users 
} from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      category: "Research Papers",
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      items: [
        { title: "Advances in Indic Language NLP", type: "PDF", date: "Dec 2024" },
        { title: "Cross-lingual Transfer for Indian Languages", type: "PDF", date: "Nov 2024" },
        { title: "Voice Recognition in Noisy Environments", type: "PDF", date: "Oct 2024" },
        { title: "Cultural Context in AI Translation", type: "PDF", date: "Sep 2024" }
      ]
    },
    {
      category: "Developer Documentation",
      icon: <Code className="w-8 h-8 text-green-600" />,
      items: [
        { title: "API Reference Guide", type: "Documentation", date: "Updated Daily" },
        { title: "SDK Installation Guide", type: "Documentation", date: "Dec 2024" },
        { title: "Integration Examples", type: "Code", date: "Dec 2024" },
        { title: "Best Practices Guide", type: "Documentation", date: "Nov 2024" }
      ]
    },
    {
      category: "Open Source Projects",
      icon: <Github className="w-8 h-8 text-purple-600" />,
      items: [
        { title: "Indic-Language-Toolkit", type: "Repository", stars: "2.3k" },
        { title: "Voice-Recognition-Models", type: "Repository", stars: "1.8k" },
        { title: "Translation-APIs", type: "Repository", stars: "1.2k" },
        { title: "OCR-Scripts-Indic", type: "Repository", stars: "890" }
      ]
    },
    {
      category: "Public Datasets",
      icon: <Database className="w-8 h-8 text-orange-600" />,
      items: [
        { title: "Indic Voice Corpus", size: "500GB", languages: "22" },
        { title: "Multilingual Text Dataset", size: "120GB", languages: "22" },
        { title: "Handwriting Recognition Dataset", size: "80GB", languages: "15" },
        { title: "Conversational AI Dataset", size: "200GB", languages: "18" }
      ]
    }
  ];

  const mediaKit = [
    { name: "Brand Guidelines", type: "PDF", size: "2.1 MB" },
    { name: "Logo Pack", type: "ZIP", size: "15.3 MB" },
    { name: "Product Screenshots", type: "ZIP", size: "45.2 MB" },
    { name: "Presentation Template", type: "PPTX", size: "8.7 MB" }
  ];

  const newsletters = [
    {
      title: "AI Bhasha Weekly",
      description: "Latest updates on Indic language technology",
      subscribers: "15,000+"
    },
    {
      title: "Developer Digest",
      description: "Technical updates and new API releases",
      subscribers: "8,500+"
    },
    {
      title: "Community Spotlight",
      description: "Success stories and case studies",
      subscribers: "12,000+"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive resources to accelerate your Indic language AI projects
          </p>
        </div>

        {/* Main Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    {resource.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{resource.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {resource.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {item.type}
                          </Badge>
                          <span className="text-xs text-gray-500">
                            {item.date || item.size || `${item.stars} stars` || `${item.languages} languages`}
                          </span>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="text-orange-600 hover:text-orange-700">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
                  View All
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Media Kit Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Media Kit</h3>
            <p className="text-gray-600">Resources for media, partners, and content creators</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mediaKit.map((item, index) => (
              <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <Download className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                  <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                    <Badge variant="outline" className="text-xs">
                      {item.type}
                    </Badge>
                    <span>{item.size}</span>
                  </div>
                  <Button size="sm" className="w-full mt-3 bg-blue-500 hover:bg-blue-600">
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Stay Updated</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {newsletters.map((newsletter, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardHeader className="text-center">
                  <Newspaper className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                  <CardTitle className="text-lg font-bold text-gray-900">{newsletter.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{newsletter.description}</p>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{newsletter.subscribers} subscribers</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Resources */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
          <p className="text-xl mb-8 opacity-90">
            Connect with developers, researchers, and language enthusiasts
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <Button className="bg-white text-gray-900 hover:bg-gray-100">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button className="bg-white text-gray-900 hover:bg-gray-100">
              Discord
            </Button>
            <Button className="bg-white text-gray-900 hover:bg-gray-100">
              Telegram
            </Button>
            <Button className="bg-white text-gray-900 hover:bg-gray-100">
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
