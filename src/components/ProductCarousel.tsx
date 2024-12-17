import { FC } from "react";
import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
} from "./ui/carousel";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import ShinyButton from "./ShinyButton";
import Image from "next/image";
import { ArrowRight, Waves } from "lucide-react";
import { ProductComponentsType } from "@/lib/products";

interface ProductCarouselProps {
  productComponents: ProductComponentsType[];
}

const ProductCarousel: FC<ProductCarouselProps> = ({ productComponents }) => {
  return (
    <Carousel carouselOptions={{ loop: true }}>
      {productComponents.length > 1 && (
        <>
          <CarouselNext />
          <CarouselPrevious />
        </>
      )}
      {/* <div className="relative "> */}
      <CarouselMainContainer className="">
        {/* {Array.from({ length: 5 }).map((_, index) => ( */}
        {productComponents.map((comp, index) => {
          return (
            <SliderMainItem key={index} className="bg-transparent ">
              <div className="flex flex-col gap-8">
                <Heading className="ml-16">
                  <h1>{comp.name}</h1>
                </Heading>
                <div className="flex items-center justify-center">
                  <div className="relative size-[400px] shrink-0">
                    <Image
                      src={"/Aster.png"}
                      alt={comp.name}
                      fill
                      className="object-contain rounded-2xl"
                    ></Image>
                  </div>
                  <ol className="list-disc lg:ml-16 flex flex-col gap-4">
                    {comp.features.map((fea, inde) => {
                      return (
                        <li key={inde}>
                          <Paragraph>{fea}</Paragraph>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </SliderMainItem>
          );
        })}
        {/* <SliderMainItem className="bg-transparent">
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
                  <p className="flex items-center gap-1 group cursor-pointer text-xs text-gray-400">
                    See More{" "}
                    <ArrowRight
                      strokeWidth={1}
                      size={20}
                      className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                    ></ArrowRight>
                  </p>
                </aside>
              </div>
              <div className="border-b border-gray-200/20 p-8">
                <aside className="flex flex-col justify-center items-center h-full">
                  <h1 className="text-6xl xl:text-8xl font-oswald brand-grad ">
                    Bellis
                  </h1>
                  <p className="flex items-center gap-1 group cursor-pointer text-xs text-gray-400">
                    See More{" "}
                    <ArrowRight
                      strokeWidth={1}
                      size={20}
                      className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                    ></ArrowRight>
                  </p>
                </aside>
              </div>
              <div className="xl:border-r max-xl:border-b p-8 border-gray-200/20">
                <aside className="flex flex-col justify-center items-center h-full">
                  <h1 className="text-6xl xl:text-8xl font-oswald brand-grad">
                    Dahlia
                  </h1>
                  <p className="flex items-center gap-1 group cursor-pointer text-xs text-gray-400">
                    See More{" "}
                    <ArrowRight
                      strokeWidth={1}
                      size={20}
                      className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                    ></ArrowRight>
                  </p>
                </aside>
              </div>
              <div className="p-8">
                <aside className="flex flex-col justify-center items-center h-full">
                  <h1 className="text-6xl xl:text-8xl font-oswald brand-grad">
                    Eruca
                  </h1>
                  <p className="flex items-center gap-1 group cursor-pointer text-xs text-gray-400">
                    See More{" "}
                    <ArrowRight
                      strokeWidth={1}
                      size={20}
                      className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
                    ></ArrowRight>
                  </p>
                </aside>
              </div>
            </div>
          </div>
        </SliderMainItem> */}
        {/* <SliderMainItem className="bg-transparent">
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
        </SliderMainItem> */}
      </CarouselMainContainer>
      {productComponents.length > 1 && (
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
          <CarouselThumbsContainer className="gap-x-1 ">
            {productComponents.map((_, index) => (
              <CarouselIndicator key={index} index={index} />
            ))}
          </CarouselThumbsContainer>
          {/* </div> */}
        </div>
      )}
    </Carousel>
  );
};

export default ProductCarousel;
