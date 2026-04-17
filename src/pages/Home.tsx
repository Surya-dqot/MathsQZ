
const Home = () => {
  return (
    <div className="min-h-screen bg-[#F2F5F9] text-slate-900 selection:bg-cyan-100">
      
      {/* 1. STICKY NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#F2F5F9]/80 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" className="w-10 h-10 drop-shadow-sm" alt="logo" />
            <span className="text-2xl font-black tracking-tighter italic">Maths<span className="text-cyan-500">QZ</span></span>
          </div>
          <div className="hidden md:flex gap-8 font-bold text-slate-600 text-sm tracking-wide">
            <a href="#features" className="hover:text-cyan-600 transition-all">FEATURES</a>
            <a href="#preview" className="hover:text-cyan-600 transition-all">PREVIEW</a>
            <a href="/privacy" className="hover:text-cyan-600 transition-all">PRIVACY</a>
          </div>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-xl hover:bg-cyan-600 transition-all">
            DOWNLOAD
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-300/20 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white shadow-sm border border-slate-200 text-xs font-black tracking-widest text-cyan-600 uppercase">
             Voted #1 Mental Math Trainer 2026
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-8">
            Master Every <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Equation.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-500 font-medium leading-relaxed mb-12">
            MathsQZ isn't just a calculator. It's a high-performance training ground designed to boost your brain's processing speed and accuracy.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
             <button className="group relative px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:scale-105 transition-all">
                Get Started Free
                <div className="absolute inset-0 rounded-2xl group-hover:blur-xl bg-cyan-400/30 -z-10 transition-all" />
             </button>
          </div>
        </div>
      </header>

      {/* 3. MULTI-IMAGE PREVIEW (The "Gallery") */}
      <section id="preview" className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Hero Shot */}
          <div className="md:col-span-2 rounded-[3rem] bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-2xl overflow-hidden aspect-video relative group">
            <img src="/image_38b09b.png" className="w-full h-full object-cover rounded-[2.8rem] group-hover:scale-105 transition-transform duration-700" alt="App Dashboard" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          
          {/* Side Shots */}
          <div className="flex flex-col gap-8">
             <div className="h-full rounded-[3rem] bg-white shadow-neumorphic p-6 border border-white">
                <img src="/image_38b0a3.png" className="w-full h-full object-contain" alt="Challenge Mode" />
             </div>
             <div className="h-full rounded-[3rem] bg-white shadow-neumorphic p-6 border border-white">
                <img src="/image_38b0bc.png" className="w-full h-full object-contain" alt="Results Screen" />
             </div>
          </div>
        </div>
      </section>

      {/* 4. DETAILED FEATURES */}
      <section id="features" className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 my-10 shadow-2xl">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Why Professionals Choose MathsQZ</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Engineered for speed, designed for clarity. Experience the most fluid math interface ever built.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 text-left">
            {[
              { t: "Instant Feedback", d: "Get real-time correction as you type. No waiting, just learning.", i: "⚡" },
              { t: "Smart Difficulty", d: "Our AI adjusts the complexity based on your solving speed.", i: "🧠" },
              { t: "Global Leaderboards", d: "Compete with math enthusiasts around the globe daily.", i: "🌍" },
              { t: "Dark Mode Native", d: "Optimized for late-night study sessions with soft contrast.", i: "🌙" },
              { t: "Detailed Analytics", d: "Track your progress with beautiful heatmaps and charts.", i: "📊" },
              { t: "Zero Distractions", d: "No ads, no popups. Just you and the numbers.", i: "💎" }
            ].map((f, i) => (
              <div key={i} className="group hover:bg-white/5 p-8 rounded-3xl transition-all border border-transparent hover:border-white/10">
                <div className="text-4xl mb-6">{f.i}</div>
                <h3 className="text-xl font-bold mb-3">{f.t}</h3>
                <p className="text-slate-400 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="container mx-auto px-6 py-32 text-center">
        <div className="bg-gradient-to-br from-white to-slate-100 rounded-[4rem] p-16 shadow-neumorphic border border-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-200 blur-3xl opacity-50" />
          <h2 className="text-5xl font-black mb-8">Ready to Level Up?</h2>
          <p className="text-xl text-slate-500 mb-12">Join 10,000+ users sharpening their minds every day.</p>
          <div className="flex justify-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-16 cursor-pointer hover:opacity-80 transition-opacity" alt="playstore" />
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-[#F2F5F9] pb-20">
        <div className="container mx-auto px-6 border-t border-slate-200 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-xl font-black italic">Maths<span className="text-cyan-500">QZ</span></span>
            </div>
            <div className="flex gap-10 font-bold text-slate-400 text-sm">
              <a href="/privacy" className="hover:text-slate-900">PRIVACY</a>
              <a href="#" className="hover:text-slate-900">TERMS</a>
              <a href="#" className="hover:text-slate-900">CONTACT</a>
            </div>
            <p className="text-slate-400 text-sm font-medium">© 2026 Built for PlayStore by [Your Name]</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;