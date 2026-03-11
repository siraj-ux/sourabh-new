const FinalCTA = () => {
  const paymentLink = "https://pages.razorpay.com/pl_SIpsxh7hbcrVQR/view";

  const handleRegistration = () => {
    // Analytics tracking can be added here
    window.location.href = paymentLink;
  };

  return (
    <section className="bg-slate-50 py-10 md:py-14 px-4 border-t border-slate-200 overflow-hidden relative">
      {/* Background Decor - Minimalist */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 -mr-10" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
          Reserve Your Seat Today
        </h2>
        
        <p className="text-slate-600 text-base md:text-lg font-bold mb-8 max-w-2xl mx-auto">
          Take the first step toward restoring your mobility and living pain-free with 
          <span className="text-[#0047AB]"> FM4 Therapy™</span>.
        </p>

        {/* Pricing & Offer Area */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-slate-400 line-through text-lg md:text-xl font-bold">
              ₹499
            </span>
            <span className="text-[#0047AB] text-4xl md:text-5xl font-black">
              ₹99
            </span>
          </div>
          <div className="bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider border border-amber-200">
            Exclusive 80% One-Time Discount
          </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={handleRegistration}
          className="bg-[#0047AB] hover:bg-blue-700 text-white text-lg md:text-xl font-black py-4 md:py-5 px-10 md:px-16 rounded-2xl shadow-[0_15px_30px_rgba(0,71,171,0.25)] transition-all transform hover:scale-105 active:scale-95 w-full md:w-auto mb-6"
        >
          Register Now
        </button>

        {/* Low Profile Urgency Badge */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] md:text-xs uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Limited to 41 Seats
          </div>
          <span className="text-slate-300">|</span>
          <div className="text-slate-500 font-bold text-[10px] md:text-xs uppercase tracking-widest">
            Secure Payment Gateway
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;