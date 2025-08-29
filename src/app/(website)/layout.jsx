import Header from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";

export default function WebsiteLayout({ children }) {
  return (
    <div className="flex justify-center items-center gap-2 flex-col h-screen bg-black">
      {/* <Header />
      {children}
      <Footer /> */}

      <h1 className="font-semibold text-2xl md:text-4xl text-grayColor text-center">
        Elmanahry Tools🚀
      </h1>
      <p className="text-gray-300 text-center">
        Our website is coming soon. Stay tuned!
      </p>
    </div>
  );
}
