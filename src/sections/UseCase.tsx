"use client";

import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import ShinyButton from "@/components/ShinyButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface UseCaseProps {}

const UseCase: FC<UseCaseProps> = ({}) => {
  return (
    <section className="px-8">
      <div className="py-20 flex flex-col items-center justify-center  gap-10 border-b border-gray-200/20">
        <div className="  pb-8 border-gray-200/20 flex items-start lg:shrink-0 ">
          <div className="flex flex-col items-center justify-center gap-6 lg:sticky lg:top-4 transition-all duration-200 ease-in-out">
            <Heading>
              <h1>Our Products</h1>
            </Heading>

            {/* <ShinyButton href="/products" className="w-40 h-10">
              Know More
            </ShinyButton> */}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 items-center justify-center max-lg:divide-y-2 lg:divide-x-2 divide-gray-200/20  w-full">
          <div className="p-8 w-full">
            <div className="relative lg:w-full lg:aspect-[5/4] w-[400px] max-lg:h-[650px]  sm:w-[550px]">
              <div className="absolute inset-0 bg-black/10  z-10"></div>

              <div className="absolute inset-0 p-10 z-10 text-black font-oswald text-5xl flex flex-col gap-4">
                <h1>Integrated Voice Module</h1>
                <p className="text-xl xl:w-1/2">
                  The Integrated Voice Module is a solution that transforms
                  traditional home appliances into smart devices, offering
                  seamless control and enhanced convenience through offline
                  voice processing.
                </p>
                <Link
                  href={"/products"}
                  className="flex items-center gap-1 group cursor-pointer text-xs text-lack"
                >
                  See More{" "}
                  <ArrowRight
                    strokeWidth={1}
                    size={20}
                    className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                  ></ArrowRight>
                </Link>
              </div>
              <Image
                src={"/circuit.png"}
                alt="Integrated Voice Module"
                fill
                className="object-cover object-bottom rounded-3xl"
              ></Image>
            </div>
          </div>
          <div className="p-8 w-full">
            <div className="relative lg:w-full lg:aspect-[5/4] w-[400px] max-lg:h-[650px]  sm:w-[550px]">
              <div className="absolute inset-0 bg-black/20  z-10"></div>
              <div className="absolute inset-0 p-10 z-20 text-white font-oswald text-5xl flex flex-col gap-4 ">
                <h1> Accessory Voice Module</h1>
                <p className="text-xl xl:w-1/2">
                  The Accessory Voice Module eliminates handheld remote chaos by
                  enabling offline voice control for IR devices like ACs, TVs,
                  and lights. It features microphones, OTA updates, multilingual
                  support, Mobile Application and seamless device integration.
                </p>
                <Link
                  href={"/products?section=avm"}
                  className="flex items-center gap-1 group cursor-pointer text-xs text-lack"
                >
                  See More{" "}
                  <ArrowRight
                    strokeWidth={1}
                    size={20}
                    className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                  ></ArrowRight>
                </Link>
              </div>
              <Image
                src={"/accessory1.png"}
                alt="Integrated Voice Module"
                fill
                className="object-cover object-bottom rounded-3xl"
              ></Image>
            </div>
          </div>
        </div>
        {/* <div className="flex xl:flex-row flex-col items-center justify-center lg:pl-20 w-full gap-10">
          <div className="xl:pr-10 xl:border-r border-gray-200/20">
            <div className="relative flex-1 xl:aspect-[5/4] h-[650px] w-[450px] sm:w-[650px] md:w-[800px] xl:h-[550px] xl:w-[650px] ">
              <div className="absolute inset-0 p-10 z-10 text-black font-oswald text-5xl flex flex-col gap-4">
                <h1>Integrated Voice Module</h1>
                <p className="text-xl lg:w-1/2">
                  The Integrated Voice Module is a solution that transforms
                  traditional home appliances into smart devices, offering
                  seamless control and enhanced convenience through offline
                  voice processing.
                </p>
                <Link
                  href={"/products"}
                  className="flex items-center gap-1 group cursor-pointer text-xs text-lack"
                >
                  See More{" "}
                  <ArrowRight
                    strokeWidth={1}
                    size={20}
                    className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                  ></ArrowRight>
                </Link>
              </div>
              <Image
                src={"/circuit.png"}
                alt="Integrated Voice Module"
                fill
                className="object-cover object-bottom rounded-3xl"
              ></Image>
            </div>
          </div>

          <div className="">
            <div className="relative aspect-[5/4]  h-[650px] w-[450px] sm:w-[650px] md:w-[800px] xl:h-[550px] xl:w-[650px]">
              <div className="absolute inset-0 p-10 z-10 text-white font-oswald text-5xl flex flex-col gap-4 ">
                <h1> Accessory Voice Module</h1>
                <p className="text-xl lg:w-1/2">
                  he Accessory Voice Module eliminates handheld remote chaos by
                  enabling offline voice control for IR devices like ACs, TVs,
                  and lights. It features microphones, OTA updates, multilingual
                  support, Mobile Application and seamless device integration.
                </p>
                <Link
                  href={"/products?section=avm"}
                  className="flex items-center gap-1 group cursor-pointer text-xs text-lack"
                >
                  See More{" "}
                  <ArrowRight
                    strokeWidth={1}
                    size={20}
                    className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                  ></ArrowRight>
                </Link>
              </div>
              <Image
                src={"/accessory1.png"}
                alt="Integrated Voice Module"
                fill
                className="object-cover object-bottom  rounded-3xl"
              ></Image>
            </div>
          </div>
        </div> */}
        <div className="mt-8">
          <Paragraph>
            <p className=" w-1/2 mx-auto text-center ">
              SAMA NextGen is at the forefront of innovation, specializing in
              offline voice applications. As a trusted ODM and system
              integrator, we empower smarter living with Edge AI technology in
              speakers and voice-enabled home appliances, delivering seamless
              functionality and exceptional user experience.
            </p>
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default UseCase;
