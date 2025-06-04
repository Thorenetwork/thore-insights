
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoPlayerProps {
  onClose: () => void;
}

const VideoPlayer = ({ onWatchVideo }: VideoPlayerProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden animate-scale-in">
        <div className="absolute top-4 right-4 z-10">
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="rounded-full bg-black/20 hover:bg-black/40 text-white"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Video Container */}
        <div className="aspect-video bg-black flex items-center justify-center">
          <video
            controls
            className="w-full h-full"
            poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmOTczMTY7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2VmNDQ0NDtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8dGV4dCB4PSI0MDAiIHk9IjIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMjRweCIgZm9udC1mYW1pbHk9IkFyaWFsIj5JbmRpYyBMYW5ndWFnZSBQcm9qZWN0PC90ZXh0Pgo8L3N2Zz4K"
          >
            {/* Multiple video sources for better compatibility */}
            <source 
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
              type="video/mp4" 
            />
            <source 
              src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" 
              type="video/mp4" 
            />
            
            {/* Fallback content when video fails to load */}
            <div className="text-white text-center p-8 bg-gradient-to-br from-orange-500 to-red-500 w-full h-full flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold mb-4">Thore Network Indic Language Project</h3>
              <p className="text-lg mb-6">Video Presentation</p>
              <div className="space-y-2 text-sm max-w-md">
                <p>• Comprehensive overview of our Indic language platform</p>
                <p>• 22+ Indian languages supported</p>
                <p>• Advanced NLP and AI technologies</p>
                <p>• Real-world implementation examples</p>
                <p>• Future roadmap and partnerships</p>
              </div>
              <p className="text-xs mt-6 opacity-75">
                Video loading... If this persists, please check your internet connection.
              </p>
            </div>
          </video>
        </div>
        
        <div className="p-6 bg-white">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thore Network Indic Language Project</h3>
          <p className="text-gray-600 mb-4">Complete Video Presentation - Bridging Digital Divide with Advanced NLP</p>
          
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-500">25 min</div>
              <div className="text-sm text-gray-600">Full Presentation</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-500">8 Chapters</div>
              <div className="text-sm text-gray-600">Detailed Sections</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-500">Interactive</div>
              <div className="text-sm text-gray-600">Q&A Included</div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Presentation Highlights:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 22+ Indian Languages Support</li>
              <li>• Advanced NLP & AI Technologies</li>
              <li>• Real-world Implementation Cases</li>
              <li>• Partnership & Collaboration Opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
