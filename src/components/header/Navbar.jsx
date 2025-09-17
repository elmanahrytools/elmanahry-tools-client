"use client";

import React from "react";
import Link from "next/link";

const links = [
  { title: "المنتجات", href: "/" },
  {
    title: "العلامات التجارية",
    href: "#",
    dropdown: [
      { title: "APT", href: "/brands/apt" },
      { title: "Crown", href: "/brands/crown" },
      { title: "Dewalt", href: "/brands/dewalt" },
      { title: "Ruby", href: "/brands/ruby" },
      { title: "Bosch", href: "/brands/bosch" },
      { title: "Makita", href: "/brands/makita" },
      { title: "Black+Decker", href: "/brands/blackdecker" },
      { title: "Stanley", href: "/brands/stanley" },
      { title: "Hitachi", href: "/brands/hitachi" },
      { title: "Milwaukee", href: "/brands/milwaukee" },
      { title: "Metabo", href: "/brands/metabo" },
      { title: "Einhell", href: "/brands/einhell" },
      { title: "Hilti", href: "/brands/hilti" },
      { title: "Festool", href: "/brands/festool" },
      { title: "Ryobi", href: "/brands/ryobi" },
      { title: "Skill", href: "/brands/skill" },
      { title: "Ridgid", href: "/brands/ridgid" },
      { title: "Karcher", href: "/brands/karcher" },
      { title: "Wolf", href: "/brands/wolf" },
      { title: "Chicago Electric", href: "/brands/chicago-electric" },
    ],
  },
  { title: "تواصل معنا", href: "/contact" },
  { title: "عن الشركة", href: "/about" },
];

function Navbar() {
  return (
    <nav className="hidden md:flex gap-7 items-center relative">
      {links.map((link) => (
        <div
          key={link.title}
          className="relative group  h-[70px] flex items-center"
        >
          <Link
            href={link.href}
            className="text-[19px] font-bold hover:bg-[#4140421c] px-3 py-2 rounded-xl text-mainColor transition-colors duration-300 "
          >
            {link.title}
          </Link>

          {/* Dropdown */}
          {link.dropdown && (
            <div
              dir="ltr"
              className="absolute top-full  headerScrollbar  left-0 hidden group-hover:flex max-h-[500px] overflow-y-auto flex-col bg-grayColor shadow-lg  w-35 z-50 "
            >
              {link.dropdown.map((sub) => (
                <Link
                  key={sub.title}
                  href={sub.href}
                  className="px-4 py-2 text-left text-base text-mainColor font-semibold hover:bg-mainColor hover:text-grayColor  transition"
                >
                  {sub.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Navbar;
