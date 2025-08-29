"use client";

import React from "react";
import Link from "next/link";

  const links = [
    { title: "تواصل معنا", href: "/contact" },
    { title: "عن الشركة", href: "/about" },
  ];

function Navbar() {
  return (
    <nav className="hidden md:flex gap-8 items-center">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-[17px] hover:text-mainColor transition-colors duration-300"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
