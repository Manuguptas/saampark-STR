"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { Download, Send, ChevronRight, ChevronLeft, Building2, Users2, Briefcase, Quote } from "lucide-react";

export default function ServicePage() {
  // --- State for Testimonials ---
  const [current, setCurrent] = useState(0);

  const feedback = [
    {
      name: "Rajat Gupta",
      role: "Startup Founder, New Town",
      text: "Our accounting became 10x smoother after switching to Tally Prime with their help. Support team is always responsive.",
      image: "/testimoni.jpg" // Removed './public' - Next.js serves public folder from root '/'
    },
    {
      name: "Souvik Das",
      role: "CEO, Durgapur",
      text: "The implementation process was seamless. They understood our specific business needs and tailored Tally perfectly.",
      image: "/testimoni2.jpg" 
    },
    {
      name: "Ananya Chatterjee",
      role: "Retail Owner, Gariahat",
      text: "Managing inventory used to be a nightmare. Now, I can track every single item with just a few clicks. Highly recommended!",
      image: "/testimoni3.png"
    }
  ];

  const nextSlide = () => {
    setCurrent(current === feedback.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? feedback.length - 1 : current - 1);
  };

  return (
    <main className="min-h-screen bg-white font-sans">

      {/* --- SECTION 1: HERO --- */}
      <section className="relative w-full py-24 px-6 overflow-hidden flex flex-col items-center justify-center text-center bg-[#f9f9f9]">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(#ccc 2px, transparent 2px)`,
            backgroundSize: '30px 30px',
          }}
        ></div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-[#333] mb-6">
            App/Web Design Services in <br /> Kolkata
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Customized HTML and WordPress website design with SEO & mobile friendly.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-full font-bold hover:bg-gray-800 hover:text-white transition-all">
              Download Brochure
            </button>
            <button className="px-10 py-3 bg-[#f32727] hover:bg-[#d61f1f] text-white rounded-full font-bold transition-all shadow-lg">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

     

      {/* --- SECTION 3: TESTIMONIALS --- */}
      <section className="relative w-full py-24 px-6 overflow-hidden bg-gradient-to-br from-[#c084fc] via-[#818cf8] to-[#6366f1]">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, #fff 2px, transparent 2px)`,
            backgroundSize: '30px 30px',
          }}
        ></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-2 tracking-tight">Testimonials</h2>
          <div className="w-20 h-1.5 bg-white/40 mx-auto mb-8 rounded-full"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 md:px-12">
            <div className="relative bg-white/95 backdrop-blur-xl p-8 md:p-14 rounded-3xl flex flex-col md:flex-row items-center gap-10 shadow-2xl min-h-[300px]">
              
              <Quote className="absolute top-6 right-8 text-indigo-100 hidden md:block" size={80} />

              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl rotate-3">
                  <img 
                    src={feedback[current].image} 
                    alt={feedback[current].name} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/150" }} 
                  />
                </div>
              </div>

              <div className="text-left relative z-10">
                <p className="text-gray-700 leading-relaxed text-xl italic mb-6">
                  "{feedback[current].text}"
                </p>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{feedback[current].name}</h3>
                  <p className="text-indigo-600 font-medium">{feedback[current].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-[-10px] md:left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 border border-white/30 text-white hover:bg-white hover:text-indigo-600 transition-all z-20"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-[-10px] md:right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 border border-white/30 text-white hover:bg-white hover:text-indigo-600 transition-all z-20"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {feedback.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === index ? "w-8 bg-white" : "w-2.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}