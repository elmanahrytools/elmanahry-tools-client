"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Section1 = () => {
  return (
    <div
      id="hero"
      className=" min-h-[calc(100vh-70px)] flex justify-center py-10"
    >
      <div className="flex flex-col gap-4 justify-start md:justify-center lg:justify-center mt-10 lg:mt-0 md:mt-0 w-full max-w-7xl md:px-4 px-2">
        <div className="flex justify-center flex-col items-center gap-1 opacity-0 animate-slideDownHome">
          <h1 className="text-[15px] md:text-[20px] lg:text-[22px] text-center">
            المناهري تولز
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section1;
