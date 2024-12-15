import ProductsDetails from "@/components/ProductsDetails";
import { PRODUCTS } from "@/lib/products";
import ProductHero from "@/sections/ProductHero";
import UseCase from "@/sections/UseCase";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="">
      <ProductHero></ProductHero>
      {PRODUCTS.map((product) => {
        return <ProductsDetails product={product}></ProductsDetails>;
      })}
    </div>
  );
};

export default page;
