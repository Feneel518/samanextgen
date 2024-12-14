import ShinyButton from "@/components/ShinyButton";
import Waves from "@/components/Waves";
import { section } from "framer-motion/client";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="px-8">
      <main className="grid lg:grid-cols-2 max-lg:gap-10 border-b border-gray-200/20 items-start  py-10 lg:py-20 ">
        <div className="">
          <div className="flex flex-col gap-8">
            <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl gray-grad">
              Seamless <span className="brand-grad">Voice Control </span>
              Without the <br className="hidden lg:flex" />
              Internet
            </h1>
            <div className="xl:w-2/3 text-gray-400 flex flex-col ">
              <p className="xl:w-[80%] text-lg lg:text-xl text-pretty">
                We set the benchmark in delivering flawless voice activation
                across devices. Our offline voice solutions bring the benefits
                of Edge AI to a wide range of products, enabling smarter and
                more responsive solutions
              </p>
            </div>
            <ShinyButton className="lg:w-80 text-sama-background h-12">
              Expore More
            </ShinyButton>
          </div>
        </div>
        <div className="max-lg:-mt-8">
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src={"/heroImage3.png"}
              alt="Hero Image"
              fill
              className="object-contain rounded-3xl"
            ></Image>
          </div>
          <div className="flex items-center justify-center gap-8 w-full h-full lg:ml-4 max-sm:-mt-8">
            <div className="">
              <Waves></Waves>
            </div>
            <div className=" ">
              <h1 className=" text-5xl lg:text-7xl font-oswald font-bold text-white max-lg:mb-4">
                SAMA
              </h1>
              {/* <Image
                  src={"/NoInternet.png"}
                  alt="No Internet"
                  fill
                  className="object-contain"
                ></Image> */}
            </div>
            <div className="">
              <Waves></Waves>
            </div>
          </div>
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
