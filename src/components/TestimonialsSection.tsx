import { useState } from "react";
import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reviews = [
  { name: "Sunil Vaidya", rating: 5, text: "Sunil Vaidya, 64, from the food business, attended saurabh sir's workshop for knee pain. the process was excellent, and the suggested exercises brought 100% relief. highly recommend!" },
  { name: "Rajiv M.", rating: 5, text: "After 3 years of knee pain and multiple doctor visits, FM4 therapy completely changed my life. Pain-free in just 45 days!" },
  { name: "Pallavi S.", rating: 5, text: "I was skeptical at first, but the workshop opened my eyes. My neck pain that I had for 5 years is almost gone now." },
  { name: "Mahesh K.", rating: 5, text: "Avoided surgery that 3 doctors recommended. FM4 therapy saved me lakhs and gave me my life back." },
  { name: "Sunita D.", rating: 5, text: "As a working mom, the back pain was unbearable. This workshop taught me simple techniques I can do at home. Highly recommend!" },
  { name: "Amit P.", rating: 5, text: "The personalized assessment was eye-opening. Finally understood the root cause of my 10-year spine problem." },
];

const ReviewCard = ({ review }) => (
  <div className="bg-white rounded-3xl shadow-md border border-slate-100 p-8 flex flex-col items-center text-center relative h-full">
    {/* Google logo top-left */}
    <div className="absolute top-5 left-6">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
        alt="Google" 
        className="h-5 w-auto object-contain opacity-80" 
      />
    </div>

    {/* Avatar - Circular with Initial */}
    <div className="w-16 h-16 rounded-full bg-[#9e7c6b] flex items-center justify-center mb-4 mt-2 shadow-inner">
      <span className="text-white font-bold text-2xl uppercase">
        {review.name.charAt(0)}
      </span>
    </div>

    <p className="font-bold text-slate-900 text-lg mb-1">{review.name}</p>

    {/* Stars */}
    <div className="flex justify-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-slate-200 text-slate-200"}
        />
      ))}
    </div>

    <p className="text-slate-600 text-sm leading-relaxed italic">
      "{review.text}"
    </p>
  </div>
);

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-2">
              <p className="font-black text-2xl md:text-3xl text-slate-900">
                Rated <span className="text-yellow-500">4.6</span>
              </p>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} size={28} className="fill-yellow-400 text-yellow-400" />
                ))}
                <Star size={28} className="fill-yellow-400/30 text-yellow-400/30" />
              </div>
            </div>
            <p className="font-black text-2xl md:text-3xl text-slate-900">
              1000+ Reviews On <span className="text-[#0047AB]">Google Reviews</span>
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <ReviewCard key={i} review={r} />
            ))}
          </div>

          {/* Mobile Scroll View */}
          <div className="md:hidden">
            <div
              className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
              onScroll={(e) => {
                const scrollLeft = e.currentTarget.scrollLeft;
                const width = e.currentTarget.offsetWidth;
                const index = Math.round(scrollLeft / (width - 32));
                setActive(index);
              }}
            >
              {reviews.map((r, i) => (
                <div key={i} className="min-w-[85vw] snap-center">
                  <ReviewCard review={r} />
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-2">
              {reviews.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === i ? "w-8 bg-[#0047AB]" : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>

        </AnimatedSection>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;