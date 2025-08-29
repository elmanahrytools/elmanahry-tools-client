"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "@/utlis/axiosInstance";
import Spinner from "@/components/Spinner";

const EditBrand = ({ setEditFormOpen, editFormOpen, brand, setBrands }) => {
  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [status, setStatus] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (brand) {
      console.log(brand);
      setName(brand.name || "");
      setWebsite(brand.website || "");
      setShortDesc(brand.shortDesc || "");
      setStatus(brand.status?.toString() || "");
      setSortOrder(brand.sort || "");
      if (brand.logo)
        if (brand.banner)
          // setLogoPreview(`${process.env.NEXT_PUBLIC_API_URL}${brand.logo}`);
          // setBannerPreview(`${process.env.NEXT_PUBLIC_API_URL}${brand.banner}`);
          setLogoPreview(brand.logo);
      setBannerPreview(brand.banner);
    }
  }, [brand]);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBanner(file);
      setBannerPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !website || !status || !sortOrder) {
      window.alert("please fill all inputs");
      return;
    }

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
      const res = await axiosInstance.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/brands/${brand._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Brand updated successfully:", res.data);
      // If the update is successful, update the brand in the parent state
      setBrands((prevBrands) =>
        prevBrands.map((b) => (b._id === brand._id ? { ...b, ...res.data } : b))
      );
      setEditFormOpen(false);
    } catch (err) {
      console.error("Error updating brand:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`absolute w-full h-full bg-[#004062] p-6 rounded-lg shadow-lg z-50 transition-all duration-300 ease-in-out ${
        editFormOpen ? "animate-slideUp" : "animate-slideDown"
      }`}
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-white">Edit Brand</h2>
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
        <input
          type="text"
          className="block w-full rounded-[7px] p-2 mt-1 bg-[#21709C] placeholder:text-textColor"
          placeholder="Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <div className="flex gap-3">
          <select
            className="block w-full rounded-[7px] p-2 mt-1 bg-[#21709C]"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Status</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
          <input
            type="number"
            placeholder="Sort*"
            className="block w-full rounded-[7px] p-2 mt-1 bg-[#21709C] placeholder:text-textColor"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          />
        </div>

        <div className="flex gap-5">
          <label
            htmlFor="logoUploadEdit"
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
            id="logoUploadEdit"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleLogoChange}
          />
          <label
            htmlFor="bannerUploadEdit"
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
            id="bannerUploadEdit"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleBannerChange}
          />
        </div>

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

export default EditBrand;
