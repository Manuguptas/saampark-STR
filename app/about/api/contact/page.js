import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. GOOGLE MAP SECTION */}
      <section className="w-full h-[400px] border-b">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59007.27100358107!2d87.31856345!3d22.43074065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d5b398c19fb15%3A0x5e88bcfa42e549cd!2sMidnapore%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1772970740073!5m2!1sen!2sin" className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          allowFullScreen=""
          loading="lazy"></iframe>
      </section>
      

      {/* 2. CONTACT INFO ICONS */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="text-blue-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <p className="text-gray-600 text-sm">Mednipur<br/>West bangal</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-blue-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <p className="text-gray-600 text-sm"> 9091518567</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-blue-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <p className="text-gray-600 text-sm underline">saamparktechnologyresearch@gmail.com</p>
        </div>
      </section>

      {/*======== 3. CONTACT FORM =========*/}
     <section className="max-w-4xl mx-auto px-6 pb-20">
  <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="space-y-4">
      {/* Added text-pink-500 to change the typing color */}
      <input 
        type="text" 
        placeholder="Name" 
        className="w-full p-3 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none text-pink-500 font-medium" 
      />
      <input 
        type="email" 
        placeholder="Email" 
        className="w-full p-3 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none text-pink-500 font-medium" 
      />
      <input 
        type="text" 
        placeholder="Mobile" 
        className="w-full p-3 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none text-pink-500 font-medium" 
      />
    </div>

    <div className="space-y-4">
      {/* Added text-pink-500 to textarea */}
      <textarea 
        placeholder="Message" 
        rows="4" 
        className="w-full p-3 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none h-full text-pink-500 font-medium"
      ></textarea>
    </div>

    <div className="md:col-span-2 flex items-center gap-4">
      <span className="text-gray-700 font-bold">5 + 5 = ?</span>
      <input 
        type="text" 
        className="w-32 p-3 border border-gray-300 rounded outline-none text-pink-500 font-bold" 
      />
    </div>

    <div className="md:col-span-2">
      <button className="bg-[#444] text-white px-8 py-3 rounded font-bold hover:bg-black transition-colors uppercase tracking-widest text-sm">
        Submit
      </button>
    </div>
  </form>
</section>

      

    </div>
  );
}