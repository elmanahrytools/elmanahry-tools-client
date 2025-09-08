"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <div className="bg-mainColor text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">تواصل معنا</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          يسعدنا دائمًا الرد على استفساراتك ومساعدتك في أي وقت.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <form className="bg-white shadow p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">أرسل رسالة</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="الاسم"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-mainColor"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-mainColor"
            />
          </div>
          <div className="mb-4">
            <textarea
              rows={5}
              placeholder="اكتب رسالتك هنا..."
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-mainColor"
            ></textarea>
          </div>
          <button className="w-full bg-yellowColor text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition">
            إرسال
          </button>
        </form>

        {/* Info */}
        <div className="flex flex-col justify-center space-y-6 text-gray-700">
          <div className="flex items-center gap-4">
            <Phone className="text-mainColor" />
            <p>+20 123 456 789</p>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-mainColor" />
            <p>info@tools.com</p>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-mainColor" />
            <p>القاهرة، مصر</p>
          </div>
        </div>
      </div>
    </div>
  );
}
