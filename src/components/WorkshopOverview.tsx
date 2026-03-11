import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2, Video, Timer, Globe, Star } from "lucide-react";

const WorkshopOverview = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  const details = [
    { label: "Format", value: "Live Online Interactive", icon: <Video className="w-4 h-4" /> },
    { label: "Duration", value: "90 Minutes", icon: <Timer className="w-4 h-4" /> },
    { label: "Access", value: "Attend from anywhere", icon: <Globe className="w-4 h-4" /> },
  ];

  const gains = [
    "Understand why pain keeps returning",
    "Learn the fundamentals of root-cause therapy",
    "Discover strategies to improve movement",
    "Gain knowledge for long-term health"
  ];

  const highlights = [
    "Live expert session",
    "Educational presentation",
    "Interactive Q&A",
    "Practical insights"
  ];

  return (
    <section ref={ref} className="bg-slate-50 py-12 md:py-20 px-4 border-y border-slate-200">
      <div className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        
        {/* LEFT CARD: WORKSHOP SPECS */}
        <div className="bg-[#1E293B] text-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="flex items-center gap-2 text-sm font-black mb-8 uppercase tracking-[0.2em] text-blue-400">
              <Star className="w-4 h-4 fill-current" /> Workshop Details
            </h3>
            
            <div className="space-y-6 mb-10">
              {details.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3 opacity-70 text-sm font-medium">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <span className="font-bold text-sm md:text-base text-right text-blue-50">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white/5 p-5 rounded-2xl border border-white/10">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[12px] font-bold text-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT CARD: LEARNING OUTCOMES */}
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              What Participants <span className="text-[#0047AB]">Gain</span>
            </h3>
            <p className="text-slate-500 font-medium text-sm md:text-base">
              A comprehensive deep-dive into long-term relief and natural movement restoration.
            </p>
          </div>

          <div className="grid gap-4">
            {gains.map((gain, i) => (
              <div 
                key={i} 
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors"
              >
                <div className="bg-green-100 p-1 rounded-full mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-slate-800 font-bold text-sm md:text-base leading-snug">
                  {gain}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WorkshopOverview;