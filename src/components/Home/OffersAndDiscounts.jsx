"use client";

import { useInView } from "react-intersection-observer";
import { Plus } from "lucide-react";
import { useSelector } from "react-redux";
import Link from "next/link";
import OffersCard from "../ProductsCards/OffersCard";
import { tools } from "@/data/tools";
function SectionDiscounts() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const cartItems = useSelector((state) => state.cart.items);

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
              <OffersCard key={tool.id} tool={tool} itemInCart={itemInCart} />
            );
          })}
        </div>
        <Link
          href={"/offers"}
          className="bg-mainColor w-fit mt-10 text-grayColor transition-all duration-300 rounded-xl px-6 text-xl flex justify-center items-center gap-2 py-2 hover:scale-105"
        >
          المزيد
          <Plus className="text-grayColor" size={22} />
        </Link>
      </div>
    </div>
  );
}

export default SectionDiscounts;
