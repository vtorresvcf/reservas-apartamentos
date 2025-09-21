import {
  BannerVentajas,
  Description,
  BannerApartamentos,
  Services,
  Reseñas,
} from "@/components/home";

import { Header } from "@/components/layout";

export default function Home() {
  return (
    <div>
      <Header />
      <Description />
      <BannerVentajas />
      <BannerApartamentos />
      <Services />
      <Reseñas />
    </div>
  );
}
