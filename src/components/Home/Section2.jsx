"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
const Section2 = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div ref={ref} className="max-w-7xl px-2 md:px-4 mx-auto py-10">
      <div
        ref={ref}
        className={`flex flex-col lg:flex-row items-center w-full gap-12 opacity-0 ${
          inView ? "animate-slideRightHome" : "opacity-0"
        }`}
      >
        {/* Left Section */}
        <div className="flex flex-col gap-12 lg:min-w-[350px] w-full lg:w-auto">
          {/* Mission Section */}
          <div className="flex flex-col">
            <Image
              src="/bronze-top-arrow.svg"
              width={50}
              height={77}
              alt="Arrow"
              className="mb-5"
              priority={true} // Prioritizes loading for immediate visibility
              loading="eager" // Forces eager loading instead of lazy loading
              unoptimized
            />
            <div className="flex gap-6">
              <Image
                src="/mission-text.svg"
                width={54}
                height={1}
                alt="Mission text"
                className="max-h-[210px]"
                priority={true} // Prioritizes loading for immediate visibility
                loading="eager" // Forces eager loading instead of lazy loading
                unoptimized
              />
              <div className="flex flex-col gap-3 lg:gap-4">
                <h1 className="text-mainColor font-bold text-3xl lg:text-4xl">
                  Our Mission:
                </h1>
                <p className="text-mainColor lg:text-lg">
                  To provide and develop solutions to the end user with our
                  first-class quality and innovative tools and service in
                  response to their needs throughout our strong dealers’
                  network.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col">
            <Image
              src="/bronze-top-arrow.svg"
              width={50}
              height={77}
              alt="Arrow"
              className="mb-5 "
              priority={true} // Prioritizes loading for immediate visibility
              loading="eager" // Forces eager loading instead of lazy loading
              unoptimized
            />
            <div className="flex gap-6">
              <Image
                src="/vision-text.svg"
                width={54}
                height={1}
                alt="Vision text"
                className="max-h-[164px]"
                priority={true} // Prioritizes loading for immediate visibility
                loading="eager" // Forces eager loading instead of lazy loading
                unoptimized
              />
              <div className="flex flex-col gap-3 lg:gap-4">
                <h1 className="text-mainColor font-bold text-2xl lg:text-4xl">
                  Our Vision:
                </h1>
                <p className="text-mainColor lg:text-lg">
                  To provide and develop solutions to the end user with our
                  first-class quality and innovative tools and service in
                  response to their needs throughout our strong dealers’
                  network.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center lg:justify-start w-full">
          <Image
            src="/vision-image.svg"
            width={550}
            height={422}
            alt="Vision illustration"
            priority={true} // Prioritizes loading for immediate visibility
            loading="eager" // Forces eager loading instead of lazy loading
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
