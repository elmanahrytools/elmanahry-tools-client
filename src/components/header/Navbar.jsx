// components/Navbar.jsx
"use client";

import React from "react";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { categories } from "@/data/categories"; // your existing nested data
import { ChevronRight, ChevronLeft } from "lucide-react";

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

export default function Navbar() {
  return (
    <nav className="hidden md:flex gap-7 items-center relative">
      {/* Categories (multi-level, recursive) */}
      <DropdownMenu.Root dir="rtl">
        <DropdownMenu.Trigger className="text-[19px] font-bold px-3 py-2 rounded-xl text-mainColor hover:bg-[#1042701f]  focus:outline-none focus:ring-0 border-none">
          التصنيفات
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          side="bottom"
          sideOffset={20}
          align="center"
          className="min-w-[220px] bg-grayColor rounded-md shadow-md  z-50"
        >
          <div className="max-h-[420px] overflow-y-auto headerScrollbar">
            {categories.map((cat) => renderCategory(cat))}
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <Link
        href="/offers"
        className="text-[19px] font-bold hover:bg-[#1042701f] px-3 py-2 rounded-xl text-mainColor transition-colors duration-300"
      >
        الخصومات
      </Link>

      {/* Brands dropdown */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="text-[19px] font-bold px-3 py-2 rounded-xl text-mainColor hover:bg-[#1042701f] focus:outline-none focus:ring-0 border-none">
          العلامات التجارية
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          side="bottom"
          sideOffset={20}
          align="center"
          className="min-w-[180px] bg-grayColor rounded-md shadow-md py-1 z-50 "
        >
          <div className="max-h-64 overflow-y-auto headerScrollbar">
            {BRANDS.map((brand) => (
              <DropdownMenu.Item asChild key={brand}>
                <Link
                  href={`/brands/${brand
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/\+/g, "")}`}
                  className="block px-4 py-2 text-sm text-left whitespace-nowrap hover:bg-[#1042701f] focus:outline-none focus:ring-0 border-none"
                >
                  {brand}
                </Link>
              </DropdownMenu.Item>
            ))}
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <Link
        href="/contact"
        className="text-[19px] font-bold hover:bg-[#1042701f] px-3 py-2 rounded-xl text-mainColor transition-colors duration-300"
      >
        تواصل معنا
      </Link>

      <Link
        href="/about"
        className="text-[19px] font-bold hover:bg-[#1042701f] px-3 py-2 rounded-xl text-mainColor transition-colors duration-300"
      >
        عن الشركة
      </Link>
    </nav>
  );
}

/** Recursive render function for categories */
function renderCategory(cat) {
  if (cat.children && cat.children.length > 0) {
    return (
      <DropdownMenu.Sub key={cat.id}>
        {/* SubTrigger displayed as a full-width button (rtl-friendly) */}
        <DropdownMenu.SubTrigger asChild>
          <button
            className="w-full flex items-center justify-between px-4 py-2 text-sm text-right
                       hover:bg-[#1042701f] 
                       focus:outline-none focus:ring-0 border-none bg-transparent"
          >
            <span>{cat.name}</span>
            <ChevronLeft size={14} className="ml-2" />

            {/* simple caret */}
          </button>
        </DropdownMenu.SubTrigger>

        {/* Submenu opens to the left for RTL layout */}
        <DropdownMenu.SubContent
          side="left"
          align="end"
          sideOffset={0}
          className="min-w-[180px] bg-grayColor rounded-md shadow-md "
        >
          {cat.children.map((child) => renderCategory(child))}
        </DropdownMenu.SubContent>
      </DropdownMenu.Sub>
    );
  }

  // leaf node -> link item
  return (
    <DropdownMenu.Item asChild key={cat.id}>
      <Link
        href={cat.href}
        className="block px-4 py-2 text-sm text-right
                   hover:bg-[#1042701f] 
                   focus:outline-none focus:ring-0 border-none bg-transparent"
      >
        {cat.name}
      </Link>
    </DropdownMenu.Item>
  );
}
