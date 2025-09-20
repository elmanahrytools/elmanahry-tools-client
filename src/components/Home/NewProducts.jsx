"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { addToCart, increaseQty, decreaseQty } from "@/store/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { tools } from "@/data/tools";
import { useIsMobile } from "@/hooks/useIsMobile";
import Spinner from "@/components/Spinner";
function Section7() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isMobile = useIsMobile();
  const [loadedImages, setLoadedImages] = useState({});
  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 justify-items-center">
          {tools.slice(0, 6).map((tool) => {
            const itemInCart = cartItems.find((i) => i.id === tool.id);
            return (
              <div
                key={tool.id}
                className="relative flex flex-col items-center rounded-2xl shadow-xl bg-mainColor transition-transform duration-300 overflow-hidden w-full lg:w-[180px] pb-4 md:pt-0 pt-3"
              >
                {/* Image */}
                <div className="relative  flex items-center justify-center h-20 w-20 md:h-32 md:w-32 p-2 md:p-5 bg-mainColor/20">
                  {!loadedImages[tool.id] && (
                    <Spinner size={isMobile ? 25 : 30} color="#e6e7e8" />
                  )}
                  <Image
                    src={tool.img}
                    alt={tool.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={`absolute object-contain w-[100%] h-[100%] md:w-[80%] md:!h-[80%] transition-transform duration-500 ${
                      loadedImages[tool.id] ? "opacity-100" : "opacity-0"
                    } `}
                    onLoad={() => handleImageLoad(tool.id)}
                  />
                </div>

                {/* Content */}
                <div className="p-2 flex flex-col items-center text-center">
                  <div className="flex flex-col mb-4">
                    <h3 className="text-md md:text-lg font-semibold text-start text-grayColor line-clamp-1 mb-2">
                      {tool.name}
                    </h3>
                    <div className="flex items-center justify-between gap-2">
                      {/* Category text */}
                      <p className="text-gray-300 font-bold text-sm md:text-base">
                        {tool.category}
                      </p>

                      {/* Brand badge */}
                      <span className="bg-grayColor text-mainColor text-[10px] md:text-xs font-bold px-2 py-1 rounded-full  shadow-sm">
                        {tool.brand}
                      </span>
                    </div>
                  </div>
                  <p className="text-md md:text-lg font-bold text-yellowColor  numbers">
                    {tool.price} ج.م
                  </p>
                </div>

                {!itemInCart ? (
                  <button
                    onClick={() => dispatch(addToCart(tool))}
                    className="mt-2 flex items-center justify-center gap-2 w-[80%] md:w-[127px] text-sm bg-grayColor hover:bg-yellowColor hover:text-textColor px-2 md:px-3 py-2 md:py-2 rounded-lg shadow-md transition"
                  >
                    أضف الي العربه
                    <ShoppingCart size={20} />
                  </button>
                ) : (
                  <div className="flex  md:justify-center justify-evenly items-center h-[36px] w-[80%] md:w-[127px] mt-2 gap-2 bg-grayColor text-white  rounded-lg shadow-md px-3 ">
                    <button
                      onClick={() => dispatch(increaseQty(tool.id))}
                      className="p-1 bg-mainColor md:hover:bg-mainColor md:bg-grayColor   hover:text-grayColor text-grayColor md:text-mainColor  rounded-full transition"
                    >
                      <Plus size={18} />
                    </button>
                    <span className="text-base font-bold w-6 numbers text-center text-mainColor">
                      {itemInCart.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(decreaseQty(tool.id))}
                      className="p-1 bg-mainColor md:hover:bg-mainColor md:bg-grayColor   hover:text-grayColor text-grayColor md:text-mainColor  rounded-full transition"
                    >
                      <Minus size={18} />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Section7;
