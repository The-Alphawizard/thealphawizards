import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BsHandbagFill } from "react-icons/bs";
import { FiArrowRightCircle } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";

import bgImg from "../images/background/bg1.jpg";
import wolfImg from "../images/pngs/wolf.png";
import laptopImg from "../images/others/laptop1.png";


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

  const scrollIndicators = [{ top: 900, opacity: 1 }];

  return (
    <div className="min-h-screen bg-black">
      <div 
        className="min-h-[calc(100vh-3rem)] mx-4 md:mx-8 lg:mx-12 rounded-bl-[70px] rounded-br-[70px] bg-blue-700 bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        {/* Logo Section */}
        <div className="pt-4 md:pt-6">
          <div className="flex items-center justify-center gap-4 max-w-[300px] mx-auto">
            <img src={wolfImg} alt="wolf logo" className="w-8 md:w-12" />
            <div>
              <h1 className="text-base md:text-lg font-extrabold text-[#A100FF]">The</h1>
              <h1 className="text-sm md:text-base font-extrabold text-stone-300">ALPHAWIZARDS</h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-between h-[calc(100%-80px)] py-8">
          {/* Hero Text */}
          <div className="text-center px-4 mt-8 md:mt-12">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white">
              THE <span className="text-fuchsia-800 font-medium">ALPHAWIZZARDS 100</span>
            </h1>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-8">
            <button
              onClick={() => handleScroll("/projects")}
              className="flex items-center justify-center gap-3 px-6 py-3 rounded-full border-2 border-[#A100FF] 
                       text-sm md:text-base text-stone-300 font-bold hover:bg-[hsl(278,100%,30%)] 
                       hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <BsHandbagFill className="text-base md:text-lg" />
              <span>View Works</span>
            </button>

            <button
              onClick={() => handleScroll("/contact")}
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full
                       bg-gradient-to-r from-transparent via-purple-700 to-purple-800
                       text-white font-medium transition-all duration-300
                       hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
            >
              <span>Contact Us</span>
              <FiArrowRightCircle className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Laptop Image Container */}
          <div className="relative w-full mt-8 md:mt-12">
            <div className="max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[600px] xl:max-w-[750px] mx-auto">
              <img 
                src={laptopImg} 
                alt="laptop"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-4 md:mt-8">
            {scrollIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                className="text-amber-100 text-2xl md:text-4xl"
                animate={{
                  y: [0, -10, 0],
                  opacity: [indicator.opacity, indicator.opacity * 0.5, indicator.opacity],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaAngleDown />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;