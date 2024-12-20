import React from "react";
import {
  faYoutube,
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Login",
    href: "#login",
  },
];

export const socialLinks = [
  {
    name: "Youtube",
    icon: faYoutube,
    href: "#youtube",
  },
  {
    name: "X",
    icon: faXTwitter,
    href: "#x",
  },
  {
    name: "Discord",
    icon: faDiscord,
    href: "#discord",
  },
];

export const Footer = () => {
  return (
    <footer className="px-8">
      <div className="flex py-4">
        <div className="lg:w-[550px] lg:border-r border-gray-200/20 flex items-start lg:shrink-0 flex-col ">
          <div className="size-32 relative ">
            <Image
              src={"/logo.png"}
              alt="SAMA Logo"
              fill
              className="object-contain"
            ></Image>
          </div>
          <p className="text-xs md:w-[30%]">
            #201, 3rd Floor, Green Glen Layout, Bellandur, Bangalore - 560103
          </p>
        </div>
        <div className="lg:px-40 flex max-lg:flex-col items-center w-full justify-between ">
          <Link href={"/products"} className=" uppercase tracking-wider">
            products
          </Link>
          <Link href={"/applications"} className=" uppercase tracking-wider">
            Applications
          </Link>
          <Link href={"/our-story"} className=" uppercase tracking-wider">
            Who are we
          </Link>
          <Link href={"/contact-us"} className=" uppercase tracking-wider">
            Contact us
          </Link>

          {/* <div className=" uppercase tracking-wider">General Support</div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
