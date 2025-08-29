"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { Menu } from "lucide-react";
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
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-2 h-[70px]">
      {isMobile ? (
        <Menu
          size={32}
          onClick={() => setIsMobileOpen(true)}
          className="cursor-pointer"
        />
      ) : (
        <Navbar />
      )}
      <div className="flex items-center cursor-pointer">
        <Image
          src="/logo.png"
          alt="Logo"
          width={55}
          height={55}
          onClick={() => (window.location.href = "/")}
          priority
        />
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileOpen && <MobileNavbar onClose={() => setIsMobileOpen(false)} />}
    </header>
  );
};

export default Header;
