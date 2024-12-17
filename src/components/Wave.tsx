import { cn } from "@/lib/utils";
import { FC } from "react";

interface WaveProps {
  className?: string;
}

const Wave: FC<WaveProps> = ({ className }) => {
  return (
    <div
      className={cn(
        `w-[6px] rounded-[18px] h-[30px] bg-sama-primary wave`,
        className
      )}
    ></div>
  );
};

export default Wave;
