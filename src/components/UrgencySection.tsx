import AnimatedSection from "./AnimatedSection";
import { useWorkshopConfig } from "@/hooks/useWorkshopConfig";
import { AlertCircle } from "lucide-react";

const urgencyItems = [
  { text: "More Pain:", desc: "Untreated conditions often get worse over time." },
  { text: "Lost Experiences:", desc: "You miss out on activities you truly enjoy." },
  { text: "Higher Costs:", desc: "Treatments become more expensive the longer you wait." },
  { text: "Risk of Surgery:", desc: "Irreversible procedures that you might have avoided." },
  { text: "Quality of Life:", desc: "Every day spent in pain is a day you can never get back." },
];

const UrgencySection = () => {
  const { config } = useWorkshopConfig();

  // ✅ Safe fallback
  const paymentLink =
    config?.payment_link || "https://pages.razorpay.com/pl_SIpsxh7hbcrVQR/view";

  return (
    <section className="bg-white py-6 md:py-12 px-4">
      <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-100 rounded-[2rem] px-6 md:px-10 py-10 md:py-14 text-center shadow-sm">
        <AnimatedSection>

          {/* Heading */}
          <h2 className="text-red-600 text-2xl md:text-4xl font-black mb-6 leading-tight">
            Don’t Wait Until <span className="underline decoration-red-200">It’s Too Late</span>
          </h2>

          <p className="text-slate-900 text-xl font-bold md:text-2xl mb-8">
            Every day you delay, you risk losing:
          </p>

          {/* List */}
          <div className="space-y-4 text-center mb-10">
            {urgencyItems.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
                <p className="text-base md:text-lg text-slate-600 font-medium">
                  <strong className="text-slate-900 font-black uppercase text-sm md:text-base mr-1">
                    {item.text}
                  </strong> 
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Scarcity Note */}
          <div className="flex items-center justify-center gap-2 text-[#0047AB] font-bold mb-8 bg-[#0047AB]/5 w-fit mx-auto px-6 py-2 rounded-full border border-[#0047AB]/10">
            <AlertCircle className="w-5 h-5" />
            <span>Only 41 Seats Left | Your Pain-Free Life Starts Here</span>
          </div>

          {/* Button - Updated text to Camel Case and removed 'uppercase' class */}
          <button
            onClick={() => {
              if (window.fbq) {
                window.fbq("track", "AddToCart");
                window.fbq("track", "Subscribe");
              }

              setTimeout(() => {
                window.location.href = paymentLink;
              }, 150);
            }}
            className="w-full md:w-auto relative px-12 md:px-24 py-5 rounded-2xl 
            bg-[#0047AB] text-white font-black text-lg
            shadow-[0_10px_25px_rgba(0,71,171,0.3)]
            transition-all duration-300
            hover:scale-105 hover:-translate-y-1
            hover:shadow-[0_15px_35px_rgba(0,71,171,0.4)]
            active:scale-95 tracking-tight"
          >
            Reclaim Your Pain-Free Life Now
          </button>

        </AnimatedSection>
      </div>
    </section>
  );
};

export default UrgencySection;