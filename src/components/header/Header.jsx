"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { Menu } from "lucide-react";
import { BsSearch } from "react-icons/bs";
import { PiShoppingCartLight } from "react-icons/pi";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky  top-0 z-50 bg-grayColor h-[70px] flex items-center">
      <div className="max-w-7xl flex justify-between items-center px-4 w-full py-2 mx-auto">
        <div className="flex items-center cursor-pointer">
          <Image
            src="/logoMain.png"
            alt="Logo"
            width={110}
            height={50}
            onClick={() => (window.location.href = "/")}
            priority
          />
        </div>

        {isMobile ? (
          <div className="flex items-center gap-3">
            <div className="relative">
              <PiShoppingCartLight color="#104270" size={30} />
              <div className="absolute text-xs font-bold bg-mainColor text-grayColor rounded-full w-[25px] h-[25px] flex justify-center items-center top-[-10px] left-[25px]">
                33
              </div>
            </div>
            <BsSearch className="rotate-90" color="#104270" size={25} />
            <Menu
              size={32}
              onClick={() => setIsMobileOpen(true)}
              className="cursor-pointer"
              color="#104270"
            />
          </div>
        ) : (
          <Navbar />
        )}
        <div className="items-center justify-center md:flex hidden gap-3">
          <div className="relative">
            <PiShoppingCartLight color="#104270" size={35} />
            <div className="absolute text-xs font-bold bg-mainColor text-grayColor rounded-full w-[25px] h-[25px] flex justify-center items-center top-[-10px] left-[25px]">
              33
            </div>
          </div>

          <BsSearch className="rotate-90 " color="#104270" size={30} />
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileOpen && (
          <MobileNavbar onClose={() => setIsMobileOpen(false)} />
        )}
      </div>
    </header>
  );
};

export default Header;
