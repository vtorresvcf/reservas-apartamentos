import {
  BannerVentajas,
  Description,
  BannerApartamentos,
} from "@/components/home";
import { Header } from "@/components/layout";

export default function Home() {
  return (
    <div>
      <Header />
      <Description />
      <BannerVentajas />
      <BannerApartamentos />
    </div>
  );
}
