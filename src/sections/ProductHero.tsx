import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import TextChangeButton from "@/components/TextChangeButton";
import { FC } from "react";

interface ProductHeroProps {}

const ProductHero: FC<ProductHeroProps> = ({}) => {
  return (
    <section className="px-8">
      <div className="flex flex-col  py-10 xl:py-20 border-b border-gray-200/20 gap-8 ">
        <div className="">
          <Heading className="lg:text-8xl">
            <h1 className="">
              Applications of Our <br className="max-lg:hidden" />
              Technology
            </h1>
          </Heading>
        </div>
        <div className="lg:w-1/3">
          <Paragraph>
            <p>
              Explore how our cutting-edge voice solutions integrate seamlessly
              into diverse environments, transforming traditional devices and
              improving user experiences across industries.
            </p>
          </Paragraph>
        </div>
        {/* <div className="flex gap-4  ">
          <TextChangeButton firstText="Aster"></TextChangeButton>
          <TextChangeButton firstText="Bellis"></TextChangeButton>
          <TextChangeButton firstText="Dahlia"></TextChangeButton>
          <TextChangeButton firstText="Eruca"></TextChangeButton>
        </div> */}
      </div>
    </section>
  );
};

export default ProductHero;
