import ShinyButton from "@/components/ShinyButton";
import { FC } from "react";

interface WhyOfflineProps {}

const WhyOffline: FC<WhyOfflineProps> = ({}) => {
  return (
    <section className="px-8">
      <div className="py-20 flex border-b border-gray-200/20">
        <div className="relative w-[1200px] aspect-[4/2]">
          <p className="uppercase mb-4"> How we Work</p>
          <h1 className="font-oswald text-8xl">
            We help our clients automate without the internet.
          </h1>
        </div>
        <div className="w-[550px] border-l border-gray-200/20  text-gray-400 tracking-wider shrink-0  ml-5 pl-8 text-xl flex flex-col justify-between">
          <div className="">
            Imagine a world where your voice commands are processed locally,{" "}
            <span className="text-white">
              without the need for an internet connection.{" "}
            </span>
            By processing voice commands locally, your sensitive data remains
            secure on your device, eliminating the risk of data breaches and
            unauthorized access.{" "}
            <span className="text-white">
              Offline voice technology ensures uninterrupted performance, even
              in areas with poor network coverage.
            </span>
          </div>
          <ShinyButton className="w-64 h-10">See Porducts</ShinyButton>
        </div>
      </div>
    </section>
  );
};

export default WhyOffline;
