import Image from "next/image";
import { FC } from "react";

interface OfflineProps {}

const Offline: FC<OfflineProps> = ({}) => {
  return (
    <section className="px-8">
      <div className="py-20 flex border-b border-gray-200/20">
        <div className="relative w-[1200px] aspect-[4/2]">
          <Image
            src={"/offline.png"}
            alt="offline control"
            fill
            className="object-contain"
          ></Image>
        </div>
        <div className="w-[550px] border-l border-gray-200/20 flex items-start uppercase tracking-wider shrink-0 justify-end ">
          The Future of Voice- Offline and Private
        </div>
      </div>
    </section>
  );
};

export default Offline;
