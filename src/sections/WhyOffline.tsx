import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import ShinyButton from "@/components/ShinyButton";
import { FC } from "react";

interface WhyOfflineProps {}

const WhyOffline: FC<WhyOfflineProps> = ({}) => {
  return (
    <section className="px-8">
      <div className=" py-10 lg:py-20 flex flex-col lg:flex-row max-lg:gap-10 border-b border-gray-200/20">
        <div className="">
          <p className="uppercase mb-4"> How we Work</p>
          <Heading className="w-2/3">
            <h1 className="">
              We help our clients automate without the internet.
            </h1>
          </Heading>
        </div>

        <div className="lg:w-[550px] lg:border-l border-gray-200/20   shrink-0  lg:ml-5 lg:pl-8  flex flex-col gap-10 justify-between">
          <Paragraph>
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
          </Paragraph>
          <ShinyButton className="lg:w-64 h-10">See Porducts</ShinyButton>
        </div>
      </div>
    </section>
  );
};

export default WhyOffline;
