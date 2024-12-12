import Fan from "@/components/confuse/Fan";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Orbit from "@/components/Orbit";
import Planet from "@/components/Planet";
import ShinyButton from "@/components/ShinyButton";
import Waves from "@/components/Waves";
import Image from "next/image";

export const Hero = () => {
  return (
    <section>
      <div className="">
        {/* <MaxWidthWrapper> */}
        {/* <div className="border-l border-r border-[var(--color-border)] relative"> */}
        {/* <h4 className="p-4 border w-fit border-gray-200/10 absolute top-[4%] -left-[4%] bg-gray-900/40 backdrop-blur-md rounded-md">
            Your Offline Solution is here.
          </h4> */}
        <div className="px-4 py-24 md:py-36 relative isolate  [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <div className="opacity-30 absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sama-primary via-sama-secondary/75 to-transparent -z-10"></div>
          <div className="absolute inset-0 -z-10">
            <div className="absolute-center">
              <Orbit className="size-[350px]"></Orbit>
            </div>
            <div className="absolute-center">
              <Orbit className="size-[600px]"></Orbit>
            </div>
            <div className="absolute-center">
              <Orbit className="size-[850px]"></Orbit>
            </div>
            <div className="absolute-center">
              <Orbit className="size-[1100px]"></Orbit>
            </div>
          </div>

          <div className="flex flex-col gap-8 max-w-screen-md mx-auto ">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold font-oswald text-center gray-grad leading-[55px] ">
              Seamless <span className="brand-grad">Voice Control </span>
              Without the Internet
            </h1>
            <div className="text-center text-md flex flex-col gap-4 font-light ">
              <p>
                We set the benchmark in delivering flawless voice activation
                across devices. Our offline voice solutions bring the benefits
                of Edge AI to a wide range of products, enabling smarter and
                more responsive solutions.
              </p>
              <p>
                Our solutions offer fast, accurate, and private on-device
                performance, empowering brands to create unique, secure, and
                highly efficient experiences.
              </p>
            </div>
            <ShinyButton className="h-14 text-2xl gradient text-white w-[50%] mx-auto lg:max-w-80">
              Explore More.
            </ShinyButton>
          </div>
          <div className="relative isolate container">
            <div className="absolute left-1/2 top-0 z-10 ">
              <div className="relative size-48  translate-x-[440px] -translate-y-[550px]">
                <Image src={"/cylinder.png"} alt="cylinder image" fill></Image>
              </div>
              <div className="relative size-48  -translate-x-[590px] -translate-y-[350px] ">
                <Image src={"/noodle.png"} alt="cylinder image" fill></Image>
              </div>
            </div>
            <div className="absolute top-[30%] left-16 z-20 hidden lg:flex">
              <div className="bg-sama-secondary/40 backdrop-blur-md border-gray-700 rounded-xl p-4 w-72">
                <div className="text-white">
                  Control everything without the internet.
                </div>
              </div>
            </div>
            <div className="absolute top-[65%] right-16 z-20 hidden lg:flex">
              <div className="bg-sama-secondary/40 backdrop-blur-md border-gray-700 rounded-xl p-4 w-72">
                <div className="text-white">
                  No internet, No worry - it&apos;s still accessible.
                </div>
              </div>
            </div>
            <div className="relative w-full lg:w-[80%] mx-auto aspect-[5/3] mt-20 rounded-2xl overflow-hidden border-2 ">
              <div className="absolute w-full h-full bg-black/25 z-10 "></div>
              <Image
                src={"/heroImage.png"}
                alt="Offline Voice Automation Image"
                fill
                className="object-cover "
              ></Image>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 ">
                <div className="">
                  <div className="bg-black/80 p-4 rounded-full  ">
                    <Waves></Waves>
                  </div>
                </div>
              </div>
              <div className="absolute -top-36 left-1/3 -translate-x-1/2 hidden lg:flex">
                <Fan></Fan>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </MaxWidthWrapper> */}
    </section>
  );
};

export default Hero;
