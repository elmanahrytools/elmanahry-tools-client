"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseQty, decreaseQty } from "@/store/cartSlice.js";

function Section4() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const tools = [
    { id: 1, name: "دريل كهربائي", price: 1500, img: "/drill.png" },
    { id: 2, name: "شاكوش يدوي", price: 120, img: "/hammer.png" },
    { id: 3, name: "مفاتيح متعددة", price: 350, img: "/keys.png" },
    { id: 4, name: "منشار كهربائي", price: 2200, img: "/cut.png" },
  ];

  return (
    <div className="py-10">
      <div ref={ref} className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 ${
            inView ? "animate-fadeSlide" : "opacity-0"
          }`}
        >
          الأكثر مبيعًا
        </h2>

        {/* Tools Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 ${
            inView ? "animate-fadeSlide" : "opacity-0"
          }`}
        >
          {tools.map((tool) => {
            const itemInCart = cartItems.find((i) => i.id === tool.id);

            return (
              <div
                key={tool.id}
                className="relative rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
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
                          onClick={() => dispatch(decreaseQty(tool.id))}
                          className="p-1 hover:bg-grayColor hover:text-mainColor rounded-full transition"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-sm font-bold w-6 text-center">
                          {itemInCart.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(increaseQty(tool.id))}
                          className="p-1 hover:bg-grayColor hover:text-mainColor rounded-full transition"
                        >
                          <Plus size={16} />
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
      </div>
    </div>
  );
}

export default Section4;
