"use client";
import { useEffect, useState } from "react";
import { Collapse, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import XMarkIcon from "./XMarkIcon";
import Bars3Icon from "./Bars3Icon";
import logoSvg from "@/assets/images/logo/logo.svg";
import NavList from "@/components/NavList";

const navBreakpoint = 960;

export default function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= navBreakpoint && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header className="border-b border-[rgb(69,90,100)] bg-background">
      <nav className="block w-full bg-transparent mx-auto max-w-screen-xl px-6 py-3.5 rounded-none border-none text-white">
        <div className="flex items-center justify-between text-[rgb(120,144,156)]">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-[40px] relative">
                <Image
                  className=""
                  src={logoSvg}
                  alt="Tortech Guides logo"
                  priority
                  height={45}
                />
              </div>

              <h6 className="block antialiased font-sans mr-4 cursor-pointer py-1.5 text-lg font-extrabold text-white hover:text-slate-400/50">
                Tortech Guides
              </h6>
            </div>
          </Link>

          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
            aria-label={openNav ? "close menu" : "main menu"}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </nav>
    </header>
  );
}
