import { cn } from "@/lib/utils";
import { FC } from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading: FC<HeadingProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "font-oswald text-5xl md:text-6xl lg:text-7xl gray-grad",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Heading;
