import { HEADER } from "@/lib/header";
import ProductHero from "@/sections/ProductHero";
import WhyOffline from "@/sections/WhyOffline";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const applicationHeader = HEADER.find((name) => name.name === "Application");
  return (
    <div>
      {applicationHeader && (
        <ProductHero heading={applicationHeader}></ProductHero>
      )}
      <WhyOffline></WhyOffline>
    </div>
  );
};

export default page;
