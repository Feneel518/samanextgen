import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import ShinyButton from "@/components/ShinyButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface NoiseProps {}

const Noise: FC<NoiseProps> = ({}) => {
  const noise = [
    {
      title: "Echo Removal (AEC)",
      desc: "Removes unwanted echoes to improve clarity.",
    },
    {
      title: "Focus on Desired Sound",
      desc: "Enhances the speaker's voice while minimizing background noise.",
    },
    {
      title: "Noise Suppression",
      desc: "Eliminates distracting noises for a smooth experience.",
    },
    {
      title: "Automatic Volume Adjustment",
      desc: "Ensures consistent sound levels regardless of distance.",
    },
    {
      title: "Limiter",
      desc: "Protects the sound quality by avoiding distortions.",
    },
  ];
  return (
    <section className="px-8">
      <div className="py-10 border-b border-gray-200/20">
        <Heading>
          <h1 className="text-center">Voice Optimization</h1>
        </Heading>
      </div>
      <div className="py-10 lg:py-20 flex flex-col max-lg:gap-10 lg:flex-row border-b border-gray-200/20">
        <div className="flex-1 lg:border-r border-gray-200/20 flex items-start shrink-0 ">
          <div className="flex flex-col gap-6 w-full lg:pr-20  transition-all duration-200 ease-in-out lg:ml-10">
            {noise.map((nois, index) => {
              return (
                <div key={index}>
                  <div className=" flex items-start gap-8">
                    <div className="size-12 shrink-0 lg:size-14 font-oswald text-xl lg:text-2xl flex items-center justify-center border border-gray-200 rounded-full">
                      0{index + 1}
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="text-2xl md:text-3xl font-light">
                        {nois.title}
                      </div>
                      <Paragraph>
                        <div className=" ">{nois.desc}</div>
                      </Paragraph>
                    </div>
                  </div>
                  {index + 1 !== noise.length && (
                    <div className="w-full border border-gray-200/20 mt-8"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col lg:pl-20 w-full gap-20 flex-1">
          <div className="">
            <div className="relative w-full h-[600px]">
              <div className="absolute inset-0 p-10 z-10 text-black font-oswald text-5xl flex flex-col gap-4 bg-sama-primary/15">
                {/* <h1>Integrated Voice Module</h1>
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
                </p> */}
              </div>
              <Image
                src={"/noiseFilter.jpg"}
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

export default Noise;
