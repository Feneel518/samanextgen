import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface TeamComponentProps {
  title: string;
  description?: string;
  imageUrl: string;
}

const TeamComponent: FC<TeamComponentProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className=" flex-1">
      <div className="flex flex-col gap-8">
        <div className="relative w-[300px] h-[200px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          ></Image>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl">{title}</h1>
          <p className="tracking-widest">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;
