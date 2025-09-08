"use client";

import Image from "next/image";
import Link from "next/link";

const Section1 = () => {
  return (
    <div
      id="hero"
      className="relative md:h-[calc(100vh-70px)] 2xl:h-auto flex justify-center items-center bg-gradient-to-r from-mainColor to-mainColor overflow-hidden"
    >
      <div className="flex flex-col md:flex-row max-w-7xl md:px-4 px-2 py-16 md:py-6 w-full justify-center md:justify-evenly gap-6 md:gap-40 items-center">
        {/* Right */}
        <div
          dir="rtl"
          className="flex animate-slideLeft flex-col text-center md:text-start items-center md:items-start text-grayColor max-w-lg"
        >
          <h1 className=" text-5xl md:text-6xl mb-4 font-bold">
            المناهري تولز
          </h1>
          <h2 className="text-2xl font-semibold">
            كل أدواتك في مكان واحد
          </h2>
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
            width={450}
            height={350}
            alt="hero logo"
            className="z-10 relative"
          />

          {/* Floating small tools */}
          <Image
            src="/hammer.png"
            width={60}
            height={80}
            alt="hammer"
            className="absolute top-[10px] left-[-10px] animate-rotate12 md:block hidden"
          />

          <Image
            src="/drill.png"
            width={150}
            height={100}
            alt="drill"
            className="absolute bottom-[40px] right-[-100px]  md:block hidden"
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
