import ProductHero from "@/sections/ProductHero";
import UseCase from "@/sections/UseCase";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="">
      <ProductHero></ProductHero>
      <UseCase></UseCase>
    </div>
  );
};

export default page;
