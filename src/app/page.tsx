import Clients from "@/sections/Clients";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Noise from "@/sections/Noise";
import Offline from "@/sections/Offline";
import Products from "@/sections/Products";
import UseCase from "@/sections/UseCase";
import WhyOffline from "@/sections/WhyOffline";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Clients></Clients>
      <Products></Products>
      <Offline></Offline>
      <UseCase></UseCase>
      <WhyOffline></WhyOffline>
      <Noise></Noise>
    </>
  );
}
