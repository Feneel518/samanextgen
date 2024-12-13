import { FC } from "react";
import Wave from "./Wave";

interface WavesProps {}

const Waves: FC<WavesProps> = ({}) => {
  return (
    <div className="flex items-center justify-center gap-1.5 ">
      <Wave></Wave>
      <Wave className="h-[60px]"></Wave>
      <Wave className="h-[85px]"></Wave>
      <Wave className="h-[75px]"></Wave>
      <Wave className="h-[50px]"></Wave>
      <Wave className="h-[70px]"></Wave>
      <Wave className="h-[60px]"></Wave>
    </div>
  );
};

export default Waves;
