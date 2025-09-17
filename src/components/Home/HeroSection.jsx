"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
const Section1 = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="hero"
      className="relative md:h-[calc(100vh-70px)] 2xl:h-auto flex justify-center items-center bg-mainColor overflow-hidden"
    >
      <div className="flex flex-col md:flex-row max-w-7xl md:px-4 px-2 py-16 md:py-6 w-full bg-mainColor justify-center md:justify-evenly gap-6 md:gap-40 items-center">
        {/* Right */}
        <div
          dir="rtl"
          className="flex animate-slideLeft flex-col text-center md:text-start items-center md:items-start text-grayColor max-w-lg"
        >
          <h1 className=" text-5xl md:text-6xl mb-4 font-bold">
            المناهري تولز
          </h1>
          <h2 className="text-2xl font-semibold">كل أدواتك في مكان واحد</h2>
          <p className="text-lg">
            أفضل الأدوات اليدوية والكهربائية من أشهر العلامات التجارية
          </p>
          <div className="flex items-center mt-6 gap-4">
            <button className="hover:scale-105 text-lg rounded-md bg-grayColor hover:bg-[#c9c9c9] transition-all duration-300 text-textColor font-bold px-4 py-2">
              تصفح الماركات
            </button>
            <button className="hover:scale-105 text-lg rounded-md bg-yellowColor hover:bg-[#eead22] transition-all duration-300 text-textColor font-bold px-4 py-2">
              تسوق الآن
            </button>
          </div>
        </div>

        {/* Left - Main Tool Image */}
        <div className="relative animate-slideDown">
          <Image
            src="/hero.webp"
            width={isMobile ? 280 : 450}
            height={350}
            alt="hero logo"
            className="z-10 relative"
          />

          {/* Floating small tools */}
          <Image
            src="/hammer.png"
            width={isMobile ? 30 : 60}
            height={80}
            alt="hammer"
            className="absolute top-[10px] md:top-[10px] left-[7px] md:left-[-10px] animate-rotate12  "
          />

          <Image
            src="/drill.png"
            width={isMobile ? 70 : 150}
            height={100}
            alt="drill"
            className="absolute md:bottom-[40px] md:right-[-100px]  bottom-[50px] right-[-30px]"
          />
          {/* <Image
            src="/diamond.png"
            width={100}
            height={100}
            alt="drill"
            className="absolute bottom-[10px] left-[-70px] animate-rotate360 md:block hidden"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Section1;
