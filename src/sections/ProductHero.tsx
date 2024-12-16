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
      <div className="flex flex-col relative  py-10 xl:py-20 border-b border-gray-200/20 gap-8 min-h-80">
        <div className="absolute inset-y-4 inset-x-0 bg-black/70 z-10 "></div>
        <div className="absolute inset-y-4 inset-x-0">
          <Image
            alt="Hero"
            src={heading.image}
            fill
            className="object-cover rounded-lg "
          ></Image>
        </div>
        <div className="z-10 pl-8">
          <Heading className="lg:text-8xl   ">
            <h1 className="">{heading.heading}</h1>
          </Heading>
        </div>

        {/* <div className="flex gap-4  ">
          <TextChangeButton firstText="Aster"></TextChangeButton>
          <TextChangeButton firstText="Bellis"></TextChangeButton>
          <TextChangeButton firstText="Dahlia"></TextChangeButton>
          <TextChangeButton firstText="Eruca"></TextChangeButton>
        </div> */}
      </div>
      <div className="py-10 xl:py-20 border-b border-gray-200/20">
        <div className="lg:w-1/2 z-10 ">
          <Paragraph className="lg:text-3xl">
            <p>{heading.desc}</p>
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
