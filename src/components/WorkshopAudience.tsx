import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { UserCheck, ArrowRight } from "lucide-react";

const WorkshopAudience = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const audience = [
    "People suffering from chronic back or neck pain",
    "Individuals with knee, shoulder, or joint discomfort",
    "Professionals with sedentary lifestyles",
    "Fitness and wellness enthusiasts",
    "Anyone who wants to understand their body better",
  ];

  return (
    <section ref={ref} className="bg-[#3F5161] py-8 md:py-12 px-5">
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        
        <h2 className="text-2xl md:text-3xl font-black text-center text-white mb-8">
          Who is this <span className="text-blue-300">Workshop for?</span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {audience.map((item, i) => {
            const isLast = i === audience.length - 1;
            
            return (
              <div 
                key={i} 
                className={`flex items-center gap-4 bg-white p-4 md:p-5 rounded-2xl shadow-lg transition-transform hover:scale-[1.02]
                  ${isLast ? "md:col-span-2 md:max-w-[calc(50%-0.5rem)] md:mx-auto w-full" : ""}
                `}
              >
                {/* Icon Box with your color theme #0047AB */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#0047AB] flex items-center justify-center">
                    <UserCheck className="text-white" size={24} />
                  </div>
                </div>

                <p className="text-slate-900 font-bold text-sm md:text-base leading-snug">
                  {item}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button with Razorpay Link */}
        <div className="flex justify-center">
          <a
            href="https://pages.razorpay.com/pl_SIpsxh7hbcrVQR/view"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-[#FFB800] hover:bg-[#E5A600] text-slate-900 rounded-full py-3.5 px-8 md:px-12 font-black text-lg md:text-xl transition-all shadow-xl active:scale-95"
          >
            Secure Your Seat @ <span className="line-through opacity-50 font-medium">₹499</span> ₹99
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default WorkshopAudience;