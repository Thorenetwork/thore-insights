
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoPlayerProps {
  onClose: () => void;
}

const VideoPlayer = ({ onClose }: VideoPlayerProps) => {
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
            autoPlay
            className="w-full h-full object-cover"
            poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGXW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjk3MzE2O3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlZjQ0NDQ7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHRLEHU4IHg9IjQwMCIgeT0iMjI1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyNHB4IiBmb250LWZhbWlseT0iQXJpYWwiPkluZGljIExhbmd1YWdlIFByb2plY3Q8L3RleHQ+Cjwvc3ZnPgo="
          >
            {/* Video source - You can replace this with actual video URL */}
            <source 
              src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" 
              type="video/mp4" 
            />
            <p className="text-white text-center p-8">
              Your browser doesn't support HTML5 video. 
              <br />
              <a href="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" className="text-orange-400 underline">
                Download the video instead
              </a>
            </p>
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
