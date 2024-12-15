import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface ProductComponentProps {
  title: string;
  description?: string;
  imageUrl: string;
}

const ProductComponent: FC<ProductComponentProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="flex w-full ">
      <div className="relative size-28 shrink-0">
        <Image
          src={imageUrl}
          alt="Aster Circuit"
          fill
          className="object-contain"
        ></Image>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-2xl">{title}</h1>
          <p className="flex items-center gap-1 group cursor-pointer text-xs text-gray-400">
            See More{" "}
            <ArrowRight
              strokeWidth={1}
              size={20}
              className="group-hover:translate-x-1 transition-transform ease-in-out duration-150"
            ></ArrowRight>
          </p>
        </div>

        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProductComponent;
