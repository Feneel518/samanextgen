"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface FanProps {}

const Fan: FC<FanProps> = ({}) => {
  const [hover, setHover] = useState(true);

  useEffect(() => {
    const start = setInterval(() => {
      setHover(true);
    }, 500);
    return () => clearInterval(start);
  }, [hover]);

  return (
    <div className="relative w-fit  group ">
      <div className="absolute lg:size-[400px] size-[300px]">
        <Image
          src={"/ceilingfan.png"}
          alt="ceiling fan"
          fill
          className="object-contain"
        ></Image>
      </div>
      <div
        className={`relative lg:size-[400px] size-[300px]  ${
          hover && "blade"
        } group-hover:delay-300`}
      >
        <Image
          src={"/ceilingbalde.png"}
          alt="ceiling fan"
          fill
          className="object-contain"
        ></Image>
      </div>
    </div>
  );
};

export default Fan;
