import Cards3d from "@/components/Cards3d";
import Image from "next/image";
import { FC } from "react";

interface ProductsProps {}

const Products: FC<ProductsProps> = ({}) => {
  return (
    <div className="flex flex-col md:flex-row gap-10  items-center justify-center relative overflow-hidden">
      <div className="absolute w-[102%] h-full opacity-5 -right-2 hidden md:flex ">
        <Image
          src={"/waves.png"}
          alt="wavees"
          fill
          className="object-contain"
        ></Image>
      </div>
      <div className="absolute size-64 lg:top-64 top-4 lg:-right-16 -right-28 ">
        <Image src={"/pyramid.png"} alt="pyramid" fill></Image>
      </div>
      <div className="absolute size-64 lg:bottom-64 lg:left-16 -left-20">
        <Image src={"/tube.png"} alt="pyramid" fill></Image>
      </div>
      <div className="flex flex-col gap-4 flex-wrap mt-16 lg:mt-48">
        <Cards3d
          description="A simpler solution with single-mic, single-language recognition, optimized for noise compensation in high fan-speed environments."
          id="1"
          imageUrl="/chip.png"
          title="Aster"
        ></Cards3d>
        <Cards3d
          description="Bellis combines cutting-edge voice technology with design flexibility, making it ideal for next-generation smart devices."
          id="2"
          imageUrl="/chip.png"
          title="Belis"
        ></Cards3d>
      </div>
      <div className="flex flex-col gap-4 flex-wrap ">
        <Cards3d
          description="A high-performance solution supporting up to 4 microphones with multi-language voice recognition, advanced noise cancellation."
          id="3"
          imageUrl="/chip.png"
          title="Dahlia"
        ></Cards3d>
        <Cards3d
          description="A high-performance solution supporting up to 4 microphones with multi-language voice recognition, advanced noise cancellation."
          id="4"
          imageUrl="/chip.png"
          title="Eruca"
        ></Cards3d>
      </div>
    </div>
  );
};

export default Products;
