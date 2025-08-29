"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axiosInstance from "@/utlis/axiosInstance";

const Admin = () => {
  // State for storing the fetched data
  const [stats, setStats] = useState({
    productCount: 0,
    categoryCount: 0,
    brandCount: 0,
    brands: [],
  });

  // Fetch data from backend on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/admin/stats`
        );
        setStats(res.data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchData(); // Call the function to fetch the data
  }, []); // Empty array means this will run once when the component mounts

  return (
    <div className="flex flex-col w-full items-center justify-center gap-5 animate-fadeInAdmin">
      <div className="flex gap-5 w-full flex-col">
        <div className="flex flex-col gap-4 flex-1">
          <div className="bg-[#07496D] shadow-lg shadow-[#0000002d] flex-wrap min-h-[116px] flex w-full p-3 md:p-5 justify-between gap-5 rounded-[10px] items-center">
            <h1 className="text-secondColor font-bold text-3xl md:text-4xl lg:text-5xl">
              {stats.productCount}
            </h1>
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-4xl lg:text-4xl">Product</h1>
              <p>within all the brands</p>
            </div>
          </div>
          <div className="flex gap-5 flex-1">
            <div className="bg-[#07496D] shadow-lg gap-2 flex-1 flex-col shadow-[#0000002d] flex p-3 md:p-5 min-h-[116px] rounded-[10px]">
              <h1 className="text-secondColor font-bold text-3xl md:text-4xl lg:text-5xl">
                {stats.categoryCount}
              </h1>
              <p className="text-2xl md:text-4xl lg:text-4xl">category</p>
            </div>
            <div className="bg-[#07496D] shadow-lg gap-2 flex-1 shadow-[#0000002d] flex p-3 md:p-5 flex-col min-h-[116px] rounded-[10px]">
              <h1 className="text-secondColor font-bold text-3xl md:text-4xl lg:text-5xl">
                {stats.brandCount}
              </h1>
              <p className="text-2xl md:text-4xl lg:text-4xl">Brand</p>
            </div>
          </div>
        </div>
        <div className="bg-[#07496D] shadow-lg shadow-[#0000002d] flex gap-3 customScrollbarBox flex-col h-[268px] rounded-[10px] p-5 overflow-x-auto">
          {stats.brands.map((brand, index) => (
            <div
              className="flex items-center justify-between gap-5"
              key={index}
            >
              <Image
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
                width={70}
                height={53}
                // src={`${process.env.NEXT_PUBLIC_API_URL}${brand.logo}`}
                src={brand.logo}
                alt={brand.name}
                priority={true} // Prioritizes loading for immediate visibility
                loading="eager" // Forces eager loading instead of lazy loading
              />
              <Image
                className="cursor-pointer"
                width={400}
                height={53}
                src={index % 2 === 0 ? "/warm-line.svg" : "/warm-line-2.svg"}
                alt="Warm Line"
                priority={true}
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
