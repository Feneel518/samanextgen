import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import TextChangeButton from "@/components/TextChangeButton";
import { HeaderType } from "@/lib/header";
import Image from "next/image";
import { FC } from "react";

interface ProductHeroProps {
  heading: HeaderType;
}

const ProductHero: FC<ProductHeroProps> = ({ heading }) => {
  return (
    <section className="px-8">
      <div className="flex flex-col relative  py-10 xl:py-20 border-b border-gray-200/20 gap-8 min-h-[420px]">
        <div className="absolute inset-y-4 inset-x-0  z-10 bg-black/30"></div>
        <div className="absolute inset-y-4 inset-x-0 blur-[px]">
          <Image
            alt="Hero"
            src={heading.image}
            fill
            className="object-cover rounded-lg "
          ></Image>
        </div>
      </div>
      <div className="py-10 border-b border-gray-200/20 flex flex-col gap-10">
        <Heading>
          <h1 className="text-center">{heading.heading}</h1>
        </Heading>
        <div className=" ">
          <div className=" text-center z-10 ">
            <Paragraph className="lg:text-3xl">
              <p>{heading.desc}</p>
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
