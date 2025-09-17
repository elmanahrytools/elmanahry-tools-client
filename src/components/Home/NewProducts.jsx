"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useInView } from "react-intersection-observer";
function Section7() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const cats = [
    { id: 1, label: "معدات كهربائية", src: "/drill.png", price: "950 ج.م" },
    { id: 2, label: "معدات يدوية", src: "/hammer.png", price: "180 ج.م" },
    { id: 3, label: "مفاتيح ولقم", src: "/keys.png", price: "600 ج.م" },
    { id: 4, label: "معدات قص وقطع", src: "/cut.png", price: "250 ج.م" },
    { id: 5, label: "معدات سلامة", src: "/comp.png", price: "300 ج.م" },
    { id: 6, label: "عدة سباكة", src: "/wrench.webp", price: "400 ج.م" },
  ];

  return (
    <div className="mt-[80px]">
      <div
        className={`max-w-7xl mx-auto px-4 ${
          inView ? "animate-fadeSlide" : "opacity-0"
        }`}
      >
        {/* Title */}
        <h2
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-center  mb-7 md:mb-10 text-gray-900"
        >
          منتجات جديدة
        </h2>

        {/* Small Grid of 6 Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-8 justify-items-center">
          {cats.map((cat) => (
            <div
              key={cat.id}
              className="relative flex flex-col items-center rounded-2xl shadow-xl bg-mainColor transition-transform duration-300 overflow-hidden w-full lg:w-[180px] pb-4"
            >
              {/* Image */}
              <div className="flex items-center justify-center h-20 w-20 md:h-32 md:w-32 p-2 md:p-3 bg-mainColor/20">
                <Image
                  src={cat.src}
                  alt={cat.label}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-contain w-[100%] h-[100%] md:!w-[95%] md:!h-[95%] transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-1 md:p-2 flex flex-col items-center text-center">
                <h3 className="text-md md:text-lg font-semibold text-grayColor">
                  {cat.label}
                </h3>
                <p className="text-md md:text-lg font-bold text-yellowColor  numbers">
                  {cat.price}
                </p>
              </div>

              {/* Floating Cart Button */}
              <button className="mt-2 flex items-center gap-2 text-xs md:text-sm bg-grayColor hover:bg-yellowColor hover:text-textColor px-2 md:px-3 py-2 md:py-2 rounded-lg shadow-md transition">
                أضف الي العربه
                <ShoppingCart size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section7;
