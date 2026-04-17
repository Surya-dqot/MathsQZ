import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Brain, Zap, Shield, BarChart3, Target, Sparkles, Download, ChevronRight
} from "lucide-react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.2]);

  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen font-sans selection:bg-[#88eedd]/30 overflow-x-hidden">
      
      {/* BACKGROUND GLOWS */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center w-full">
         <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#88eedd]/10 blur-[120px] rounded-full"></div>
         <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-[#5588ee]/10 blur-[150px] rounded-full"></div>
      </div>

      {/* TOP NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#030712]/70 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#88eedd] to-[#5588ee] flex items-center justify-center font-black text-xl text-white shadow-[0_0_20px_rgba(136,238,221,0.3)]">
               ∑z
             </div>
             <h1 className="text-2xl font-black tracking-tight text-white">
               Maths<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#88eedd] to-[#5588ee]">QZ</span>
             </h1>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-400">
            <a href="#features" className="hover:text-white hover:text-shadow-sm transition-colors">Features</a>
            <a href="#focus" className="hover:text-white transition-colors">Focus Mode</a>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>

          <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold hover:scale-105 active:scale-95 transition-all text-sm flex items-center gap-2 group">
            Download <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto z-10 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[#88eedd] mb-8 backdrop-blur-md"
        >
          <Sparkles size={16} /> MathsQZ 2.0 is now live on iOS & Android
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-6"
        >
          Train Your Brain <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-[#88eedd] to-[#5588ee]">
            Like a Machine
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          High-performance mental arithmetic training designed for speed, accuracy, and absolute focus. Dominate global leaderboards while sharpening your mind.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="h-14 px-8 rounded-full bg-gradient-to-r from-[#88eedd] to-[#5588ee] text-black font-bold text-lg flex items-center gap-2 hover:shadow-[0_0_30px_rgba(136,238,221,0.4)] transition-shadow hover:scale-105 active:scale-95 duration-200">
            Start Training Free <ChevronRight size={20} />
          </button>
          <button className="h-14 px-8 rounded-full bg-white/5 text-white font-bold text-lg border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2">
            View Analytics <BarChart3 size={20} />
          </button>
        </motion.div>

        {/* Hero Mockup/Graphic Placeholder */}
        <motion.div 
           initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
           className="mt-20 w-full max-w-5xl h-[400px] md:h-[600px] bg-[#0A0F1C]/80 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden flex items-center justify-center group"
        >
           <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(136,238,221,0.05)_0%,transparent_50%)]"></div>
           
           <div className="text-center z-0 scale-90 md:scale-100">
              <div className="text-[#88eedd] font-mono text-2xl md:text-3xl mb-4 font-bold tracking-widest opacity-70">142 × 7 = ?</div>
              <div className="text-[8rem] md:text-[14rem] font-black text-white/5 group-hover:text-white/10 transition-colors duration-700 blur-[1px]">994</div>
           </div>

           <div className="absolute top-10 left-6 md:left-10 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md animate-pulse">
             <div className="flex gap-2 items-center text-[#88eedd] text-sm font-bold"><Zap size={16}/> Combo x4</div>
           </div>
           <div className="absolute bottom-20 right-6 md:right-10 z-20 p-4 lg:p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-2xl skew-y-[-2deg] hover:skew-y-0 transition-transform">
              <div className="text-white text-sm lg:text-base font-semibold">Current Rank</div>
              <div className="text-4xl lg:text-5xl font-black text-[#5588ee] mt-1">#42</div>
           </div>
        </motion.div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02] z-10 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:flex flex-wrap justify-center lg:justify-between items-center gap-10">
           {[
             { label: "Active Players", value: "250K+" },
             { label: "Questions Solved", value: "10M+" },
             { label: "Avg. Improvement", value: "34%" },
             { label: "App Store Rating", value: "4.9/5" }
           ].map((stat, i) => (
             <div key={i} className="text-center">
               <div className="text-3xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
               <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
        </div>
      </section>

      {/* 3. BENTO GRID FEATURES */}
      <section id="features" className="py-32 relative z-10 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#88eedd] to-[#5588ee]">Performance</span></h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">Everything you need to improve your mental math capabilities, beautifully packaged into an intuitive application.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Box 1 */}
          <div className="md:col-span-2 bg-[#111827]/50 border border-white/10 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:bg-[#111827] transition-colors">
            <div className="absolute -right-10 -top-10 w-60 h-60 bg-[#88eedd]/10 blur-[50px] rounded-full group-hover:bg-[#88eedd]/20 transition-colors"></div>
            <Brain size={48} className="text-[#88eedd] mb-6 relative z-10" />
            <h3 className="text-3xl font-bold text-white mb-3 relative z-10">Adaptive Intelligence</h3>
            <p className="text-slate-400 max-w-md text-lg relative z-10">Our algorithm analyzes your response times and accuracy, continuously adjusting the difficulty to keep you in the perfect flow state.</p>
          </div>

          {/* Box 2 */}
          <div className="bg-[#111827]/50 border border-white/10 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:bg-[#111827] transition-colors">
            <Zap size={48} className="text-amber-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">Instant Feedback</h3>
            <p className="text-slate-400 text-lg">Get micro-second penalty alerts and streak calculations in real-time as you type.</p>
          </div>

          {/* Box 3 */}
          <div className="bg-[#111827]/50 border border-white/10 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:bg-[#111827] transition-colors flex flex-col justify-end">
            <BarChart3 size={48} className="text-[#5588ee] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">On-Device Analytics</h3>
            <p className="text-slate-400 text-lg">Visualize your progress with gorgeous charts. All data is kept 100% local—we track absolutely nothing.</p>
            <div className="absolute right-0 top-10 opacity-20 w-40 h-40 border-8 border-[#5588ee] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500"></div>
          </div>

          {/* Box 4 */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#111827] to-[#0A0F1C] border border-white/10 rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
            <Shield size={48} className="text-white mb-6 relative z-10" />
            <h3 className="text-3xl font-bold text-white mb-3 relative z-10">Zero Data Collection</h3>
            <p className="text-slate-400 text-lg max-w-lg mb-8 relative z-10">Your mental training is entirely your business. MathsQZ operates completely locally. We don't require external servers, we don't store your scores, and we aggressively protect your digital privacy.</p>
            <div className="flex gap-4 items-center relative z-10">
               <div className="h-12 px-6 bg-white/10 rounded-xl flex items-center justify-center font-bold text-sm border border-white/5">100% Offline Capable</div>
               <div className="h-12 px-6 bg-white/10 rounded-xl flex items-center justify-center font-bold text-sm border border-white/5">No Account Required</div>
            </div>
            {/* Background elements */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
               <Shield size={300} className="translate-x-1/4 translate-y-1/4" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. IMMERSIVE FOCUS MODE (SCROLL PARALLAX) */}
      <section id="focus" className="h-[130vh] relative z-10" ref={targetRef}>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-black z-[-1]"></div>
          
          <motion.div 
            style={{ scale, opacity }}
            className="w-full max-w-6xl aspect-video md:aspect-[21/9] bg-gradient-to-br from-[#0c1222] to-black border border-white/5 rounded-[3rem] p-10 md:p-20 text-center relative flex flex-col justify-center items-center overflow-hidden shadow-[0_0_120px_rgba(85,136,238,0.15)] ring-1 ring-white/10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(136,238,221,0.08)_0%,transparent_60%)] pointer-events-none"></div>
            
            <Target size={80} className="text-[#88eedd] mb-8 z-10 drop-shadow-[0_0_30px_rgba(136,238,221,0.8)]" />
            <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-black mb-6 z-10 text-white tracking-widest uppercase">
              Pure Focus
            </h2>
            <p className="text-2xl md:text-3xl text-slate-400 max-w-3xl z-10 font-light leading-relaxed">
              No ads. No popups. No distractions. <br/> Just you, the numbers, and the flow state.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. FOOTER / CTA SECTION */}
      <section className="relative pt-16 pb-32 border-t border-white/10 z-10 bg-[#030712] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-[#5588ee]/10 blur-[150px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="w-24 h-24 mx-auto rounded-[2rem] bg-gradient-to-br from-[#88eedd] to-[#5588ee] flex items-center justify-center text-4xl font-black text-white shadow-2xl shadow-[#88eedd]/30 mb-8">
               ∑z
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#88eedd] to-[#5588ee]">Level Up?</span>
            </h2>
            <p className="text-slate-400 text-2xl mb-12 max-w-2xl mx-auto">
              Join hundreds of thousands of users who are getting sharper every single day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button className="h-16 px-12 rounded-full bg-white text-black font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3">
                 <Download size={24} /> Download for iOS & Android
               </button>
            </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-slate-500 bg-[#020408] z-10 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="font-bold text-white flex items-center gap-2 text-lg">
             <span className="text-[#88eedd]">∑z</span> MathsQZ <span className="text-slate-600 ml-2 font-normal">© {new Date().getFullYear()}</span>
           </div>
           <div className="flex gap-8 text-base">
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <a href="#" className="hover:text-white transition-colors">Contact</a>
           </div>
        </div>
      </footer>
    </div>
  );
}