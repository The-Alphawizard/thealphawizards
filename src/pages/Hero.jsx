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
    // { top: 80, opacity: 0.3 },
    // { top: 880, opacity: 0.5 },
    // { top: 890, opacity: 0.7 },
    { top: 900, opacity: 1 },
  ];

  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center items-top overflow-x-hidden relative">
        <div
          className="flex justify-center items-center h-[calc(100vh-3rem)]  w-[calc(100vw-5rem)] rounded-bl-[70px] rounded-br-[70px] z-10 bg-blue-700"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Outer Div to align down  */}

          <div className="w-full h-full  rounded-bl-[70px] rounded-br-[70px]">
            {/* Logo Area */}
            {/* none flexing long div */}
            <div className="w-full ">
              {/* logo and text container */}
              <div className="items-center justify-center gap-5 flex  w-[300px] h-16 ml-auto mr-auto mt-4">
                <div>
                  {/* image */}
                  <img src={wolfImg} alt="wolf logo" className="w-12" />
                </div>
                <div>
                  {/* text */}
                  <h1 className="text-[19px] font-extrabold text-[#A100FF] ">
                    The
                  </h1>
                  <h1 className="font-extrabold text-sn text-stone-300">
                    ALPHAWIZARDS
                  </h1>
                </div>
              </div>
            </div>

            {/* Group Name Section */}
            <div className="w-full mt-20   items-center flex justify-center">
              <div>
                <h1 className="text-white text-center m-auto xl:text-8xl font-bold md:text-5xl sm:text-3xl text-2xl lg:text-7xl">
                  THE{" "}
                  <span className="text-fuchsia-800 font-medium">
                    {" "}
                    ALPHAWIZZARDS{" "}
                  </span>{" "}
                </h1>
              </div>
            </div>

            {/* cta btns area */}
            <div className="w-full mt-5 flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10">
              {/* View Project btn */}
              <button
                onClick={() => handleScroll("/projects")}
                className="relative flex items-center justify-center gap-5 px-6 py-3
               rounded-full border-2 border-[#A100FF] text-sm sm:text-base lg:text-lg
               hover:bg-[hsl(278,100%,30%)] hover:text-white transition-transform duration-300
               transform hover:border-[hsl(0,0%,100%)] hover:scale-105 active:scale-95
               cursor-pointer text-stone-300 font-bold"
              >
                <BsHandbagFill className="text-base sm:text-lg lg:text-xl" />
                <span>View Works</span>
              </button>

              {/* Contact Btn */}
              <button
                onClick={() => handleScroll("/contact")}
                className="cursor-pointer group relative flex items-center justify-center gap-2 px-8 py-3
               rounded-full bg-gradient-to-r from-transparent via-purple-700 to-purple-800
               text-white font-medium transition-all duration-300
               hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]
               hover:bg-gradient-to-r hover:from-transparent hover:via-purple-900 hover:to-transparent"
              >
                <span>Contact Us</span>
                <FiArrowRightCircle className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Laptop Image area  */}

            <div className="xl:w-[75%] lg:w-[100%] lg:m-auto md:w-[50%] md:m-auto w-[80%] m-auto flex justify-center items-center xl:mt-0 lg:mt-1 md:mt-10 mt-20 ">
              <div className=" w-[400px] xl:w-[900px] lg:w-[600px] md:w-[500px] sm:w-[400px] h-[500px] relative">
                <img src={laptopImg} alt="laptop" />
              </div>
            </div>

            {/* Scroll Indicator */}

            <div className="w-full flex justify-center items-center mt-10 xl:mt-0 lg:mt-0 md:mt-0">
              <div>
                {scrollIndicators.map((indicator, index) => (
                  <motion.div
                    key={index}
                    className=" text-amber-100 text-4xl"
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
              </div>
            </div>

            {/* Description about Project */}
            <div className="absolute inset-x-0 bottom-15 flex items-center lg:bottom-15  lg:left-75 lg:right-auto  z-150 xl:left-[140px] xl:bottom-[130px] md:left-[155px] md:bottom-[50px]">
              <div className="w-full max-w-md bg-gradient-to-r from-purple-900/80 to-black/50 p-6 rounded-xl text-white flex gap-4">
                <img
                  src={starImg}
                  alt="three stars"
                  className="w-12 h-auto absolute top-[-40px] left-[-20px] ml-4 mt-4 sm:left-[130px] md:left-[-20px] lg:left-[-30px] xl:left-[-20px] 2xl:left-[-30px]"
                />
                <p className="text-sm leading-tight">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit amet blanditiis, quam impedit odio repellat nemo porro
                  nostrum laboriosam numquam.
                </p>
              </div>
            </div>

            {/* Balls Area */}
            {/* <Balls
              imageSrc={javaImg}
              index={-1000}
              width={293}
              position={{ top: "200px", left: "-110px" }}
            />

            <Balls
              imageSrc={javasImg}
              index={-1000}
              width={209}
              position={{ top: "610px", left: "1550px" }}
            />
            <Balls
            imageSrc={reactImg}
            index={-1000}
            width={175}
            position={{ top: "480px", left: "290px" }}
          />
          <Balls
            imageSrc={tagImg}
            index={-1000}
            width={293}
            position={{ top: "110px", left: "1690px" }}
          /> */}

            {/* RED container End is here */}
          </div>
        </div>

        {/* all end here */}
      </div>
    </>
  );
};

export default Hero;
