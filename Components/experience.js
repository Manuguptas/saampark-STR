"use client";

import { useEffect, useState } from "react";
import { Download, Send, Building2, Users2, Briefcase } from "lucide-react";

export default function AboutSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden py-24">
      {/* --- INDUSTRIAL ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Moving Dots */}
        <div 
          className="absolute inset-0 animate-dot-drift opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(#1e3a8a 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
        
        {/* Moving Technical Scanline */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 animate-scanline"></div>
        
        {/* Static Grid for "Industrial" feel */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* --- TOP HERO CONTENT --- */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-6 uppercase">
            Technology <span className="text-blue-600">Research</span> <br />
            & Development
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 font-medium">
            Customized software architecture and data analysis with a focus on 
            industrial scalability and precision.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-sm font-bold hover:bg-gray-900 hover:text-white transition-all uppercase tracking-widest text-xs flex items-center gap-2">
              <Download size={16} /> Download Brochure
            </button>
            <button className="px-10 py-3 bg-[#f32727] hover:bg-[#d61f1f] text-white rounded-sm font-bold transition-all shadow-lg uppercase tracking-widest text-xs flex items-center gap-2">
               Get In Touch <Send size={16} />
            </button>
          </div>
        </div>

        {/* --- ABOUT & STATS GRID --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center pt-10">
          
          {/* Left Side: Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-[#f32727] font-black uppercase tracking-[0.3em] text-xs">
              <span className="w-8 h-[2px] bg-[#f32727]"></span>
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 leading-tight">
              Responsive and Research-driven <br /> Industrial Solutions
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded in the 21st century, <strong className="text-blue-900">Saampark Technology</strong> commenced business with a vision to bridge the gap between complex data and user-friendly interfaces.
              </p>
              <p>
                Today, we are an independent powerhouse leveraging emerging technologies to build complex enterprise-level solutions. Our team lives and breathes innovation, ensuring your business stays ahead of the biggest technology shifts.
              </p>
            </div>
          </div>

          {/* Right Side: Triple Circle Stats (Screenshot 19 Style) */}
          <div className="relative h-[400px] flex items-center justify-center">
            {/* Top Circle */}
            <div className="absolute top-0 w-48 h-48 rounded-full bg-blue-400 shadow-xl flex flex-col items-center justify-center text-white p-4 text-center border-4 border-white animate-bounce-slow">
              <Building2 size={32} className="mb-2" />
              <span className="text-xs uppercase font-bold opacity-80">Founded</span>
              <span className="text-3xl font-black italic">2013</span>
            </div>

            {/* Bottom Left Circle */}
            <div className="absolute bottom-4 left-4 md:left-20 w-48 h-48 rounded-full bg-blue-900 shadow-xl flex flex-col items-center justify-center text-white p-4 text-center border-4 border-white">
              <Briefcase size={32} className="mb-2" />
              <span className="text-xs uppercase font-bold opacity-80">Engagement</span>
              <span className="text-3xl font-black italic">10+ Years</span>
            </div>

            {/* Bottom Right Circle */}
            <div className="absolute bottom-4 right-4 md:right-20 w-48 h-48 rounded-full bg-blue-300 shadow-xl flex flex-col items-center justify-center text-white p-4 text-center border-4 border-white">
              <Users2 size={32} className="mb-2" />
              <span className="text-xs uppercase font-bold opacity-80">Customers</span>
              <span className="text-3xl font-black italic">75+</span>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes drift {
          from { background-position: 0 0; }
          to { background-position: 80px 80px; }
        }
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-dot-drift {
          animation: drift 20s linear infinite;
        }
        .animate-scanline {
          animation: scan 8s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 6s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}