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
            <Paragraph>
              <p className=" w-1/2 mx-auto text-center ">
                SAMA is at the forefront of innovation, specializing in offline
                voice applications. As a trusted ODM and system integrator, we
                empower smarter living with Edge AI technology in speakers and
                voice-enabled home appliances, delivering seamless functionality
                and exceptional user&apos;experience.
              </p>
            </Paragraph>
            <ShinyButton href="/products" className="w-40 h-10">
              Know More
            </ShinyButton>
          </div>
        </div>
        <div className="flex  items-center justify-center lg:pl-20 w-full gap-10">
          <div className="pr-10 border-r border-gray-200/20">
            <div className="relative flex-1 aspect-[5/4] h-[600px] ">
              <div className="absolute inset-0 p-10 z-10 text-black font-oswald text-5xl flex flex-col gap-4">
                <h1>Integrated Voice Module</h1>
                <p className="text-xl lg:w-1/2">
                  The Integrated Voice Module enhances home automation, making
                  appliance control smarter, effortless, and more reliable.
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
          {/* <div className="w-full mx-auto border border-gray-200/20"></div> */}
          <div className="">
            <div className="relative aspect-[5/4] h-[600px]">
              <div className="absolute inset-0 p-10 z-10 text-white font-oswald text-5xl flex flex-col gap-4 ">
                <h1> Accessory Voice Module</h1>
                <p className="text-xl lg:w-1/2">
                  The Accessory Voice Module bridges traditional devices with
                  smart home capabilities, offering offline voice control, IR
                  learning capability and seamless integration.
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
                src={"/accessory.jpg"}
                alt="Integrated Voice Module"
                fill
                className="object-cover object-bottom  rounded-3xl"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCase;
