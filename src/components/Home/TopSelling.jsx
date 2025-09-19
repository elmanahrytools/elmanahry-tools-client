"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseQty, decreaseQty } from "@/store/cartSlice.js";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { tools } from "@/data/tools";
import { useIsMobile } from "@/hooks/useIsMobile";
import Spinner from "@/components/Spinner";
function Section4() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [loadedImages, setLoadedImages] = useState({});
  const isMobile = useIsMobile();
  const itemsPerSlide = isMobile ? 1 : 4;
  const totalSlides = Math.ceil(tools.length / itemsPerSlide);
  const [direction, setDirection] = useState("right");

  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setDirection("right");
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  const startIndex = currentSlide * itemsPerSlide;
  const visibleTools = tools.slice(startIndex, startIndex + itemsPerSlide);

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };
  return (
    <div className="mt-[80px]">
      <div ref={ref} className="max-w-7xl mx-auto px-2 md:px-4">
        {/* Title */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-7 md:mb-10 text-gray-900 ${
            inView ? "animate-fadeSlide" : "opacity-0"
          }`}
        >
          الأكثر مبيعًا
        </h2>

        {/* Slider Container */}
        <div className="relative  flex justify-center items-center flex-col">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-mainColor text-white p-2 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
            // style={{ marginLeft: isMobile ? "" : "" }}
          >
            <IoIosArrowBack size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute  right-0 top-1/2  transform -translate-y-1/2 z-10 bg-mainColor text-white p-2 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
            // style={{ marginRight: isMobile ? "-10px" : "" }}
          >
            <IoIosArrowForward size={24} />
          </button>
          {/* Products Grid */}
          <div
            className={`md:w-[1072px] grid grid-cols-1 md:grid-cols-4  gap-6  justify-items-center place-items-center transition-all duration-500 ease-in-out ${
              inView ? "animate-fadeSlide" : "opacity-0"
            }`}
            style={isMobile ? {} : { gridTemplateColumns: "repeat(4, 250px)" }}
          >
            {visibleTools.map((tool) => {
              const itemInCart = cartItems.find((i) => i.id === tool.id);

              return (
                <div
                  key={tool.id}
                  className={`relative rounded-2xl w-[250px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden ${
                    direction === "left"
                      ? "animate-slideLeft"
                      : "animate-slideRight"
                  }`}
                >
                  {/* Image */}
                  <div className="relative flex items-center justify-center bg-white h-48">
                    {!loadedImages[tool.id] && (
                      <Spinner size={isMobile ? 25 : 30} />
                    )}
                    <Image
                      src={tool.img}
                      alt={tool.name}
                      width={0}
                      height={140}
                      sizes="100vw"
                      className={`absolute object-contain w-[80%] h-[80%] transform hover:scale-110 transition duration-500 ${
                        loadedImages[tool.id] ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => handleImageLoad(tool.id)}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-2 bg-yellowColor text-mainColor">
                    <div className="flex flex-col mb-4">
                      <h3 className="text-xl text-mainColor font-semibold line-clamp-1 mb-2">
                        {tool.name}
                      </h3>

                      <div className="flex items-center justify-between gap-2">
                        {/* Category text */}
                        <p className="text-gray-700 font-bold text-sm md:text-base">
                          {tool.category}
                        </p>

                        {/* Brand badge */}
                        <span className="bg-mainColor text-grayColor text-[10px] md:text-xs font-bold px-2 py-1 rounded-full  shadow-sm">
                          {tool.brand}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      {/* Actions */}
                      {!itemInCart ? (
                        <button
                          onClick={() => dispatch(addToCart(tool))}
                          className="bg-mainColor text-grayColor p-3 rounded-full shadow-md transition hover:scale-110"
                        >
                          <ShoppingCart size={20} />
                        </button>
                      ) : (
                        <div className="flex items-center h-[44px] gap-2 bg-mainColor text-white px-3 py-2 rounded-full shadow-md">
                          <button
                            onClick={() => dispatch(increaseQty(tool.id))}
                            className="p-1 hover:bg-grayColor hover:text-mainColor rounded-full transition"
                          >
                            <Plus size={18} />
                          </button>
                          <span className="text-base  font-bold w-6 text-center numbers">
                            {itemInCart.quantity}
                          </span>
                          <button
                            onClick={() => dispatch(decreaseQty(tool.id))}
                            className="p-1 hover:bg-grayColor hover:text-mainColor rounded-full transition"
                          >
                            <Minus size={18} />
                          </button>
                        </div>
                      )}
                      <p className="text-2xl numbers">{tool.price} ج.م</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-[6px] md:gap-4">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-1 md:w-6 md:h-1 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-mainColor" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
