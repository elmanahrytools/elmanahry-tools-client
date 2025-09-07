"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpFromDot } from "lucide-react";
const TopArrow = ({ showAfterPx = 170, footerTriggerOffsetPx = 40 }) => {
  const [show, setShow] = useState(false);
  const [inFooter, setInFooter] = useState(false);
  const raf = useRef(null);

  useEffect(() => {
    const footer = document.getElementById("footer");

    const onScroll = () => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        const y = window.scrollY || document.documentElement.scrollTop;
        // ✅ Show early after small scroll (independent from hero)
        setShow(y > showAfterPx);

        if (footer) {
          // ✅ Swap logo as soon as footer starts entering (tunable)
          const rect = footer.getBoundingClientRect();
          const vh =
            window.innerHeight || document.documentElement.clientHeight;
          setInFooter(rect.top <= vh - footerTriggerOffsetPx);
        } else {
          setInFooter(false);
        }

        raf.current = null;
      });
    };

    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [showAfterPx, footerTriggerOffsetPx]);

  if (!show) return null;

  return (
    <div
      className="hidden bg-yellowColor rounded-full w-11 h-11 md:flex items-center justify-center z-50 animate-slideLeft fixed bottom-5 md:right-6 cursor-pointer group"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <ArrowUpFromDot
        className={`ransition-transform duration-300 transform group-hover:translate-y-[-7px] text-mainColor`}
      />
    </div>
  );
};

export default TopArrow;
