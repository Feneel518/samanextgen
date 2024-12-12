import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/confuse/3d-card";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Cards3dProps {
  title: string;
  description: string;
  imageUrl: string;
  id: string;
}

const Cards3d: FC<Cards3dProps> = ({ description, id, imageUrl, title }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#16161a]/50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold gray-grad dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4 rotate-90">
          <Image
            src={imageUrl}
            height="1000"
            width="1000"
            className="h-60 w-full object-contain  rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-end items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={`/products/${id}`}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs text-gray-300"
          >
            See more →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Cards3d;
