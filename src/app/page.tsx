import {
  BannerVentajas,
  Description,
  BannerApartamentos,
  Services,
  Reseñas,
} from "@/components/home";

export const metadata = {
  title: "Apartamentos Mushus",
  description: "Reserva tu apartamento favorito",
};

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
