import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgImg from "../images/background/bg1.jpg";
import wolfImg from "../images/pngs/wolf.png";
import { BsHandbagFill } from "react-icons/bs";
import { FiArrowRightCircle } from "react-icons/fi";
import laptopImg from "../images/others/laptop1.png";
import { FaAngleDown } from "react-icons/fa6";
import starImg from "../images/pngs/stars.png";
import javaImg from "../images/pngs/java.png";
import javasImg from "../images/pngs/javas.png";
import reactImg from "../images/pngs/react.png";
import tagImg from "../images/pngs/tag.png";
import Balls from "../components/Balls";

const Hero = () => {
  const navigate = useNavigate();

  const handleScroll = (route) => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });

    setTimeout(() => {
      navigate(route);
    }, 500);
  };

  const scrollIndicators = [
    { top: 870, opacity: 0.3 },
    { top: 880, opacity: 0.5 },
    { top: 890, opacity: 0.7 },
    { top: 900, opacity: 1 },
  ];

  return (
    <div
      id="home"
      className="w-full h-screen bg-black flex justify-center items-top overflow-x-hidden relative"
    >
      {/* Hero Section */}
      <div
        className="flex justify-center items-center h-[calc(100vh-3rem)]  w-[calc(100vw-4rem)] rounded-bl-[70px] rounded-br-[70px] z-10"
        style={{
          backgroundImage: `url("")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="z-30 w-full max-w-[1200px] px-4 md:px-8 lg:px-16">
          {/* Logo with name */}

          <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
            <img
              src={wolfImg}
              alt="wolf logo"
              className="w-12 sm:w-16 md:w-10 lg:w-10"
            />
            <div className="flex flex-col items-start ">
              <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-[#A100FF]">
                The
              </h1>
              <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-white">
                ALPHAWIZARDS
              </h1>
            </div>
          </div>

          {/* Group Name */}
          <div className="absolute inset-x-0 top-30 sm:top-36 lg:top-40 flex justify-center items-center text-center">
            <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-8xl font-extrabold text-white">
              THE{" "}
              <span className="font-light text-[#A100FF]">ALPHAWIZZARDZ</span>
            </h1>
          </div>
          {/* CTA Buttons */}

          <div className="absolute top-60 sm:top-58 lg:top-69 md:top-90 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-4 text-white font-bold z-100 ">
            {/* "View Works" Button */}
            <button
              onClick={() => handleScroll("/projects")}
              className="relative flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-[#A100FF] text-sm sm:text-base lg:text-lg hover:bg-[hsl(278,100%,30%)] hover:text-white transition-transform duration-300 transform  hover:border-2 hover:border-[hsl(0,0%,100%)]  hover:scale-105 active:scale-95 cursor-pointer"
            >
              <BsHandbagFill className="text-base sm:text-lg lg:text-xl" />
              <span>View Works</span>
            </button>

            {/* "Contact Us" Button */}
            <button
              onClick={() => handleScroll("/contact")}
              className="cursor-pointer group relative flex items-center justify-center gap-2 px-8 py-3 
                 rounded-full bg-gradient-to-r from-transparent via-purple-700 to-purple-800
                 text-white font-medium
                 transition-all duration-300
                 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]
                 hover:bg-gradient-to-r hover:from-transparent hover:via-purple-900 hover:to-transparent"
            >
              <span>Contact Us</span>
              <FiArrowRightCircle className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
          {/* Laptop Image */}

          <div className="relative z-[120]">
            <div className="absolute top-[50px] sm:top-[60px] lg:top-[-100px] md:top-[0px] left-1/2 transform -translate-x-1/2 w-11/12 sm:w-3/4 md:max-w-[500px] lg:max-w-[1000px] overflow-hidden">
              <img
                src={laptopImg}
                alt="Laptop with recent work"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Scroll Indicators */}
          {scrollIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              className="absolute left-1/2 transform -translate-x-1/2 text-amber-100 text-4xl"
              style={{ top: `${indicator.top}px` }}
              animate={{
                y: [0, -20, 0],
                opacity: [
                  indicator.opacity,
                  indicator.opacity * 0.5,
                  indicator.opacity,
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            >
              <FaAngleDown />
            </motion.div>
          ))}

          
          {/* Project Description */}
          <div className="absolute inset-x-0 bottom-15 flex items-center lg:bottom-15  lg:left-75 lg:right-auto  z-150 xl:left-[170px] xl:bottom-[150px] md:left-[155px] md:bottom-[50px]">
            <div className="w-full max-w-md bg-gradient-to-r from-purple-900/80 to-black/50 p-6 rounded-xl text-white flex gap-4">
              <img
                src={starImg}
                alt="three stars"
                className="w-12 h-auto absolute top-[-40px] left-[-20px] ml-4 mt-4 sm:left-[130px] md:left-[-20px] lg:left-[-30px] xl:left-[-20px] 2xl:left-[-30px]"
              />
              <p className="text-sm leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                amet blanditiis, quam impedit odio repellat nemo porro nostrum
                laboriosam numquam.
              </p>
            </div>
          </div>

          {/* Balls Area */}
          {/* <Balls
            imageSrc={javaImg}
            index={-100}
            width={293}
            position={{ top: "200px", left: "-110px" }}
          />
          <Balls
            imageSrc={javasImg}
            index={-100}
            width={209}
            position={{ top: "610px", left: "1550px" }}
          />
          <Balls
            imageSrc={reactImg}
            index={-100}
            width={175}
            position={{ top: "480px", left: "290px" }}
          />
          <Balls
            imageSrc={tagImg}
            index={-100}
            width={293}
            position={{ top: "110px", left: "1690px" }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
