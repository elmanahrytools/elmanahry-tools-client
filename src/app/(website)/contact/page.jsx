import Section1 from "@/components/Contact/Section1";
import Section2 from "@/components/Contact/Section2";

const Contact = ({}) => {
  return (
    <div className="bg-mainColor min-h-[calc(100vh-70px)] flex flex-col px-6 lg:px-[90px] py-5 items-center justify-center">
      <h1 className=" text-3xl md:text-4xl font-bold italic mb-5 animate-slide-in-top">
        Contact Us
      </h1>
      {/* <Section1 />
      <Section2 /> */}
    </div>
  );
};

export default Contact;
