import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation"; // For Next.js 13+
// import { useInView } from "react-intersection-observer";
import Spinner from "@/components/Spinner";
function GlobalSearch({ toggleSearch, setIsSearchOpen }) {
  const [allProducts, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loadedImages, setLoadedImages] = useState({});

  const router = useRouter();

  // Fetch all products when component mounts
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products/all-products`
        );
        setAllProducts(response.data);
        console.log("All Products:", response.data);
      } catch (error) {
        console.error("Error fetching all products:", error);
      }
    };

    fetchAllProducts();
  }, []);

  function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, "-"); // Replace spaces and non-word chars with -
  }

  const handleNavigate = (product) => {
    if (!product?.brand || !product?.category) return;

    const brandName = product?.brand?.name;
    const brandID = product?.brand?.brandID;
    const categoryName = product?.category?.name;
    const categoryID = product?.category?.categoryID;

    router.push(
      `/brands/${slugify(brandName)}/${brandID}/categories/${slugify(
        categoryName
      )}/${categoryID}/products/${product.productID}`
    );
    setIsSearchOpen(false);
  };

  // Optional: Filter products by name or SKU
  const filteredProducts = allProducts.filter(
    (product) =>
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        product.brand.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      searchTerm // Only show products if searchTerm is not empty
  );

  // InView hook for lazy loading the image
  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };
  // const { ref, inView } = useInView({
  //   threshold: 0.3,
  //   triggerOnce: true,
  // });

  return (
    <div className="animate-slideDown fixed inset-0 bg-mainColor flex items-center justify-center z-50">
      {/* Close Button */}
      <svg
        onClick={() => setIsSearchOpen(false)}
        className="absolute top-5 right-[10px] md:right-[15px] lg:right-[90px] w-10 cursor-pointer transition-transform duration-200 hover:rotate-90 hover:text-secondColor"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      {/* Search Input */}
      <div className="flex flex-col items-center w-full">
        <input
          type="text"
          placeholder="Search by name or SKU..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[90%] md:w-[80%] lg:w-[60%] py-2 bg-transparent rounded-none outline-none border-b border-b-secondColor text-lg text-white placeholder:text-gray-300"
        />

        {/* Search Results */}
        <div className="mt-6 max-h-[300px] overflow-y-auto w-[90%] md:w-[80%] lg:w-[60%]">
          {searchTerm && filteredProducts.length === 0 ? (
            <p className="text-white text-center">No results found.</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                onClick={() => handleNavigate(product)}
                // ref={ref}
                key={product.productID}
                className={`text-white hover:bg-white/20 border-none transition-all duration-300 rounded-md cursor-pointer py-2 border-b border-gray-600  last:border-0 flex items-center gap-4 justify-between p-2 `}
              >
                <div className="flex flex-col">
                  <p className="font-semibold text-lg md:text-xl max-w-[180px] md:max-w-full truncate">
                    {product.name}
                  </p>
                  <p className="text-base text-gray-400  max-w-[150px] md:max-w-full truncate">
                    <span className="text-secondColor ">SKU:</span>{" "}
                    {product.sku}
                  </p>
                  <p className="text-base text-gray-400  max-w-[150px] md:max-w-full truncate">
                    <span className="text-secondColor">Brand:</span>{" "}
                    {product.brand.name}
                  </p>
                  <p className="text-base text-gray-400  max-w-[180px] md:max-w-full truncate">
                    <span className="text-secondColor">Category:</span>{" "}
                    {product.category.name}
                  </p>
                </div>

                {/* Lazy load images with inView */}
                <div className="relative w-[100px] h-[100px] flex md:me-10 justify-center items-center ">
                  {/* Show the spinner if the image hasn't loaded yet */}
                  {!loadedImages[product.productID] && <Spinner />}

                  <Image
                    width={100}
                    height={100}
                    src={product.image}
                    alt={product.name}
                    unoptimized
                    onLoad={() => handleImageLoad(product.productID)}
                    className={`object-contain rounded-md transition duration-300 absolute max-w-[100px] max-h-[100px] ${
                      loadedImages[product.productID]
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default GlobalSearch;
