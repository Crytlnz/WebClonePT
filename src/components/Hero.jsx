import React from "react";
import EmojiText from "./EmojiText";
import Button from "./Button"; 

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center p-4 md:p-8">
      <div className="flex flex-col items-center text-center max-w-4xl">
        <EmojiText text="👋 SELAMAT DATANG DI WEBSITE PT LSKK"/>
        
        {/* Adjust font sizes for different screen sizes */}
        <h1 className="font-semibold blue-gradient text-[40px] md:text-[50px] lg:text-[70px]">
          PT. LSKK
        </h1>
        <h3 className="font-semibold text-[18px] md:text-[20px] lg:text-[24px]">Langgeng Sejahtera Kreasi Komputasi</h3>
        
        {/* Add spacing between elements based on screen size */}
        <span className="h-8 md:h-12 lg:h-16"></span>
        
        {/* Adjust paragraph text size and padding */}
        <p className="font-medium text-[14px] md:text-[16px] px-4 md:px-8 lg:px-12 leading-relaxed">
          Kami adalah Jasa TI dan Konsultan TI terkemuka dengan jangkauan dan
          layanan global yang mengkhususkan diri dalam Pengembangan
          Cyber-Physical System...
        </p>
        
        <span className="h-8 md:h-12 lg:h-16"></span>
        
        {/* Responsive button size */}
        <Button text="Read More" link="/about" />
      </div>
    </div>
  );
};

export default Hero;
