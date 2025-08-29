import Header from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";

export default function WebsiteLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
