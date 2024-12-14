import ShinyButton from "@/components/ShinyButton";
import { FC } from "react";

interface WhyOfflineProps {}

const WhyOffline: FC<WhyOfflineProps> = ({}) => {
  return (
    <section className="px-8">
      <div className=" py-10 lg:py-20 flex flex-col lg:flex-row max-lg:gap-10 border-b border-gray-200/20">
        <div className="">
          <p className="uppercase mb-4"> How we Work</p>
          <h1 className="font-oswald text-5xl md:text-6xl lg:text-8xl gray-grad">
            We help our clients automate without the internet.
          </h1>
        </div>
        <div className="lg:w-[550px] lg:border-l border-gray-200/20  text-gray-400 tracking-wider shrink-0  lg:ml-5 lg:pl-8 lg:text-xl flex flex-col gap-10 justify-between">
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
          <ShinyButton className="lg:w-64 h-10">See Porducts</ShinyButton>
        </div>
      </div>
    </section>
  );
};

export default WhyOffline;
