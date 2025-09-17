"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseQty, decreaseQty } from "@/store/cartSlice.js";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Section4() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const tools = [
    {
      id: 1,
      name: "دريل كهربائي",
      price: 1500,
      discountPrice: 1200,
      img: "/drill.png",
    },
    {
      id: 2,
      name: "شاكوش يدوي",
      price: 120,
      discountPrice: 96,
      img: "/hammer.png",
    },
    {
      id: 3,
      name: "مفاتيح متعددة",
      price: 300,
      discountPrice: 240,
      img: "/keys.png",
    },
    {
      id: 4,
      name: "منشار كهربائي",
      price: 200,
      discountPrice: 160,
      img: "/cut.png",
    },
    {
      id: 5,
      name: "دريل كهربائي 2",
      price: 1550,
      discountPrice: 1240,
      img: "/drill.png",
    },
    {
      id: 6,
      name: "شاكوش يدوي 2",
      price: 130,
      discountPrice: 104,
      img: "/hammer.png",
    },
    {
      id: 7,
      name: "مفاتيح متعددة 2",
      price: 320,
      discountPrice: 256,
      img: "/keys.png",
    },
    {
      id: 8,
      name: "منشار كهربائي 2",
      price: 210,
      discountPrice: 168,
      img: "/cut.png",
    },
    {
      id: 9,
      name: "دريل كهربائي 3",
      price: 1600,
      discountPrice: 1280,
      img: "/drill.png",
    },
    {
      id: 10,
      name: "شاكوش يدوي 3",
      price: 140,
      discountPrice: 112,
      img: "/hammer.png",
    },
    {
      id: 11,
      name: "مفاتيح متعددة 3",
      price: 330,
      discountPrice: 264,
      img: "/keys.png",
    },
    {
      id: 12,
      name: "منشار كهربائي 3",
      price: 220,
      discountPrice: 176,
      img: "/cut.png",
    },
    {
      id: 13,
      name: "دريل كهربائي 4",
      price: 1650,
      discountPrice: 1320,
      img: "/drill.png",
    },
    {
      id: 14,
      name: "شاكوش يدوي 4",
      price: 150,
      discountPrice: 120,
      img: "/hammer.png",
    },
    {
      id: 15,
      name: "مفاتيح متعددة 4",
      price: 340,
      discountPrice: 272,
      img: "/keys.png",
    },
    {
      id: 16,
      name: "منشار كهربائي 4",
      price: 230,
      discountPrice: 184,
      img: "/cut.png",
    },
    {
      id: 17,
      name: "دريل كهربائي 5",
      price: 1700,
      discountPrice: 1360,
      img: "/drill.png",
    },
    {
      id: 18,
      name: "شاكوش يدوي 5",
      price: 160,
      discountPrice: 128,
      img: "/hammer.png",
    },
    {
      id: 19,
      name: "مفاتيح متعددة 5",
      price: 350,
      discountPrice: 280,
      img: "/keys.png",
    },
    {
      id: 20,
      name: "منشار كهربائي 5",
      price: 240,
      discountPrice: 192,
      img: "/cut.png",
    },
    {
      id: 21,
      name: "منشار كهربائي 5",
      price: 240,
      discountPrice: 192,
      img: "/cut.png",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
                  <div className="p-5 bg-yellowColor text-mainColor">
                    <h3 className="text-xl font-semibold truncate text-center mb-2">
                      {tool.name}
                    </h3>

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
                            <Plus size={16} />
                          </button>
                          <span className="text-sm font-bold w-6 text-center">
                            {itemInCart.quantity}
                          </span>
                          <button
                            onClick={() => dispatch(decreaseQty(tool.id))}
                            className="p-1 hover:bg-grayColor hover:text-mainColor rounded-full transition"
                          >
                            <Minus size={16} />
                          </button>
                        </div>
                      )}
                      <p className="text-2xl numbers">{tool.price}</p>
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
