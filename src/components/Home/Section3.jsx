"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Section3 = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const icons = [
    {
      icon: "/trust-icon.svg",
      title: "Customers’ trust",
    },
    {
      icon: "/growth-icon.svg",
      title: "Business Integrity",
    },
    {
      icon: "/commitment-icon.svg",
      title: "Reliable partnerships",
    },
    {
      icon: "/quality-icon.svg",
      title: "Quality at the heart",
    },
    {
      icon: "/innovation-icon.svg",
      title: "ALEX Family",
    },
  ];

  return (
    <div className="px-2 md:px-4 py-10 mx-auto max-w-7xl">
      <div
        ref={ref}
        className={`bg-mainColor w-full rounded-[10px] px-10 py-4  shadow-md shadow-[#00000081]  ${
          inView ? "animate-slideLeft" : "opacity-0"
        }`}
      >
        <Image
          src="/bronze-top-arrow.svg"
          width={50}
          height={77}
          alt="Arrow"
          className="mb-5"
          unoptimized
        />
        <div className="flex gap-5">
          <Image
            src="/values-text.svg"
            width={54}
            height={1}
            alt="Mission text"
            className="max-h-[210px]"
            unoptimized
          />
          <div className="flex flex-col w-full">
            <h1 className="text-2xl font-semibold lg:text-left md:text-left text-center">
              Our Values
            </h1>
            <div className="flex justify-center gap-5 md:justify-between lg:justify-between w-full flex-wrap lg:flex-nowrap md:flex-nowrap">
              {icons.map((icon) => {
                // Create a new useInView for each icon
                const { ref: iconRef, inView: iconInView } = useInView({
                  threshold: 0.2,
                  triggerOnce: true,
                });

                return (
                  <div
                    key={icon.title}
                    ref={iconRef} // Assign a unique ref for each icon
                    className={`flex flex-col opacity-0 justify-center items-center group ${
                      iconInView ? " animate-slideRightHome" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={icon.icon}
                      width={140}
                      height={140}
                      alt={icon.title}
                      className="transition-transform duration-300 group-hover:scale-110"
                      priority={true} // Prioritizes loading for immediate visibility
                      loading="eager" // Forces eager loading instead of lazy loading
                      unoptimized
                    />
                    <p className="transition-colors duration-300 group-hover:text-secondColor">
                      {icon.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
