"use client";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Spinner from "@/components/Spinner";

const Section1 = ({}) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, // أو اكتبه مباشرة للتجربة
        name: formData.name,
        email: formData.email,
        phone: formData.mobile,
        subject: formData.subject || "New Contact Form Submission",
        message: formData.message,
      };

      await axios.post("https://api.web3forms.com/submit", payload);

      setFormData({
        name: "",
        mobile: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Web3Forms error:", err);
    } finally {
      setLoading(false);
    }
  };

  const sc = [
    {
      location: "Gesr El Suez Street, behind Bavaria Factory - Cairo",
      mobile: "0221820002/0221820001/01205502924",
    },
    {
      location:
        "8 Botrana Street, Industrial Zone, off Ahmed Saeed St., in front of Toshiba El-Araby Center, Abbassia - Cairo",
      mobile: "0224828583",
    },
    {
      location:
        "KM 105, International Coastal Road, Alamein, in front of Marina 7 Gate",
      mobile: "01210448108",
    },
  ];

  return (
    <div className="flex flex-col  md:flex-row gap-5 w-full max-w-[1400px] ">
      <div className="flex flex-col  gap-5 md:w-[50%]">
        <div className="flex flex-col bg-fadeColor shadow-md shadow-[#00000051] rounded-[10px] px-3 md:px-3 lg:px-10 gap-3  py-3 animate-slideLeftContact1 opacity-0">
          <h1 className="text-mainColor text-xl font-bold ml-10">
            Head Office
          </h1>
          <ul>
            <div className="flex items-center group cursor-pointer">
              <Image
                src={"/location-icon.svg"}
                width={40}
                height={40}
                alt="location icon"
                unoptimized
              />
              <li className="text-mainColor transition-transform duration-300 group-hover:translate-x-2">
                {" "}
                72 El-gomhuria St, Cairo
              </li>
            </div>
            <div className="flex items-center group cursor-pointer">
              <Image
                src={"/mob-icon.svg"}
                width={40}
                height={40}
                alt="mobile icon"
                unoptimized
              />
              <li className="text-mainColor transition-transform duration-300 group-hover:translate-x-2">
                +202 2588 9811/22/23
              </li>
            </div>
          </ul>
        </div>
        <div className="flex flex-col bg-fadeColor shadow-md shadow-[#00000051]  rounded-[10px]  gap-3 px-3 md:px-3 lg:px-10  py-3 animate-slideLeftContact1 opacity-0">
          <h1 className="text-mainColor text-xl font-bold ml-10">
            Service center
          </h1>
          <div className="max-h-[270px] overflow-x-hidden overflow-y-scroll customScrollbarBox">
            {sc.map((center, index) => (
              <ul
                key={index}
                className="border-b border-gray-200  last:border-b-0 pb-2 mb-2 cursor-pointer"
              >
                <div className="flex items-center group">
                  <Image
                    src={"/location-icon.svg"}
                    width={40}
                    height={40}
                    alt="Location Icon"
                    unoptimized
                  />
                  <li className="text-mainColor transition-transform duration-300 group-hover:translate-x-2 ">
                    {center.location}
                  </li>
                </div>
                <div className="flex items-center group">
                  <Image
                    src={"/mob-icon.svg"}
                    width={40}
                    height={40}
                    alt="Mobile Icon"
                    unoptimized
                  />
                  <li className="text-mainColor transition-transform duration-300 group-hover:translate-x-2">
                    {center.mobile}
                  </li>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-5 flex-col bg-fadeColor shadow-md shadow-[#00000051] justify-center md:w-[50%] rounded-[10px] px-3 md:px-3 lg:px-10 py-5 animate-slideRightHome"
      >
        <div className="flex gap-2">
          <input
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="bg-[#02527d33] rounded-[6px] p-2 w-[50%] placeholder-mainColor text-mainColor border-[1.5px] border-transparent focus:border-secondColor outline-none"
            type="text"
            placeholder="Name"
            required
          />
          <input
            name="mobile"
            onChange={handleChange}
            value={formData.mobile}
            className="bg-[#02527d33] rounded-[6px] p-2 w-[50%] placeholder-mainColor text-mainColor border-[1.5px] border-transparent focus:border-secondColor outline-none"
            type="text"
            placeholder="Mobile"
            required
          />
        </div>
        <input
          name="email"
          onChange={handleChange}
          value={formData.email}
          className="bg-[#02527d33] rounded-[6px] p-2 placeholder-mainColor text-mainColor border-[1.5px] border-transparent focus:border-secondColor outline-none"
          type="email"
          placeholder="Email address"
          required
        />
        <input
          name="subject"
          onChange={handleChange}
          value={formData.subject}
          className="bg-[#02527d33] rounded-[6px] p-2 placeholder-mainColor text-mainColor border-[1.5px] border-transparent focus:border-secondColor outline-none"
          type="text"
          placeholder="Subject"
        />
        <textarea
          name="message"
          onChange={handleChange}
          value={formData.message}
          className="bg-[#02527d33] rounded-[6px] p-2 h-[150px] placeholder-mainColor text-mainColor border-[1.5px] border-transparent focus:border-secondColor outline-none ring-0 resize-none"
          placeholder="Your message"
          required
        />
        <button
          type="submit"
          disabled={loading || isSubmitted}
          className={`  ${
            isSubmitted
              ? "bg-green-700"
              : loading
              ? "bg-mainColor hover:bg-mainColor"
              : "bg-mainColor hover:bg-secondColor"
          } transition-colors duration-300 p-3 rounded-[6px] disabled:opacity-50 flex justify-center items-center`}
        >
          {loading ? (
            <span className="flex items-center gap-3">
              Sending <Spinner size={22} />
            </span>
          ) : isSubmitted ? (
            "Submitted"
          ) : (
            "Get in touch"
          )}
        </button>
      </form>
    </div>
  );
};

export default Section1;
