"use client";

import { Wrench, Truck, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <div className="bg-mainColor text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">من نحن</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          أكثر من 10 سنوات خبرة في توفير الأدوات والمعدات عالية الجودة لعملائنا.
        </p>
      </div>

      {/* Company Info */}
      <div className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          قصتنا
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          تأسست شركتنا بهدف تقديم أفضل الأدوات والمعدات من أشهر الماركات
          العالمية، مع التركيز على الجودة وخدمة العملاء. نفتخر بأننا نخدم آلاف
          العملاء يوميًا ونساهم في إنجاز مشاريعهم بكفاءة وسرعة.
        </p>
      </div>

      {/* Why Us */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            لماذا تختارنا؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 rounded-xl shadow hover:shadow-lg transition text-center bg-gray-50">
              <Wrench className="mx-auto text-mainColor" size={40} />
              <h3 className="text-xl font-semibold mt-4 mb-2">جودة عالية</h3>
              <p className="text-gray-600">
                نضمن لك أفضل المنتجات من الماركات العالمية.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow hover:shadow-lg transition text-center bg-gray-50">
              <Truck className="mx-auto text-mainColor" size={40} />
              <h3 className="text-xl font-semibold mt-4 mb-2">توصيل سريع</h3>
              <p className="text-gray-600">
                نوصل طلباتك في أسرع وقت لجميع المحافظات.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow hover:shadow-lg transition text-center bg-gray-50">
              <ShieldCheck className="mx-auto text-mainColor" size={40} />
              <h3 className="text-xl font-semibold mt-4 mb-2">ثقة وضمان</h3>
              <p className="text-gray-600">
                كل منتجاتنا أصلية وبضمان حقيقي ضد عيوب الصناعة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
