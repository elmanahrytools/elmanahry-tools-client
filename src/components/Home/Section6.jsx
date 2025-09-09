"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useInView } from "react-intersection-observer";
function SectionDiscounts() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const tools = [
    {
      id: 1,
      name: "دريل كهربائي",
      oldPrice: "1800 ج.م",
      newPrice: "1500 ج.م",
      img: "/drill.png",
    },
    {
      id: 2,
      name: "شاكوش يدوي",
      oldPrice: "180 ج.م",
      newPrice: "120 ج.م",
      img: "/hammer.png",
    },
    {
      id: 3,
      name: "مفاتيح متعددة",
      oldPrice: "500 ج.م",
      newPrice: "350 ج.م",
      img: "/keys.png",
    },
    {
      id: 4,
      name: "منشار كهربائي",
      oldPrice: "2600 ج.م",
      newPrice: "2200 ج.م",
      img: "/cut.png",
    },
  ];

  return (
    <div className="pb-16 mt-5">
      <div
        className={`max-w-7xl mx-auto px-4 ${
          inView ? "animate-fadeSlide" : "opacity-0"
        }`}
      >
        {/* Title */}
        <h2
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
        >
          عروض وخصومات خاصة
        </h2>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-gray-100 bg-white"
            >
              {/* Discount badge */}
              <span className="absolute top-3 left-3 bg-redColor text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                خصم
              </span>

              {/* Image */}
              <div className="flex items-center justify-center bg-white h-48">
                <Image
                  src={tool.img}
                  alt={tool.name}
                  width={0}
                  height={140}
                  sizes="100vw"
                  className="object-contain w-[80%] h-[80%] transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {tool.name}
                </h3>
                <div className="mt-3">
                  <p className="text-md text-gray-400 line-through numbers">
                    {tool.oldPrice}
                  </p>
                  <p className="font-bold text-2xl text-redColor numbers">
                    {tool.newPrice}
                  </p>
                </div>
              </div>

              {/* Floating Button */}
              <button className="absolute hover:scale-110 bottom-4 right-4 bg-mainColor text-white p-3 rounded-full shadow-md hover:bg-redColor transition">
                <ShoppingCart size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionDiscounts;
