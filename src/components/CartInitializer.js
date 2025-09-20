"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "@/store/cartSlice";
import { setSearch, setCategories, setBrands } from "@/store/filterSlice";

export default function Initializer({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // 🛒 استرجاع الكارت
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      dispatch(setCart(JSON.parse(savedCart)));
    }

    // 🔍 استرجاع الفلاتر (search + categories + brands)
    const savedFilters = localStorage.getItem("filters");
    if (savedFilters) {
      const { search, categories, brands } = JSON.parse(savedFilters);

      if (search) dispatch(setSearch(search));
      if (categories) dispatch(setCategories(categories));
      if (brands) dispatch(setBrands(brands));
    }
  }, [dispatch]);

  return children;
}
