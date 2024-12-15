import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import { FC } from "react";

interface OfflineProps {}

const Offline: FC<OfflineProps> = ({}) => {
  return (
    <section className="px-8 ">
      <div className="py-10 lg:py-20 flex flex-col-reverse gap-8 lg:flex-row border-b border-gray-200/20 ">
        <div className="flex-1 grid grid-cols-2 gap-4 items-center justify-center ml-14 sm:ml-28 md:ml-48 lg:ml-16 xl:ml-60 ">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              className="relative size-24 sm:size-32 lg:size-24 xl:size-32 flex items-center justify-center"
              key={index}
            >
              <Image
                src={`/${index + 1}.png`}
                alt="Home Autoamtion icons"
                fill
                className="object-cover"
              ></Image>
            </div>
          ))}
        </div>
        <div className="lg:w-[750px] lg:border-l border-gray-200/20 lg:ml-5 lg:pl-8 flex flex-col ">
          <Heading className="">
            <div className="max-lg:text-center shrink-0   ">
              Enabling Voice and AI application
            </div>
          </Heading>
          <Paragraph className="max-lg:text-center">
            with unique embedded hardware and software solutions.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default Offline;
