"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

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

function MobileNavbar({ onClose }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed animate-slideRightMobileMenu inset-0 z-50 bg-mainColor flex flex-col ">
      {/* Top bar with close button */}
      <div className="flex justify-between bg-mainColor h-[70px] items-center p-4 border-b border-gray-200 ">
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
          <X
            size={32}
            className="text-grayColor hover:text-redColor transition-all duration-300"
          />
        </button>
      </div>

      {/* Menu Links */}
      <div className="flex flex-col p-6 gap-4 overflow-y-auto  cartScrollbar">
        {links.map((link, i) => (
          <div key={i}>
            {/* Link with dropdown toggle */}
            <button
              onClick={() =>
                link.dropdown
                  ? setOpenDropdown(openDropdown === i ? null : i)
                  : onClose()
              }
              className="w-full flex justify-between items-center text-[20px] text-grayColor hover:text-yellowColor transition-colors duration-300"
            >
              <span>{link.title}</span>
              {link.dropdown &&
                (openDropdown === i ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                ))}
            </button>

            {/* Dropdown items */}
            {link.dropdown && openDropdown === i && (
              <div className="ml-4 mt-2 flex flex-col gap-2 ">
                {link.dropdown.map((sub, j) => (
                  <a
                    key={j}
                    href={sub.href}
                    onClick={onClose}
                    className="text-[18px] text-gray-300 hover:text-yellowColor transition"
                  >
                    {sub.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobileNavbar;
