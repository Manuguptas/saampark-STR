"use client";

import { TrendingUp, Cpu, Globe, Server, ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Stock Market Analysis",
      desc: "Precision-driven market research and algorithmic investment strategies for modern traders.",
      icon: <TrendingUp size={24} />,
      id: "01"
    },
    {
      title: "Software Development",
      desc: "Robust, industrial-grade custom software architectures designed for high-load environments.",
      icon: <Cpu size={24} />,
      id: "02"
    },
    {
      title: "Website Development",
      desc: "Performance-optimized responsive platforms built with cutting-edge tech stacks.",
      icon: <Globe size={24} />,
      id: "03"
    },
    {
      title: "Hosting & Domain",
      desc: "Enterprise-level infrastructure with redundant failovers and 99.99% uptime reliability.",
      icon: <Server size={24} />,
      id: "04"
    },
    {
      title: "Game Development",
      desc: "Enterprise-level infrastructure with redundant failovers and 99.99% uptime reliability.",
      icon: <Server size={24} />,
      id: "05"
    }

  ];

  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden">
      {/* INDUSTRIAL GRID OVERLAY */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER WITH INDUSTRIAL ACCENT */}
        <div className="flex flex-col items-center mb-20">
          <div className="w-12 h-1 bg-red-600 mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-blue-950 uppercase italic">
            Industrial <span className="text-red-600">Capabilities</span>
          </h2>
          <p className="text-gray-500 mt-4 text-center max-w-xl font-medium uppercase tracking-[0.2em] text-xs">
            Precision • Engineering • Scalability • Research
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-4 gap-0 border-t border-l border-gray-200">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-10 border-r border-b border-gray-200 transition-all duration-500 hover:bg-blue-950 overflow-hidden"
            >
              {/* HIDDEN DECORATIVE SCANLINE */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-red-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              
              {/* SERVICE NUMBER */}
              <span className="absolute top-6 right-8 text-5xl font-black text-gray-100 group-hover:text-white/5 transition-colors">
                {service.id}
              </span>

              {/* ICON BLOCK */}
              <div className="relative z-10 w-14 h-14 bg-gray-50 flex items-center justify-center rounded-sm mb-8 border border-gray-200 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                <div className="text-blue-900 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-blue-950 group-hover:text-white mb-4 tracking-tight uppercase">
                  {service.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>

              {/* CTA LINK */}
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-red-600 group-hover:text-white cursor-pointer transition-colors">
                View Specification <ArrowUpRight size={14} />
              </div>

              {/* BOTTOM CORNER DECORATION */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-style-solid border-t-[20px] border-t-transparent border-r-[20px] border-r-gray-100 group-hover:border-r-red-600 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

 
