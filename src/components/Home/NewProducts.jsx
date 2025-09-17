"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { addToCart, increaseQty, decreaseQty } from "@/store/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
function Section7() {
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
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
                <div className="flex items-center justify-center h-20 w-20 md:h-32 md:w-32 p-2 md:p-3 bg-mainColor/20">
                  <Image
                    src={tool.img}
                    alt={tool.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="object-contain w-[100%] h-[100%] md:!w-[95%] md:!h-[95%] transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-1 md:p-2 flex flex-col items-center text-center">
                  <h3 className="text-md md:text-lg font-semibold text-grayColor">
                    {tool.name}
                  </h3>
                  <p className="text-md md:text-lg font-bold text-yellowColor  numbers">
                    {tool.price}
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
                  <div className="flex  justify-center items-center h-[36px] w-[80%] md:w-[127px] mt-2 gap-2 bg-grayColor text-white  rounded-lg shadow-md px-3 ">
                    <button
                      onClick={() => dispatch(increaseQty(tool.id))}
                      className="p-[2px] md:p-1 hover:bg-mainColor hover:text-grayColor text-mainColor  rounded-full transition"
                    >
                      <Plus size={16} />
                    </button>
                    <span className="text-sm font-bold w-6 numbers text-center text-mainColor">
                      {itemInCart.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(decreaseQty(tool.id))}
                      className="p-[2px] md:p-1 hover:bg-mainColor hover:text-grayColor text-mainColor  rounded-full transition"
                    >
                      <Minus size={16} />
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
