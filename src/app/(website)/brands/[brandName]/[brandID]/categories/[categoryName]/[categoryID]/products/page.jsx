// pages/products/[brandName]/[brandID]/[categoryName]/[categoryID].js

"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Spinner from "@/components/Spinner";
import ProductCard from "@/components/ProductCard";

const ProductsPage = () => {
  const { brandName, brandID, categoryName, categoryID } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const filteredProducts = category?.products?.filter((product) => {
    const search = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(search) ||
      product.sku.toLowerCase().includes(search)
    );
  });

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        if (categoryID) {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/categories/${categoryID}`
          );
          setCategory(response.data);
        }
      } catch (error) {
        console.error("Error fetching category:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [categoryID]);

  if (loading) {
    return (
      <div className="flex bg-white justify-center items-center w-full h-[calc(100vh-70px)]">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen flex justify-center bg-white px-6 lg:px-[90px]">
      <div className="flex flex-col max-w-[1400px] w-full">
        <div className=" flex flex-col md:flex-row justify-between items-center gap-5 w-full mb-10 mt-10">
          <h1 className="text-4xl text-mainColor font-semibold">
            {category.name}
          </h1>

          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-[300px] px-4 py-2 border border-gray-300 text-mainColor rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
          {filteredProducts?.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.productID}
                product={product}
                brandName={brandName}
                brandID={brandID}
                categoryName={categoryName}
                categoryID={categoryID}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
