// src/store/filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Save to localStorage
const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("filters", JSON.stringify(state));
  } catch {}
};

const initialState = {
  search: "",
  categories: [],
  brands: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
      saveToLocalStorage(state);
    },
    setCategories(state, action) {
      state.categories = action.payload; // array كامل
      saveToLocalStorage(state);
    },
    setBrands(state, action) {
      state.brands = action.payload; // array كامل
      saveToLocalStorage(state);
    },
    clearFilters(state) {
      state.search = "";
      state.categories = [];
      state.brands = [];
      saveToLocalStorage(state);
    },
  },
});

export const { setSearch, setCategories, setBrands, clearFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
