"use client";

import Image from "next/image";
import Spinner from "@/components/Spinner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Credentials are requiredd!");
      return;
    }
    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          username,
          password,
        },
        {
          withCredentials: true, // 👈 important for cookies
        }
      );
      const { token, user } = res.data;
      document.cookie = `token=${token}; path=/; max-age=3600`; // 1 hour
      localStorage.setItem("username", user.username);
      // Set token in the default Authorization header for axios
      // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      router.push("/admin");
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err?.response?.data?.message || "Credentials don't match our records."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-mainColor items-center flex justify-center px-4 sm:px-6 lg:px-[90px] py-8">
      <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2">
        <Image
          src="/side-tri.svg"
          width={330}
          height={508}
          alt="Trinagle"
          priority={true}
          loading="eager"
          className="animate-fadeIn opacity-0"
        />
      </div>
      <form
        onSubmit={handleLogin}
        className=" shadow-xl shadow-[#00000036] animate-slideLeft bg-fadeColor w-[600px] h-[230px] py-5  px-5 md:px-10  rounded-[10px] flex justify-center flex-col"
      >
        <input
          type="text"
          className={`p-2 mb-4 w-full rounded-[10px] border  bg-[#02527d33] text-mainColor placeholder:text-mainColor text-lg outline-mainColor ${
            error ? " border-red-700" : "border-transparent"
          }`}
          placeholder="Your Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
        />
        <input
          type="password"
          className={`p-2 w-full mb-2 rounded-[10px] border  bg-[#02527d33] text-mainColor placeholder:text-mainColor text-lg outline-mainColor ${
            error ? " border-red-700" : "border-transparent"
          }`}
          placeholder="Your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />

        <p className="text-[#a52a2a] h-2"> {error ? error : ""}</p>
        <span className="self-end h-4">
          {loading ? (
            <Spinner size={30} />
          ) : (
            <button type="submit">
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 15.8 15.11"
                className="transition-all duration-300 transform rotate-180 hover:translate-x-2 hover:fill-current fill-mainColor text-secondColor cursor-pointer"
              >
                <polygon points="15.8 15.11 15.8 9.43 11.92 7.56 15.8 5.68 15.8 0 3.27 5.99 0 7.56 3.27 9.12 15.8 15.11" />
              </svg>
            </button>
          )}
        </span>
      </form>
    </div>
  );
};

export default Login;
