import { cn } from "@/lib/utils";
import { FC } from "react";

interface PlanetProps {
  className?: string;
}

const Planet: FC<PlanetProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-b from-sama-primary to-sama-secondary size-8 rounded-full",
        className
      )}
    ></div>
  );
};

export default Planet;
