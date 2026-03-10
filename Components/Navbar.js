import Image from "next/image";
import Link from "next/link";
import { 
  ChevronDown, 
  Phone, 
  Briefcase, 
  Users, 
  LifeBuoy, 
  Mail, 
  ShoppingCart, 
  Gift 
} from "lucide-react";

export default function Navbar() {
  // Define navigation links clearly to avoid routing errors
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "MESSAGING", href: "/messaging" },
    { name: "DIGITAL MARKETING", href: "/digital-marketing" },
  ];

  return (
    <header className="w-full shadow-sm">
      {/* 1. TOP UTILITY BAR (Dark) */}
      <div className="bg-[#1a2228] text-white text-[13px] py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-end items-center gap-6">
          <Link href="/offers" className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300">
            <Gift size={14} /> Offers
          </Link>
          <span className="flex items-center gap-1"><Phone size={14} /> 033 25481211</span>
          <span className="flex items-center gap-1"><Phone size={14} /> 9091518569</span>
          <Link href="/portfolio" className="flex items-center gap-1 hover:text-blue-400">
            <Briefcase size={14} /> Portfolio
          </Link>
          <Link href="/clients" className="flex items-center gap-1 hover:text-blue-400">
            <Users size={14} /> Clients
          </Link>
          <Link href="/support" className="flex items-center gap-1 hover:text-blue-400">
            <LifeBuoy size={14} /> Support
          </Link>
          <Link href="/contact" className="flex items-center gap-1 hover:text-blue-400">
            <Mail size={14} /> Contact Us
          </Link>
          <Link href="/cart" className="hover:text-blue-400">
            <ShoppingCart size={16} />
          </Link>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION (White) */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image src="/logo.png" alt="Saampark" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-blue-900 leading-none">SAAMPARK</span>
              <span className="text-[10px] tracking-[0.2em] text-orange-500 font-bold">TECHNOLOGY & RESEARCH</span>
            </div>
          </Link>

          {/* Desktop Menu Items */}
          <div className="hidden lg:flex items-center h-full">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="px-4 border-l border-gray-100 h-12 flex items-center gap-1 text-[13px] font-bold text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.name} <ChevronDown size={14} className="text-gray-400" />
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link 
              href="/portfolio" 
              className="ml-4 bg-[#28a745] text-white px-5 py-2 rounded-md font-bold text-sm hover:bg-green-600 transition-all shadow-sm"
            >
              PORTFOLIO
            </Link>
          </div>
        </div>
      </nav>

      {/* 3. PROMO BAR (Dark Blue/Navy) */}
      <div className="bg-[#0b1622] text-white py-2.5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-6 text-[14px] font-medium">
          <span className="flex items-center gap-2">
            <span className="animate-pulse">🔥</span> Price Drop ALERT <span className="animate-pulse">🔥</span>
          </span>
          <span className="text-gray-400">|</span>
          <span>Hosting @ ₹60/mo</span>
          <span className="text-gray-400">|</span>
          <span className="flex items-center gap-2">
            <span className="text-yellow-400">🎁</span> VPS @ ₹720/mo
          </span>
          <span className="text-gray-400">|</span>
          <Link href="https://wa.me/8961742465" className="flex items-center gap-2 hover:text-green-400">
            <span className="text-pink-500">📞</span> Order WhatsApp – 9091518567
          </Link>
        </div>
      </div>

      {/* MOBILE BOTTOM NAV */}
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-[#1a2228] border-t border-white/10 md:hidden flex justify-around items-center text-white">
        <Link href="/" className="flex flex-col items-center gap-1">
          <span className="text-xl">🏠</span>
          <span className="text-[10px]">Home</span>
        </Link>
        <Link href="/services" className="flex flex-col items-center gap-1 text-gray-400">
          <span className="text-xl">⚙️</span>
          <span className="text-[10px]">Services</span>
        </Link>
        <Link href="/portfolio" className="flex flex-col items-center gap-1 text-gray-400">
          <span className="text-xl">💼</span>
          <span className="text-[10px]">Portfolio</span>
        </Link>
        <Link href="/contact" className="flex flex-col items-center gap-1 text-gray-400">
          <span className="text-xl">📞</span>
          <span className="text-[10px]">Contact</span>
        </Link>
      </div>
    </header>
  );
}