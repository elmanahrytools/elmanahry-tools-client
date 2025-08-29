"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "@/utlis/axiosInstance";
import Spinner from "@/components/Spinner";

const EditCategory = ({
  setEditFormOpen,
  editFormOpen,
  category,
  setCategories,
}) => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // for preview only
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [brands, setBrands] = useState([]); // State to hold brands
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch brands when the component mounts
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axiosInstance.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/admin/brands`
        );
        setBrands(response.data); // Assuming the response contains an array of brands
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []); // Empty dependency array means this runs only once when the component mounts

  // Update form values when the category prop changes
  useEffect(() => {
    if (category) {
      console.log(category);
      setName(category.name || "");
      setBrand(category.brand?._id || ""); // Fix: Assuming category has a brand with _id
      setStatus(category.status?.toString() || "");
      setSort(category.sort || "");
      if (category.image) {
        // setImagePreview(`${process.env.NEXT_PUBLIC_API_URL}${category.image}`);
        setImagePreview(category.image);
      }
    }
  }, [category]); // Only runs when `category` prop changes

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // save the file
      setImagePreview(URL.createObjectURL(file)); // preview only
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/categories`
      );
      setCategories(res.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !brand || !status || !sort) {
      window.alert("please fill all inputs");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("brand", brand);
    formData.append("status", status);
    formData.append("sort", sort);

    if (image) formData.append("image", image); // Only append image if it's new

    try {
      setLoading(true);
      const res = await axiosInstance.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/categories/${category._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      await fetchCategories();

      setEditFormOpen(false); // Optionally close the form after submission
    } catch (err) {
      console.error("Error updating category:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`absolute w-full h-full overflow-y-auto bg-[#004062] p-6 rounded-lg shadow-lg z-50 transition-all duration-300 ease-in-out ${
        editFormOpen ? "animate-slideUp" : "animate-slideDown"
      }`}
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-white">Edit Category</h2>
        <svg
          onClick={() => setEditFormOpen(false)}
          className="w-9 cursor-pointer transition-transform duration-200 hover:rotate-90 hover:text-secondColor"
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
          ></path>
        </svg>
      </div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        {/* Category Name */}
        <input
          type="text"
          className="block w-full rounded-[7px] p-2 mt-1 bg-[#21709C] placeholder:text-textColor"
          placeholder="Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Brand Selection */}
        <select
          className="block w-full rounded-[7px] p-2 mt-1 bg-[#21709C] text-white"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="" disabled>
            Select Brand*
          </option>
          {brands.map((brand) => (
            <option key={brand._id} value={brand._id}>
              {brand.name}
            </option>
          ))}
        </select>

        {/* Active Status */}
        <select
          className="block w-full rounded-[7px] p-2 mt-1 bg-[#21709C]"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Status</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>

        {/* Sort Order */}
        <input
          type="number"
          className="block w-full rounded-[7px] p-2 mt-1 bg-[#21709C] placeholder:text-textColor"
          placeholder="Sort*"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        />

        {/* Image Upload */}
        <div className="flex gap-3">
          <label
            htmlFor="imageUpload"
            className="flex items-center justify-center w-[100px] h-[100px] border-2 border-dashed border-[#21709C] rounded-[7px] cursor-pointer hover:bg-[#21709C22] overflow-hidden"
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Uploaded"
                className="object-contain w-full h-full"
              />
            ) : (
              <span className="text-[#3393c7] text-sm">Image</span>
            )}
          </label>
          <input
            id="imageUpload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-4 gap-5 items-center">
          <button
            type="submit"
            className="bg-secondColor text-white rounded px-4 py-2 hover:bg-[#886823] transition duration-200"
          >
            Update
          </button>
          {loading && <Spinner />}
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
