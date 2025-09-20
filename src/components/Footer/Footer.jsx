import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const importantLinks = [
    { title: "الخصومات", href: "/offers" },
    { title: "العلامات التجارية", href: "/brands" },
    { title: "عن الشركة", href: "/about" },
  ];

  const contactLinks = [
    { title: "تواصل معنا", href: "/contact" },
    { title: "info@elmanahry.com", href: "mailto:info@elmanahry.com" },
    { title: "01162716222+", href: "tel:+201001234567" },
  ];

  const socials = [
    { icon: <FaFacebookF size={20} />, href: "https://facebook.com" },
    {
      icon: <FaInstagram size={20} />,
      href: "https://www.instagram.com/elmanahrytools",
    },

    {
      icon: <FaTiktok size={20} />,
      href: "https://tiktok.com/@elmanahry.tools",
    },
    { icon: <FaWhatsapp size={20} />, href: "https://whatsapp.com" },
  ];

  return (
    <footer className="bg-mainColor w-full pt-10 pb-4  flex justify-center items-center flex-col text-grayColor">
      <div className="w-full max-w-7xl md:px-4 px-2  flex flex-col md:flex-row justify-between items-c gap-10">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Image
            src="/logo.png"
            width={200}
            height={80}
            alt="Elmanahry Logo"
            loading="lazy"
            unoptimized
          />
          <p className="text-[16px] font-medium  text-gray-300 text-center md:text-start">
            أفضل الأدوات والمعدات الصناعية بأعلى جودة في مصر.
          </p>
        </div>

        {/* Important Links */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-lg font-bold text-yellowColor">روابط مهمة</h3>
          <ul className="flex flex-col gap-2 text-center font-medium text-base">
            {importantLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="hover:text-yellowColor transition"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col items-center  gap-4">
          <h3 className="text-lg font-bold text-yellowColor">تواصل معنا</h3>
          <ul className="flex flex-col gap-2 text-center  font-medium text-base">
            {contactLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="hover:text-yellowColor transition"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-lg font-bold text-yellowColor">تابعنا</h3>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {socials.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-yellowColor text-yellowColor hover:bg-yellowColor hover:text-mainColor transition"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copy Rights */}
      <p
        dir="ltr"
        className="text-xs md:text-sm  font-bold text-grayColor text-center border-t border-yellowColor w-full pt-4 mt-8"
      >
        &copy; 2025 Elmanahry Tools. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
