"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface FanProps {}

const Fan: FC<FanProps> = ({}) => {
  const [hover, setHover] = useState(false);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const start = setInterval(() => {
      setHover(true);
    }, 3000);
    return () => clearInterval(start);
  }, [hover]);
  useEffect(() => {
    const start = setInterval(() => {
      setCheck(true);
    }, 1500);
    return () => clearInterval(start);
  }, [hover]);

  return (
    <div className="relative w-fit  group ">
      {check && (
        <div className="absolute right-16 scale-50 -top-12">
          <div className="success-animation">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
        </div>
      )}
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
