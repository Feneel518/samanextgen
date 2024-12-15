import Heading from "@/components/Heading";
import TextChangeButton from "@/components/TextChangeButton";
import { FC } from "react";

interface ProductHeroProps {}

const ProductHero: FC<ProductHeroProps> = ({}) => {
  return (
    <section className="px-8">
      <div className="flex flex-col justify-between py-10 xl:py-20 border-b border-gray-200/20 gap-40">
        <div className="">
          <Heading className="">
            <h1 className="text-8xl">
              We create your <br /> brand together
            </h1>
          </Heading>
        </div>
        <div className="flex gap-4  ">
          <TextChangeButton firstText="Aster"></TextChangeButton>
          <TextChangeButton firstText="Bellis"></TextChangeButton>
          <TextChangeButton firstText="Dahlia"></TextChangeButton>
          <TextChangeButton firstText="Eruca"></TextChangeButton>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
