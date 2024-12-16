"use client";

import ProductsDetails from "@/components/ProductsDetails";
import { HEADER } from "@/lib/header";
import { PRODUCTS } from "@/lib/products";
import ProductHero from "@/sections/ProductHero";
import UseCase from "@/sections/UseCase";
import { FC, useEffect } from "react";

interface pageProps {
  searchParams: {
    section: string;
  };
}

const page: FC<pageProps> = ({ searchParams }) => {
  console.log(searchParams);

  useEffect(() => {
    const scrolltoHash = function (element_id: string) {
      const element = document.getElementById(element_id);
      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    };
    scrolltoHash(searchParams.section);
  }, [searchParams, searchParams.section]);

  const productHeader = HEADER.find((name) => name.name === "Product");

  return (
    <div className="">
      {productHeader && <ProductHero heading={productHeader}></ProductHero>}
      {PRODUCTS.map((product, index) => {
        return (
          <section key={index} id={product.id}>
            <ProductsDetails product={product}></ProductsDetails>
          </section>
        );
      })}
    </div>
  );
};

export default page;
