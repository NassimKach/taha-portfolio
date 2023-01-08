import React from "react";
import Image from "next/image";
import img1 from "../assets/hero-img.png";

function Hero() {
  return (
    <div className="bg-[#1A1A1A]">
      <div className="bg-[url('../assets/hero-img.png')] bg-cover bg-no-repeat absolute w-[70%] h-screen top-0 right-0 grayscale hover:grayscale-0 hover:transition-all hover:duration-[1s] hover:ease-in-out"></div>
      <div className="max-w-7xl mx-auto h-screen flex justify-center flex-col gap-8 items-start">
        <h1 className="font-bold text-6xl text-white z-10">
          <span className="text-inherit select-none">
            Makes and Distributes
          </span>
          <br />
          Video Content.
        </h1>

        <a
          className="before:content-['.....'] before:text-[#DC493A] hover:tracking-[.3rem] before:transition-all before:duration-[1s] before:ease before:hover:text-white"
          href="#"
        >
          <span className="text-[#DC493A] hover:text-white transition-all duration-[1s] ease uppercase px-[.6rem]">
            watch showreel
          </span>
        </a>
      </div>
    </div>
  );
}

export default Hero;
