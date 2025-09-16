/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(circle, #21709C 0%, #A57F2D 50%, #F9F9FA 100%)",
      },
      borderColor: {
        DEFAULT: "var(--mainColor)", // Set the default border color to white
      },
      ringColor: {
        DEFAULT: "var(--mainColor)", // Set the default ring color to white
      },
      outlineColor: {
        DEFAULT: "var(--mainColor)", // Set the default outline color to white
      },
      colors: {
        mainColor: "var(--mainColor)",
        yellowColor: "var(--yellowColor)",
        blackColor: "var(--blackColor)",
        textColor: "var(--textColor)",
        grayColor: "var(--grayColor)",
        redColor: "var(--redColor)",
      },
      keyframes: {
        rotate12: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(35deg)" },
        },
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "slide-in-top": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        rotateFlip: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg) scaleX(-1)" },
          "100%": { transform: "rotate(360deg) scaleX(1)" },
        },
        moveArrow: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100vw)" },
        },
        rotateArrow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100vh)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },

        slideDownHome: {
          "0%": { transform: "translateY(-100vh)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100vh)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDownFromParent: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100vw)", opacity: "0" },
          "100%": { transform: "translateX(0vw)", opacity: "1" },
        },
        slideRightParent: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0vw)", opacity: "1" },
        },
        "rotate-arrow": "rotateArrow 0.3s linear infinite",
        slideRightHome: {
          "0%": { transform: "translateX(-100vw)", opacity: "0" },
          "100%": { transform: "translateX(0vw)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100vw)", opacity: "0" },
          "100%": { transform: "translateX(0vw)", opacity: "1" },
        },
        sliderRight: {
          "0%": { transform: "translateX(40px)", opacity: "1" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        sliderLeft: {
          "0%": { transform: "translateX(-40px)", opacity: "1" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        rotate12: "rotate12 2s infinite ease-in-out",
        rotate360: "rotate360 1s linear infinite",
        "slide-in-top": "slide-in-top 0.5s  ease-in-out",
        spinSlow: "spin 0.5s linear infinite",
        rotateFlip: "rotateFlip 2s ease-in-out",
        moveArrow: "moveArrow 1s infinite ease-in-out",
        rotate: "rotateArrow 1s linear infinite",
        slideDown: "slideDown 0.4s forwards",
        slideDownHome: "slideDownHome 1s forwards",
        slideUp: "slideUp 0.5s forwards",
        // Mobile menu Slider
        slideRightMobileMenu: "slideRight 0.5s forwards",
        // Mobile menu Slider
        // Cart Slider and fade in
        slideRightCart: "slideRight 0.5s forwards",
        fadeIn: "fadeIn 0.5s forwards",
        // Cart Slider and fade in
        // Slider For Section 3
        slideRight: "slideRight 1s forwards",
        slideLeft: "slideLeft 1s forwards",
        // Slider For Section 3
        slideRightDelay2: "slideRightParent 0.4s 0.2s forwards",
        slideRightDelay3: "slideRightParent 0.4s 0.3s forwards",
        slideRightDelay: "slideRight 0.4s 0.2s forwards",
        // Slider For Section 2
        sliderRight: "sliderRight 0.8s forwards",
        sliderLeft: "sliderLeft 0.8s forwards",
        // Slider For Section 2
        slideDownFromParent: "slideDownFromParent 0.3s linear",
        slideLeftDelay2: "slideLeft 0.3s 0.2s forwards",
        slideLeftDelay3: "slideLeft 1s 0.3s forwards",
        slideRightHome: "slideRightHome 1s forwards",

        fadeInAdmin: "fadeIn 1s forwards",
        fadeInDropDown: "fadeIn 0.4s forwards",
        slideLeftSector1: "slideLeft 0.6s forwards",
        slideLeftSector2: "slideLeft 0.6s 0.2s forwards",
        slideLeftSector3: "slideLeft 0.8s 0.6s forwards",
        slideLeftContact1: "slideLeft 1s 0.4s forwards",
        slideLeftContact2: "slideLeft 1s 0.3s forwards",
        slideLeftAbout1: "slideLeft 1s 0.3s forwards",
        slideLeftAbout2: "slideLeft 1s 0.5s forwards",
        slideLeftAbout3: "slideLeft 1s forwards",
      },
      fontFamily: {
        russo: ["RussoOne", "sans-serif"],
        swissra: ["Swissra", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-triangle-right": {
          clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
        },
      });
    },
  ],
};
