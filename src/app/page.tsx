import { BannerVentajas, Description } from "@/components/home";
import { Header } from "@/components/layout";

export default function Home() {
  return (
    <div>
      <Header />
      <Description />
      <BannerVentajas />
    </div>
  );
}
