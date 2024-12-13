"use client";

import ShinyButton from "@/components/ShinyButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface UseCaseProps {}

const UseCase: FC<UseCaseProps> = ({}) => {
  return (
    <section className="px-8">
      <div className="py-20 flex border-b border-gray-200/20">
        <div className="w-[550px] border-r border-gray-200/20 flex items-start shrink-0 ">
          <div className="flex flex-col gap-6">
            <h1 className="tracking-wider  font-oswald text-8xl">
              Featured <br />
              Work
            </h1>
            <p className="text-xl font-poppins w-2/3 ">
              SAMA is at the forefront of innovation, specializing in offline
              voice applications.
            </p>
            <ShinyButton className="w-40 h-10">See All</ShinyButton>
          </div>
        </div>
        <div className="flex flex-col pl-20 w-full gap-20">
          <div className="">
            <div className="relative w-full h-[700px]">
              <div className="absolute inset-0 p-10 z-10 text-black font-oswald text-5xl flex flex-col gap-4">
                <h1>Integrated Voice Module</h1>
                <p className="text-xl w-1/2">
                  The Integrated SAMA Voice Module is designed to bring
                  effortless control to your home, making your everyday
                  interactions with appliances smarter and more convenient.
                </p>
                <p className="flex items-center gap-1 group cursor-pointer text-xs text-lack">
                  See More{" "}
                  <ArrowRight
                    strokeWidth={1}
                    size={20}
                    className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                  ></ArrowRight>
                </p>
              </div>
              <Image
                src={"/circuit.png"}
                alt="Integrated Voice Module"
                fill
                className="object-cover rounded-3xl"
              ></Image>
            </div>
          </div>
          <div className="w-full mx-auto border border-gray-200/20"></div>
          <div className="">
            <div className="relative w-full h-[700px]">
              <div className="absolute inset-0 p-10 z-10 text-white font-oswald text-5xl flex flex-col gap-4 justify-end">
                <h1> Accessory Voice Module</h1>
                <p className="text-xl w-1/2">
                  The SAMA Voice Module as a Gateway is an innovative offline
                  voice solution that bridges the gap between traditional
                  devices and smart home functionality.
                </p>
                <p className="flex items-center gap-1 group cursor-pointer text-xs text-lack">
                  See More{" "}
                  <ArrowRight
                    strokeWidth={1}
                    size={20}
                    className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                  ></ArrowRight>
                </p>
              </div>
              <Image
                src={"/accessory.jpg"}
                alt="Integrated Voice Module"
                fill
                className="object-cover rounded-3xl"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCase;
