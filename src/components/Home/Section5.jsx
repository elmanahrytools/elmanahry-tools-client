"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
const Section5 = () => {
  const brands = [
    "/cmt.svg",
    "/apt.svg",
    "/crown.svg",
    "/dewalt.svg",
    "/rubi.svg",
    "/izar.svg",
  ];
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`py-12 max-w-7xl px-4 mx-auto ${
        inView ? "animate-slideLeft" : "opacity-0"
      }`}
    >
      <h2 className="text-center text-black text-2xl md:text-3xl font-bold mb-8">
        شركاؤنا من الماركات العالمية🛠️
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {brands.map((brand, index) => (
          <div
            key={brand}
            style={{
              animationDelay: `${index * 0.35}s`, // stagger effect
            }}
            className="logo-glow"
          >
            <Image
              src={brand}
              alt={`brand logo ${index}`}
              width={170}
              height={80}
              className="transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
