const FooterSection = () => (
  <footer className="relative bg-[#0047AB] overflow-hidden py-12 px-4 border-t border-white/10 pb-24">
    {/* Background Radial Glow - Design Preserved */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600 via-[#0047AB] to-[#003380] opacity-100" />

    <div className="relative z-10 max-w-5xl mx-auto">
      {/* Heading */}
      <h3 className="text-white font-black text-xl mb-8 text-center uppercase tracking-tight">
        Important <span className="text-yellow-400">Disclosures</span>
      </h3>

      <div className="space-y-6">
        {/* Main Disclaimer Block - Glassmorphism style */}
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border-l-4 border-yellow-400 border-y border-r border-white/10 shadow-2xl">
          <p className="text-white/90 text-sm leading-relaxed">
            <strong className="text-yellow-400 font-bold block mb-2 uppercase text-xs tracking-wider">
              Medical Disclaimer:
            </strong> 
            FM4 Therapy is a lifestyle and movement-based pain management approach. It does not replace professional medical advice, diagnosis, or treatment. Individual results may vary. Always consult your physician before starting any physical program.
          </p>
        </div>

        {/* Facebook Disclaimer */}
        <p className="text-white/70 text-xs md:text-sm leading-relaxed">
          This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>

        {/* Detailed Company Policy */}
        <div className="text-white/60 text-[11px] md:text-xs space-y-4 leading-relaxed border-t border-white/10 pt-6">
          <p>
            This website is operated and maintained by FM4 Therapy. Use of the website is governed by its Terms Of Service and Privacy Policy. FM4 Therapy is a fitness education and training company. We do not sell "get pain-free overnight" programs. We believe, with education, individuals can be better prepared to make better health & fitness decisions, but we do not guarantee 100% success in our therapy for all conditions. 
          </p>
          <p>
            Results vary, are not typical, and rely on individual effort, time, and habits, as well as unknown conditions and other factors. We only track completed therapy sessions and satisfaction of services by voluntary surveys. Results show that most Advanced Training clients who apply the training see progress. However, many patients do not continue with the program, do not apply what they learn, or nonetheless have difficulty in reversing their pain.
          </p>
          <p className="italic">
            All material is intellectual property and protected by copyright. Any duplication, reproduction, or distribution is strictly prohibited. We use cookies to help improve, promote and protect our services. By continuing to use this site, you agree to our privacy policy and terms of use.
          </p>
        </div>

        {/* Address and Ownership Section */}
        <div className="bg-black/20 p-6 rounded-xl border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-white/80 text-xs leading-relaxed">
            <p className="font-bold text-white mb-1">FM4 Therapy</p>
            <p>Plot no. 19, Kanchanganga Society Rd, opposite kalyan bhel,</p>
            <p>part 2, Bibwewadi, Pune, Maharashtra 411037</p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Owned & Operated By</p>
            <p className="text-white font-bold text-sm">FITNESS MASTER</p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-8 text-center border-t border-white/10">
          <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
            Copyright © 2025 Fitness Master. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/60 text-[11px]">
            <a href="/refund-policy" className="hover:text-yellow-400 transition-colors underline underline-offset-4">Refund Policy</a>
            <span>|</span>
            <a href="/privacy-policy" className="hover:text-yellow-400 transition-colors underline underline-offset-4">Privacy Policy</a>
            <span>|</span>
            <a href="/terms-of-use" className="hover:text-yellow-400 transition-colors underline underline-offset-4">Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;