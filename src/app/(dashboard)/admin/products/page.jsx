"use client";
import { useState, useEffect } from "react";
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";
import Spinner from "@/components/Spinner";
import AddProduct from "@/components/Forms/ProductsForms/AddProduct";
import EditProduct from "@/components/Forms/ProductsForms/EditProduct";
import Image from "next/image";
import axiosInstance from "@/utlis/axiosInstance";
const Products = () => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loadingDelete, setLoadingDelete] = useState({});

  const handleEdit = (product) => {
    setEditFormOpen(true);
    setSelectedProduct(product);
  };

  const handleAdd = () => {
    setAddFormOpen(true);
  };

  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setLoadingDelete((prev) => ({ ...prev, [productId]: true }));
      try {
        await axiosInstance.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/api/admin/products/${productId}`
        );
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== productId)
        );
      } catch (err) {
        console.error("Error deleting product:", err);
      } finally {
        setLoadingDelete((prev) => ({ ...prev, [productId]: false }));
      }
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/admin/products`
        );
        setProducts(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
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
            priority
          />
        </div>

        <button
          onClick={handleAdd}
          type="text"
          className=" group flex items-center gap-2 rounded-[7px] p-2 bg-[#004062a6] placeholder:text-textColor"
        >
          Add Product
          <Image
            src="/plus.svg"
            width={30}
            height={30}
            alt="Add Icon"
            priority
            className="transition-transform duration-300 transform group-hover:scale-105"
          />
        </button>
      </div>

      {editFormOpen && selectedProduct && (
        <EditProduct
          setEditFormOpen={setEditFormOpen}
          editFormOpen={editFormOpen}
          product={selectedProduct}
          setProducts={setProducts}
        />
      )}

      {addFormOpen && (
        <AddProduct
          setAddFormOpen={setAddFormOpen}
          addFormOpen={addFormOpen}
          setProducts={setProducts}
        />
      )}

      <div className=" max-h-[500px] overflow-y-auto customScrollbarBox w-full rounded-[10px] ">
        <table className="rounded-[10px] min-w-[740px] w-full shadow-lg shadow-[#0000004d] bg-[#004062a6]">
          <thead className="bg-[#a57f2d] sticky top-0">
            <tr>
              <th className="px-2 py-2 text-mainColor font-normal text-lg">
                ID
              </th>
              <th className="px-2 py-2 text-mainColor font-normal text-lg">
                SKU
              </th>
              <th className="px-4 py-2 text-mainColor font-normal text-lg">
                Name
              </th>
              <th className="px-4 py-2 text-mainColor font-normal text-lg">
                Brand
              </th>
              <th className="px-4 py-2 text-mainColor font-normal text-lg">
                Category
              </th>
              <th className="px-4 py-2 text-mainColor font-normal text-lg">
                Image
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
            {products.map((product, index) => (
              <tr
                key={index}
                className="text-center border-b border-secondColor last:border-b-0"
              >
                <td className="px-2 py-2 bg-[#a57f2d9c]">
                  {product.productID}
                </td>
                <td className="px-4 py-2 truncate max-w-[100px] ">
                  {product.sku}
                </td>
                <td className="px-4 py-2 truncate max-w-[130px] ">
                  {product.name}
                </td>
                <td className="px-4 py-2">{product.brand?.name || "-"}</td>
                <td className="px-4 py-2 truncate max-w-[130px] ">
                  {product.category?.name || "-"}
                </td>
                <td className="px-4 py-2 flex justify-center rounded-md min-h-[30px] min-w-[30px] items-center ">
                  <div className="flex justify-center rounded-md min-h-[30px] min-w-[30px] max-h-[30px] max-w-[30px] items-center">
                    <Image
                      src={product.image}
                      // src={`${process.env.NEXT_PUBLIC_API_URL}${product.image}`}
                      width={30}
                      height={30}
                      alt={product.name}
                      className="object-contain rounded-md min-h-[30px] min-w-[30px] max-h-[30px] max-w-[30px]"
                    />
                  </div>
                </td>
                <td className="px-4 py-2">{product.sort}</td>
                <td
                  className={`px-4 py-2 ${
                    product.status ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <div className="flex justify-center items-center">
                    <div className="flex w-[80px] items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          product.status ? "bg-green-600" : "bg-red-600"
                        }`}
                      ></div>
                      <span>{product.status ? "Active" : "Inactive"}</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-center items-center gap-2">
                    <MdModeEditOutline
                      onClick={() => handleEdit(product)}
                      className="text-2xl cursor-pointer transition-colors duration-300 hover:text-secondColor"
                    />
                    <div
                      onClick={() => handleDelete(product._id)}
                      className="text-3xl cursor-pointer transition-colors duration-300 hover:text-red-700"
                    >
                      {loadingDelete[product._id] ? (
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

export default Products;
