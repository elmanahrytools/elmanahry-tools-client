// utils/axiosInstance.js
import axios from "axios";
import { getTokenFromCookies } from "./getTokenFromCookies";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // Optional if you need to send cookies
});

// Attach token to every request
axiosInstance.interceptors.request.use((config) => {
  const token = getTokenFromCookies();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
