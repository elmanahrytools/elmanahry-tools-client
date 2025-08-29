"use client";

import React, { useState } from "react";
import axiosInstance from "@/utlis/axiosInstance";
import Spinner from "@/components/Spinner";
const AddBrand = ({ setAddFormOpen, addFormOpen, setBrands }) => {
  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null); // for preview only
  const [bannerPreview, setBannerPreview] = useState(null); // for preview only
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [status, setStatus] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file); // save the file
      setLogoPreview(URL.createObjectURL(file)); // preview only
    }
  };

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBanner(file); // save the file
      setBannerPreview(URL.createObjectURL(file)); // preview only
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !status || !sortOrder || !logo) {
      window.alert("please fill all inputs");
      return;
    }
    // Create FormData instance to send data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("website", website);
    formData.append("shortDesc", shortDesc);
    formData.append("status", status);
    formData.append("sortOrder", sortOrder);

    if (logo) formData.append("logo", logo);
    if (banner) formData.append("banner", banner);

    try {
      setLoading(true);
      // Assuming the backend API is at http://localhost:5000/api/brands
      const res = await axiosInstance.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/brands`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Handle success
      console.log("Brand created successfully:", res.data);
      // Update the brands state in the parent component
      setBrands((prevBrands) => [...prevBrands, res.data]); // Add the new brand to the list

      // Optionally close the form after submission
      setAddFormOpen(false);
    } catch (err) {
      console.error("Error creating brand:", err);
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`absolute w-full h-full bg-[#004062] p-6 rounded-lg shadow-lg z-50 transition-all duration-300 ease-in-out ${
        addFormOpen ? "animate-slideUp" : "animate-slideDown"
      }`}
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-white">Add Brand</h2>
        <svg
          onClick={() => setAddFormOpen(false)}
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
        {/* Product Name */}
        <input
          type="text"
          className="block w-full rounded-[7px] p-2 mt-1 bg-[#21709C] placeholder:text-textColor"
          placeholder="Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Brand and Category in a Row */}
        <div className="flex gap-3">
          <input
            type="text"
            className="block w-full rounded-[7px] p-2 mt-1 bg-[#21709C] placeholder:text-textColor"
            placeholder="Website Link"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />

          <input
            type="text"
            className="block w-full rounded-[7px] p-2 mt-1 bg-[#21709C] placeholder:text-textColor"
            placeholder="Short Desc"
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
          />
        </div>

        {/* Image Upload */}
        <div className="flex gap-3">
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
            placeholder="Sort*"
            type="number"
            className="block w-full rounded-[7px] p-2 mt-1 bg-[#21709C] placeholder:text-textColor"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          />
        </div>

        <div className="flex gap-5">
          <label
            htmlFor="logoUpload"
            className="flex items-center justify-center w-[100px] h-[100px] border-2 border-dashed border-[#21709C] rounded-[7px] cursor-pointer hover:bg-[#21709C22] overflow-hidden"
          >
            {logoPreview ? (
              <img
                src={logoPreview}
                alt="Uploaded"
                className="object-contain w-full h-full"
              />
            ) : (
              <span className="text-[#3393c7] text-sm">Logo</span>
            )}
          </label>
          <input
            id="logoUpload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleLogoChange}
          />
          <label
            htmlFor="bannerUpload"
            className="flex items-center justify-center w-[100px] h-[100px] border-2 border-dashed border-[#21709C] rounded-[7px] cursor-pointer hover:bg-[#21709C22] overflow-hidden"
          >
            {bannerPreview ? (
              <img
                src={bannerPreview}
                alt="Uploaded"
                className="object-contain w-full h-full"
              />
            ) : (
              <span className="text-[#3393c7] text-sm">Banner</span>
            )}
          </label>
          <input
            id="bannerUpload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleBannerChange}
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-4 gap-5 items-center">
          <button
            type="submit"
            className="bg-secondColor text-white rounded px-4 py-2 hover:bg-[#886823] transition duration-200"
          >
            Save
          </button>
          {loading && <Spinner />}
        </div>
      </form>
    </div>
  );
};

export default AddBrand;
