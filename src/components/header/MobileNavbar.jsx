"use client";

import React from "react";
import { X } from "lucide-react";
import Image from "next/image";
function MobileNavbar({ onClose }) {
  const links = [
    { title: "تواصل معنا", href: "/contact" },
    { title: "عن الشركة", href: "/about" },
  ];

  return (
    <div className="fixed animate-slideRight inset-0 z-50 bg-white flex flex-col">
      {/* Top bar with close button */}
      <div className="flex justify-between h-[70px] items-center p-4 border-b border-gray-200">
        <button onClick={onClose} className="text-gray-700">
          <X size={32} />
        </button>
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
      </div>

      {/* Menu Links */}
      <div className="flex flex-col p-6 gap-4 overflow-y-auto h-[calc(100vh-64px)]">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-[20px] text-gray-800 hover:text-mainColor transition-colors duration-300"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default MobileNavbar;
