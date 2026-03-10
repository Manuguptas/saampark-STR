"use client";

import Link from "next/link";
import { 
  ChevronRight, 
  MessageCircle, 
  Download, 
  Send, 
  TrendingUp, 
  Smartphone, 
  Globe, 
  Server, 
  ArrowRight 
} from "lucide-react";

export default function ServicePage() {
  // Your specific company services
  const serviceList = [
    {
      title: "Stock Market Analysis",
      desc: "Advanced technical analysis and data-driven insights for smarter investment strategies.",
      icon: <TrendingUp className="text-blue-600" size={32} />,
    },
    {
      title: "Software / App Development",
      desc: "Custom-built mobile and desktop applications tailored to your business workflow.",
      icon: <Smartphone className="text-[#f32727]" size={32} />,
    },
    {
      title: "Website Development",
      desc: "High-performance, SEO-optimized websites that turn visitors into loyal customers.",
      icon: <Globe className="text-blue-600" size={32} />,
    },
    {
      title: "Hosting & Domain Provider",
      desc: "Ultra-secure, high-speed hosting solutions with 99.9% uptime guaranteed.",
      icon: <Server className="text-[#f32727]" size={32} />,
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION WITH MOVING DOTS --- */}
      <section className="relative w-full py-24 px-6 overflow-hidden flex flex-col items-center justify-center text-center border-b border-gray-100">
        
        {/* ANIMATED BACKGROUND LAYER */}
        <div 
          className="absolute inset-0 z-0 animate-dot-move opacity-40"
          style={{
            backgroundImage: `radial-gradient(#cbd5e1 1.5px, transparent 1.5px)`,
            backgroundSize: '30px 30px',
          }}
        ></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Innovative Technology <br />
            <span className="text-blue-600">Solutions for Growth</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            From Stock Market Analysis to Enterprise Software — We provide the digital tools you need to lead your industry.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all flex items-center gap-2">
              <Download size={18} /> Company Profile
            </button>
            <button className="px-10 py-3 bg-[#f32727] hover:bg-[#d61f1f] text-white rounded-full font-bold transition-all shadow-lg flex items-center gap-2">
               Get Free Consultation <Send size={18} />
            </button>
          </div>

          {/* BREADCRUMB */}
          <nav className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">Our Services</span>
          </nav>
        </div>
      </section>

      {/* --- SERVICES GRID SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16">
          <span className="text-[#f32727] font-bold text-xs uppercase tracking-[0.2em] block mb-4">
            What Do We Do?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Complete Digital Transformation <br /> for Your Business
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-white border border-gray-100 rounded-2xl hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col items-start"
            >
              <div className="p-4 bg-gray-50 rounded-xl mb-6 group-hover:bg-blue-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <button className="mt-auto flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                Details <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="bg-gray-50/50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Why Choose Saampark Technology?
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                <strong className="text-gray-900">Saampark Technology & Research</strong> is a leading IT agency specializing in technical research and high-conversion digital products. We don't just build software; we build solutions that maximize your business potential.
              </p>
              <p>
                With over two decades of combined expertise, our team captures your unique needs and translates them into functional, visually stunning digital experiences.
              </p>
            </div>
          </div>
          <div className="bg-blue-600 rounded-3xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
            <p className="mb-8 opacity-90 text-sm leading-relaxed">
              Join hundreds of successful businesses that have scaled using our technology solutions and stock market insights.
            </p>
            <button className="w-full py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <Link 
        href="https://wa.me/9091518569" 
        target="_blank"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={30} fill="currentColor" />
      </Link>

      {/* CUSTOM ANIMATION STYLES */}
      <style jsx global>{`
        @keyframes move {
          from { background-position: 0 0; }
          to { background-position: 60px 60px; }
        }
        .animate-dot-move {
          animation: move 12s linear infinite;
        }
      `}</style>
    </main>
  );
}