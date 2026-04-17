
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Database, Lock, Eye, Mail, Info, FileText, Server } from "lucide-react";

export default function Privacy() {
  return (
    <div className="bg-[#030712] text-slate-300 min-h-screen font-sans selection:bg-[#88eedd]/30 pb-20">
       
      {/* HEADER */}
      <nav className="w-full bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-24 flex items-center">
           <Link to="/" className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors font-medium text-lg">
             <ArrowLeft size={20} /> Back to MathsQZ
           </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-20">
         
         <div className="mb-20">
            <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-[#88eedd]/20 to-[#5588ee]/20 border border-white/10 flex items-center justify-center mb-8 shadow-2xl shadow-[#88eedd]/10">
              <ShieldCheck size={40} className="text-[#88eedd]" />
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">Privacy Policy</h1>
            <p className="text-xl text-slate-400 font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">
              Last updated: April 17, 2026
            </p>
         </div>

         {/* CONTENT BLOCK */}
         <div className="space-y-16">
            
            <section>
              <p className="text-2xl text-slate-300 leading-relaxed font-light mb-8">
                MathsQZ ("we", "our", or "us") is deeply committed to protecting your privacy and ensuring your data is handled with the utmost care. This Privacy Policy comprehensively explains how your personal and gameplay information is collected, utilized, and safeguarded when you use our MathsQZ mobile applications and web services.
              </p>
              <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent"></div>
            </section>

            <section>
              <h2 className="flex items-center gap-4 text-3xl md:text-4xl font-bold text-white mb-8">
                <Database className="text-[#5588ee]" size={36} /> 
                Information We Collect
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                To provide you with a seamless, personalized, and adaptive brain-training experience, we collect specific types of data. The information we gather depends entirely on how you interface with our Services.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                 <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-2 flex gap-2 items-center"><Info size={20} className="text-[#88eedd]" /> Account Data</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">When you register, we securely collect your email address, chosen username, password hashes, and age-group demographic strictly for accurate leaderboard placements.</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-2 flex gap-2 items-center"><Server size={20} className="text-[#88eedd]" /> Gameplay Metrics</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">We record match history, reaction times down to the millisecond, accuracy rates, problem-specific struggle areas, and your MMR (Matchmaking Rating).</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-6 rounded-2xl md:col-span-2">
                    <h3 className="text-xl font-bold text-white mb-2 flex gap-2 items-center"><FileText size={20} className="text-[#88eedd]" /> Device & Technical Logs</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">To debug crashes and optimize performance natively, we may gather hardware model specifications, operating system versions, IP addresses (temporarily for matchmaking proximity), and crash analytics through anonymous diagnostic reports.</p>
                 </div>
              </div>
            </section>

            <section>
              <h2 className="flex items-center gap-4 text-3xl md:text-4xl font-bold text-white mb-8">
                <Eye className="text-[#5588ee]" size={36} /> 
                How We Use Your Information
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                Your data is the fuel that runs the MathsQZ adaptive engine. Here is exactly what we use it for:
              </p>
              <ul className="space-y-4 text-slate-300 text-lg">
                <li className="flex gap-3"><span className="text-[#88eedd] font-bold">✓</span> <strong>Adaptive Intelligence:</strong> To analyze your specific mathematical weaknesses and tailor the algorithm to challenge you appropriately in future sessions.</li>
                <li className="flex gap-3"><span className="text-[#88eedd] font-bold">✓</span> <strong>Global Multiplayer:</strong> To find opponents near your skill level (MMR) and geographic location to ensure minimal latency during 60-second blitzes.</li>
                <li className="flex gap-3"><span className="text-[#88eedd] font-bold">✓</span> <strong>Service Maintenance:</strong> To monitor overall application health, server uptimes, and investigate reported glitches or exploit behaviors on the leaderboards.</li>
                <li className="flex gap-3"><span className="text-[#88eedd] font-bold">✓</span> <strong>Communication:</strong> To send mandatory technical notices, update logs, security alerts, and to reply to your direct customer service inquiries.</li>
              </ul>
            </section>

            <section>
              <h2 className="flex items-center gap-4 text-3xl md:text-4xl font-bold text-white mb-8">
                <Lock className="text-[#5588ee]" size={36} /> 
                Data Security
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                We implement industry-grade security measures to maintain the safety of your personal information. Database access is strictly authenticated. All sensitive network requests, including logins and MMR updates, are encrypted via TLS 1.3. 
                <br/><br/>
                While no digital infrastructure can be guaranteed 100% immune to malicious attacks, our zero-trust architecture ensures that even in the unlikely event of a breach, password hashes remain mathematically irreversible and plain text user identities remain obscured.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Data Sharing and Third Parties</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                <strong className="text-white">MathsQZ does not sell, trade, or distribute your personal data. Period.</strong> 
                <br/><br/>
                We operate on a strictly premium / freemium model and do not rely on ad-tracking revenue. We only share anonymized, aggregated data with hosting cloud providers (e.g., AWS, Vercel) necessary to run the service. These partners are bound by strict DPA (Data Processing Agreements) to maintain absolute confidentiality.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Your Rights & Deletion</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                You retain complete sovereignty over your data. Under GDPR, CCPA, and global privacy standards, you have the right to request a complete export of your gameplay data, to correct inaccuracies, or to execute a "Right to be Forgotten."
                <br/><br/>
                You can permanently delete your account and wipe all tracing data directly within the MathsQZ app by navigating to <code className="bg-white/10 px-2 py-1 rounded text-white text-sm">Settings &gt; Account &gt; Danger Zone &gt; Delete Account</code>.
              </p>
            </section>

            <div className="bg-gradient-to-r from-[#111827] to-[#0A0F1C] border border-white/10 rounded-3xl p-8 md:p-12 mt-16 flex flex-col md:flex-row gap-10 items-center overflow-hidden relative">
               <div className="absolute right-0 top-0 w-64 h-64 bg-[#88eedd]/5 blur-[80px] rounded-full"></div>
               <div className="w-24 h-24 rounded-full bg-[#88eedd]/10 flex items-center justify-center shrink-0 border border-[#88eedd]/20 z-10">
                  <Mail className="text-[#88eedd]" size={40} />
               </div>
               <div className="z-10 text-center md:text-left">
                  <h3 className="text-3xl font-black text-white mb-3 tracking-tight">Contact Privacy Team</h3>
                  <p className="text-lg text-slate-400 mb-6">
                     If you have any questions, concerns, or legal inquiries regarding our privacy practices and DPA.
                  </p>
                  <a href="mailto:privacy@mathsqz.com" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                     privacy@mathsqz.com
                  </a>
               </div>
            </div>

         </div>
      </main>
    </div>
  );
}