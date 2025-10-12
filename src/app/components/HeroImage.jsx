import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative w-full h-screen bg-white flex items-center justify-center">
      {/* Bottle Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/bottle.jpg"
          alt="Bottle"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Splash Image */}
      <div className="absolute inset-0 flex items-center justify-center bottom-0">
        <Image
          src="/images/splash.png"
          alt="Splash"
          width={600}
          height={800}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default HeroImage;
