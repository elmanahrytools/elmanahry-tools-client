"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "@/utlis/axiosInstance";
import Spinner from "@/components/Spinner";

const EditProduct = ({
  setEditFormOpen,
  editFormOpen,
  product,
  setProducts,
}) => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [name, setName] = useState("");
  const [brandId, setBrandId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [sku, setSku] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBrandsAndCategories = async () => {
      try {
        const [brandsRes, categoriesRes] = await Promise.all([
          axiosInstance.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/admin/brands`
          ),
          axiosInstance.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/admin/categories`
          ),
        ]);
        setBrands(brandsRes.data);
        setCategories(categoriesRes.data);
      } catch (err) {
        console.error("Error fetching brands and categories:", err);
      }
    };

    if (editFormOpen) {
      fetchBrandsAndCategories();
      if (product) {
        setName(product.name || "");
        setBrandId(product.brand?._id || "");
        setCategoryId(product.category?._id || "");
        setSku(product.sku || "");
        setDesc(product.desc || "");
        setStatus(product.status?.toString() || "");
        setSortOrder(product.sort?.toString() || "");
        if (product.image) {
          // setImagePreview(
          //   `${process.env.NEXT_PUBLIC_API_URL}/${product.image}`
          // );
          setImagePreview(product.image);
        }
      }
    }
  }, [editFormOpen, product]);

  useEffect(() => {
    if (brandId) {
      const filtered = categories.filter(
        (category) => category.brand._id === brandId
      );
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories([]);
    }
  }, [brandId, categories]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/products`
      );
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !brandId ||
      !categoryId ||
      !sku ||
      !desc ||
      !status ||
      !sortOrder
    ) {
      window.alert("please fill all inputs");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("brandId", brandId);
    formData.append("categoryId", categoryId);
    formData.append("sku", sku);
    formData.append("desc", desc);
    formData.append("status", status);
    formData.append("sort", sortOrder);
    if (image) formData.append("image", image);

    try {
      setLoading(true);
      const res = await axiosInstance.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/products/${product._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product updated successfully:", res.data);
      fetchProducts();
      setEditFormOpen(false);
    } catch (err) {
      console.error("Error updating product:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`absolute w-full h-full bg-[#004062] p-6 rounded-lg overflow-y-auto shadow-lg z-50 transition-all duration-300 ease-in-out ${
        editFormOpen ? "animate-slideUp" : "animate-slideDown"
      }`}
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-white">Edit Product</h2>
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
          <select
            className="block w-full rounded-[7px] p-2 mt-1 bg-[#21709C]"
            value={brandId}
            onChange={(e) => setBrandId(e.target.value)}
          >
            <option value="">Select Brand*</option>
            {brands.map((brand) => (
              <option key={brand._id} value={brand._id}>
                {brand.name}
              </option>
            ))}
          </select>

          <select
            className="block w-full rounded-[7px] p-2 mt-1 bg-[#21709C]"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            disabled={!brandId}
          >
            <option value="">Select Category*</option>
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))
            ) : (
              <option value="" disabled>
                No categories available
              </option>
            )}
          </select>
        </div>

        <input
          type="text"
          className="block w-full rounded-[7px] p-2 mt-1 bg-[#21709C] placeholder:text-textColor"
          placeholder="SKU*"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
        />

        <textarea
          className="block w-full rounded-[7px] p-2 mt-1 bg-[#21709C] placeholder:text-textColor"
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>

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
            placeholder="Sort Order*"
            type="number"
            className="block w-full rounded-[7px] p-2 mt-1 bg-[#21709C] placeholder:text-textColor"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          />
        </div>

        <div className="flex gap-5">
          <label
            htmlFor="productImageEdit"
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
            id="productImageEdit"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
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

export default EditProduct;
