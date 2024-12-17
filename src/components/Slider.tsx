"use client";

import { FC } from "react";
import { Carousel, CarouselMainContainer, SliderMainItem } from "./ui/carousel";
import Paragraph from "./Paragraph";

interface SliderProps {}

const Slider: FC<SliderProps> = ({}) => {
  return (
    <Carousel
      autoplay={true}
      autoplayInterval={5000}
      carouselOptions={{ loop: true }}
    >
      {/* <CarouselNext />
  <CarouselPrevious /> */}
      {/* <div className="relative "> */}
      <CarouselMainContainer className="">
        {/* {Array.from({ length: 5 }).map((_, index) => ( */}
        <SliderMainItem className="bg-transparent ">
          <Paragraph className="text-center">
            <p>Single Language support</p>
          </Paragraph>
        </SliderMainItem>
        <SliderMainItem className="bg-transparent">
          <Paragraph className="text-center">
            <p>Upto 50 commands support</p>
          </Paragraph>
        </SliderMainItem>
        <SliderMainItem className="bg-transparent">
          <Paragraph className="text-center">
            <p>Internal Noise Cancellation</p>
          </Paragraph>
        </SliderMainItem>
      </CarouselMainContainer>
    </Carousel>
  );
};

export default Slider;
