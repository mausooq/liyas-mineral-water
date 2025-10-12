import React from 'react';
import Image from "next/image";

const About = () => {
  return (
      <section id="about" className="py-20 bg-gray-50 relative">
        {/* Background BREEZER text */}
        <h1 className="text-[200px] md:text-[300px] lg:text-[400px] xl:text-[480px] font-black text-transparent tracking-tighter opacity-[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
          style={{ WebkitTextStroke: '2px #e5e7eb' }}>
          BREEZER
        </h1>
        
        {/* Floating fruit elements */}
        <div className="absolute bottom-10 left-10 w-14 h-14 bg-red-300 rounded-full opacity-70 animate-float"></div>

        <div className="container mx-auto px-6 lg:px-16 xl:px-20">
          <h2 className="text-4xl font-black mb-6">About Us</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Bacardí® Breezer™ Present for short, is a fruit-based alcoholic drink available in multiple refreshing flavours.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative h-96 w-full">
                <Image 
                  src="/images/b.jpg" 
                  alt="Breezer Bottles" 
                  layout="fill" 
                  objectFit="contain"
                  className="drop-shadow-xl"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="border-b border-gray-300">
                <button className="flex justify-between items-center w-full py-4 text-left">
                  <span className="text-xl font-bold">Who Breezer?!</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="border-b border-gray-300">
                <button className="flex justify-between items-center w-full py-4 text-left">
                  <span className="text-xl font-bold">Our Products</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="border-b border-gray-300">
                <button className="flex justify-between items-center w-full py-4 text-left">
                  <span className="text-xl font-bold">Our Business</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="border-b border-gray-300">
                <button className="flex justify-between items-center w-full py-4 text-left">
                  <span className="text-xl font-bold">Contact Us</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;       
