"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useInView } from "react-intersection-observer";
function Section4() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const tools = [
    { id: 1, name: "دريل كهربائي", price: "1500 ج.م", img: "/drill.png" },
    { id: 2, name: "شاكوش يدوي", price: "120 ج.م", img: "/hammer.png" },
    { id: 3, name: "مفاتيح متعددة", price: "350 ج.م", img: "/keys.png" },
    { id: 4, name: "منشار كهربائي", price: "2200 ج.م", img: "/cut.png" },
  ];

  return (
    <div className="py-10">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 `}>
        {/* Title */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 ${
            inView ? "animate-fadeSlide" : "opacity-0"
          }`}
        >
          الأكثر مبيعًا🔥
        </h2>

        {/* Tools Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 ${
            inView ? "animate-fadeSlide" : "opacity-0"
          }`}
        >
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="relative  rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              {/* Image */}
              <div className="flex items-center justify-center bg-white h-48">
                <Image
                  src={tool.img}
                  alt={tool.name}
                  width={0}
                  height={140}
                  sizes="100vw"
                  className="object-contain w-[80%] h-[80%] transform hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center bg-yellowColor text-mainColor">
                <h3 className="text-lg font-semibold ">{tool.name}</h3>
                <p className="text-xl mt-2 numbers">{tool.price}</p>
              </div>

              {/* Floating Button */}
              <button className="absolute hover:scale-110 bottom-4 right-4 bg-mainColor text-grayColor p-3 rounded-full shadow-md  transition">
                <ShoppingCart size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section4;
