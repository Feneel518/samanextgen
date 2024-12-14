import { FC } from "react";

interface ScreenSizeProps {}

const ScreenSize: FC<ScreenSizeProps> = ({}) => {
  return (
    <div className=" bg-white rounded-full size-16 flex items-center justify-center text-black">
      <div className="sm:hidden">ssm</div>
      <div className="max-sm:hidden md:hidden">sm</div>
      <div className="max-md:hidden lg:hidden">md</div>
      <div className="max-lg:hidden xl:hidden">lg</div>
      <div className="max-xl:hidden 2xl:hidden">xl</div>
    </div>
  );
};

export default ScreenSize;
