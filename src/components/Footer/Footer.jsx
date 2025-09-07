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
      className="bg-mainColor w-full py-3 px-2 md:px-4   flex justify-center items-center  bottom-0 flex-col"
    >
      <div className="w-full flex justify-center max-w-7xl items-center flex-col md:flex-row lg:flex-row gap-10">
        <Image
          src="/logo.png"
          width={300}
          height={100}
          alt="Alex Logo"
          loading="lazy"
          unoptimized
          className="my-6"
        />
        {/* <div className="flex flex-col gap-5">
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

          <div className="flex flex-col justify-center items-center gap-3">
            <div className="flex gap-2">
              <a href="#">
                <Image
                  src={"/fb-footer-icon.svg"}
                  width={30}
                  height={30}
                  alt="FB Icon"
                  className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                  unoptimized
                />
              </a>
              <a href="#">
                {" "}
                <Image
                  src={"/linkedin-footer-icon.svg"}
                  width={30}
                  height={30}
                  alt="Linkedin Icon"
                  className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                  unoptimized
                />
              </a>
            </div>
          </div>
        </div> */}
      </div>
      <p
        dir="ltr"
        className="text-sm  text-grayColor  text-center border-t border-yellowColor w-full pt-3 mt-3 "
      >
        &copy; 2025 Elmanahry Tools. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
