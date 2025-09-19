"use client";
import { createSlice } from "@reduxjs/toolkit";

const saveSearchToStorage = (search) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("search", JSON.stringify(search));
  }
};

const initialState = {
  query: "", // النص اللي المستخدم كتبه
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.query = action.payload;
      saveSearchToStorage(state.query);
    },
    clearSearch: (state) => {
      state.query = "";
      saveSearchToStorage(state.query);
    },
  },
});

export const { setSearch, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
