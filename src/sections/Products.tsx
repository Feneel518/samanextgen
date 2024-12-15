import Cards3d from "@/components/Cards3d";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import ProductComponent from "@/components/ProductComponent";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface ProductsProps {}

const Products: FC<ProductsProps> = ({}) => {
  return (
    <section className="px-8">
      <div className="flex flex-col lg:flex-row py-10 lg:py-20  border-b border-gray-200/20">
        <div className="lg:w-[550px] lg:border-r border-gray-200/20 flex items-start lg:shrink-0 ">
          <div className="flex flex-col gap-6 ">
            <Heading className="lg:w-[80%]">
              <h1>What we have to offer.</h1>
            </Heading>
            <Paragraph>
              <p className="lg:w-2/3 ">
                Our solutions offer fast, accurate, and private on-device
                performance, empowering brands to create unique, secure, and
                highly efficient experiences.
              </p>
            </Paragraph>
          </div>
        </div>
        <div className=" flex flex-col mt-10 gap-5 lg:pl-8 xl:hidden w-full">
          <div className="flex flex-col w-full  gap-5">
            <ProductComponent
              imageUrl="/chip.png"
              title="Aster"
              description="A simpler solution with single-mic, single-language recognition,
              optimized for noise compensation."
            ></ProductComponent>
            <div className="w-full h-[1px] xl:w-[1px] xl:h-full bg-gray-200/20"></div>
            <ProductComponent
              imageUrl="/chip.png"
              title="Bellis"
              description="A simpler solution with dual-mic, dual-language recognition, optimized for noise compensation."
            ></ProductComponent>
            <div className="w-full h-[1px] xl:w-[1px] xl:h-full bg-gray-200/20"></div>
          </div>
          <div className="flex flex-col xl:flex-row gap-5">
            <ProductComponent
              imageUrl="/chip.png"
              title="Dahlia"
              description="A high-performance solution supporting up to 4 microphones with multi-language voice recognition."
            ></ProductComponent>
            <div className="w-full h-[1px] xl:w-[1px] xl:h-full bg-gray-200/20"></div>

            <ProductComponent
              imageUrl="/chip.png"
              title="Eruca"
              description=" Simplify control of your devices with the SAMA Voice Module, turning IR appliances into smart solutions."
            ></ProductComponent>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col xl:pl-10 w-full gap-10 2xl:gap-20 max-xl:hidden">
          <div className="flex max-lg:flex-col gap-12">
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
                <div className="flex flex-col gap-2 max-xl:-ml-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl xl:text-4xl font-oswald">Aster</h2>
                    <p className="flex items-center gap-1 group cursor-pointer text-xs text-gray-400">
                      See More{" "}
                      <ArrowRight
                        strokeWidth={1}
                        size={20}
                        className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                      ></ArrowRight>
                    </p>
                  </div>
                  <p className="leading-relaxed tracking-wider font-light ">
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
                <div className="flex flex-col gap-2 max-xl:-ml-4">
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
                <div className="flex flex-col gap-2 max-xl:-ml-4">
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
                <div className="flex flex-col gap-2 max-xl:-ml-4">
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

    // // <div className="flex">
    // <div className="flex flex-col md:flex-row mt-10 gap-5">
    // <ProductComponent
    //   imageUrl="/chip.png"
    //   title="Aster"
    //   description="A simpler solution with single-mic, single-language recognition,
    // optimized for noise compensation."
    // ></ProductComponent>
    // <div className="w-full border border-gray-200/20"></div>
    // <ProductComponent
    //   imageUrl="/chip.png"
    //   title="Bellis"
    //   description="A simpler solution with single-mic, single-language recognition, optimized for noise compensation."
    // ></ProductComponent>
    // <div className="w-full border border-gray-200/20"></div>
    // </div>
    // <div className="flex flex-col md:flex-row mt-5 gap-5">
    // <ProductComponent
    //   imageUrl="/chip.png"
    //   title="Dahlia"
    //   description="A high-performance solution supporting up to 4 microphones with multi-language voice recognition."
    // ></ProductComponent>

    // <div className="w-full border border-gray-200/20"></div>
    // <ProductComponent
    //   imageUrl="/chip.png"
    //   title="Eruca"
    //   description=" Simplify control of your devices with the SAMA Voice Module, turning IR appliances into voice-activated smart solutions."
    // ></ProductComponent>
    // </div>
    // </div>

    // <section className="px-8">
    //   <div className="py-20 flex max-lg:flex-col border-b border-gray-200/20">
    //     <div className="lg:w-[350px] xl:w-[550px] border-r border-gray-200/20 flex  items-start uppercase tracking-wider shrink-0">
    //       What do we have to offer
    //     </div>
    //     <div className="flex flex-col pl-8 xl:pl-20 w-full gap-10 xl:gap-20">
    //       <div className="flex max-lg:flex-col gap-12">
    //         <div className=" flex-1 ">
    //           <div className="flex gap-4 items-center">
    //             <div className="relative size-32 shrink-0">
    //               <Image
    //                 src={"/chip.png"}
    //                 alt="Aster Circuit"
    //                 fill
    //                 className="object-contain"
    //               ></Image>
    //             </div>
    //             <div className="flex flex-col gap-2 max-xl:-ml-4">
    //               <div className="flex items-center justify-between">
    //                 <h2 className="text-3xl xl:text-4xl font-oswald">Aster</h2>
    //                 <p className="flex items-center gap-1 group cursor-pointer text-xs text-gray-400">
    //                   See More{" "}
    //                   <ArrowRight
    //                     strokeWidth={1}
    //                     size={20}
    //                     className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
    //                   ></ArrowRight>
    //                 </p>
    //               </div>
    //               <p className="leading-relaxed tracking-wider font-light text-sm xl:text-lg">
    //                 A simpler solution with single-mic, single-language
    //                 recognition, optimized for noise compensation.
    //               </p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="h-full border border-gray-200/20"></div>
    //         <div className=" flex-1 ">
    //           <div className="flex gap-4 items-center">
    //             <div className="relative size-32 shrink-0">
    //               <Image
    //                 src={"/chip.png"}
    //                 alt="Aster Circuit"
    //                 fill
    //                 className="object-contain"
    //               ></Image>
    //             </div>
    //             <div className="flex flex-col gap-2 max-xl:-ml-4">
    //               <div className="flex items-center justify-between">
    //                 <h2 className="text-4xl font-oswald">Bellis</h2>
    //                 <p className="flex items-center gap-1 group cursor-pointer text-xs text-gray-400">
    //                   See More{" "}
    //                   <ArrowRight
    //                     strokeWidth={1}
    //                     size={20}
    //                     className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
    //                   ></ArrowRight>
    //                 </p>
    //               </div>
    //               <p className="leading-relaxed tracking-wider font-light">
    //                 A simpler solution with single-mic, single-language
    //                 recognition, optimized for noise compensation.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-full mx-auto border border-gray-200/20"></div>
    //       <div className="flex gap-12">
    //         <div className=" flex-1 ">
    //           <div className="flex gap-4 items-center">
    //             <div className="relative size-32 shrink-0">
    //               <Image
    //                 src={"/chip.png"}
    //                 alt="Aster Circuit"
    //                 fill
    //                 className="object-contain"
    //               ></Image>
    //             </div>
    //             <div className="flex flex-col gap-2 max-xl:-ml-4">
    //               <div className="flex items-center justify-between">
    //                 <h2 className="text-4xl font-oswald">Dahlia</h2>
    //                 <p className="flex items-center gap-1 group cursor-pointer text-xs text-gray-400">
    //                   See More{" "}
    //                   <ArrowRight
    //                     strokeWidth={1}
    //                     size={20}
    //                     className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
    //                   ></ArrowRight>
    //                 </p>
    //               </div>
    //               <p className="leading-relaxed tracking-wider font-light">
    //                 A high-performance solution supporting up to 4 microphones
    //                 with multi-language voice recognition.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="h-full border border-gray-200/20"></div>
    //         <div className=" flex-1 ">
    //           <div className="flex gap-4 items-center">
    //             <div className="relative size-32 shrink-0">
    //               <Image
    //                 src={"/chip.png"}
    //                 alt="Aster Circuit"
    //                 fill
    //                 className="object-contain"
    //               ></Image>
    //             </div>
    //             <div className="flex flex-col gap-2 max-xl:-ml-4">
    //               <div className="flex items-center justify-between">
    //                 <h2 className="text-4xl font-oswald">Eruca</h2>
    //                 <p className="flex items-center gap-1 group cursor-pointer text-xs text-gray-400">
    //                   See More{" "}
    //                   <ArrowRight
    //                     strokeWidth={1}
    //                     size={20}
    //                     className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
    //                   ></ArrowRight>
    //                 </p>
    //               </div>
    //               <p className="leading-relaxed tracking-wider font-light">
    //                 Simplify control of your devices with the SAMA Voice Module,
    //                 turning IR appliances into voice-activated smart solutions.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Products;
