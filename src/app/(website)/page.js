import HeroSection from "@/components/Home/HeroSection";
import Categories from "@/components/Home/Categories";
import OurAchievements from "@/components/Home/OurAchievements";
import TopSelling from "@/components/Home/TopSelling";
import OurPartners from "@/components/Home/OurPartners";
import OffersAndDiscounts from "@/components/Home/OffersAndDiscounts";
import NewProducts from "@/components/Home/NewProducts";
import TopArrow from "@/components/TopArrow";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <Categories />
      <OffersAndDiscounts />
      <OurAchievements />
      <TopSelling />
      <NewProducts />
      <OurPartners />
      <TopArrow />
    </div>
  );
}
