"use client";
import { useSelector, useDispatch } from "react-redux";
import { setSearch, clearSearch } from "@/store/searchSlice";
import { FiSearch, FiX } from "react-icons/fi";

const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);

  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleClear = () => {
    dispatch(clearSearch());
  };

  return (
    <div className="relative flex items-center w-full max-w-fit mb-10">
      {/* Search Icon */}
      <FiSearch size={22} className="absolute left-3 text-gray-400 text-lg" />

      {/* Input */}
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="ابحث عن منتج..."
        className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-mainColor transition"
      />

      {/* Clear Button */}
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-3 text-gray-400 hover:text-red-500 transition"
        >
          <FiX size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
