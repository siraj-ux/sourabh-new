import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, ShieldCheck, Activity, Target } from "lucide-react";

const WorkshopLearningSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const points = [
    {
      title: "Real Root Cause",
      desc: "Why pain often persists despite medication or rest.",
      icon: <Search className="w-5 h-5" />,
    },
    {
      title: "FM4 Framework",
      desc: "How this unique approach works to restore natural movement.",
      icon: <Target className="w-5 h-5" />,
    },
    {
      title: "Posture Principles",
      desc: "Simple principles that influence long-term musculoskeletal health.",
      icon: <Activity className="w-5 h-5" />,
    },
    {
      title: "Injury Prevention",
      desc: "Strategies to maintain mobility and prevent future problems.",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
  ];

  return (
    <section ref={ref} className="relative bg-[#F8FAFC] py-8 md:py-12 px-4 overflow-hidden">
      
      {/* GRAPHIC DECOR: Subtle background circle */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[#0047AB]/5 rounded-full blur-3xl opacity-60" />

      <div className={`max-w-5xl mx-auto relative z-10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        
        {/* HEADER - More compact */}
        <div className="text-center mb-6 md:mb-10">
          <p className="text-[#0047AB] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2">
            Interactive Curriculum
          </p>
          <h2 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight">
            What You Will <span className="text-[#0047AB]">Learn In This Workshop</span>
          </h2>
        </div>

        {/* CURRICULUM GRID - Reduced height with flex items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto">
          {points.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white/80 backdrop-blur-md p-4 md:p-5 rounded-2xl shadow-sm border border-slate-200 
                         flex items-center gap-4 hover:shadow-md hover:border-[#0047AB]/30 transition-all duration-300"
            >
              {/* ICON BLOCK */}
              <div className="flex-shrink-0 w-12 h-12 bg-[#0047AB] text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                {item.icon}
              </div>

              {/* TEXT CONTENT */}
              <div className="flex flex-col">
                <h3 className="text-slate-900 font-black text-sm md:text-base leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 font-medium text-[11px] md:text-xs leading-relaxed mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SUBTLE BOTTOM ACCENT */}
        <div className="mt-8 flex justify-center">
          <div className="bg-slate-200/50 px-4 py-1.5 rounded-full">
            <p className="text-slate-500 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.1em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#0047AB] rounded-full animate-pulse" />
              LIVE Interactive Sessions • LIMITED AVAILABILITY
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkshopLearningSection;