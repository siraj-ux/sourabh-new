import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Info, AlertCircle } from "lucide-react";

const TreatmentFailureSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const causes = [
    "Poor alignment",
    "Muscle imbalance",
    "Restricted joint mobility",
    "Dysfunctional movement patterns",
  ];

  return (
    <section ref={ref} className="bg-white py-10 md:py-14 border-b border-slate-100 overflow-hidden">
      <div className={`container max-w-5xl mx-auto px-5 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}>
        
        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Left: Headline & Description (50%) */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-4">
              <Info className="w-3 h-3" />
              Root Cause Analysis
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
              Why Most Pain <br />
              <span className="text-blue-600 underline decoration-blue-200">Treatments Fail</span>
            </h2>
            
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Many people rely on painkillers, injections, or temporary fixes. These approaches may reduce symptoms temporarily but often <span className="font-bold text-slate-800">fail to address the real cause</span> of the problem.
            </p>
          </div>

          {/* Right: The List (50%) */}
          <div className="flex-1 w-full">
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 relative">
              <h3 className="text-slate-400 font-bold text-[11px] uppercase tracking-wider mb-5">
                Common underlying causes:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {causes.map((cause, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                    <span className="text-slate-800 font-bold text-sm leading-tight italic">
                      {cause}
                    </span>
                  </div>
                ))}
              </div>

              {/* Warning: Integrated at bottom of right box */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-red-600 font-bold text-xs md:text-sm italic leading-snug">
                  "Unless these issues are corrected, pain tends to return again and again."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TreatmentFailureSection;