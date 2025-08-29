// export const metadata = {
//   title: "About Alex Progress Trading",
//   description: "About Alexandria Progress Trading",
// };
import Section1 from "@/components/About/Section1";
import Section2 from "@/components/About/Section2";
import Section3 from "@/components/About/Section3";

const About = () => {
  return (
    <div className="bg-mainColor min-h-[calc(100vh-70px)] flex flex-col gap-5 justify-center  px-2 md:px-4 py-10 items-center">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default About;
