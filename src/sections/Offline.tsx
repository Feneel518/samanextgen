import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import { FC } from "react";

interface OfflineProps {}

const Offline: FC<OfflineProps> = ({}) => {
  return (
    <section className="px-8 ">
      <div className="py-10 lg:py-20 grid lg:grid-cols-2 gap-8 lg:flex-row border-b  border-gray-200/20 ">
        <div className="relative w-[500px] xl:w-[600px] aspect-square mx-auto max-lg:order-2 ">
          <Image
            src={"/offline2.png"}
            alt="offline"
            fill
            className="object-contain"
          ></Image>
        </div>
        <div className="lg:border-l w-full flex items-center justify-center max-lg:border-b max-xl:pb-20 max-lg:text-center max-lg:order-1 border-gray-200/20 -ml-6">
          <div className="  lg:pl-20 xl:pl-36 ">
            <Heading className="">
              <div className="max-lg:text-center shrink-0   ">
                Enabling Voice and AI application with unique embedded hardware
                and software solutions.
              </div>
            </Heading>
          </div>
        </div>
        {/* <div className="flex-1  gap-4 items-center justify-center ml-14 sm:ml-28 md:ml-48 lg:ml-16 xl:ml-60 ">
          <div className="relative size-[500px]">
            <Image
              src={"/offline2.png"}
              alt="offline"
              fill
              className="object-contain"
            ></Image>
          </div>
        </div>
        <div className="lg:w-[850px] lg:border-l border-gray-200/20 lg:ml-5 lg:p-24 flex flex-col ">
          <Heading className="">
            <div className="max-lg:text-center shrink-0   ">
              Enabling Voice and AI application with unique embedded hardware
              and software solutions.
            </div>
          </Heading>
        </div> */}
      </div>
    </section>
  );
};

export default Offline;
