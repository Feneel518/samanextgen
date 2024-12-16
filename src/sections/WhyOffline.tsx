import ApplicationsDetails from "@/components/ApplicationsDetails";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import ShinyButton from "@/components/ShinyButton";
import { APPLICATIONS } from "@/lib/applications";
import Image from "next/image";
import { FC } from "react";

interface WhyOfflineProps {}

const WhyOffline: FC<WhyOfflineProps> = ({}) => {
  return (
    <section className="px-8">
      {APPLICATIONS.map((application) => {
        return (
          <ApplicationsDetails application={application}></ApplicationsDetails>
        );
      })}
    </section>
  );
};

export default WhyOffline;
