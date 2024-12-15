import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import ProductComponent from "@/components/ProductComponent";
import ShinyButton from "@/components/ShinyButton";
import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
} from "@/components/ui/carousel";
import Waves from "@/components/Waves";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="px-8">
      <div className="border-b border-gray-200/20 pb-4">
        <Carousel
          autoplay={true}
          autoplayInterval={10000}
          carouselOptions={{ loop: true }}
        >
          {/* <CarouselNext />
        <CarouselPrevious /> */}
          {/* <div className="relative "> */}
          <CarouselMainContainer className="">
            {/* {Array.from({ length: 5 }).map((_, index) => ( */}
            <SliderMainItem className="bg-transparent ">
              <main className="grid lg:grid-cols-2 max-lg:gap-10  items-center  py-10 lg:py-20 xl:px-40 ">
                <div className="flex flex-col gap-6 ">
                  <Heading className="">
                    <h1>
                      Seamless{" "}
                      <span className="brand-grad">Voice Control </span>
                      Without the <br className="hidden lg:flex" />
                      Internet
                    </h1>
                  </Heading>
                  <Paragraph className="">
                    <p className="xl:w-[80%] text-lg lg:text-xl text-pretty">
                      We set the benchmark in delivering flawless voice
                      activation across devices.
                    </p>
                  </Paragraph>
                  <ShinyButton className="lg:w-80 text-sama-background h-12">
                    Expore More
                  </ShinyButton>
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
                      <Heading>
                        <h1 className=" text-5xl lg:text-7xl font-oswald font-bold text-white max-lg:mb-4">
                          SAMA
                        </h1>
                      </Heading>
                    </div>
                    <div className="">
                      <Waves></Waves>
                    </div>
                  </div>
                </div>
              </main>
            </SliderMainItem>
            <SliderMainItem className="bg-transparent">
              <div className="flex flex-col gap-10 py-20">
                <Heading className="xl:px-80 text-center">
                  <h1>
                    See how SAMA NextGen's AI-powered smart home solutions can
                    transform your business.
                  </h1>
                </Heading>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:px-[200px] ">
                  <div className="xl:border-r border-b p-8 border-gray-200/20">
                    <aside className="flex flex-col justify-center items-center h-full">
                      <h1 className="text-6xl xl:text-8xl font-oswald brand-grad">
                        Aster
                      </h1>
                      <Link
                        href={"/products"}
                        className="flex items-center gap-1 group cursor-pointer text-xs text-gray-400"
                      >
                        Integrated Voice Module
                        <ArrowRight
                          strokeWidth={1}
                          size={20}
                          className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                        ></ArrowRight>
                      </Link>
                    </aside>
                  </div>
                  <div className="border-b border-gray-200/20 p-8">
                    <aside className="flex flex-col justify-center items-center h-full">
                      <h1 className="text-6xl xl:text-8xl font-oswald brand-grad ">
                        Bellis
                      </h1>
                      <Link
                        href={"/products"}
                        className="flex items-center gap-1 group cursor-pointer text-xs text-gray-400"
                      >
                        Integrated Voice Module
                        <ArrowRight
                          strokeWidth={1}
                          size={20}
                          className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                        ></ArrowRight>
                      </Link>
                    </aside>
                  </div>
                  <div className="xl:border-r max-xl:border-b p-8 border-gray-200/20">
                    <aside className="flex flex-col justify-center items-center h-full">
                      <h1 className="text-6xl xl:text-8xl font-oswald brand-grad">
                        Dahlia
                      </h1>
                      <Link
                        href={"/products"}
                        className="flex items-center gap-1 group cursor-pointer text-xs text-gray-400"
                      >
                        Integrated Voice Module
                        <ArrowRight
                          strokeWidth={1}
                          size={20}
                          className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                        ></ArrowRight>
                      </Link>
                    </aside>
                  </div>
                  <div className="p-8">
                    <aside className="flex flex-col justify-center items-center h-full">
                      <h1 className="text-6xl xl:text-8xl font-oswald brand-grad">
                        Eruca
                      </h1>
                      <Link
                        href={"/products"}
                        className="flex items-center gap-1 group cursor-pointer text-xs text-gray-400"
                      >
                        Accessory Voice Module
                        <ArrowRight
                          strokeWidth={1}
                          size={20}
                          className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                        ></ArrowRight>
                      </Link>
                    </aside>
                  </div>
                </div>
              </div>
            </SliderMainItem>
            <SliderMainItem className="bg-transparent">
              <div className="flex flex-col items-center gap-10 py-20">
                <Heading className="xl:px-80 text-center">
                  <h1>The Future of Voice is Offline and Private</h1>
                </Heading>

                <div className="relative hidden lg:flex lg:w-[900px] aspect-[4/2]">
                  <Image
                    src={"/offlineWhite.png"}
                    alt="offline control"
                    fill
                    className="object-contain"
                  ></Image>
                </div>
                <div className="lg:hidden grid grid-cols-2 gap-16">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div className="relative size-28">
                      <Image
                        src={`/${index + 1}.png`}
                        alt="Home Autoamtion icons"
                        fill
                        className="object-cover"
                      ></Image>
                    </div>
                  ))}
                </div>
              </div>
            </SliderMainItem>
          </CarouselMainContainer>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
            <CarouselThumbsContainer className="gap-x-1 ">
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselIndicator key={index} index={index} />
              ))}
            </CarouselThumbsContainer>
            {/* </div> */}
          </div>
        </Carousel>
      </div>
    </section>
    // <section className="px-8">
    //   <main className="grid lg:grid-cols-2 max-lg:gap-10 border-b border-gray-200/20 items-start  py-10 lg:py-20 ">
    //     <div className="flex flex-col gap-6 ">
    //       <Heading className="">
    //         <h1>
    //           Seamless <span className="brand-grad">Voice Control </span>
    //           Without the <br className="hidden lg:flex" />
    //           Internet
    //         </h1>
    //       </Heading>
    //       <Paragraph className="xl:w-2/3">
    //         <p className="xl:w-[80%] text-lg lg:text-xl text-pretty">
    //           We set the benchmark in delivering flawless voice activation
    //           across devices. Our offline voice solutions bring the benefits of
    //           Edge AI to a wide range of products, enabling smarter and more
    //           responsive solutions
    //         </p>
    //       </Paragraph>
    //       <ShinyButton className="lg:w-80 text-sama-background h-12">
    //         Expore More
    //       </ShinyButton>
    //     </div>

    //     <div className="max-lg:-mt-8">
    //       <div className="relative h-[400px] lg:h-[500px]">
    //         <Image
    //           src={"/heroImage3.png"}
    //           alt="Hero Image"
    //           fill
    //           className="object-contain rounded-3xl"
    //         ></Image>
    //       </div>
    //       <div className="flex items-center justify-center gap-8 w-full h-full lg:ml-4 max-sm:-mt-8">
    //         <div className="">
    //           <Waves></Waves>
    //         </div>
    //         <div className=" ">
    //           <Heading>
    //             <h1 className=" text-5xl lg:text-7xl font-oswald font-bold text-white max-lg:mb-4">
    //               SAMA
    //             </h1>
    //           </Heading>
    //         </div>
    //         <div className="">
    //           <Waves></Waves>
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    // </section>
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
