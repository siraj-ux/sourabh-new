import { useState, useEffect, useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import celebrity1 from "@/assets/celebrity-1.webp";
import celebrity2 from "@/assets/celebrity-2.webp";
import celebrity3 from "@/assets/celebrity-3.webp";
import bonusImage from "@/assets/bonus-image.jpeg";
import AnimatedSection from "./AnimatedSection";

const ExpertSection = () => {
  const images = [celebrity1, celebrity2, celebrity3];
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  // Auto scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;
      const cardWidth = container.firstElementChild?.clientWidth || container.offsetWidth;
      const nextIndex = (active + 1) % images.length;
      container.scrollTo({ left: cardWidth * nextIndex, behavior: "smooth" });
      setActive(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [active, images.length]);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.firstElementChild?.clientWidth || container.offsetWidth;
    const index = Math.round(container.scrollLeft / cardWidth);
    setActive(index);
  };

  return (
    <section className="bg-white mt-1 md:mt-0 py-1 md:py-4 px-4">
      <div className="max-w-6xl mx-auto bg-slate-50 border border-slate-100 rounded-2xl px-6 md:px-10 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            {/* --- TOP HEADING --- */}
            <p className="text-[#0047AB] text-center text-sm font-bold uppercase tracking-widest mb-2">
              Meet Your Expert
            </p>
            <h2 className="text-2xl md:text-4xl font-black text-center mb-8 md:mb-12 text-slate-900">
              Hi, I'm <span className="text-[#0047AB]">Sourobh Kulkorni</span>
            </h2>

            {/* --- BIO & GALLERY GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
              {/* PHOTO GALLERY */}
              <div className="order-1 md:order-2">
                <div
                  ref={scrollRef}
                  onScroll={handleScroll}
                  className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory scroll-smooth"
                >
                  {images.map((img, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden border-4 border-white shadow-xl min-w-[85vw] w-[85vw] sm:min-w-[320px] sm:w-[320px] md:min-w-[380px] md:w-[380px] lg:min-w-[420px] lg:w-[420px] snap-center flex-shrink-0"
                    >
                      <img
                        src={img}
                        alt={`Sourobh Kulkarni ${i + 1}`}
                        className="w-full aspect-[7/10] object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-2 mt-2">
                  {images.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        active === i ? "w-6 bg-[#0047AB]" : "w-2 bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* BIO TEXT CONTENT */}
              <div className="order-2 md:order-1">
                <p className="text-slate-600 mb-4 text-sm md:text-base font-medium leading-relaxed">
                  Sourobh Kulkorni is one of India's leading Health & Wellness professionals practicing in Pune, boasting several Fellowships and extensive international and domestic experience.
                </p>
                <p className="text-slate-600 mb-4 text-sm md:text-base font-medium leading-relaxed">
                  He holds multiple degrees and certifications in fitness, wellness, and rehabilitation, demonstrating his deep expertise in the field.
                </p>
                
                {/* HIGHLIGHTED SENTENCE */}
                <p className="mb-4 text-sm md:text-base leading-relaxed bg-blue-50 border-l-4 border-[#0047AB] p-3 rounded-r-lg font-bold text-slate-800">
                  He was recently recognized with the "Amazing Performer Award" in the Fitness and Wellness industry for 2024-2025.
                </p>

                <p className="text-slate-600 mb-6 text-sm md:text-base font-medium leading-relaxed">
                  With over 19 years of experience, Sourobh practices his self-pioneered FM4 therapy for various musculoskeletal disorders. He has successfully reversed chronic and acute conditions for over 10,000+ patients across all age groups.
                </p>
                <p className="text-slate-600 mb-6 text-sm md:text-base font-medium leading-relaxed">
                  Sourobh pioneered the development of FM4 Therapy to allow complete recovery from painful conditions without any medications or surgical intervention.
                </p>

                <div className="bg-[#0047AB] rounded-xl p-4 mb-6 shadow-lg">
                  <p className="text-white font-bold text-sm md:text-base text-center md:text-left">
                    🏆 Amazing Performer in Fitness Industry 2024
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "30,000+ clients helped to overcome chronic pain",
                    "Over 5,000 unnecessary surgeries avoided",
                    "Saved ₹100+ crores in medical bills for patients",
                    "Government-patented FM4 Therapy framework",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0 stroke-[3px]" />
                      <span className="text-sm text-slate-800 font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- BONUS BANNER IMAGE SECTION --- */}
            <div className="border-t border-slate-200 pt-12 mt-4 mb-12">
              <div className="max-w-3xl mx-auto">
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white max-h-80 md:max-h-[32rem] lg:max-h-[36rem]">
                  <img
                    src={bonusImage}
                    alt="Bonus Banner"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* --- SEPARATE APPROACH SECTION --- */}
            <div className="border-t border-slate-200 pt-12">
              <h3 className="text-2xl md:text-3xl font-black text-center mb-10 text-slate-900 tracking-tight px-4 leading-tight">
                Why Does Sourobh's <span className="text-[#0047AB]">Approach Work?</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto px-2">
                {[
                  "Identifies actual mechanical breakdowns in your body",
                  "Releases deep muscle tension and nerve pressure",
                  "Strengthens the body's weak support systems",
                  "Restores natural and efficient movement patterns",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="bg-blue-100 p-2.5 rounded-full flex-shrink-0">
                      <ArrowRight className="text-[#0047AB] w-5 h-5" />
                    </div>
                    <span className="text-sm md:text-base text-slate-700 font-bold leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;