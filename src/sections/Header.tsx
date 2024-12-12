"use client";

import Image from "next/image";
import logoImage from "../../public/logo.png";
import { SideMenuButton } from "@/components/SideMenuButton";
import AnimatedBackground from "@/components/animate-background";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Orbit from "@/components/Orbit";

const LINKS = [
  {
    id: 0,
    name: "Home",
    link: "/",
  },
  {
    id: 1,
    name: "Products",
    link: "/products",
  },
  {
    id: 4,
    name: "Applications",
    link: "/use-cases",
  },
  {
    id: 2,
    name: "Our Story",
    link: "/our-story",
  },
  {
    id: 3,
    name: "Contact Us",
    link: "/contact-us",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
];

export const Header = () => {
  const pathname = usePathname();

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <>
      <header className="border-b border-gray-200/20 w-full ">
        <MaxWidthWrapper>
          <div className="h-18 flex items-center justify-between ">
            {/* logo */}
            <div className="flex gap-4 items-center ">
              <div className="size-16 relative ">
                <Image
                  src={logoImage}
                  alt="SAMA Logo"
                  fill
                  className="object-contain"
                ></Image>
              </div>
            </div>
            {/* logo */}

            {/* Middle nav */}
            <div className="h-full lg:flex items-center space-x-8    hidden ">
              <AnimatedBackground
                className="rounded-lg bg-gradient-to-br from-sama-primary to-sama-secondary  shadow-2xl shadow-white/20 text-black h-full"
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                }}
                enableHover
              >
                {LINKS.map((link, index) => {
                  return (
                    <Link
                      data-id={`card-${index}`}
                      key={link.id}
                      href={link.link}
                      className={cn(
                        "p-2  delay-75 hover:text-white text-sm uppercase tracking-widest text-white/50",
                        {
                          "font-bold  text-sama-primary underline underline-offset-4  ":
                            pathname === link.link,
                        }
                      )}
                    >
                      {/* <Heading className="sm:text-lg md:text-lg lg:text-lg tracking-wide"> */}
                      {link.name}
                      {/* </Heading> */}
                    </Link>
                  );
                })}
              </AnimatedBackground>
            </div>
            {/* Middle nav */}

            {/* CTA */}
            <div
              className="lg:hidden "
              onClick={() => setIsMobileOpen((prev) => !prev)}
            >
              <SideMenuButton></SideMenuButton>
            </div>
            {/* CTA */}
          </div>
        </MaxWidthWrapper>
      </header>
      {isMobileOpen && (
        <div className="fixed top-18 left-0 right-0 bottom-0 bg-gray-950">
          <div className="container h-full">
            <nav className="flex flex-col items-center gap-4 py-8  h-full ">
              {LINKS.map((link) => {
                return (
                  <Link
                    href={link.link}
                    key={link.id}
                    className="p-2  delay-75 hover:text-white text-sm uppercase tracking-widest text-white/50"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
