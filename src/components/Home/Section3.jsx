"use client";

import CountUp from "react-countup";
import { FaAward, FaUsers, FaBoxOpen, FaIndustry } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
const Section3 = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const stats = [
    {
      number: 10,
      suffix: "+",
      label: "سنوات خبرة",
      icon: <FaAward size={40} />,
    },
    {
      number: 5000,
      suffix: "+",
      label: "عميل سعيد",
      icon: <FaUsers size={40} />,
    },
    {
      number: 2000,
      suffix: "+",
      label: "منتج متاح",
      icon: <FaBoxOpen size={40} />,
    },
    {
      number: 20,
      suffix: "+",
      label: "ماركات عالمية",
      icon: <FaIndustry size={40} />,
    },
  ];

  return (
    <div className="relative  text-grayColor py-16 flex items-center justify-center">
      {/* Red blur effect */}

      <div
        className={`max-w-7xl text-black mx-auto text-center px-2 md:px-4 text-textColor w-full ${
          inView ? "animate-fadeSlide" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl text-black md:text-5xl font-bold mb-2">
          إنجازاتنا تتحدث عنا
        </h2>
        <p className="text-lg md:text-xl mb-16  max-w-3xl mx-auto text-black">
          نفتخر بكوننا من الشركات الرائدة في مجال الأدوات والمعدات، حيث نسعى
          دائمًا لتقديم أعلى جودة وخدمة لعملائنا الكرام في كل مكان.
        </p>

        <div
          ref={ref}
          className="flex  flex-col md:flex-row items-center justify-between gap-10 w-full "
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className=" group flex flex-col w-full bg-gradient-to-r from-mainColor to-[#1968b1] hover:from-[#cf920d] hover:to-yellowColor items-center  px-8 py-4 rounded-2xl backdrop-blur-sm 
                          transform hover:-translate-y-3 hover:shadow-xl duration-300 transition-all"
            >
              <div className="mb-4 text-yellowColor group-hover:text-mainColor">
                {stat.icon}
              </div>
              <span className="text-4xl numbers font-bold md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-yellowColor to-[#cf920d] group-hover:from-[#1968b1] group-hover:to-mainColor">
                {inView ? <CountUp end={stat.number} duration={3} /> : 0}

                {stat.suffix}
              </span>
              <p className="mt-3 text-xl text-grayColor group-hover:text-mainColor">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
