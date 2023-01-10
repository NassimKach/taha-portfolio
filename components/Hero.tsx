import React from "react";

function Hero() {
  return (
    <div className="bg-[#1A1A1A]">
      <svg className="hidden" width="0" height="0">
        <symbol
          id="dotted-circle"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle id="layer-name" cx="60" cy="60" r="58"></circle>
        </symbol>
      </svg>
      <div className="bg-[url('../assets/hero-img.png')] bg-cover bg-no-repeat absolute w-[70%] h-screen top-0 right-0 grayscale"></div>
      <div className="max-w-7xl mx-auto h-screen flex justify-center flex-row gap-8 items-start">
        <div className="circle-navigatio">
          <svg className="absolute top-[50%] left-0 translate-y-[-50%]	translate-x-[-50%] h-[300px] hover:rotate-[10deg] transition-all duration-[1s] ease-in-out">
            <use xlinkHref="#dotted-circle" className="use"></use>
          </svg>
        </div>
        <div className="flex flex-col z-50 w-full h-full items-start justify-center">
          <h1 className="font-bold text-6xl text-white">
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
    </div>
  );
}

export default Hero;
