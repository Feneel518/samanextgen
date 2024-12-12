import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface MaxWidthWrapperProps {
  className?: string;
  children: React.ReactNode;
}

const MaxWidthWrapper: FC<MaxWidthWrapperProps> = ({ className, children }) => {
  return (
    <div
      className={cn("h-full mx-auto  max-w-screen-xl px-6 md:px-20", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
