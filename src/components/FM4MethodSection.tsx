import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FM4MethodSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const benefits = [
    "Functional mobility",
    "Muscular balance",
    "Body alignment",
    "Long-term pain relief",
  ];

  return (
    <section ref={ref} className="bg-white py-8 md:py-12 px-4 border-b border-slate-100">
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
        
        {/* COMPACT HEADER & TEXT */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">
            Introducing <span className="text-[#0047AB]">FM4 Therapy™</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
            The FM4 Therapy™ Method by <span className="font-bold text-slate-900">Fitness Master</span> focuses on identifying and correcting the root cause of musculoskeletal disorders using a structured non-invasive approach.
          </p>
        </div>

        {/* SLIM RESTORE BAR */}
        <div className="bg-[#F8FAFC] rounded-xl p-4 md:p-6 border border-slate-200">
          <p className="text-center text-[#0047AB] font-black uppercase tracking-widest text-[10px] md:text-xs mb-4">
            This method helps restore:
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-[#0047AB] font-bold text-sm">✔</span>
                <span className="text-slate-800 font-bold text-sm md:text-base">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FM4MethodSection;