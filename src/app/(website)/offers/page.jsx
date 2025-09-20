"use client";

import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { tools } from "@/data/tools";
import FilterBar from "@/components/FilterBar";
import OffersCard from "@/components/ProductsCards/OffersCard";
import usePagination from "@/hooks/usePagination";
import Loading from "@/components/Loading";

function OffersContent() {
  const cartItems = useSelector((state) => state.cart.items);
  const { search, categories, brands } = useSelector((state) => state.filters);

  const filteredTools = tools.filter((tool) => {
    const matchSearch = tool.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      categories.length === 0 || categories.includes(tool.category);
    const matchBrand = brands.length === 0 || brands.includes(tool.brand);
    return matchSearch && matchCategory && matchBrand;
  });

  // Use pagination hook
  const { currentPage, totalPages, startIndex, endIndex, updatePage } =
    usePagination(filteredTools.length, 8);

  const paginatedTools = filteredTools.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col max-w-7xl mx-auto md:px-4 px-2 my-10 min-h-[calc(100vh-150px)]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-5">
        <FilterBar
          showCategoryFilter={true}
          showBrandFilter={true}
          showSearch
        />
        <div className="self-start min-w-fit">
          <span className="text-mainColor text-base md:text-lg font-medium">
            منتجات {startIndex + 1} - {Math.min(endIndex, filteredTools.length)}{" "}
            من {filteredTools.length}
          </span>
        </div>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 w-full">
        {paginatedTools.length > 0 ? (
          paginatedTools.map((tool) => {
            const itemInCart = cartItems.find((i) => i.id === tool.id);
            return (
              <OffersCard key={tool.id} tool={tool} itemInCart={itemInCart} />
            );
          })
        ) : (
          <p className="col-span-full text-center w-full text-gray-500">
            لا يوجد منتجات مطابقة للبحث
          </p>
        )}
      </div>
      {/* Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-20">
          <button
            onClick={() => updatePage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-1 rounded-2xl flex justify-center items-center ${
              currentPage === 1
                ? "bg-gray-300 text-mainColor cursor-not-allowed"
                : "bg-mainColor text-white hover:bg-mainColorHover transition"
            }`}
          >
            السابق
          </button>

          <span className="text-gray-700 font-semibold">
            صفحة {currentPage} من {totalPages}
          </span>

          <button
            onClick={() => updatePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-1 rounded-2xl flex justify-center items-center ${
              currentPage === totalPages
                ? "bg-gray-300 text-mainColor cursor-not-allowed"
                : "bg-mainColor text-white hover:bg-mainColorHover transition"
            }`}
          >
            التالي
          </button>
        </div>
      )}
    </div>
  );
}

export default function Offers() {
  return (
    <Suspense fallback={<Loading />}>
      <OffersContent />
    </Suspense>
  );
}
