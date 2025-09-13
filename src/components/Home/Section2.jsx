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
    { id: 9, label: "كماشة", src: "/hammer.png" },
    { id: 10, label: "مفك براغي", src: "/hammer.png" },
    { id: 11, label: "شنيور بطارية", src: "/hammer.png" },
    { id: 12, label: "مقص صاج", src: "/diamond.png" },
    { id: 13, label: "مفتاح أنابيب", src: "/keys.png" },
    { id: 14, label: "منشار يدوي", src: "/keys.png" },
    { id: 15, label: "متر قياس", src: "/diamond.png" },
    { id: 16, label: "معدات نجارة", src: "/keys.png" },
    { id: 17, label: "معدات سباكة متقدمة", src: "/comp.png" },
    { id: 18, label: "معدات حدادة", src: "/drill.png" },
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
  const totalSlides = Math.ceil(cats.length / itemsToShow);
  const [direction, setDirection] = useState("right");

  const handleNext = () => {
    setDirection("right");
    if (startIndex < cats.length - itemsToShow) {
      setStartIndex(startIndex + itemsToShow);
    }
  };

  const handlePrev = () => {
    setDirection("left");

    if (startIndex > 0) {
      setStartIndex(startIndex - itemsToShow);
    }
  };

  const goToSlide = (slideIndex) => {
    setStartIndex(slideIndex * itemsToShow);
  };

  return (
    <div className="py-10">
      <div ref={ref} className="max-w-7xl mx-auto p-2 md:px-4">
        <div
          ref={ref}
          className={`relative  flex justify-center items-center ${
            inView ? "animate-slideLeft" : "opacity-0"
          }`}
        >
          {/* Arrow left */}
          <button
            // style={{ marginLeft: isMobile ? "" : "" }}
            disabled={startIndex > 0 ? false : true}
            onClick={handlePrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 shadow-md rounded-full p-2   ${
              startIndex > 0
                ? "bg-yellowColor  hover:scale-110"
                : "bg-[#c9c9c9] hover:bg-[#c9c9c9]"
            } transition`}
          >
            <IoIosArrowBack size={24} />
          </button>

          {/* Categories container */}
          <div className="flex gap-10">
            {cats.slice(startIndex, startIndex + itemsToShow).map((cat) => (
              <div
                key={cat.id}
                className={`flex flex-col items-center text-center min-w-[150px] 
              ${
                direction === "right"
                  ? "animate-sliderLeft"
                  : "animate-sliderRight"
              }`}
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
            // style={{ marginRight: isMobile ? "0" : "" }}
            disabled={startIndex < cats.length - itemsToShow ? false : true}
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-300   ${
              startIndex < cats.length - itemsToShow
                ? "bg-yellowColor  hover:scale-110"
                : "bg-[#c9c9c9] hover:bg-[#c9c9c9]"
            } shadow-md rounded-full p-2  transition`}
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center  gap-[6px] md:gap-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                Math.floor(startIndex / itemsToShow) === index
                  ? "bg-mainColor"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section2;
