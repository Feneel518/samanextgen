import React from "react";
import {
  faYoutube,
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

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
      <div className="flex py-10 lg:py-20 ">
        <div className="lg:w-[550px] lg:border-r border-gray-200/20 flex items-start lg:shrink-0 ">
          <div className="size-32 relative ">
            <Image
              src={"/logo.png"}
              alt="SAMA Logo"
              fill
              className="object-contain"
            ></Image>
          </div>
        </div>
        <div className="lg:px-40 flex items-center w-full justify-between ">
          <div className=" uppercase tracking-wider">Who are we</div>
          <div className=" uppercase tracking-wider">Contact us</div>
          <div className=" uppercase tracking-wider">Careers</div>
          {/* <div className=" uppercase tracking-wider">General Support</div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
