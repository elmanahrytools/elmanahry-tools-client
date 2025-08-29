"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Section2 = ({}) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="flex gap-5 max-w-7xl flex-col md:flex-row">
      <div
        ref={ref}
        className={`w-full bg-fadeColor shadow-md shadow-[#00000051]  flex flex-col opacity-0 min-h-[380px] rounded-[10px] md:p-10 py-10 p-5   gap-10 ${
          inView ? "animate-slideLeftAbout1" : "opacity-0"
        }`}
      >
        <div className="flex gap-5">
          <Image
            src={"/mission-about.svg"}
            width={240}
            height={75}
            className="w-[180px] md:w-[200px] lg:w-[240px]"
            alt="Alex Mission"
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
        <p className="text-mainColor">
          To offer the latest tools & equipment to our customers, that cater to
          their job requirements through a strong network of distributors. And
          to continuously improve our product and service offerings to maintain
          the strong relationship we have with them, while steadily increasing
          our market share and customer satisfaction.
        </p>
      </div>
      <div
        ref={ref}
        className={`w-full bg-fadeColor shadow-md shadow-[#00000051]  opacity-0 flex flex-col  min-h-[380px] rounded-[10px] md:p-10 py-10 p-5   gap-10 ${
          inView ? "animate-slideLeftAbout2" : "opacity-0"
        } `}
      >
        <div className="flex gap-5">
          <Image
            src={"/vision-about.svg"}
            width={190}
            height={75}
            className="w-[140px] md:w-[160px] lg:w-[190px]"
            alt="Alex Vision"
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
        <p className="text-mainColor">
          To continuously improve business responsiveness to market changes, to
          capture more opportunities with the latest and broadest selection of
          brands and products for each job and at every needed price point.
        </p>
      </div>
    </div>
  );
};

export default Section2;
