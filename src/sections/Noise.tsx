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
      title: "2019",
      desc: "SAMA was founded with the mission to revolutionize audio and voice technologies. With a focus on innovation, we set out to develop solutions that combine advanced engineering with real-world usability. From the beginning, our goal was to redefine how users interact with technology using seamless voice-enabled solutions.",
    },
    {
      title: "2019",
      desc: "SAMA specialized in designing Alexa-certified, IoT-based smart speaker modules for the German market. Our advanced modules offered seamless integration with IoT ecosystems, focusing on high-quality sound and intuitive user experiences. These products earned recognition for their compliance with global standards and innovation in the smart speaker domain.",
    },
    {
      title: "2020",
      desc: "SAMA extended its expertise to serve a leading telecom operator in India. Our engineering services included developing products such as smart speakers, IP cameras, and IoT gateways. This partnership solidified SAMA's position as a trusted technology provider, delivering high-performance, scalable solutions for diverse applications.",
    },
    {
      title: "2023 Onwards",
      desc: "SAMA began developing cost-optimized offline voice modules equipped with excellent noise cancellation and state-of-the-art voice recognition. These modules are tailored for controlling home appliances like fans, air conditioners, and other IoT devices. By focusing on offline functionality, SAMA ensures privacy, reduced latency, and reliable operation even in low-connectivity areas.",
    },
  ];
  return (
    <section className="px-8">
      {/* <div className="py-10 border-b border-gray-200/20">
        <Heading>
          <h1 className="text-center">Our Story</h1>
        </Heading>
      </div> */}
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
          <div className="sticky top-0 transition-all duration-200 ease-in-out">
            <div className="relative w-full h-[600px] ">
              <div className=" inset-0 p-10 z-10 text-black font-oswald text-5xl flex flex-col gap-4  rounded-3xl ">
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
                src={"/Journey3.png"}
                alt="Integrated Voice Module"
                fill
                className="object-contain rounded-3xl "
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Noise;
