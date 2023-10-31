/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              {" "}
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Fardeen",
                1000,
                "Software Engineer",
                1000,
                "Web Developer",
                1000,
                "Undergraduate",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I'm a software engineer experienced with Node.js, Next.js, TypeScript,
            Tailwind CSS, and React.js. Passionate about crafting modern web
            applications with an eye for elegant design and seamless
            functionality. Dedicated to staying at the forefront of technology.
          </p>
          <div> 
            <a href="https://api.whatsapp.com/send?phone=923330377411" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 via-cyan-500 to-blue-600 hover:bg-slate-200 text-white">
              Hire me
            </button></a>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 via-cyan-500 to-blue-600 hover:bg-slate-800 text-white mt-3"
            onClick={() => {
              const a = document.createElement("a")
              a.href = "/assets/cv/mycv.pdf"
              a.download = "mycv.pdf"
              a.click()
            }}>
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {" "}
                Download CV{" "}
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={require("../../../public//assets/pictures/herosection.png")}
              alt="Fardeen"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
