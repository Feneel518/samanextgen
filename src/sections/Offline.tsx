import Image from "next/image";
import { FC } from "react";

interface OfflineProps {}

const Offline: FC<OfflineProps> = ({}) => {
  return (
    <section className="px-8">
      <div className="py-10 lg:py-20 flex flex-col-reverse gap-8 lg:flex-row border-b border-gray-200/20">
        <div className="relative w-[400px] lg:w-[1200px] aspect-[4/2]">
          <Image
            src={"/offlineWhite.png"}
            alt="offline control"
            fill
            className="object-contain"
          ></Image>
        </div>
        <div className="lg:w-[550px] lg:border-l max-lg:text-center border-gray-200/20 flex items-start  text-5xl md:text-6xl lg:text-6xl tracking-wider shrink-0 justify-end lg:ml-5 font-oswald lg:pl-8 ">
          The Future of Voice- Offline and Private
        </div>
      </div>
    </section>
  );
};

export default Offline;
