import Clients from "@/sections/Clients";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Offline from "@/sections/Offline";
import Products from "@/sections/Products";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Clients></Clients>
      <Products></Products>
      <Offline></Offline>
    </>
  );
}
