import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Plus } from "lucide-react";

const faqs = [
  { 
    q: "Can you guarantee complete pain relief for severe conditions?", 
    a: "While we have a 30,000+ success rate, results depend on your specific condition, consistency, and commitment. We provide honest assessments and realistic timelines to ensure you get the best possible outcome." 
  },
  { 
    q: "What exactly is FM4 Therapy?", 
    a: "FM4 is a proven 4-phase treatment that targets the root causes of pain in the spine, neck, and knees. It includes: Identifying the root cause, Releasing muscle tension, Strengthening weak muscles, and Improving long-term flexibility." 
  },
  { 
    q: "How is this workshop delivered?", 
    a: "This is a LIVE online workshop conducted over 2 days via video conferencing. All you need is a stable internet connection and a smartphone or laptop to join." 
  },
  { 
    q: "Do I need any special equipment?", 
    a: "Not at all! Everything demonstrated in the workshop is designed to be performed at home with zero equipment." 
  },
  { 
    q: "How is FM4 different from physiotherapy or chiropractic treatment?", 
    a: "Traditional treatments often focus only on the location of the pain. FM4 Therapy identifies 'compensatory patterns'—understanding why a weak muscle in one area is forcing other muscles to overwork and cause pain." 
  },
  { 
    q: "Is this suitable for elderly people?", 
    a: "Absolutely! We have successfully treated many patients in the 60-80+ age group. The techniques are gentle, low-impact, and completely safe for seniors." 
  },
  { 
    q: "Does it work for old injuries or only recent pain?", 
    a: "FM4 Therapy works for both acute and chronic conditions. We have many success stories from patients who had been living with chronic pain for over 10-20 years." 
  },
  { 
    q: "What happens after the workshop?", 
    a: "You will receive actionable techniques to continue practicing at home, access to resources for ongoing recovery, and information regarding our extended FM4 Therapy programs." 
  },
  { 
    q: "Is there a refund policy?", 
    a: "Due to the deeply discounted nature of this workshop, all sales are final. However, we are extremely confident in the value provided—over 30,000 people have already trusted and benefited from this system." 
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white py-10 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>

          {/* Wrapper - Slate-50 background */}
          <div className="bg-slate-50 border border-slate-100 rounded-[2rem] px-6 md:px-10 py-12 shadow-sm">

            <h2 className="text-2xl md:text-4xl font-black text-center mb-10 text-slate-900 leading-tight">
              Frequently Asked <span className="text-[#0047AB]">Questions</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition"
                  >
                    <span className="text-slate-900 font-bold text-sm md:text-base pr-4 leading-snug">
                      {faq.q}
                    </span>

                    {/* Animated Icon - Blue */}
                    <span
                      className={`text-[#0047AB] transition-transform duration-300 ${
                        open === i ? "rotate-45" : ""
                      }`}
                    >
                      <Plus className="w-5 h-5 md:w-6 md:h-6 stroke-[3px]" />
                    </span>
                  </button>

                  {/* Expandable Content Logic */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      open === i
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-6 pb-6">
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium border-t border-slate-50 pt-4">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;