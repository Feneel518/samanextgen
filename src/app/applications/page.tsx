import ProductHero from "@/sections/ProductHero";
import WhyOffline from "@/sections/WhyOffline";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <ProductHero></ProductHero>
      <WhyOffline></WhyOffline>
    </div>
  );
};

export default page;
