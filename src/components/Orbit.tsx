import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface OrbitProps {
  className?: string;
}

const Orbit: FC<OrbitProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "size-[200px] border border-gray-200/5 rounded-full ",
        className
      )}
    ></div>
  );
};

export default Orbit;
