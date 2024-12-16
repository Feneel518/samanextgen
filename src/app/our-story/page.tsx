import { HEADER } from "@/lib/header";
import AboutUs from "@/sections/AboutUs";
import ProductHero from "@/sections/ProductHero";
import Team from "@/sections/Team";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const aboutUsHeader = HEADER.find((name) => name.name === "About");

  return (
    <div>
      {aboutUsHeader && <ProductHero heading={aboutUsHeader}></ProductHero>}
      <AboutUs></AboutUs>
      <Team></Team>
    </div>
  );
};

export default page;
