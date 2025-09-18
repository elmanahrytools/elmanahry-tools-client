"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { addToCart, increaseQty, decreaseQty } from "@/store/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
function SectionDiscounts() {
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
    <div className="mt-[40px]">
      <div
        className={`max-w-7xl mx-auto flex  items-center w-full flex-col px-4 ${
          inView ? "animate-fadeSlide" : "opacity-0"
        }`}
      >
        {/* Title */}
        <h2
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-center mb-7 md:mb-10 text-gray-900"
        >
          عروض وخصومات خاصة
        </h2>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 w-full">
          {tools.slice(0, 4).map((tool) => {
            const itemInCart = cartItems.find((i) => i.id === tool.id);
            return (
              <div
                key={tool.id}
                className="relative flex flex-col justify-center items-center p-2 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-gray-100 bg-white"
              >
                {/* Discount badge */}
                <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-redColor text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  خصم
                </span>

                {/* Image */}
                <div className="flex items-center w-full justify-center bg-white h-20 md:h-48">
                  <Image
                    src={tool.img}
                    alt={tool.name}
                    width={0}
                    height={140}
                    sizes="100vw"
                    className="object-contain w-[75%] h-[75%] md:w-[80%] md:h-[80%] transform group-hover:scale-110 transition duration-500"
                  />
                </div>

                <h3 className="md:text-xl text-md font-semibold text-gray-800">
                  {tool.name}
                </h3>

                <div className="flex justify-between md:items-end flex-col items-center md:flex-row-reverse w-full">
                  {/* Content */}
                  <div className="text-center mt-2 md:mb-0 mb-2 md:mt-3">
                    <p className="text-sm md:text-md text-gray-400 line-through numbers">
                      {tool.price}
                    </p>
                    <p className="font-bold text-lg md:text-2xl text-redColor numbers">
                      {tool.discountPrice}
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
                    <div className="flex  w-full md:w-fit h-[40px]  place-self-start  md:place-self-auto items-center justify-center md:justify-start md:h-[44px] gap-2 bg-mainColor text-white py-1 px-2 md:px-3 md:py-2 rounded-full shadow-md">
                      <button
                        onClick={() => dispatch(increaseQty(tool.id))}
                        className="p-[2px] md:p-1 hover:bg-grayColor hover:text-mainColor rounded-full transition"
                      >
                        <Plus size={16} />
                      </button>
                      <span className="text-sm font-bold w-6 text-center numbers">
                        {itemInCart.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(decreaseQty(tool.id))}
                        className="p-[2px] md:p-1 hover:bg-grayColor hover:text-mainColor rounded-full transition"
                      >
                        <Minus size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <button className="bg-mainColor w-fit mt-10 text-grayColor transition-all duration-300 rounded-xl px-6 text-xl flex justify-center items-center gap-2 py-2 hover:scale-105">
          المزيد
          <Plus className="text-grayColor" size={22} />
        </button>
      </div>
    </div>
  );
}

export default SectionDiscounts;
