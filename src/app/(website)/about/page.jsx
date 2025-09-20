"use client";

import { Wrench, Truck, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-grayColor">
      {/* Hero Section */}
      <div className="relative bg-mainColor text-grayColor flex justify-center items-center h-[calc(100vh-70px)] text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 px-4 max-w-3xl mx-auto animate-fadeSlide ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 ">من نحن</h1>
          <p className="text-lg md:text-xl text-grayColor mb-6 animate-fadeInUp delay-100">
            أكثر من 10 سنوات خبرة في توفير الأدوات والمعدات عالية الجودة
            لعملائنا.
          </p>
          <Link
            href={"/brands"}
            className="px-6 py-3 bg-grayColor text-mainColor rounded-full font-semibold hover:scale-110  transition-all duration-300"
          >
            تصفح الماركات
          </Link>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center ">
        <img src="/tools.jpg" alt="team" className="rounded-xl shadow-lg" />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            قصتنا
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            تأسست شركتنا بهدف تقديم أفضل الأدوات والمعدات من أشهر الماركات
            العالمية، مع التركيز على الجودة وخدمة العملاء. نفتخر بأننا نخدم آلاف
            العملاء يوميًا ونساهم في إنجاز مشاريعهم بكفاءة وسرعة.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-mainColor">10+</h3>
              <p className="text-gray-600">سنوات خبرة</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-mainColor">5000+</h3>
              <p className="text-gray-600">عملاء راضون</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="bg-grayColor pb-20 pt-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">
            لماذا تختارنا؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Wrench,
                title: "جودة عالية",
                desc: "أفضل المنتجات من الماركات العالمية.",
              },
              {
                icon: Truck,
                title: "توصيل سريع",
                desc: "نوصل طلباتك في أسرع وقت لجميع المحافظات.",
              },
              {
                icon: ShieldCheck,
                title: "ثقة وضمان",
                desc: "منتجات أصلية وبضمان حقيقي ضد العيوب.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl shadow-md hover:shadow-xl transition-all text-center bg-white transform hover:-translate-y-2 relative"
              >
                <item.icon className="mx-auto text-mainColor mb-4" size={50} />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
