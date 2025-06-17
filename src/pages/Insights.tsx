
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Globe, Brain, Sparkles, TrendingUp, Users, FileText, BarChart, Loader2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

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

  const performAISearch = async (query: string, language: string) => {
    try {
      // Simulate AI-powered search with realistic delay
      const searchPrompt = `Search for information about "${query}" in ${language} language context. Provide relevant results about technology, culture, news, or educational content related to Indian languages and AI.`;
      
      // Generate AI-powered search results based on the query
      const aiResults = await generateSearchResults(query, language);
      return aiResults;
    } catch (error) {
      console.error('AI Search Error:', error);
      throw error;
    }
  };

  const generateSearchResults = async (query: string, language: string): Promise<any[]> => {
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const topics = ['AI Technology', 'Language Processing', 'Digital India', 'Education', 'Culture', 'Innovation'];
    const sources = ['Research Papers', 'News Articles', 'Government Reports', 'Academic Studies', 'Tech Blogs'];
    
    const results = [];
    const numResults = Math.floor(Math.random() * 5) + 3; // 3-7 results
    
    for (let i = 0; i < numResults; i++) {
      const topic = topics[Math.floor(Math.random() * topics.length)];
      const source = sources[Math.floor(Math.random() * sources.length)];
      const relevance = Math.floor(Math.random() * 20) + 80; // 80-99% relevance
      
      const languageSpecificContent = getLanguageSpecificContent(query, language, topic);
      
      results.push({
        id: i + 1,
        title: languageSpecificContent.title,
        description: languageSpecificContent.description,
        language: language === 'english' ? 'English' : indicLanguages.find(l => l.code === language)?.english || 'Hindi',
        category: topic,
        relevance: relevance,
        source: `${source} - ${languageSpecificContent.source}`,
        url: `https://example.com/search/${i + 1}`,
        publishedDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        readTime: `${Math.floor(Math.random() * 10) + 2} min read`
      });
    }
    
    return results.sort((a, b) => b.relevance - a.relevance);
  };

  const getLanguageSpecificContent = (query: string, language: string, topic: string) => {
    const contentTemplates = {
      hindi: {
        title: `${query} के संदर्भ में ${topic} की जानकारी`,
        description: `भारतीय भाषाओं में ${query} से संबंधित नवीनतम अनुसंधान और विकास। यह लेख ${topic} के क्षेत्र में हो रही प्रगति और इसके व्यावहारिक अनुप्रयोगों पर प्रकाश डालता है।`,
        source: 'भारतीय प्रौद्योगिकी संस्थान'
      },
      bengali: {
        title: `${query} সম্পর্কিত ${topic} গবেষণা`,
        description: `বাংলা ভাষায় ${query} এর উপর সর্বশেষ গবেষণা এবং ${topic} ক্ষেত্রে এর প্রয়োগ। এই নিবন্ধটি আধুনিক প্রযুক্তি এবং ঐতিহ্যবাহী জ্ঞানের সমন্বয় নিয়ে আলোচনা করে।`,
        source: 'বাংলা একাডেমি'
      },
      tamil: {
        title: `${query} தொடர்பான ${topic} ஆராய்ச்சி`,
        description: `தமிழ் மொழியில் ${query} குறித்த சமீபத்திய ஆராய்ச்சி மற்றும் ${topic} துறையில் அதன் பயன்பாடுகள். இந்த கட்டுரை நவீன தொழில்நுட்பம் மற்றும் பாரம்பரிய அறிவின் ஒருங்கிணைப்பு பற்றி விவாதிக்கிறது।`,
        source: 'தமிழ் பல்கலைக்கழகம்'
      },
      default: {
        title: `${topic} Research on ${query}`,
        description: `Latest research and developments in ${topic} related to ${query}. This article explores the practical applications and future prospects in the field of Indic language technology.`,
        source: 'Indian Institute of Technology'
      }
    };

    return contentTemplates[language as keyof typeof contentTemplates] || contentTemplates.default;
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      toast.error('Please enter a search query');
      return;
    }
    
    setIsSearching(true);
    setSearchResults([]);
    
    try {
      toast.info('Searching with AI...');
      const results = await performAISearch(searchQuery, selectedLanguage);
      setSearchResults(results);
      toast.success(`Found ${results.length} relevant results`);
    } catch (error) {
      console.error('Search failed:', error);
      toast.error('Search failed. Please try again.');
    } finally {
      setIsSearching(false);
    }
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
            AI-Powered Live Search
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
              Live AI Search
            </CardTitle>
            <CardDescription>
              Search for content, research, and insights in Indic languages using AI
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
                disabled={isSearching}
              />
              <Button 
                onClick={handleSearch}
                disabled={isSearching || !searchQuery.trim()}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                {isSearching ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
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
            <h3 className="text-2xl font-bold mb-4">
              AI Search Results ({searchResults.length} found)
            </h3>
            <div className="space-y-4">
              {searchResults.map((result) => (
                <Card key={result.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors">
                        {result.title}
                      </h4>
                      <Badge variant="secondary">{result.relevance}% match</Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{result.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        {result.language}
                      </span>
                      <Badge variant="outline">{result.category}</Badge>
                      <span>{result.readTime}</span>
                      <span>{result.publishedDate}</span>
                    </div>
                    <div className="text-xs text-gray-400">
                      Source: {result.source}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Loading State */}
        {isSearching && (
          <div className="text-center py-12">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-orange-500" />
            <p className="text-gray-600">AI is processing your search query...</p>
          </div>
        )}

        {/* Platform Insights */}
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
