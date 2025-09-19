"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { Menu } from "lucide-react";
import { BsSearch } from "react-icons/bs";
import { PiShoppingCartLight } from "react-icons/pi";
import { useSelector } from "react-redux";
import CartSidebar from "../CartSidebar";
import { useIsMobile } from "@/hooks/useIsMobile";
const Header = () => {
  const isMobile = useIsMobile();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    if (cartCount > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 300); // reset بعد الأنيميشن
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
    <header className="sticky top-0 z-50 bg-grayColor h-[70px] flex items-center">
      <div className="max-w-7xl flex justify-between items-center px-4 w-full py-2 mx-auto">
        {/* Logo */}
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

        {/* Mobile */}
        {isMobile ? (
          <div className="flex items-center gap-3">
            <div
              className="relative cursor-pointer"
              onClick={() => setIsCartOpen(true)}
            >
              <PiShoppingCartLight color="#104270" size={32} />
              {cartCount > 0 && (
                <div
                  className={`absolute numbers text-xs font-bold bg-mainColor text-grayColor rounded-full w-[25px] h-[25px] flex justify-center items-center top-[-10px] left-[25px] transition-transform duration-300 ${
                    animate ? "scale-125" : "scale-100"
                  }`}
                >
                  {cartCount}
                </div>
              )}
            </div>
            <BsSearch className="rotate-90" color="#104270" size={26} />
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

        {/* Desktop */}
        <div className="items-center justify-center md:flex hidden gap-3">
          <div
            className="relative cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          >
            <PiShoppingCartLight color="#104270" size={35} />
            {cartCount > 0 && (
              <div
                className={`absolute text-xs font-bold numbers bg-mainColor text-grayColor rounded-full w-[25px] h-[25px] flex justify-center items-center top-[-10px] left-[25px] transition-transform duration-300 ${
                  animate ? "scale-125" : "scale-100"
                }`}
              >
                {cartCount}
              </div>
            )}
          </div>

          <BsSearch className="rotate-90 " color="#104270" size={30} />
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileOpen && (
          <MobileNavbar onClose={() => setIsMobileOpen(false)} />
        )}
      </div>
      {/* Cart Sidebar */}
      {isCartOpen && <CartSidebar onClose={() => setIsCartOpen(false)} />}
    </header>
  );
};

export default Header;
