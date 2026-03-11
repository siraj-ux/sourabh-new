import React, { useState, useEffect } from "react";
import { Play, X } from "lucide-react";
// Image imports...
import kamalImg from "@/assets/kamal.webp";
import maheshImg from "@/assets/mahesh.webp";
import pallaviImg from "@/assets/pallavi.webp";
import ankitImg from "@/assets/ankit.webp";
import arthiImg from "@/assets/arthi.webp";
import rajivImg from "@/assets/rajiv.webp";
import fm4Img from "@/assets/fm4.webp";

const videos = [
  { id: "qbaYAi_4ewQ", type: "youtube", cover: kamalImg },
  { id: "S_Zf0N5tNFM", type: "youtube", cover: maheshImg },
  { id: "Hrf9OBixQxg", type: "youtube", cover: pallaviImg },
  { id: "adULn_sS3Qk", type: "youtube", cover: ankitImg },
  { id: "xcHecw4LR7I", type: "youtube", cover: arthiImg },
  { id: "lUb8YMY-0l0", type: "youtube", cover: rajivImg },
  { id: "NzDIfxfSO3I", type: "youtube", cover: fm4Img },
];

const VideoReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<typeof videos[0] | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Close modal on "Esc" key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50 && currentIndex < videos.length - 1) setCurrentIndex(prev => prev + 1);
    if (distance < -50 && currentIndex > 0) setCurrentIndex(prev => prev - 1);
    setTouchStart(null);
    setTouchEnd(null);
  };

  const VideoThumbnail = ({ v }: { v: typeof videos[0] }) => (
    <div 
      className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group bg-slate-200 border border-blue-100 shadow-md transition-transform duration-300 hover:-translate-y-1"
      onClick={() => setActiveVideo(v)}
    >
      <img src={v.cover} alt="Review" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform ring-4 ring-white/30">
          <Play className="text-white ml-1 w-6 h-6 md:w-8 md:h-8" fill="currentColor" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-10 md:py-16 overflow-hidden">
      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        
        {/* REDUCED HEADER SECTION */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-px w-6 bg-blue-400"></span>
            <span className="text-blue-600 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">Transformations</span>
            <span className="h-px w-6 bg-blue-400"></span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            <span className="text-slate-900">Before & After </span>
            <span className="text-blue-600 font-extrabold italic">Stories</span>
          </h2>
          
          <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Real transformations from our healthy community.
          </p>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-2 gap-6 lg:gap-8">
          {videos.map((v) => (
            <VideoThumbnail key={v.id} v={v} />
          ))}
        </div>

        {/* MOBILE CAROUSEL - Increased Size */}
        <div className="md:hidden -mx-2"> 
          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {videos.map((v) => (
                <div key={v.id} className="w-full flex-shrink-0 px-2">
                  <VideoThumbnail v={v} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  i === currentIndex ? "bg-blue-600 w-6" : "bg-blue-200 w-1.5"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* SINGLE VIDEO MODAL - Fixes double audio */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm">
          <button 
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors"
          >
            <X size={32} />
          </button>
          
          <div className="w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src={activeVideo.type === 'youtube' 
                ? `https://www.youtube.com/embed/${activeVideo.id}?autoplay=1` 
                : `https://player.vimeo.com/video/${activeVideo.id}?autoplay=1`
              }
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoReviewsSection;