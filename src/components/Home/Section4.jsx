"use client";

import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link"; //
function Slider() {
  //   const logosTop = [
  //     "/apt.svg", //1
  //     "/alpen.svg", //2
  //     "/bahco.svg", //3
  //     "/bignet.svg", //4
  //     "/cmt.svg", //5
  //     "/crown.svg", //6
  //     "/dewalt.svg", //7
  //     "/dwt.svg", //8
  //     "/eurufa.svg", //9
  //     "/ferve.svg", //10
  //     "/fg.png", //11
  //     "/fiac.svg", //12
  //     "/harris.svg", //13
  //     "/hawk.svg", //14
  //     "/heller.svg", //15
  //     "/interpump.svg", //16
  //     "/irega.svg", //17
  //     "/italyco.svg", //18
  //     "/izar.svg", //19
  //     "/jaz.svg", //20
  //     "/kwg.svg", //21
  //   ];

  //   const logosBottom = [
  //     "/marquis.svg", //22
  //     "/mega.svg", //23
  //     "/osborn.svg", //24
  //     "/paton.svg", //25
  //     "/pedrollo.svg", //26
  //     "/picus.svg", //27
  //     "/portbag.svg", //28
  //     "/pro.svg", //29
  //     "/rex.svg", //30
  //     "/rothenberger.svg", //31
  //     "/rubi.svg", //32
  //     "/samoa.svg", //33
  //     "/sandvik.svg", //34
  //     "/sp.svg", //35
  //     "/stabila.svg", //36
  //     "/stanley.svg", //37
  //     "/super-ego.svg", //38
  //     "/super-til.svg", //39
  //     "/telwin.svg", //40
  //     "/toho.svg", //41
  //     "/truper.svg", //42
  //     "/urko.svg", //43
  //     "/vital.svg", //44
  //     "/volkel.svg", //45
  //   ];

  const logosTop = [
    { url: "/brands/apt/1", src: "/apt.svg" }, //1
    { url: "/brands/alpen/3", src: "/alpen.svg" }, //2
    { url: "/brands/bahco/4", src: "/bahco.svg" }, //3
    { url: "/brands/bignet/5", src: "/bignet.svg" }, //4
    { url: "/brands/cmt/6", src: "/cmt.svg" }, //5
    { url: "/brands/crown/2", src: "/crown.svg" }, //6
    { url: "/brands/dewalt/7", src: "/dewalt.svg" }, //7
    { url: "/brands/dwt/8", src: "/dwt.svg" }, //8
    { url: "/brands/eurufa/9", src: "/eurufa.svg" }, //9
    { url: "/brands/ferve/10", src: "/ferve.svg" }, //10
    { url: "/brands/fg/11", src: "/fg.png" }, //11
    { url: "/brands/fiac/12", src: "/fiac.svg" }, //12
    { url: "/brands/harris/13", src: "/harris.svg" }, //13
    { url: "/brands/hawk/14", src: "/hawk.svg" }, //14
    { url: "/brands/heller/15", src: "/heller.svg" }, //15
    { url: "/brands/interpump-group/16", src: "/interpump.svg" }, //16
    { url: "/brands/irega/17", src: "/irega.svg" }, //17
    { url: "/brands/italyco/45", src: "/italyco.svg" }, //18
    { url: "/brands/izar/18", src: "/izar.svg" }, //19
    { url: "/brands/jaz/19", src: "/jaz.svg" }, //20
    { url: "/brands/kwg/20", src: "/kwg.svg" }, //21
    ///////////////////////////////
    { url: "/brands/marquis/21", src: "/marquis.svg" }, //22
    { url: "/brands/mega/22", src: "/mega.svg" }, //23
    { url: "/brands/osborn/23", src: "/osborn.svg" }, //24
    { url: "/brands/paton/24", src: "/paton.svg" }, //25
    { url: "/brands/pedrollo/25", src: "/pedrollo.svg" }, //26
    { url: "/brands/picus/26", src: "/picus.svg" }, //27
    { url: "/brands/port-bag/27", src: "/portbag.svg" }, //28
    { url: "/brands/pro/44", src: "/pro.svg" }, //29
    { url: "/brands/rex/28", src: "/rex.svg" }, //30
    { url: "/brands/rothenberger/29", src: "/rothenberger.svg" }, //31
    { url: "/brands/rubi/30", src: "/rubi.svg" }, //32
    { url: "/brands/samoa/31", src: "/samoa.svg" }, //33
    { url: "/brands/sandvik/32", src: "/sandvik.svg" }, //34
    { url: "/brands/sp/33", src: "/sp.svg" }, //35
    { url: "/brands/stabila/34", src: "/stabila.svg" }, //36
    { url: "/brands/stanley/35", src: "/stanley.svg" }, //37
    { url: "/brands/super-ego/36", src: "/super-ego.svg" }, //38
    { url: "/brands/super-til/37", src: "/super-til.svg" }, //39
    { url: "/brands/telwin/38", src: "/telwin.svg" }, //40
    { url: "/brands/toho/39", src: "/toho.svg" }, //41
    { url: "/brands/truper/40", src: "/truper.svg" }, //42
    { url: "/brands/urko/41", src: "/urko.svg" }, //43
    { url: "/brands/vital/42", src: "/vital.svg" }, //44
    { url: "/brands/volkel/43", src: "/volkel.svg" }, //45
  ];

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Tailwind 'lg' breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderedLogosTop = useMemo(
    () =>
      logosTop.map((logo, index) => (
        <Link key={index} href={logo.url}>
          <Image
            src={logo.src}
            alt={`store-logo-top-${index}`}
            width={isDesktop ? 180 : 120}
            height={isDesktop ? 80 : 60}
            loading="lazy"
            className={`${
              isDesktop ? "mx-4" : "mx-3"
            }  object-contain hover:scale-110 transition-transform duration-300`}
            unoptimized
          />
        </Link>
      )),
    [logosTop]
  );

  return (
    <div className="max-w-7xl mx-auto pt-20 pb-10">
      {/* Slider 1 */}
      <Marquee
        gradient={isDesktop}
        speed={isDesktop ? 50 : 80}
        direction="left"
      >
        {renderedLogosTop}
      </Marquee>

      {/* Slider 2 */}
      {/* <Marquee gradient={isDesktop} speed={40} direction="right">
        {renderedLogosBottom}
      </Marquee> */}
    </div>
  );
}

export default Slider;
