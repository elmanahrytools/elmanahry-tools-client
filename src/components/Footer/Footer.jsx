import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { title: "تواصل معنا", href: "/contact" },
    { title: "عن الشركة", href: "/about" },
  ];
  return (
    <footer
      id="footer"
      className="bg-textColor w-full  py-3 lg:px-[90px] px-6 flex justify-center items-center  bottom-0 flex-col"
    >
      <div className="text-center max-w-[1400px] w-full flex justify-between items-center flex-col md:flex-row lg:flex-row gap-10">
        <Image
          src={"/logo.png"}
          width={228}
          height={184}
          alt="Alex Logo"
          loading="lazy"
          unoptimized
        />
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl text-grayColor font-semibold">
            لينكات سريعه
          </h1>

          <ul className="flex gap-3 md:gap-5 text-grayColor  text-lg cursor-pointer flex-col md:flex-row justify-center items-center flex-wrap">
            {quickLinks.map((link) => (
              <Link key={link.title} href={link.href}>
                <li className="hover:text-mainColor transition-colors duration-300">
                  {link.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex gap-2">
            <a href="#">
              <Image
                src={"/fb-footer-icon.svg"}
                width={50}
                height={50}
                alt="FB Icon"
                className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                unoptimized
              />
            </a>
            <a href="#">
              {" "}
              <Image
                src={"/linkedin-footer-icon.svg"}
                width={50}
                height={50}
                alt="Linkedin Icon"
                className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                unoptimized
              />
            </a>
          </div>
          <p className="text-mainColor hover:text-textColor transition-all duration-300">
            المناهري تولز
          </p>
        </div>
      </div>
      <p className="text-sm  text-grayColor  text-center border-t border-mainColor w-full pt-3 mt-3 ">
        &copy; 2025 Elmanahry Tools. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
