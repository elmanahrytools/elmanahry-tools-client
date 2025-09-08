"use client";

import React from "react";
import Link from "next/link";

const links = [
  { title: "المنتجات", href: "#" },
  { title: "العلامات التجارية", href: "#" },
  { title: "تواصل معنا", href: "#" },
];

function Navbar() {
  return (
    <nav className="hidden md:flex gap-7 items-center">
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className="text-[18px] font-medium hover:bg-[#4140421c] px-3 py-2 rounded-xl text-mainColor transition-colors duration-300"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
