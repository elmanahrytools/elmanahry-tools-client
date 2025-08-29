"use client";
import { useState, useEffect } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import Spinner from "@/components/Spinner";
import AddCategory from "@/components/Forms/CategoriesForms/AddCategory";
import EditCategory from "@/components/Forms/CategoriesForms/EditCategory";
import Image from "next/image";
import axiosInstance from "@/utlis/axiosInstance";

const Categories = ({}) => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loadingDelete, setLoadingDelete] = useState({}); // Using an object to track loading for each brand
  const handleEdit = (category) => {
    setEditFormOpen(true);
    setSelectedCategory(category);
  };
  const handleAdd = () => {
    setAddFormOpen(true);
  };

  const handleDelete = async (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setLoadingDelete((prev) => ({ ...prev, [categoryId]: true })); // Set loading for the specific category
      try {
        await axiosInstance.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/api/admin/categories/${categoryId}`
        );
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category._id !== categoryId)
        ); // Remove the deleted category from the state
      } catch (err) {
        console.error("Error deleting category:", err);
      } finally {
        setLoadingDelete((prev) => ({ ...prev, [categoryId]: false })); // Set loading to false for the specific category
      }
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axiosInstance.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/admin/categories`
        );
        console.log(res.data);
        setCategories(res.data); // set the array of categories
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
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
          Add Category
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
      {editFormOpen && selectedCategory && (
        <EditCategory
          setEditFormOpen={setEditFormOpen}
          editFormOpen={editFormOpen}
          setCategories={setCategories}
          category={selectedCategory}
        />
      )}
      {addFormOpen && (
        <AddCategory
          setAddFormOpen={setAddFormOpen}
          addFormOpen={addFormOpen}
          setCategories={setCategories}
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
                Image
              </th>
              <th className="px-4 py-2 text-mainColor font-normal text-lg">
                Brand
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
            {categories.map((category, index) => (
              <tr
                key={index}
                className="text-center border-b border-secondColor last:border-b-0"
              >
                <td className="px-2 py-2 bg-[#a57f2d9c]">
                  {category.categoryID}
                </td>
                <td className="px-4 py-2 truncate max-w-[280px] ">
                  {category.name}
                </td>

                <td className="px-4 py-2 flex justify-center items-center ">
                  <div className="flex justify-center min-h-[30px] min-w-[30px] max-h-[30px] max-w-[30px] items-center">
                    <Image
                      src={category.image}
                      // src={`${process.env.NEXT_PUBLIC_API_URL}${category.image}`}
                      width={30}
                      height={30}
                      alt={category.name}
                      className="object-contain rounded-md min-h-[30px] min-w-[30px] max-h-[30px] max-w-[30px]"
                    />
                  </div>
                </td>
                <td className="px-4 py-2">{category?.brand?.name}</td>
                <td className="px-4 py-2">{category.sort}</td>
                <td
                  className={`px-4 py-2 ${
                    category.status ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <div className="flex justify-center items-center">
                    <div className="flex w-[80px] items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          category.status ? "bg-green-600" : "bg-red-600"
                        }`}
                      ></div>
                      <span> {category.status ? "Active" : "Inactive"}</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-center items-center gap-2">
                    <MdModeEditOutline
                      onClick={() => handleEdit(category)}
                      className="text-2xl cursor-pointer transition-colors duration-300 hover:text-secondColor"
                    />
                    <div
                      onClick={() => handleDelete(category._id)}
                      className="text-3xl cursor-pointer transition-colors duration-300 hover:text-red-700"
                    >
                      {loadingDelete[category._id] ? (
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

export default Categories;
