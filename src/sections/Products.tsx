import Cards3d from "@/components/Cards3d";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface ProductsProps {}

const Products: FC<ProductsProps> = ({}) => {
  return (
    <section className="px-8">
      <div className="py-20 flex border-b border-gray-200/20">
        <div className="w-[550px] border-r border-gray-200/20 flex items-start uppercase tracking-wider shrink-0">
          What do we have to offer
        </div>
        <div className="flex flex-col pl-20 w-full gap-20">
          <div className="flex gap-12">
            <div className=" flex-1 ">
              <div className="flex gap-4 items-center">
                <div className="relative size-32 shrink-0">
                  <Image
                    src={"/chip.png"}
                    alt="Aster Circuit"
                    fill
                    className="object-contain"
                  ></Image>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-4xl font-oswald">Aster</h2>
                    <p className="flex items-center gap-1 group cursor-pointer text-xs text-gray-400">
                      See More{" "}
                      <ArrowRight
                        strokeWidth={1}
                        size={20}
                        className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                      ></ArrowRight>
                    </p>
                  </div>
                  <p className="leading-relaxed tracking-wider font-light">
                    A simpler solution with single-mic, single-language
                    recognition, optimized for noise compensation.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full border border-gray-200/20"></div>
            <div className=" flex-1 ">
              <div className="flex gap-4 items-center">
                <div className="relative size-32 shrink-0">
                  <Image
                    src={"/chip.png"}
                    alt="Aster Circuit"
                    fill
                    className="object-contain"
                  ></Image>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-4xl font-oswald">Bellis</h2>
                    <p className="flex items-center gap-1 group cursor-pointer text-xs text-gray-400">
                      See More{" "}
                      <ArrowRight
                        strokeWidth={1}
                        size={20}
                        className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                      ></ArrowRight>
                    </p>
                  </div>
                  <p className="leading-relaxed tracking-wider font-light">
                    A simpler solution with single-mic, single-language
                    recognition, optimized for noise compensation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto border border-gray-200/20"></div>
          <div className="flex gap-12">
            <div className=" flex-1 ">
              <div className="flex gap-4 items-center">
                <div className="relative size-32 shrink-0">
                  <Image
                    src={"/chip.png"}
                    alt="Aster Circuit"
                    fill
                    className="object-contain"
                  ></Image>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-4xl font-oswald">Dahlia</h2>
                    <p className="flex items-center gap-1 group cursor-pointer text-xs text-gray-400">
                      See More{" "}
                      <ArrowRight
                        strokeWidth={1}
                        size={20}
                        className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                      ></ArrowRight>
                    </p>
                  </div>
                  <p className="leading-relaxed tracking-wider font-light">
                    A high-performance solution supporting up to 4 microphones
                    with multi-language voice recognition.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full border border-gray-200/20"></div>
            <div className=" flex-1 ">
              <div className="flex gap-4 items-center">
                <div className="relative size-32 shrink-0">
                  <Image
                    src={"/chip.png"}
                    alt="Aster Circuit"
                    fill
                    className="object-contain"
                  ></Image>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-4xl font-oswald">Eruca</h2>
                    <p className="flex items-center gap-1 group cursor-pointer text-xs text-gray-400">
                      See More{" "}
                      <ArrowRight
                        strokeWidth={1}
                        size={20}
                        className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                      ></ArrowRight>
                    </p>
                  </div>
                  <p className="leading-relaxed tracking-wider font-light">
                    Simplify control of your devices with the SAMA Voice Module,
                    turning IR appliances into voice-activated smart solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div className="flex flex-col md:flex-row gap-10  items-center justify-center relative overflow-hidden">
    //   <div className="absolute w-[102%] h-full opacity-5 -right-2 hidden md:flex ">
    //     <Image
    //       src={"/waves.png"}
    //       alt="wavees"
    //       fill
    //       className="object-contain"
    //     ></Image>
    //   </div>
    //   <div className="absolute size-64 lg:top-64 top-4 lg:-right-16 -right-28 ">
    //     <Image src={"/pyramid.png"} alt="pyramid" fill></Image>
    //   </div>
    //   <div className="absolute size-64 lg:bottom-64 lg:left-16 -left-20">
    //     <Image src={"/tube.png"} alt="pyramid" fill></Image>
    //   </div>
    //   <div className="flex flex-col gap-4 flex-wrap mt-16 lg:mt-48">
    //     <Cards3d
    //       description="A simpler solution with single-mic, single-language recognition, optimized for noise compensation in high fan-speed environments."
    //       id="1"
    //       imageUrl="/chip.png"
    //       title="Aster"
    //     ></Cards3d>
    //     <Cards3d
    //       description="Bellis combines cutting-edge voice technology with design flexibility, making it ideal for next-generation smart devices."
    //       id="2"
    //       imageUrl="/chip.png"
    //       title="Belis"
    //     ></Cards3d>
    //   </div>
    //   <div className="flex flex-col gap-4 flex-wrap ">
    //     <Cards3d
    //       description="A high-performance solution supporting up to 4 microphones with multi-language voice recognition, advanced noise cancellation."
    //       id="3"
    //       imageUrl="/chip.png"
    //       title="Dahlia"
    //     ></Cards3d>
    //     <Cards3d
    //       description="A high-performance solution supporting up to 4 microphones with multi-language voice recognition, advanced noise cancellation."
    //       id="4"
    //       imageUrl="/chip.png"
    //       title="Eruca"
    //     ></Cards3d>
    //   </div>
    // </div>
  );
};

export default Products;
