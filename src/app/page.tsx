import {
  BannerVentajas,
  Description,
  BannerApartamentos,
  ServicesSection,
} from "@/components/home";
import { Header } from "@/components/layout";

export default function Home() {
  return (
    <div>
      <Header />
      <Description />
      <BannerVentajas />
      <BannerApartamentos />
      <ServicesSection />
    </div>
  );
}
