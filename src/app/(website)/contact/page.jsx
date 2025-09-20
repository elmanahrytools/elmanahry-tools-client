"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative  flex justify-center items-center text-grayColor bg-mainColor h-[calc(100vh-70px)] text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 px-4 max-w-3xl mx-auto animate-fadeSlide">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">
            تواصل معنا
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 animate-fadeInUp delay-100">
            يسعدنا دائمًا الرد على استفساراتك ومساعدتك في أي وقت.
          </p>
          <div className="animate-fadeInUp delay-200">
            <a
              href="#contact-form"
              className="inline-block bg-grayColor text-mainColor font-bold py-3 px-6 rounded-full  transition"
            >
              أرسل رسالة الآن
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact-form"
        className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {/* Form */}
        <form className="bg-white shadow-xl p-8 rounded-2xl flex flex-col gap-6">
          <h2 className="text-2xl font-bold mb-4">أرسل رسالة</h2>
          <div className="relative">
            <Phone className="absolute top-1/2 -translate-y-1/2 left-3 text-mainColor" />
            <input
              type="text"
              placeholder="الاسم"
              className="w-full border border-gray-300 rounded-xl p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-mainColor transition"
            />
          </div>
          <div className="relative">
            <Mail className="absolute top-1/2 -translate-y-1/2 left-3 text-mainColor" />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full border border-gray-300 rounded-xl p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-mainColor transition"
            />
          </div>
          <div className="relative">
            <MapPin className="absolute top-3 left-3 text-mainColor" />
            <textarea
              rows={5}
              placeholder="اكتب رسالتك هنا..."
              className="w-full border border-gray-300 rounded-xl p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-mainColor transition"
            ></textarea>
          </div>
          <button className="w-full bg-mainColor text-grayColor font-bold py-3 rounded-xl hover:bg-mainColorHover transition">
            إرسال
          </button>
        </form>

        {/* Info Cards */}
        <div className="flex flex-col gap-6">
          {[
            { icon: Phone, text: "+20 123 456 789", bg: "bg-white" },
            { icon: Mail, text: "info@tools.com", bg: "bg-white" },
            { icon: MapPin, text: "القاهرة، مصر", bg: "bg-white" },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 p-6 rounded-2xl shadow-md hover:shadow-lg transition ${item.bg}`}
            >
              <item.icon className="text-mainColor" size={28} />
              <p className="text-gray-700 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Map Section */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458410abcde1234%3A0xfedcba9876543210!2sCairo%2C%20Egypt!5e0!3m2!1sen!2sus!4v1695199999999!5m2!1sen!2sus"
          className="w-full h-64 md:h-96 rounded-2xl shadow-lg"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
