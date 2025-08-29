"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category, brandName, brandID }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Link
      ref={ref}
      href={`/brands/${brandName}/${brandID}/categories/${category.slug}/${category.categoryID}/products`}
      className={`relative group rounded-lg overflow-hidden cursor-pointer h-[250px] ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } transition-all duration-[500ms] ease-in-out`}
    >
      {/* Image wrapper with padding & centering */}
      <div className="h-full w-full flex items-center justify-center p-4  bg-white">
        <Image
          width={400}
          height={250}
          // src={`${process.env.NEXT_PUBLIC_API_URL}${category.image}`}
          src={category.image}
          alt={category.name}
          className="object-contain max-h-full max-w-full transform group-hover:scale-110 transition duration-300"
          priority={true}
          loading="eager"
          unoptimized
        />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-35 group-hover:bg-opacity-50 transition duration-300 rounded-lg"></div>

      {/* Title overlay */}
      <div className="absolute inset-0 flex items-center p-4 justify-center">
        <h3 className="text-white text-xl text-center  md:text-2xl font-semibold opacity-100 transition duration-300">
          {category.name}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
