import Image from "next/image";
import { FC } from "react";
import Fan from "./confuse/Fan";

interface AnimatedImageProps {}

const AnimatedImage: FC<AnimatedImageProps> = ({}) => {
  return (
    <div className=" rounded-xl h-80 relative bg-gradient-to-br from-sama-primary to bg-sama-secondary">
      <div className="absolute w-40 aspect-square -bottom-4 -left-4">
        <Image
          src={"/face.png"}
          alt="face"
          fill
          className="object-contain"
        ></Image>
      </div>
      <div className="absolute bottom-10 left-36 text-xl text-black">
        Hey SAMA, turn on the fan
      </div>

      <div className="absolute -top-36 right-0">
        <Fan></Fan>
      </div>
    </div>
  );
};

export default AnimatedImage;
