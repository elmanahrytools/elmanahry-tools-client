"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearch,
  clearFilters,
  setCategories,
  setBrands,
} from "@/store/filterSlice";
import { FiSearch, FiX, FiFilter } from "react-icons/fi";
import Select from "react-select";
import { tools } from "@/data/tools";
import { useIsMobile } from "@/hooks/useIsMobile";
const FilterBar = ({
  showSearch = true,
  showCategoryFilter = false,
  showBrandFilter = false,
}) => {
  const dispatch = useDispatch();
  const { search, categories, brands } = useSelector((state) => state.filters);
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, [isSidebarOpen]);

  const getCategoryOptions = () => {
    const categories = [...new Set(tools.map((tool) => tool.category))];
    return categories.map((cat) => ({ value: cat, label: cat }));
  };

  const getBrandOptions = () => {
    const brands = [...new Set(tools.map((tool) => tool.brand))];
    return brands.map((brand) => ({ value: brand, label: brand }));
  };

  const categoryOptions = getCategoryOptions();
  const brandOptions = getBrandOptions();
  const selectStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "12px", // fully rounded
      minHeight: "40px",
      borderColor: state.isFocused ? "#104270" : "transparent", // red when focused, gray otherwise
      boxShadow: state.isFocused ? "none" : "none",
      "&:hover": {
        borderColor: state.isFocused ? "#104270" : "none", // hover color
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "12px", // dropdown menu rounded
      overflow: "hidden", // ensure first/last rounding shows
    }),
    menuList: (provided) => ({
      ...provided,
      padding: "0px", // adjust padding inside the dropdown
    }),
    option: (provided, state) => ({
      ...provided,
      padding: "10px 12px",
      backgroundColor: state.isFocused ? "#1042701f" : "white",
      borderRadius:
        state.isFocused && state.data.isFirst
          ? "12px 12px 0 0"
          : state.isFocused && state.data.isLast
          ? "0 0 12px 12px"
          : 0,
    }),
    multiValue: (provided) => ({
      ...provided,
      borderRadius: "12px", // pills rounded
      backgroundColor: "#1042701f",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      padding: "1px 8px",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      borderRadius: "12px",
    }),
  };

  return (
    <>
      <div className="flex items-center justify-between md:justify-start gap-4 w-full mb-4">
        {/* Search Input */}
        {showSearch && (
          <div className="relative flex items-center w-full max-w-full h-[20px] md:max-w-[300px]">
            <FiSearch
              size={22}
              className="absolute left-3 text-gray-400 text-lg"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              placeholder="ابحث عن منتج..."
              className="w-full pl-10 pr-10 py-2  rounded-xl focus:outline-none focus:border focus:border-mainColor transition"
            />
            {search && (
              <button
                onClick={() => dispatch(clearFilters())}
                className="absolute right-3 text-gray-400 hover:text-red-500 transition"
              >
                <FiX size={18} />
              </button>
            )}
          </div>
        )}

        {/* Filter Button for Mobile */}
        <button
          className="md:hidden flex items-center gap-2 px-3 py-2 bg-mainColor text-white rounded-xl ml-2"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FiFilter size={18} /> فلاتر
        </button>

        {/* Filters for Desktop */}
        <div className="hidden md:flex flex-wrap items-center gap-4">
          {showCategoryFilter && (
            <Select
              isMulti
              options={categoryOptions}
              value={categoryOptions.filter((opt) =>
                categories.includes(opt.value)
              )}
              onChange={(selected) =>
                dispatch(setCategories(selected.map((opt) => opt.value)))
              }
              placeholder="اختر الفئات"
              className="text-sm"
              classNamePrefix="select"
              styles={selectStyles}
            />
          )}

          {showBrandFilter && (
            <Select
              isMulti
              options={brandOptions}
              value={brandOptions.filter((opt) => brands.includes(opt.value))}
              onChange={(selected) =>
                dispatch(setBrands(selected.map((opt) => opt.value)))
              }
              placeholder="اختر الماركات"
              className="text-sm"
              classNamePrefix="select"
              styles={selectStyles}
            />
          )}
          {/* Clear Filters Button */}
          {(search || categories.length > 0 || brands.length > 0) && (
            <button
              onClick={() => dispatch(clearFilters())}
              className="px-4 py-2 bg-redColor text-white rounded-xl hover:bg-red-600 transition"
            >
              مسح الفلاتر
            </button>
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0  bg-black bg-opacity-40 z-40 animate-fadeIn"
            onClick={() => setIsSidebarOpen(false)}
          ></div>

          <div className="fixed top-0 right-0 h-full w-full bg-grayColor z-50 p-4 flex flex-col gap-4 transform transition-transform duration-300 animate-slideRightCart">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-lg">فلاتر</span>
              <button onClick={() => setIsSidebarOpen(false)}>
                <FiX size={22} />
              </button>
            </div>

            {showCategoryFilter && (
              <Select
                isMulti
                options={categoryOptions}
                value={categoryOptions.filter((opt) =>
                  categories.includes(opt.value)
                )}
                onChange={(selected) =>
                  dispatch(setCategories(selected.map((opt) => opt.value)))
                }
                placeholder="اختر الفئات"
                className="text-sm"
                classNamePrefix="select"
                styles={selectStyles}
              />
            )}

            {showBrandFilter && (
              <Select
                isMulti
                options={brandOptions}
                value={brandOptions.filter((opt) => brands.includes(opt.value))}
                onChange={(selected) =>
                  dispatch(setBrands(selected.map((opt) => opt.value)))
                }
                placeholder="اختر الماركات"
                className="text-sm"
                classNamePrefix="select"
                styles={selectStyles}
              />
            )}
            {/* Clear Filters Button */}
            {(search || categories.length > 0 || brands.length > 0) && (
              <button
                onClick={() => dispatch(clearFilters())}
                className="mt-4 px-4 py-2 bg-redColor text-white rounded-xl hover:bg-red-600 transition"
              >
                مسح الفلاتر
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default FilterBar;
