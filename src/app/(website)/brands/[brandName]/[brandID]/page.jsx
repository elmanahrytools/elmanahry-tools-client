// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Spinner from "@/components/Spinner";
// import CategoryCard from "@/components/CategoryCard"; // Import the CategoryCard component

// const Brand = () => {
//   const { brandName, brandID } = useParams();
//   const [brandInfo, setBrandInfo] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [loadedImage, setLoadedImage] = useState(false);
//   function slugify(text) {
//     return text
//       .toString()
//       .toLowerCase()
//       .trim()
//       .replace(/[\s\W-]+/g, "-"); // Replace spaces and non-word chars with -
//   }

//   useEffect(() => {
//     const fetchBrandInfo = async () => {
//       try {
//         if (!brandID) return;

//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/brands/${brandID}`
//         );
//         const brandData = response.data;
//         setBrandInfo(brandData);

//         // Preload banner image
//         const img = new Image();
//         img.src = brandData.banner;
//         img.onload = () => {
//           setLoadedImage(true); // This also controls the overlay spinner
//           setLoading(false); // This controls the whole-page fetch spinner
//         };
//         img.onerror = () => {
//           console.error("Failed to load banner image");
//           setLoadedImage(true); // So overlay doesn't get stuck
//           setLoading(false);
//         };
//       } catch (error) {
//         console.error("Error fetching brand:", error);
//         setLoading(false);
//         setLoadedImage(true);
//       }
//     };

//     fetchBrandInfo();
//   }, [brandID]);

//   if (loading) {
//     return (
//       <div className="bg-mainColor  flex justify-center items-center w-full h-[calc(100vh-70px)]">
//         <Spinner />
//       </div>
//     );
//   }

//   return (
//     <div className="w-full flex flex-col items-center">
//       {/* Hero Section */}
//       <div className="relative w-full" style={{ height: "calc(100vh - 70px)" }}>
//         {/* Actual banner image */}
//         <img
//           src={brandInfo.banner}
//           alt={brandInfo.name}
//           className="w-full h-full object-cover"
//         />
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         {/* Loading overlay */}

//         {/* Full-screen overlay while image loads */}
//         {!loadedImage && (
//           <div
//             className={`absolute inset-0 z-30 flex items-center justify-center bg-mainColor`}
//           >
//             <Spinner />
//           </div>
//         )}
//         {/* Content */}
//         <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
//           <h1 className="text-6xl font-bold mb-4 animate-slideUp">
//             {brandInfo.name}
//           </h1>
//           <p className="text-lg max-w-2xl animate-slideUp">
//             {brandInfo.shortDesc}
//           </p>
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="px-6 lg:px-[90px] flex flex-col py-10 w-full items-center justify-center">
//         <div className="flex flex-col max-w-[1400px] w-full">
//           <div className="flex flex-col md:flex-row justify-center items-center mb-16">
//             <h2 className="text-4xl font-semibold">Categories</h2>
//           </div>

//           {brandInfo.categories.length === 0 ? (
//             <p className="text-center text-gray-500">No categories found</p>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//               {brandInfo.categories.map((cat) => (
//                 <CategoryCard
//                   key={cat.categoryID}
//                   category={{
//                     ...cat,
//                     slug: slugify(cat.name),
//                   }}
//                   brandName={brandName}
//                   brandID={brandID}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Brand;
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "@/components/Spinner";
import CategoryCard from "@/components/CategoryCard";

const Brand = () => {
  const { brandName, brandID } = useParams();
  const [brandInfo, setBrandInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadedImage, setLoadedImage] = useState(false);

  function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, "-");
  }

  useEffect(() => {
    const fetchBrandInfo = async () => {
      try {
        if (!brandID) return;

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/brands/${brandID}`
        );
        const brandData = response.data;
        setBrandInfo(brandData);

        // ✅ Only try to load banner if it exists
        if (brandData.banner) {
          const img = new Image();
          img.src = brandData.banner;
          img.onload = () => {
            setLoadedImage(true);
            setLoading(false);
          };
          img.onerror = () => {
            console.error("Failed to load banner image");
            setLoadedImage(true);
            setLoading(false);
          };
        } else {
          // No banner → stop loading immediately
          setLoadedImage(true);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching brand:", error);
        setLoading(false);
        setLoadedImage(true);
      }
    };

    fetchBrandInfo();
  }, [brandID]);

  if (loading) {
    return (
      <div className="bg-mainColor flex justify-center items-center w-full h-[calc(100vh-70px)]">
        <Spinner />
      </div>
    );
  }

  if (!brandInfo) return null;

  const hasCategories = brandInfo.categories && brandInfo.categories.length > 0;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full" style={{ height: "calc(100vh - 70px)" }}>
        {brandInfo.banner && (
          <img
            src={brandInfo.banner}
            alt={brandInfo.name || "Brand banner"}
            className="w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 "></div>

        {!loadedImage && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-mainColor">
            <Spinner />
          </div>
        )}

        {/* Show Coming Soon if no categories */}
        {!hasCategories && (
          <div className="absolute inset-0 z-20 flex items-center justify-center text-white text-center px-4">
            <h1 className=" text-3xl  md:text-4xl font-medium animate-slideUp">
              Coming Soon
            </h1>
          </div>
        )}
      </div>

      {/* Categories Section (only if categories exist) */}
      {hasCategories && (
        <div className="px-6 lg:px-[90px] flex flex-col py-10 w-full items-center justify-center">
          <div className="flex flex-col max-w-[1400px] w-full">
            <div className="flex flex-col md:flex-row justify-center items-center mb-16">
              <h2 className="text-4xl font-semibold">Categories</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {brandInfo.categories.map((cat) => (
                <CategoryCard
                  key={cat.categoryID}
                  category={{
                    ...cat,
                    slug: slugify(cat.name),
                  }}
                  brandName={brandName}
                  brandID={brandID}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Brand;
