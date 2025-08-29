"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
const AdminSidebar = ({}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [username, setUsername] = useState("");
  const currentPath = usePathname();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (pathname) => {
    return currentPath.endsWith(pathname);
  };

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
    }
  }, []);

  const links = [
    { title: "Dashboard", url: "/admin" },
    { title: "Products", url: "/admin/products" },
    { title: "Brands", url: "/admin/brands" },
    { title: "Categories", url: "/admin/categories" },
  ];
  return (
    <div
      className={`shadow-xl shadow-[#0000004d] transition-all duration-500 bg-[#21709C] rounded-[10px] text-mainColor relative ${
        isOpen ? "min-w-52 w-52 mr-5" : "min-w-0 w-0 mr-0"
      } `}
    >
      {/* Toggle Icon */}
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 15.8 15.11"
        className={`transition-all duration-500 transform ${
          isOpen ? "rotate-0 right-[20px]" : "rotate-180 right-[-5px]"
        } hover:translate-x-2 hover:fill-current fill-current text-secondColor cursor-pointer absolute top-[21px]`}
        onClick={toggleSidebar}
      >
        <polygon points="15.8 15.11 15.8 9.43 11.92 7.56 15.8 5.68 15.8 0 3.27 5.99 0 7.56 3.27 9.12 15.8 15.11" />
      </svg>
      <button
        className={`animate-fadeIn text-textColor opacity-0  text-xl p-2 rounded-tr-[10px] rounded-br-[10px] mb-10 mt-3 bg-gradient-to-r from-[#21709C] to-[#A57F2D] shadow-lg ${
          isOpen ? "" : "hidden"
        }`}
      >
        Hello {username}!
      </button>
      {isOpen && (
        <div className=" flex items-center flex-col ">
          <ul className="flex flex-col gap-1 w-full animate-fadeIn opacity-0">
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className={` text-xl w-full p-2 pl-6 transition-all duration-300  group  ${
                  isActive(link.url)
                    ? "border-l-4 border-secondColor hover:bg-[#02527d48]"
                    : "border-l-4 border-transparent hover:bg-[#02527d48]"
                }`}
              >
                <li
                  className={`transition-all duration-300 ${
                    isActive(link.url)
                      ? "group-hover:translate-x-0 text-secondColor"
                      : "group-hover:translate-x-4 text-textColor"
                  }`}
                >
                  {link.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminSidebar;
