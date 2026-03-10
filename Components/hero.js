"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function Hero() {
    const slides = [
        {
            image: "/technology.png",
            title: "Innovative Web Solutions",
            desc: "Crafting high-performance websites and bespoke software tailored to your business goals."
        },
        {
            image: "/technology2.png",
            title: "Enterprise Software",
            desc: "Scalable mobile and desktop applications built with the latest full-stack technologies."
        },
        {
            image: "/technology3.png",
            title: "Cloud & Infrastructure",
            desc: "Secure domain hosting and cloud management to keep your business running 24/7."
        }
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((current + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((current - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <section className="relative overflow-hidden bg-[#050a15] py-20 min-h-[700px] flex items-center">
            {/* THE GRID BACKGROUND */}
            <div 
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
                        radial-gradient(circle, #3b82f6 1px, transparent 1px), 
                        linear-gradient(to right, rgba(59,130,246,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            ></div>

            {/* AESTHETIC GLOW */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">

                {/* LEFT CONTENT */}
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        <p className="text-xs text-blue-300 font-bold tracking-widest uppercase">
                            Saampark Technology & Research
                        </p>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1]">
                        Empower Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Digital Journey</span>
                    </h1>

                    <div className="h-20 md:h-24"> {/* Fixed height to prevent layout shift */}
                        <p className="mt-6 text-gray-400 text-lg max-w-lg leading-relaxed">
                            {slides[current].desc}
                        </p>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-5">
                        <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-xl shadow-blue-900/40 flex items-center gap-2">
                            Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 border border-white/10 text-white hover:bg-white/5 rounded-xl font-bold transition-all backdrop-blur-sm">
                            Explore Services
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE SLIDER */}
                <div className="relative">
                    <div className="relative z-10 overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-gray-900">
                        <Image
                            key={current} // Key helps trigger transition animation on change
                            src={slides[current].image}
                            alt="Saampark Technology"
                            width={600}
                            height={450}
                            className="w-full h-[400px] object-cover transition-opacity duration-1000"
                        />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050a15] via-transparent to-transparent opacity-60"></div>
                        
                        {/* Slide Title on Image */}
                        <div className="absolute bottom-6 left-6 right-6">
                             <h3 className="text-2xl font-bold text-white mb-1">{slides[current].title}</h3>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute -bottom-10 right-0 flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="bg-white/5 hover:bg-blue-600 p-4 rounded-xl border border-white/10 transition-all text-white group"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="bg-white/5 hover:bg-blue-600 p-4 rounded-xl border border-white/10 transition-all text-white group"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                                    current === index ? "h-12 bg-orange-500" : "h-4 bg-blue-900"
                                }`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}