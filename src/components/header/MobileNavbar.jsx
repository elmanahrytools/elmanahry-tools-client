"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
function MobileNavbar({ onClose }) {
  const links = [
    { title: "المنتجات", href: "/" },
    { title: "العلامات التجارية", href: "/" },
    { title: "تواصل معنا", href: "/contact" },
    { title: "عن الشركة", href: "/about" },
  ];
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed animate-slideRight inset-0 z-50 bg-mainColor flex flex-col">
      {/* Top bar with close button */}
      <div className="flex justify-between bg-mainColor h-[70px] items-center p-4 border-b border-gray-200">
        <div className="flex items-center cursor-pointer">
          <Image
            src="/logo.png"
            alt="Logo"
            width={110}
            height={50}
            onClick={() => (window.location.href = "/")}
            priority
          />
        </div>
        <button onClick={onClose} className="text-gray-700">
          <X size={32} color="white" />
        </button>
      </div>

      {/* Menu Links */}
      <div className="flex flex-col p-6 gap-4 overflow-y-auto h-[calc(100vh-64px)]">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            onClick={onClose}
            className="text-[20px] text-grayColor hover:text-yellowColor transition-colors duration-300"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default MobileNavbar;
