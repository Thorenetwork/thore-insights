
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Globe, Brain, Sparkles, TrendingUp, Users, FileText, BarChart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Insights = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('hindi');

  const indicLanguages = [
    { code: 'hindi', name: 'हिंदी', english: 'Hindi' },
    { code: 'bengali', name: 'বাংলা', english: 'Bengali' },
    { code: 'tamil', name: 'தமிழ்', english: 'Tamil' },
    { code: 'telugu', name: 'తెలుగు', english: 'Telugu' },
    { code: 'marathi', name: 'मराठी', english: 'Marathi' },
    { code: 'gujarati', name: 'ગુજરાતી', english: 'Gujarati' },
    { code: 'kannada', name: 'ಕನ್ನಡ', english: 'Kannada' },
    { code: 'malayalam', name: 'മലയാളം', english: 'Malayalam' },
    { code: 'punjabi', name: 'ਪੰਜਾਬੀ', english: 'Punjabi' },
    { code: 'urdu', name: 'اردو', english: 'Urdu' }
  ];

  const mockSearchResults = [
    {
      id: 1,
      title: "भारतीय भाषाओं में AI का विकास",
      description: "आर्टिफिशियल इंटेलिजेंस के क्षेत्र में भारतीय भाषाओं की भूमिका और उनके विकास की संभावनाएं।",
      language: "Hindi",
      category: "Technology",
      relevance: 95,
      source: "TechBharat"
    },
    {
      id: 2,
      title: "Regional Language Processing Models",
      description: "Advanced NLP models specifically designed for Indian regional languages with improved accuracy.",
      language: "English",
      category: "Research",
      relevance: 92,
      source: "AI Research India"
    },
    {
      id: 3,
      title: "भाषा प्रौद्योगिकी में नवाचार",
      description: "स्थानीय भाषाओं में डिजिटल कंटेंट बनाने के लिए नए टूल्स और तकनीकों का विकास।",
      language: "Hindi",
      category: "Innovation",
      relevance: 88,
      source: "Digital India"
    }
  ];

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults(mockSearchResults);
      setIsSearching(false);
    }, 1500);
  };

  const insights = [
    {
      title: "Language Usage Trends",
      value: "2.5M+",
      description: "Daily searches in Indic languages",
      icon: TrendingUp,
      color: "bg-blue-500"
    },
    {
      title: "Active Users",
      value: "500K+",
      description: "Users engaging with Indic content",
      icon: Users,
      color: "bg-green-500"
    },
    {
      title: "Content Database",
      value: "10M+",
      description: "Indexed documents in regional languages",
      icon: FileText,
      color: "bg-purple-500"
    },
    {
      title: "Accuracy Rate",
      value: "94%",
      description: "Search accuracy in Indic languages",
      icon: BarChart,
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onWatchVideo={() => {}} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            <Brain className="w-4 h-4" />
            AI-Powered Insights
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Indic Language AI Search Engine
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover insights, research, and knowledge in your native language with our advanced AI-powered search engine
          </p>
        </div>

        {/* Language Selector */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Select Language</h3>
          <div className="flex flex-wrap gap-2">
            {indicLanguages.map((lang) => (
              <Button
                key={lang.code}
                variant={selectedLanguage === lang.code ? "default" : "outline"}
                onClick={() => setSelectedLanguage(lang.code)}
                className="text-sm"
              >
                {lang.name} ({lang.english})
              </Button>
            ))}
          </div>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Smart Search
            </CardTitle>
            <CardDescription>
              Search for content, research, and insights in Indic languages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="Enter your search query in any Indic language..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1"
              />
              <Button 
                onClick={handleSearch}
                disabled={isSearching}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                {isSearching ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Searching...
                  </div>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Search Results</h3>
            <div className="space-y-4">
              {searchResults.map((result) => (
                <Card key={result.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">{result.title}</h4>
                      <Badge variant="secondary">{result.relevance}% match</Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{result.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        {result.language}
                      </span>
                      <Badge variant="outline">{result.category}</Badge>
                      <span>Source: {result.source}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Insights Dashboard */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6">Platform Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((insight) => (
              <Card key={insight.title}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${insight.color}`}>
                      <insight.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900">{insight.title}</h4>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{insight.value}</div>
                  <p className="text-sm text-gray-600">{insight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-500" />
                Smart Translation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Automatic translation between Indic languages with context-aware accuracy
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-orange-500" />
                AI-Powered Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Deep learning algorithms trained specifically on Indic language patterns
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-orange-500" />
                Cultural Context
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Understanding cultural nuances and regional variations in language usage
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Insights;
