"use client";

import React, { useEffect, useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories"; // نفس الداتا بتاعة الديسكتوب

const BRANDS = [
  "APT",
  "Crown",
  "Dewalt",
  "Ruby",
  "Bosch",
  "Makita",
  "Black+Decker",
  "Stanley",
  "Hitachi",
  "Milwaukee",
  "Metabo",
  "Einhell",
  "Hilti",
  "Festool",
  "Ryobi",
  "Skill",
  "Ridgid",
  "Karcher",
  "Wolf",
  "Chicago Electric",
];

const links = [
  { title: "الخصومات", href: "/offers" },
  { title: "تواصل معنا", href: "/contact" },
  { title: "عن الشركة", href: "/about" },
];

function MobileNavbar({ onClose }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openCategories, setOpenCategories] = useState({});

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // toggle category open/close
  const toggleCategory = (id) => {
    setOpenCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  /** Recursive render function for categories */
  const renderCategory = (cat, level = 0) => {
    if (cat.children && cat.children.length > 0) {
      return (
        <div key={cat.id} className="flex flex-col animate-fadeSlideDown">
          <button
            onClick={() => toggleCategory(cat.id)}
            className={`flex justify-between items-center text-[18px]  rounded-lg transition text-mainColor py-1 px-2  bg-grayColor `}
          >
            <span>{cat.name}</span>
            {openCategories[cat.id] ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>
          {openCategories[cat.id] && (
            <div className="ml-4 mt-2 flex flex-col gap-2 animate-fadeSlideDown">
              {cat.children.map((child) => renderCategory(child, level + 1))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={cat.id}
        href={cat.href}
        onClick={onClose}
        className={`text-[17px] text-mainColor py-1 px-2  bg-grayColor transition rounded-lg animate-fadeSlideDown`}
      >
        {cat.name}
      </Link>
    );
  };

  return (
    <div className="fixed animate-slideRightMobileMenu inset-0 z-50 bg-mainColor flex flex-col">
      {/* Top bar */}
      <div className="flex justify-between bg-mainColor h-[70px] items-center p-4 border-b border-gray-200">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={110} height={50} priority />
        </Link>
        <button onClick={onClose} className="text-gray-700">
          <X
            size={32}
            className="text-grayColor hover:text-redColor transition-all duration-300"
          />
        </button>
      </div>

      {/* Menu Links */}
      <div className="flex flex-col p-6 gap-4 overflow-y-auto cartScrollbar">
        {/* Categories */}
        <div>
          <button
            onClick={() =>
              setOpenDropdown(
                openDropdown === "categories" ? null : "categories"
              )
            }
            className="w-full flex justify-between items-center text-[20px] text-grayColor  transition"
          >
            <span>التصنيفات</span>
            {openDropdown === "categories" ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
          {openDropdown === "categories" && (
            <div className="ml-2 mt-2 flex flex-col gap-2">
              {categories.map((cat) => renderCategory(cat))}
            </div>
          )}
        </div>

        {/* Brands */}
        <div>
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === "brands" ? null : "brands")
            }
            className="w-full flex justify-between items-center text-[20px] text-grayColor hover:text-yellowColor transition"
          >
            <span>العلامات التجارية</span>
            {openDropdown === "brands" ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
          {openDropdown === "brands" && (
            <div className="ml-4 mt-2 flex flex-col gap-2 max-h-64 overflow-y-auto cartScrollbar">
              {BRANDS.map((brand) => (
                <Link
                  key={brand}
                  href={`/brands/${brand
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/\+/g, "")}`}
                  onClick={onClose}
                  className="text-[18px] text-left text-mainColor py-1 px-2  bg-grayColor rounded-lg w-[160px] transition"
                >
                  {brand}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Other static links */}
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            onClick={onClose}
            className="w-full flex justify-between items-center text-[20px] text-grayColor hover:text-yellowColor transition"
          >
            <span>{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileNavbar;
