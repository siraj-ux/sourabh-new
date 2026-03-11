import { CheckCircle2, ArrowRight, Flame } from "lucide-react";
import painImage from "@/assets/pain.webp";

const WorkshopSectionOne = () => {
  const benefits = [
    "Chronic pain & stiffness",
    "Restricted mobility",
    "Posture-related problems",
    "Neck, back, knee & shoulder pain",
  ];

  return (
    <section className="bg-white py-6 md:py-10 border-b border-slate-100">
      <div className="container max-w-5xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Top/Left: Responsive Image */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 flex-shrink-0 relative">
            <div className="absolute inset-0 bg-blue-100 rounded-2xl rotate-3 -z-10"></div>
            <img 
              src={painImage} 
              alt="Workshop Professional" 
              className="w-full h-full object-cover rounded-2xl shadow-lg border-2 border-white"
            />
          </div>

          {/* Bottom/Right: Content Area */}
          <div className="flex-1 text-center lg:text-left min-w-0">
            
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-black text-slate-900 leading-[1.2] mb-3 break-words">
              Discover the <span className="text-blue-600">Root Cause</span> of Your Pain & Learn How to Fix It Naturally
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-bold mb-4 leading-snug">
              Move Better. Feel Stronger. Live Pain Free — <span className="text-blue-600 underline underline-offset-4 decoration-2">No Medication or Surgery.</span>
            </p>

            <p className="text-xs sm:text-sm text-slate-500 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Join this live online workshop by <span className="font-bold text-slate-800">Fitness Master</span> and discover a proven approach to correct musculoskeletal pain at its source.
            </p>

            {/* Fixed Benefit List: Wraps correctly on all screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8 max-w-xl mx-auto lg:mx-0 text-left">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-semibold leading-tight">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Container with Razorpay Link */}
            <div className="flex flex-col items-center lg:items-start space-y-3">
              <a
                href="https://pages.razorpay.com/pl_SIpsxh7hbcrVQR/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-full py-4 px-10 font-bold text-lg md:text-xl transition-all shadow-md shadow-blue-100 active:scale-95"
              >
                Reserve Your Spot Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center gap-2 text-red-600 font-extrabold text-[12px] uppercase tracking-wider animate-pulse">
                <Flame className="w-4 h-4 fill-red-600" />
                Limited Seats Available
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSectionOne;