import Heading from "@/components/Heading";
import Image from "next/image";
import { FC } from "react";

interface OfflineProps {}

const Offline: FC<OfflineProps> = ({}) => {
  return (
    <section className="px-8">
      <div className="py-10 lg:py-20 flex flex-col-reverse gap-8 lg:flex-row border-b border-gray-200/20">
        <div className="flex-1 grid grid-cols-2 items-center justify-center ml-60 ">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="relative size-32 flex items-center justify-center">
              <Image
                src={`/${index + 1}.png`}
                alt="Home Autoamtion icons"
                fill
                className="object-cover"
              ></Image>
            </div>
          ))}
        </div>
        <Heading>
          <div className="lg:w-[750px] lg:border-l max-lg:text-center border-gray-200/20 flex items-start   shrink-0 justify-end lg:ml-5 h-full lg:pl-8 ">
            Enabling Voice and AI application with unique embedded hardware and
            software solutions.
          </div>
        </Heading>
      </div>
    </section>
  );
};

export default Offline;
