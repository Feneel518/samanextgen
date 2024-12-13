import ShinyButton from "@/components/ShinyButton";
import Waves from "@/components/Waves";
import { section } from "framer-motion/client";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="px-8">
      <main className="grid grid-cols-2  border-b border-gray-200/20 items-start  py-20">
        <div className="">
          <div className="flex flex-col gap-8">
            <h1 className="font-oswald text-7xl gray-grad">
              Seamless <span className="brand-grad">Voice Control </span>
              Without the <br />
              Internet
            </h1>
            <div className="w-2/3 text-gray-400 flex flex-col ">
              <p className="w-[80%] text-xl text-pretty">
                We set the benchmark in delivering flawless voice activation
                across devices. Our offline voice solutions bring the benefits
                of Edge AI to a wide range of products, enabling smarter and
                more responsive solutions
              </p>
            </div>
            <ShinyButton className="w-80 text-sama-background h-12">
              Expore More
            </ShinyButton>
          </div>
        </div>
        <div className="relative h-[600px]">
          <div className="absolute top-0 z-10 w-full h-full flex items-center justify-center gap-8 bg-white/10 backdrop-blur-sm ">
            <div className="flex items-end gap-8">
              <div className="mb-8">
                <Waves></Waves>
              </div>
              <div className="relative size-96 ">
                <Image
                  src={"/NoInternet.png"}
                  alt="No Internet"
                  fill
                  className="object-contain"
                ></Image>
              </div>
              <div className="mb-8">
                <Waves></Waves>
              </div>
            </div>
          </div>
          <Image
            src={"/heroImage1.png"}
            alt="Hero Image"
            fill
            className="object-cover rounded-3xl blur-[1px]"
          ></Image>
        </div>
      </main>
    </section>
    // <section>
    //   {/* <div className=" h-screen py-24 flex items-center justify-center px-24">
    //     <div className="grid grid-cols-2 gap-10 h-[80%] items-center">
    //       <div className="flex flex-col gap-8">
    //         <h1 className="text-7xl font-oswald gray-grad">
    //           Seamless <span className="brand-grad">Voice Control </span>
    //           Without the Internet
    //         </h1>
    //         <div className="flex flex-col gap-4">
    //           <p>
    //             We set the benchmark in delivering flawless voice activation
    //             across devices. Our offline voice solutions bring the benefits
    //             of Edge AI to a wide range of products, enabling smarter and
    //             more responsive solutions
    //           </p>
    //           <p>
    //             Our solutions offer fast, accurate, and private on-device
    //             performance, empowering brands to create unique, secure, and
    //             highly efficient experiences.
    //           </p>
    //         </div>
    //         <div className="">
    //           <ShinyButton className="w-48 text-sama-background h-14">
    //             Expore More
    //           </ShinyButton>
    //         </div>
    //       </div>
    //       <div className="relative w-full h-full">
    //         <Image
    //           src={"/heroImage.png"}
    //           alt="heroimage"
    //           fill
    //           className="object-contain"
    //         ></Image>
    //       </div>
    //     </div>
    //   </div>
    // </section> */}
  );
};

export default Hero;
