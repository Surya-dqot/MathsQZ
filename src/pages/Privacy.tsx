
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Database, Lock, Eye, Mail, Info } from "lucide-react";

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
                Zero Data Collection
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                MathsQZ is designed with absolute privacy at its core. We strongly believe that your mental training and usage habits are entirely your own business. 
              </p>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                 <h3 className="text-xl font-bold text-white mb-2 flex gap-2 items-center"><Info size={24} className="text-[#88eedd]" /> Absolute On-Device Processing</h3>
                 <p className="text-slate-400 text-base leading-relaxed">
                   We <strong>do not</strong> collect, transmit, or store any personal information, account data, or gameplay metrics on any external servers. Every chart, score, and piece of analytical data you see in the app is generated and securely stored 100% locally on your device.
                 </p>
              </div>
            </section>

            <section>
              <h2 className="flex items-center gap-4 text-3xl md:text-4xl font-bold text-white mb-8">
                <Eye className="text-[#5588ee]" size={36} /> 
                No External Tracking
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                Because we do not gather any data, we natively use zero remote tracking mechanisms.
              </p>
              <ul className="space-y-4 text-slate-300 text-lg">
                <li className="flex gap-3"><span className="text-[#88eedd] font-bold">✓</span> <strong>No Accounts Required:</strong> You never have to sign in or provide an email identifier.</li>
                <li className="flex gap-3"><span className="text-[#88eedd] font-bold">✓</span> <strong>No Analytics SDKs:</strong> We don't embed invasive third-party telemetry tools that monitor your behavior.</li>
                <li className="flex gap-3"><span className="text-[#88eedd] font-bold">✓</span> <strong>No Advertising Profiles:</strong> Your interactions cannot be sold or tracked because they never leave your physical phone.</li>
              </ul>
            </section>

            <section>
              <h2 className="flex items-center gap-4 text-3xl md:text-4xl font-bold text-white mb-8">
                <Lock className="text-[#5588ee]" size={36} /> 
                No Third-Party Sharing
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                <strong className="text-white">We do not share any data with third parties.</strong> 
                <br/><br/>
                As unequivocally stated in our Google Play Store Data Safety declaration, MathsQZ does not permit user data to be transmitted to other companies or organizations. Since we do not collect the data in the first place, it is physically impossible for us to share it, sell it, or distribute it to advertising networks, data brokers, or external cloud infrastructures.
              </p>
            </section>

            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">App Data Deletion</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Because MathsQZ operates completely locally, you retain complete sovereignty over your localized data. If you wish to wipe any localized scores or history, you can simply uninstall the application or clear the application cache directly via your device's operating system settings.
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
                     support@aditienterprisess.com
                  </a>
               </div>
            </div>

         </div>
      </main>
    </div>
  );
}