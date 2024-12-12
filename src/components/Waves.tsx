import { FC } from "react";
import Wave from "./Wave";

interface WavesProps {}

const Waves: FC<WavesProps> = ({}) => {
  return (
    <div className="flex items-center justify-center gap-1.5 ">
      <Wave></Wave>
      <Wave className="h-[20px]"></Wave>
      <Wave className="h-[25px]"></Wave>
      <Wave className="h-[35px]"></Wave>
      <Wave className="h-[20px]"></Wave>
    </div>
  );
};

export default Waves;
