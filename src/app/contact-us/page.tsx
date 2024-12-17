import Contact from "@/sections/Contact";
import OurContacts from "@/sections/OurContacts";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="px-8">
      <div className="py-10 xl:py-20 border-b border-gray-200/20 ">
        <Contact></Contact>
      </div>
      <OurContacts></OurContacts>
    </section>
  );
};

export default page;
