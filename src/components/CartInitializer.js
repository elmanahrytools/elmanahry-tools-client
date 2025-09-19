"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "@/store/cartSlice";
import { setSearch } from "@/store/searchSlice";

export default function Initializer({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // 🛒 استرجاع الكارت
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      dispatch(setCart(JSON.parse(savedCart)));
    }

    // 🔍 استرجاع السيرش
    const savedSearch = localStorage.getItem("search");
    if (savedSearch) {
      dispatch(setSearch(JSON.parse(savedSearch)));
    }
  }, [dispatch]);

  return children;
}
