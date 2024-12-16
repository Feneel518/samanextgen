import { FC } from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Image from "next/image";
import { ApplicationType } from "@/lib/applications";

interface ApplicationsDetailsProps {
  application: ApplicationType;
}

const ApplicationsDetails: FC<ApplicationsDetailsProps> = ({ application }) => {
  return (
    <div
      className={`py-10 lg:py-20 flex flex-col items-center ${
        application.id % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } max-lg:gap-10 border-b border-gray-200/20`}
    >
      <div className={`flex-1 ${application.id % 2 === 0 ? "" : "ml-40"}`}>
        <Heading className="">
          <h1 className="">{application.heading}</h1>
        </Heading>
        <Paragraph>
          <div className="p-8 w-2/3">
            <ol className="list-disc">
              {application.features.map((fea, index) => {
                return <li key={index}>{fea}</li>;
              })}
            </ol>
          </div>
        </Paragraph>
      </div>

      <div
        className={`lg:w-[750px] lg:h-[300px] relative  ${
          application.id % 2 === 0
            ? "lg:border-l lg:pl-8"
            : "lg:border-r lg:pr-8"
        } border-gray-200/20 mx-auto   shrink-0  lg:ml-5  `}
      >
        <div className="relative p-8 w-full h-full rounded-xl">
          <Image
            src={application.image}
            alt={application.heading}
            fill
            className={`object-cover rounded-xl ${
              application.id === 3 && "object-center"
            }`}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsDetails;
