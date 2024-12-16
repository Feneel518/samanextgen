import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import ProductComponent from "@/components/ProductComponent";
import TeamComponent from "@/components/TeamComponent";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface TeamProps {}

const Team: FC<TeamProps> = ({}) => {
  return (
    <section className="px-8">
      <div className="flex flex-col lg:flex-row py-10 lg:py-20  border-b border-gray-200/20">
        <div className="lg:w-[550px] lg:border-r border-gray-200/20 flex items-start lg:shrink-0 ">
          <div className="flex flex-col gap-6 ">
            <Heading className="lg:w-[80%]">
              <h1>Our Team</h1>
            </Heading>
            <Paragraph>
              <p className="lg:w-2/3 ">
                Meet our talented team of creative minds driving innovation.
              </p>
            </Paragraph>
          </div>
        </div>
        <div className=" flex flex-col mt-10 gap-5 lg:pl-8 xl:hidden w-full">
          <div className="flex flex-col w-full items-center gap-5">
            <TeamComponent
              imageUrl="/MichaelPauli.jpg"
              title="Michael Pauli"
              description="CEO"
            ></TeamComponent>
            <div className="w-full h-[1px] xl:w-[1px] xl:h-full bg-gray-200/20"></div>
            <TeamComponent
              imageUrl="/April-Ho.png"
              title="April Ho"
              description="COO"
            ></TeamComponent>
            <div className="w-full h-[1px] xl:w-[1px] xl:h-full bg-gray-200/20"></div>
          </div>
          <div className="flex flex-col items-center xl:flex-row gap-5">
            <TeamComponent
              imageUrl="/Vinay-Jawgal.png"
              title="Vinay Jawgal"
              description="MD & R&D"
            ></TeamComponent>
            <div className="w-full h-[1px] xl:w-[1px] xl:h-full bg-gray-200/20"></div>

            <TeamComponent
              imageUrl="/FrancoisGaly.png"
              title="Francois Galy"
              description="Adviser Sales and Marketing"
            ></TeamComponent>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col xl:pl-10 w-full gap-10 2xl:gap-20 max-xl:hidden">
          <div className="flex max-lg:flex-col gap-12">
            <div className=" flex-1 ">
              <div className="flex flex-col gap-8">
                <div className="relative w-[500px] h-[300px]">
                  <Image
                    src={"/MichaelPauli.jpg"}
                    alt="Aster Circuit"
                    fill
                    className="object-cover"
                  ></Image>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl">Michael Pauli</h1>
                  <p className="tracking-widest">CEO</p>
                </div>
              </div>
            </div>

            <div className="h-full border border-gray-200/20"></div>
            <div className=" flex-1 ">
              <div className="flex flex-col gap-8">
                <div className="relative w-[500px] h-[300px]">
                  <Image
                    src={"/April-Ho.png"}
                    alt="Aster Circuit"
                    fill
                    className="object-cover"
                  ></Image>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl">April Ho</h1>
                  <p className="tracking-widest">C0O</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto border border-gray-200/20"></div>
          <div className="flex gap-12">
            <div className=" flex-1 ">
              <div className="flex flex-col gap-8">
                <div className="relative w-[500px] h-[300px]">
                  <Image
                    src={"/Vinay-Jawgal.png"}
                    alt="Aster Circuit"
                    fill
                    className="object-cover"
                  ></Image>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl">Vinay Jawgal</h1>
                  <p className="tracking-widest">MD & R&D</p>
                </div>
              </div>
            </div>
            <div className="h-full border border-gray-200/20"></div>
            <div className=" flex-1 ">
              <div className="flex flex-col gap-8">
                <div className="relative w-[500px] h-[300px]">
                  <Image
                    src={"/FrancoisGaly.png"}
                    alt="Aster Circuit"
                    fill
                    className="object-cover"
                  ></Image>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl">Francois Galy</h1>
                  <p className="tracking-widest">Adviser Sales and Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
