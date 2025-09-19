"use client";
import React, { useState } from "react";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { addToCart, increaseQty, decreaseQty } from "@/store/cartSlice.js";
import Spinner from "@/components/Spinner";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

function OffersCard({ tool, itemInCart }) {
  const dispatch = useDispatch();
  const [loadedImages, setLoadedImages] = useState({});
  const isMobile = useIsMobile();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };
  return (
    <div
      ref={ref}
      key={tool.id}
      className={`relative flex flex-col justify-center items-center p-2 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-[500ms]  group overflow-hidden border border-gray-100 bg-white 2 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Discount badge */}
      <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-redColor text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
        خصم
      </span>

      {/* Image */}
      <div className="relative flex items-center w-full justify-center bg-white h-20 md:h-48">
        {!loadedImages[tool.id] && <Spinner size={isMobile ? 25 : 30} />}
        <Image
          src={tool.img}
          alt={tool.name}
          width={0}
          height={140}
          sizes="100vw"
          className={`absolute object-contain w-[75%] h-[75%] md:w-[80%]  md:h-[80%] transform group-hover:scale-110 transition duration-500 ${
            loadedImages[tool.id] ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => handleImageLoad(tool.id)}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h3 className="md:text-xl text-md font-semibold text-gray-800 line-clamp-1 mb-2">
          {tool.name}
        </h3>

        <div className="flex items-center justify-between w-full">
          {/* Category text */}
          <p className="text-gray-400 font-bold text-sm md:text-base">
            {tool.category}
          </p>

          {/* Brand badge */}
          <span className="bg-[#1042701f] text-mainColor text-[10px] md:text-xs font-bold px-2 py-1 rounded-full  shadow-sm">
            {tool.brand}
          </span>
        </div>
      </div>

      <div className="flex justify-between md:items-end flex-col items-center md:flex-row-reverse w-full">
        {/* Content */}
        <div className="mt-2 md:mb-0 mb-2 md:mt-3">
          <p className="text-sm md:text-md text-gray-400 line-through numbers">
            {tool.price} ج.م
          </p>
          <p className="font-bold text-lg md:text-2xl text-redColor numbers">
            {tool.discountPrice} ج.م
          </p>
        </div>

        {/* Buttons */}
        {!itemInCart ? (
          <button
            onClick={() => dispatch(addToCart(tool))}
            className=" hover:scale-110  place-self-start  md:place-self-auto bg-mainColor flex justify-center items-center text-white w-[40px] h-[40px] md:h-[44px] md:w-[44px] rounded-full shadow-md hover:bg-redColor transition"
          >
            <ShoppingCart size={20} />
          </button>
        ) : (
          <div className="flex  w-full md:w-fit h-[40px]  place-self-start  md:place-self-auto items-center justify-evenly md:justify-start md:h-[44px] gap-2 bg-mainColor text-white py-1 px-2 md:px-3 md:py-2 rounded-full shadow-md">
            <button
              onClick={() => dispatch(increaseQty(tool.id))}
              className="p-1 hover:bg-grayColor hover:text-mainColor rounded-full transition"
            >
              <Plus size={18} />
            </button>
            <span className="text-base font-bold w-6 text-center numbers">
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
      </div>
    </div>
  );
}

export default OffersCard;
