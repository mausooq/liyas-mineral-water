import React from 'react';
import Image from "next/image";

const Hero = () => {
  return (
        <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-16 xl:px-20 relative z-10">
          {/* Background BREEZER text */}
          <h1 className="text-[200px] md:text-[300px] lg:text-[400px] xl:text-[480px] font-black text-transparent tracking-tighter opacity-[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
            style={{ WebkitTextStroke: '2px #e5e7eb' }}>
            BREEZER
          </h1>

          {/* Floating fruit elements */}
          <div className="absolute top-10 left-10 w-12 h-12 bg-green-300 rounded-full opacity-70 animate-float"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-red-300 rounded-full opacity-70 animate-float-delay"></div>
          <div className="absolute bottom-10 left-1/4 w-10 h-10 bg-blue-300 rounded-full opacity-70 animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-14 h-14 bg-yellow-300 rounded-full opacity-70 animate-float-delay"></div>

          <div className="relative flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                Bacardí® Breezer: <span className="block">Present for short, is a</span> <span className="block">fruit-based alcoholic drink</span> <span className="block">made by Bacardí®.</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                It's a fruit-flavoured alcoholic drink available in many refreshing flavours, made to colour your vibe.
              </p>

              <div className="mt-10 flex gap-8 items-start">
                <div className="flex flex-col">
                  <span className="text-4xl lg:text-5xl font-black tracking-tight">10+</span>
                  <span className="text-sm text-gray-500 mt-2 leading-tight">Flavours</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl lg:text-5xl font-black tracking-tight">21+</span>
                  <span className="text-sm text-gray-500 mt-2 leading-tight">Legal Age</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl lg:text-5xl font-black tracking-tight">4%</span>
                  <span className="text-sm text-gray-500 mt-2 leading-tight">Alcohol</span>
                </div>
              </div>

              <div className="mt-12">
                <button className="rounded-full border-2 border-gray-300 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-lg h-[500px]">
                {/* Orange bottle */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 rotate-[15deg] w-48">
                  <div className="relative h-80 w-full">
                    <Image 
                      src="/images/bottle.jpg" 
                      alt="Orange Breezer" 
                      layout="fill" 
                      objectFit="contain"
                      className="drop-shadow-2xl"
                    />
                  </div>
                </div>
                
                {/* Green bottle */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 -rotate-[15deg] w-48">
                  <div className="relative h-80 w-full">
                    <Image 
                      src="/images/bottle.jpg" 
                      alt="Green Breezer" 
                      layout="fill" 
                      objectFit="contain"
                      className="drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
