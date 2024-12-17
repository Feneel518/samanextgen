import { HEADER } from "@/lib/header";
import AboutUs from "@/sections/AboutUs";
import ProductHero from "@/sections/ProductHero";
import Team from "@/sections/Team";
import { FC } from "react";
import { motion } from "framer-motion";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const aboutUsHeader = HEADER.find((name) => name.name === "About");

  const date = new Date();
  const currentYear = date.getFullYear();
  const initialYear = 1950;

  const width = currentYear - initialYear;

  const events = [
    { id: 1, year: 1950, text: ["Took the first step"] },
    {
      id: 2,
      year: 1960,
      text: ["Took the second step", "took the sixth step"],
    },

    {
      id: 3,
      year: 1989,
      text: ["Took the third step asdasda sdasda sdasdasdasd asd"],
    },
    { id: 4, year: 2006, text: ["Took the fourth step"] },
  ];

  const currentEvents = [
    ...events,
    {
      id: 5,
      year: currentYear,
      text: ["You are here asdasda sdasdasda dasdasdas das"],
    },
  ];

  return (
    <div>
      {aboutUsHeader && <ProductHero heading={aboutUsHeader}></ProductHero>}
      <AboutUs></AboutUs>
      {/* <div className="mt-10  overflow-hidden md:h-[500px] overflow-x-hidden">
        <div className=" absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <h1
          // initial={{ x: -100, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          className="text-center text-3xl"
        >
          Timeline of IPO
        </h1>
        <div className=" md:block hidden  md:p-20 md:px-40 p-4 mt-10 h-fit ">
          <motion.ol
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            className="border-t relative border-blue-700 w-full h-fit flex"
          >
            {currentEvents.map((event, index) => {
              const widthEvent = Math.floor(
                ((event.year - events[0].year) / width) * 100
              );

              return (
                <motion.li
                  key={event.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    left: widthEvent + "%",
                  }}
                  className={`w-40 h-fit absolute mt-2 flex flex-col  gap-4`}
                >
                  <span
                    className={`-mt-12 mb-2 ${
                      index + 1 === currentEvents.length
                        ? "absolute mt-4 -left-[24px] "
                        : ""
                    }`}
                  >
                    {event.year}
                  </span>
                  <span className="bg-red-200 w-4 h-4 rounded-full -mt-4 "></span>
                  {event.text.map((tex, indexs) => {
                    return (
                      <div
                        key={indexs}
                        className={`items-center justify-center  w-40  whitespace-normal p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600 ${
                          index + 1 === currentEvents.length
                            ? "absolute mt-4 -left-[145px] "
                            : ""
                        }`}
                      >
                        {tex}
                      </div>
                    );
                  })}
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
        <div className=" md:hidden  md:p-20 md:px-40 p-4 mt-10 h-fit ">
          <motion.ol
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            style={{ height: (width + 15) * 10 + "px" }}
            className="border-l relative border-blue-700   flex flex-col"
          >
            {currentEvents.map((event, index) => {
              const widthEvent = Math.floor(
                ((event.year - events[0].year) / width) * 100
              );

              return (
                <motion.li
                  key={event.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    top: widthEvent + "%",
                  }}
                  className={`w-full h-fit absolute  flex   gap-4`}
                >
                  <span className="bg-red-200 w-4 h-4 rounded-full -ml-2 "></span>
                  <span className={` mb-2 `}>{event.year}</span>
                  {event.text.map((tex, indexs) => {
                    return (
                      <div
                        key={indexs}
                        className={`items-center justify-center  w-40  whitespace-normal p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600 ${
                          index + 1 === currentEvents.length
                            ? "relative bottom-28  "
                            : ""
                        }`}
                      >
                        {tex}
                      </div>
                    );
                  })}
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div> */}
      <Team></Team>
    </div>
  );
};

export default page;
