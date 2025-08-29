"use client";
import { useState, useEffect } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import Spinner from "@/components/Spinner";
import AddBrand from "@/components/Forms/BrandsForms/AddBrand";
import EditBrand from "@/components/Forms/BrandsForms/EditBrand";
import Image from "next/image";
import axiosInstance from "@/utlis/axiosInstance";

const Brands = ({}) => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [loadingDelete, setLoadingDelete] = useState({}); // Using an object to track loading for each brand
  const handleEdit = (brand) => {
    setEditFormOpen(true);
    setSelectedBrand(brand);
  };
  const handleAdd = () => {
    setAddFormOpen(true);
  };

  const handleDelete = async (brandId) => {
    if (window.confirm("Are you sure you want to delete this brand?")) {
      setLoadingDelete((prev) => ({ ...prev, [brandId]: true })); // Set loading for the specific brand
      try {
        await axiosInstance.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/api/admin/brands/${brandId}`
        );
        setBrands((prevBrands) =>
          prevBrands.filter((brand) => brand._id !== brandId)
        ); // Remove the deleted brand from the state
      } catch (err) {
        console.error("Error deleting brand:", err);
      } finally {
        setLoadingDelete((prev) => ({ ...prev, [brandId]: false })); // Set loading to false for the specific brand
      }
    }
  };

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await axiosInstance.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/admin/brands`
        );
        setBrands(res.data); // set the array of brands
        console.log(res.data);
      } catch (err) {
        console.error("Error fetching brands:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="relative animate-fadeInAdmin flex flex-col items-center gap-5 w-full">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center rounded-[7px] w-[250px] p-2 bg-[#004062a6] border border-[#21709C] focus-within:border-[#3090C7] transition-all duration-200">
          <input
            className="bg-transparent placeholder:text-textColor outline-none w-full px-2  text-white"
            type="text"
            placeholder="Search..."
          />
          <Image
            className="cursor-pointer transition-transform duration-300 transform hover:scale-110 active:scale-95 ml-2"
            width={30}
            height={30}
            src="/search.svg"
            alt="Search Icon"
            priority={true}
            loading="eager"
          />
        </div>

        <button
          onClick={handleAdd}
          type="text"
          className=" group flex items-center gap-2 rounded-[7px] p-2 bg-[#004062a6] placeholder:text-textColor"
        >
          Add Brand
          <Image
            src="/plus.svg"
            width={30}
            height={30}
            alt="Alex Logo"
            priority={true}
            loading="eager"
            className="transition-transform duration-300 transform group-hover:scale-105" // Move up on hover
          />
        </button>
      </div>
      {editFormOpen && selectedBrand && (
        <EditBrand
          setEditFormOpen={setEditFormOpen}
          editFormOpen={editFormOpen}
          brand={selectedBrand}
          setBrands={setBrands}
        />
      )}
      {addFormOpen && (
        <AddBrand
          setAddFormOpen={setAddFormOpen}
          addFormOpen={addFormOpen}
          setBrands={setBrands}
        />
      )}
      <div className=" max-h-[500px] overflow-y-auto customScrollbarBox w-full rounded-[10px] ">
        <table className="rounded-[10px] min-w-[740px] w-full shadow-lg shadow-[#0000004d] bg-[#004062a6]">
          <thead className="bg-[#a57f2d] sticky top-0">
            <tr>
              <th className="px-2 py-2 text-mainColor font-normal text-lg">
                ID
              </th>
              <th className="px-4 py-2 text-mainColor font-normal text-lg">
                Name
              </th>

              <th className="px-4 py-2 text-mainColor font-normal text-lg">
                Banner
              </th>
              <th className="px-4 py-2 text-mainColor font-normal text-lg">
                Logo
              </th>
              <th className="px-4 py-2 text-mainColor font-normal text-lg">
                Sort
              </th>
              <th className="px-4 py-2 text-mainColor font-normal text-lg">
                Active
              </th>
              <th className="px-4 py-2 text-mainColor font-normal text-lg">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, index) => (
              <tr
                key={index}
                className="text-center border-b border-secondColor last:border-b-0"
              >
                <td className="px-2 py-2 bg-[#a57f2d9c]">{brand.brandID}</td>
                <td className="px-4 py-2 truncate max-w-[130px] ">
                  {brand.name}
                </td>
                <td className="px-4 py-2 flex justify-center items-center ">
                  <div className="flex justify-center max-h-[30px] max-w-[30px] min-h-[30px] min-w-[30px] rounded-md items-center">
                    {brand.banner ? (
                      <Image
                        src={brand.banner}
                        width={30}
                        height={30}
                        alt="Brand banner"
                        className="object-contain rounded-md max-h-[30px] min-h-[30px] min-w-[30px] max-w-[30px]"
                      />
                    ) : (
                      <span className="text-xs text-gray-400">No Banner</span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-center items-center">
                    <Image
                      // src={`${process.env.NEXT_PUBLIC_API_URL}${brand.logo}`}
                      src={brand.logo}
                      width={30}
                      height={30}
                      alt={brand.logo}
                      className="object-contain rounded-md"
                    />
                  </div>
                </td>
                <td className="px-4 py-2">{brand.sort}</td>
                <td
                  className={`px-4 py-2 ${
                    brand.status ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <div className="flex justify-center items-center">
                    <div className="flex w-[80px] items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          brand.status ? "bg-green-600" : "bg-red-600"
                        }`}
                      ></div>
                      <span> {brand.status ? "Active" : "Inactive"}</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-center items-center gap-2">
                    <MdModeEditOutline
                      onClick={() => handleEdit(brand)}
                      className="text-2xl cursor-pointer transition-colors duration-300 hover:text-secondColor"
                    />
                    <div
                      onClick={() => handleDelete(brand._id)}
                      className="text-3xl cursor-pointer transition-colors duration-300 hover:text-red-700"
                    >
                      {loadingDelete[brand._id] ? (
                        <Spinner size={23} />
                      ) : (
                        <MdDeleteOutline />
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Brands;
