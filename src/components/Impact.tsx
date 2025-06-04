
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';

const Impact = () => {
  const metrics = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      value: "50M+",
      label: "Users Reached",
      description: "Indians now accessing digital services in their native language"
    },
    {
      icon: <Globe className="w-12 h-12 text-green-600" />,
      value: "22+",
      label: "Languages Supported",
      description: "Covering all official Indian languages with regional dialects"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
      value: "300%",
      label: "Engagement Increase",
      description: "Higher user engagement when services are in native language"
    },
    {
      icon: <Award className="w-12 h-12 text-orange-600" />,
      value: "99.5%",
      label: "Accuracy Rate",
      description: "Industry-leading accuracy in Indic language processing"
    }
  ];

  const successStories = [
    {
      title: "Government Digital Services",
      description: "Enabled 10M+ citizens to access government services in their preferred language",
      impact: "40% increase in service adoption"
    },
    {
      title: "Educational Platforms",
      description: "Powered multilingual learning platforms reaching rural students",
      impact: "25% improvement in learning outcomes"
    },
    {
      title: "Healthcare Access",
      description: "Facilitated telemedicine consultations in local languages",
      impact: "60% increase in rural healthcare access"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact & Results</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measuring the real-world impact of our Indic language solutions across various sectors
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white border-0">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <CardTitle className="text-lg font-semibold text-gray-700">{metric.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{story.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg text-center font-semibold">
                  {story.impact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
