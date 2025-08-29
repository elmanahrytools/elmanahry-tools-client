// components/ProductCard.js

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Spinner from "@/components/Spinner";
import Link from "next/link";

const ProductCard = ({
  product,
  brandName,
  brandID,
  categoryName,
  categoryID,
}) => {
  const [loadedImages, setLoadedImages] = useState({});
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <Link
      ref={ref}
      key={product.productID}
      href={`/brands/${brandName}/${brandID}/categories/${categoryName}/${categoryID}/products/${product.productID}`} // Use Link for navigation
      className={`flex cursor-pointer transition-all duration-[500ms] ease-in-out flex-col justify-between gap-5 p-4 h-[374px] overflow-hidden group ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="overflow-hidden flex justify-center items-center  min-h-[220px] max-h-[220px]">
        {!loadedImages[product.productID] && <Spinner />}
        <Image
          width={260}
          height={220}
          src={product.image}
          unoptimized
          // src={`${process.env.NEXT_PUBLIC_API_URL}${product.image}`}
          alt={product.name}
          className={`absolute object-contain max-h-[220px] p-2 transform group-hover:scale-110 transition duration-300 ${
            loadedImages[product.productID] ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => handleImageLoad(product.productID)}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 h-[86px] max-h-[86px] min-h-[86px]">
        <h3 className="text-xl font-semibold text-mainColor">{product.sku}</h3>
        <p className="text-mainColor text-center w-[210px] line-clamp-2">
          {product.name}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
