"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Spinner from "@/components/Spinner";
import Image from "next/image";

function ProductDetails() {
  const { productID } = useParams(); // Extract the productID from the URL params
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null); // State to store the fetched product
  const [loadedImage, setLoadedImage] = useState(false);

  const handleImageLoad = () => {
    setLoadedImage(true);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Make the request to fetch product details by productID
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products/${productID}`
        );
        setProduct(response.data); // Update the state with the fetched product data
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false); // Stop loading once the data is fetched
      }
    };

    fetchProduct();
  }, [productID]); // The effect depends on productID

  if (loading) {
    return (
      <div className="flex bg-white justify-center items-center w-full min-h-[calc(100vh-70px)]">
        <Spinner />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center w-full min-h-[calc(100vh-70px)]">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-[calc(100vh-70px)] flex px-6 lg:px-[90px] justify-center">
      <div className="flex flex-col max-w-[1400px] w-full justify-center py-20">
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row justify-between h-full md:items-center  ">
          <div className="md:w-[50%] text-mainColor flex flex-col gap-5 md:pe-28">
            <h1 className="font-semibold text-xl text-center md:text-start md:text-3xl">
              {product.name}
            </h1>
            <p>
              {product.desc.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
          <div className="md:w-[50%] md:border-l border-l-secondColor text-mainColor h-[80%] gap-7 flex flex-col justify-center items-center">
            <div className="h-[400px] flex items-center justify-center relative">
              {!loadedImage && (
                <div className="absolute z-10 flex items-center justify-center h-full w-full bg-white/50">
                  <Spinner />
                </div>
              )}
              <Image
                // src={`${process.env.NEXT_PUBLIC_API_URL}${product.image}`}
                src={product.image}
                width={400}
                height={300}
                alt={product.name}
                className={`object-contain max-h-[300px] transition-opacity duration-500 ${
                  loadedImage ? "opacity-100" : "opacity-0"
                }`}
                onLoad={handleImageLoad}
                unoptimized
              />
            </div>

            <p className="font-bold text-3xl ">{product.sku}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
