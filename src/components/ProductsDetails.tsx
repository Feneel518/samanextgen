import { FC } from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import ShinyButton from "./ShinyButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ProductCarousel from "./ProductCarousel";
import { ProductType } from "@/lib/products";

interface ProductsDetailsProps {
  product: ProductType;
}

const ProductsDetails: FC<ProductsDetailsProps> = ({ product }) => {
  return (
    <section className="px-8">
      <div className="py-20 flex flex-col lg:flex-row gap-10 border-b border-gray-200/20">
        <div className="lg:w-[550px] lg:border-r border-gray-200/20 flex items-start lg:shrink-0 ">
          <div className="flex flex-col gap-6 lg:sticky lg:top-4 transition-all duration-200 ease-in-out">
            <Heading>
              <h1>{product.name}</h1>
            </Heading>
            <div className="flex flex-col gap-8">
              {product.featurepoints.map((point, index) => {
                return (
                  <Paragraph key={index}>
                    <p className="lg:w-2/3 ">{point}</p>
                  </Paragraph>
                );
              })}
            </div>
            <ShinyButton href="/products" className="w-40 h-10">
              Get In Touch
            </ShinyButton>
          </div>
        </div>
        <div className="flex flex-col lg:pl-20 w-full gap-20">
          <div className="flex flex-col gap-10">
            <Heading>
              <h1>{product.mainHeading}</h1>
            </Heading>
            <div className="grid grid-cols-2">
              <Paragraph>
                <p>{product.paragraph1}</p>
              </Paragraph>
              <Paragraph>
                <p>{product.paragraph2}</p>
              </Paragraph>
            </div>
          </div>
          <div className="">
            <div className="relative w-full h-[600px] ">
              <div className="absolute inset-0 p-10 z-10 text-black font-oswald text-5xl flex flex-col gap-4">
                <h1>{product.imageTitle}</h1>
                <p className="text-xl lg:w-1/2">{product.imageDesc}</p>
                {/* <p className="flex items-center gap-1 group cursor-pointer text-xs text-lack">
                  See More{" "}
                  <ArrowRight
                    strokeWidth={1}
                    size={20}
                    className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                  ></ArrowRight>
                </p> */}
              </div>
              <Image
                src={product.image}
                alt="Integrated Voice Module"
                fill
                className="object-cover object-bottom rounded-3xl"
              ></Image>
            </div>
          </div>
          <ProductCarousel
            productComponents={product.components}
          ></ProductCarousel>
          <div className="w-full mx-auto border border-gray-200/20"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDetails;
