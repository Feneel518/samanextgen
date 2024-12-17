import Image from "next/image";
import { FC } from "react";
import Fan from "./confuse/Fan";
import Slider from "./Slider";

interface AnimatedImageProps {}

const AnimatedImage: FC<AnimatedImageProps> = ({}) => {
  return (
    <div className="h-[400px] border rounded-xl bg-gradient-to-br from-sama-primary to bg-sama-secondary">
      <div className="w-full  aspect-[1000/780] relative">
        <Image
          src={"/ivm.png"}
          alt="face"
          fill
          className="object-cover object-top"
        ></Image>
      </div>
      <div className="-mt-10">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default AnimatedImage;
