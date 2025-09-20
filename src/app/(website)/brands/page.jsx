"use client";

import React from "react";
import Image from "next/image";

const brands = [
  "/cmt.svg",
  "/apt.svg",
  "/crown.svg",
  "/dewalt.svg",
  "/rubi.svg",
  "/izar.svg",
];

export default function BrandsPage() {
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-4 py-10 min-h-[calc(100vh-70px)] animate-fadeSlide">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        ماركاتنا
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <Image
              src={brand}
              alt={`Brand ${index}`}
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
