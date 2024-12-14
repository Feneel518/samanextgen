"use client";

import { SideMenuButton } from "@/components/SideMenuButton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logoImage from "../../public/logo.png";

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
      <header className="  w-full px-8 ">
        <div className="h-24 flex items-center justify-between border-b  border-gray-200/20">
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
            {LINKS.map((link, index) => {
              return (
                <Link
                  data-id={`card-${index}`}
                  key={link.id}
                  href={link.link}
                  className={cn(
                    "p-2  delay-75 hover:text-white text-sm uppercase tracking-widest text-white/50 hover:underline hover:underline-offset-4",
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
      </header>
      {isMobileOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-950 border border-gray-200/20 z-[1000]">
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
