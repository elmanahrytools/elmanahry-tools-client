"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Section3 = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const icons = [
    {
      icon: "/trust-about-icon.svg",
      title: "Customers’ trust",
      desc: "Our customers’ trust has always been our north, we work hard to provide them with the best possible tools & equipment for their tasks at job sites, their factories or even at home. Believing that they are in good hands is what fueled our success throughout the years.",
    },
    {
      icon: "/growth-about-icon.svg",
      title: "Business Integrity",
      desc: "ALEX reputation is built on a long history of transparency and business integrity, this is the heritage we are most proud of, and our long-term partnerships are the proof that we hold it above everything else.",
    },
    {
      icon: "/commitment-about-icon.svg",
      title: "Reliable partnerships",
      desc: "Building long-term relations with our business partners from brand owners & distributors to corporate & individual customers had been the only way we do business, time has proved for us those partnerships founded on mutual benefits last forever, and that’s how long we want our company to last. ",
    },
    {
      icon: "/quality-about-icon.svg",
      title: "Quality at the heart",
      desc: "Because quality is not only desired in the products we sell, we keep quality at the heart of everything we do, be it the products we offer, the partnerships we build or the business ventures we embark upon. Our commitment to quality guarantees our excellence.",
    },
    {
      icon: "/innovation-about-icon.svg",
      title: "ALEX Family",
      desc: "Since our company’s establishment Half a century ago, our strongest asset has always been our employees. Believing that to be true, has made every member of our team feel that he belongs to something bigger than just a company.",
    },
  ];

  return (
    <div
      ref={ref}
      className={`bg-fadeColor shadow-md gap-10 shadow-[#00000051]  min-h-[380px] w-full rounded-[10px] md:p-10 p-5 py-10 max-w-7xl flex flex-col justify-center ${
        inView ? "animate-slideRightHome" : "opacity-0"
      }`}
    >
      <div className="flex gap-5">
        <Image
          src="/values-about.svg"
          width={190}
          height={75}
          alt="Mission text"
          className="w-[150px] md:w-[160px] lg:w-[190px]"
          priority={true}
          loading="eager"
          unoptimized
        />
        <Image
          src={"/about-right-arrow.svg"}
          width={85}
          height={74}
          className="w-[60px] md:w-[70px] lg:w-[85px] "
          alt="Alex Arrow"
          priority={true}
          loading="eager"
          unoptimized
        />
      </div>

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
              className={`flex flex-col  items-center group w-[200px] opacity-0 ${
                iconInView ? "animate-slideLeftAbout3" : "opacity-0"
              }`}
            >
              <Image
                src={icon.icon}
                width={120}
                height={120}
                alt={icon.title}
                className="transition-transform h-[140px] w-[140px] md:w-[120px] md:h-[120px] duration-300 group-hover:scale-110"
                priority={true}
                loading="eager"
                unoptimized
              />
              <p className="transition-colors duration-300 text-lg md:text-sm text-mainColor group-hover:text-secondColor mb-2 font-semibold">
                {icon.title}
              </p>
              <p className="transition-colors duration-300 text-md md:text-sm text-center text-mainColor group-hover:text-secondColor">
                {icon.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section3;
