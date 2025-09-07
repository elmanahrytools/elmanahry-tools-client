"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useInView } from "react-intersection-observer";
function Section2() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const cats = [
    { id: 1, label: "معدات كهربائية", src: "/drill.png" },
    { id: 2, label: "معدات يدوية", src: "/hammer.png" },
    { id: 3, label: "مفاتيح ولقم", src: "/keys.png" },
    { id: 4, label: "معدات قص وقطع", src: "/cut.png" },
    { id: 5, label: "معدات سلامة", src: "/comp.png" },
    { id: 6, label: "عدة سباكة", src: "/wrench.webp" },
    { id: 7, label: "معدات دهان", src: "/airtools.webp" },
    { id: 8, label: "معدات لحام", src: "/diamond.png" },
  ];

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = isMobile ? 1 : 6;

  const handleNext = () => {
    if (startIndex < cats.length - itemsToShow) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div
      ref={ref}
      className={`relative py-12 flex items-center justify-center max-w-7xl px-2 md:px-4 mx-auto ${
        inView ? "animate-slideLeft" : "opacity-0"
      }`}
    >
      {/* Arrow left */}

      <button
        disabled={startIndex > 0 ? false : true}
        onClick={handlePrev}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 shadow-md rounded-full p-2   ${
          startIndex > 0
            ? "bg-yellowColor  hover:scale-110"
            : "bg-[#c9c9c9] hover:bg-[#c9c9c9]"
        } transition`}
      >
        <IoIosArrowBack size={24} />
      </button>

      {/* Categories container */}
      <div className="flex gap-10 px-10">
        {cats.slice(startIndex, startIndex + itemsToShow).map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center text-center min-w-[150px] animate-fadeSlide"
          >
            <div className="w-[150px] h-[150px] flex items-center justify-center rounded-full bg-mainColor transition-all duration-300 overflow-hidden  hover:shadow-custom">
              <Image
                src={cat.src}
                alt={cat.label}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[75%] h-[75%] object-contain hover:scale-110 transition-all duration-300 cursor-pointer"
              />
            </div>
            <p className="mt-3 text-xl font-medium">{cat.label}</p>
          </div>
        ))}
      </div>

      {/* Arrow right */}

      <button
        disabled={startIndex < cats.length - itemsToShow ? false : true}
        onClick={handleNext}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-300   ${
          startIndex < cats.length - itemsToShow
            ? "bg-yellowColor  hover:scale-110"
            : "bg-[#c9c9c9] hover:bg-[#c9c9c9]"
        } shadow-md rounded-full p-2  transition`}
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
}

export default Section2;
