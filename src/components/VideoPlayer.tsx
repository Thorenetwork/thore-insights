
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
        
        <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Thore Network Indic Language Project</h3>
            <p className="text-lg mb-8">Complete Video Presentation</p>
            
            {/* Video content placeholder */}
            <div className="bg-black/20 rounded-lg p-8 max-w-2xl mx-auto">
              <div className="space-y-6 text-left">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Presentation Agenda:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Project Overview & Vision</li>
                    <li>• Technical Architecture</li>
                    <li>• Language Support Capabilities</li>
                    <li>• Real-world Applications</li>
                    <li>• Impact & Success Stories</li>
                    <li>• Future Roadmap</li>
                    <li>• Partnership Opportunities</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm opacity-80">
                    Duration: 25 minutes | Format: HD Video with Interactive Elements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white">
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
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
