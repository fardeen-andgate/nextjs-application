"use client";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Navlink from "./navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about"
  },
  {
    title: "Projects",
    path: "#projects"
  },
  {
    title: "Contact",
    path: "#contact"
  }
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState (false);
  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"}>
          <Image
            src={require("../../../public/assets/pictures/Default_a_rounded_neon_blue_logo_like_leonardoai_logo_futurist_1_ca6bb4a5-bd1e-4b5f-9955-3be7641e5a84_0.png")}
            alt="Fardeen"
            width={150}
            height={150}
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
              <button onClick={()=> setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                <Bars3Icon className="h-5 w-5"/>
                </button>
            ) : (
              <button onClick={()=> setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                <XMarkIcon className="h-5 w-5"/>
                </button>
            )
          }

        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
           {
            navLinks.map((link,index) => (
             <li key={index}>
              <Navlink href={link.path} title={link.title} />
             </li>
            ))
            }
          </ul>
        </div>
      </div>
      {navbarOpen? <MenuOverlay links={navLinks}/> : null }
    </nav>
  );
};

export default Navbar;
