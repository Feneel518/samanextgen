import { FC } from "react";

interface ClientsProps {}

const Clients: FC<ClientsProps> = ({}) => {
  return (
    <section className=" px-8 ">
      <div className="flex py-10 border-b border-gray-200/20">
        <div className="w-80 h-20 border-r border-gray-200/20 flex items-center uppercase tracking-wider">
          Our Clients
        </div>
        <div className="flex items-center justify-around w-full text-3xl tracking-wider text-gray-400 uppercase">
          <div className="">JIO</div>
          <div className="">Globaltronics</div>
          <div className="">Bharat Forge</div>
          <div className="">Atomberg</div>
          <div className="">Blaupunkt</div>
          <div className="">Myaudioart</div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
