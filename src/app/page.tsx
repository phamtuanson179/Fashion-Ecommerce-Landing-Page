import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainSection, NewCollection } from "@/components";
import { BestSellerProduct } from "@/components/best-seller-product.component";
import OurProduct from "@/components/our-product.component";

export default function Home() {
  return (
    <main className=" bg-root-bg">
      <MainSection />
      <NewCollection />
      <BestSellerProduct />
    <OurProduct />
    </main>
  );
}
