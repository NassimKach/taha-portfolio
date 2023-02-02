import { useState, useEffect } from "react";
import { IconArrowNarrowUp, IconArrowNarrowDown } from "@tabler/icons";
import { gsap } from "gsap";

const slides = [
  {
    id: 1,
    title: "Makes and Distributes",
    subTitle: "Video Content 1.",
    bg: "./hero-img.png",
  },
  {
    id: 2,
    title: "Makes and Distributes2",
    subTitle: "Video Content 2.",
    bg: "./demo1-img.jpg",
  },
  {
    id: 3,
    title: "Makes and Distributes3",
    subTitle: "Video Content 3.",
    bg: "./demo2-img.jpg",
  },
];
function Hero() {
  const [count, setCount] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [text, setText] = useState("Makes and Distributes");

  useEffect(() => {
    //gsap timeline
    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
    });
    tl.to(".slider", {
      width: "100%",
      duration: 1,
    })
      .to(".slider", {
        width: "30%",
        duration: 1,
      })
      .to(
        ".slider2",
        {
          width: "100%",
          duration: 1,
        },
        "-=2"
      )
      .to(
        ".slider2",
        {
          width: "0%",
          duration: 1.2,
        },
        "-=1"
      )
      .fromTo(".hide", { y: "-200%" }, { y: "0%", duration: 0.2 }, "-=1.5");
  }, [count]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count === 1) {
        setText("Makes and Distributes");
      } else if (count === 2) {
        setText("Makes and Distributes2");
      } else {
        setText("Makes and Distributes3");
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  const handleArrowUpClick = () => {
    if (count === 1) {
      setCount(3);
    } else {
      setCount(count - 1);
    }
    setRotate(rotate + 10);
  };

  const handleArrowDownClick = () => {
    if (count === 3) {
      setCount(1);
    } else {
      setCount(count + 1);
    }
    setRotate(rotate - 10);
  };

  return (
    <div className="bg-[#1A1A1A] ">
      <svg className="hidden" width="0" height="0">
        <symbol
          id="dotted-circle"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle id="layer-name" cx="60" cy="60" r="58"></circle>
        </symbol>
      </svg>
      <div
        className="bg-cover bg-no-repeat absolute w-[70%] h-screen top-0 right-0 grayscale delay-[1s] transition-all ease-in-out"
        style={{
          backgroundImage: `url(${slides[count - 1].bg}`,
        }}
      ></div>
      <div className="slider2 absolute h-screen top-0 left-0 bg-[#DC493A] "></div>
      <div className="slider absolute h-screen top-0 left-0 bg-[#1A1A1A] "></div>
      <div className="max-w-7xl mx-auto h-screen flex justify-center flex-row items-start">
        <div className="circle-navigation h-screen">
          <svg
            className="absolute w-[350px] h-[350px] transition-all duration-[1s] ease-in-out"
            style={{
              transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              top: "50%",
              left: "0%",
            }}
          >
            <use xlinkHref="#dotted-circle" className="use1"></use>
          </svg>
          <svg
            className="absolute transition-all duration-[1s] w-[250px] h-[250px] ease-in-out"
            style={{
              transform: `translate(-50%, -50%) rotate(${-rotate}deg)`,
              top: "50%",
              left: "0%",
            }}
          >
            <use xlinkHref="#dotted-circle" className="use2"></use>
          </svg>
        </div>
        <div className="wrap absolute justify-center h-full left-5 flex flex-col items-center z-[999]">
          <div>
            <IconArrowNarrowUp
              color="#fff"
              opacity={0.3}
              onClick={handleArrowUpClick}
              cursor="pointer"
              className="hover:text[#] transition-all duration-[1s] ease-in-out"
            />
          </div>
          <div className="counter text-white text-xl font-medium">
            <span>0{count}</span>
            <span className="sep opacity-30">/</span>
            <span className="total opacity-30">03</span>
          </div>
          <div className="next">
            <IconArrowNarrowDown
              color="#fff"
              opacity={0.3}
              cursor="pointer"
              onClick={handleArrowDownClick}
            />
          </div>
        </div>
        <div className="flex flex-col w-full h-full items-start justify-center pl-[10rem] z-10 ">
          <h1 className="font-bold text-6xl text-white overflow-hidden">
            <span className="text-inherit select-none inline-flex hide transition-all ease-in-out duration-[1s]">
              {text}
            </span>
            <br />
            Video Content
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
