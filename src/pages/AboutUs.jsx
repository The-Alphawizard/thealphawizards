import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";
import girlImg from "../images/others/girl.jpg";
import backIMg from "../images/background/aboutback.png";

function AboutUs() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = (route) => {
    setIsLoading(true);
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });

    setTimeout(() => {
      navigate(route);
      setIsLoading(false);
    }, 500);
  };

  // Stagger children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Fade up animation for text elements
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  // Image reveal animation
  const imageVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      rotate: -5,
    },
    visible: {
      scale: 1,
      opacity: 0.8,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  // Background animation
  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* Animated Background */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
        className="absolute h-[calc(100vh-4rem)] w-[calc(100vw-4rem)] flex justify-center items-center bg-blue-950 rounded-[50px] -z-10"
        style={{
          backgroundImage: `url(${backIMg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col lg:flex-row w-full h-[calc(100vh-4rem)] items-center justify-between rounded-tr-[50px] rounded-tl-[50px] px-6 lg:px-16 py-10 "
      >
        {/* Animated Image */}
        <motion.div
          className="flex w-full lg:w-1/2 h-auto justify-center lg:justify-end mb-10 lg:mb-0"
          variants={imageVariants}
        >
          <img
            src={girlImg}
            alt="Team Member"
            className="w-[60%] sm:w-[70%] md:w-[30%] lg:w-[500px] lg:mr-11 xl:mr-30 rounded-2xl xl:w-[600px]"
          />
        </motion.div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start mb-6"
          >
            <h1 className="text-3xl md:text-4xl xl:text-7xl lg:mt-50 lg:text-5xl font-bold text-white xl:mt-12">
              About Us
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-[15px] sm:text-base md:text-lg text-white font-medium mb-8 px-2 sm:px-6 lg:px-1 lg:text-1xl lg:mb-30"
          >
            <p>
              We are a dynamic team of seven aspiring tech enthusiasts studying
              at the University of Moratuwa. With diverse talents and shared
              ambitions, we are united by a passion for innovation,
              problem-solving, and creating impactful solutions in the field of
              software development.
            </p>
            <br />
            <p>
              Our group consists of a mix of coders, designers, and strategists,
              each bringing unique skills and perspectives to the table. From
              brainstorming creative ideas to coding robust applications, we
              thrive on collaboration and a shared commitment to excellence.
            </p>
            <br />
            <p >
              Whether it's building cutting-edge web platforms, exploring AI
              innovations, or designing seamless user experiences, we take pride
              in every project we undertake. Our time at the University of
              Moratuwa has equipped us with a strong foundation and a drive to
              make a difference in the tech industry. We are the Alphawizards,
            </p>
          </motion.div>

          {/* Animated CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start"
          >
            <motion.button
              onClick={() => handleScroll("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
              className={`group cursor-pointer flex items-center justify-center gap-2 px-8 py-3 
                       rounded-full bg-gradient-to-r from-transparent via-purple-700 to-purple-800
                       text-white font-medium
                       transition-all duration-300
                       hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]
                       hover:bg-gradient-to-r hover:from-transparent hover:via-purple-900 hover:to-transparent
                       lg:absolute lg:bottom-10 lg:left-27 lg:ml-10 lg:mb-10 xl:absolute xl:bottom-30 xl:left-220
                       ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              <span>{isLoading ? 'Loading...' : 'Contact Us'}</span>
              <motion.div
                animate={isLoading ? { rotate: 360 } : {}}
                transition={isLoading ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
              >
                <FiArrowRightCircle className={`w-5 h-5 transition-transform duration-300 ${isLoading ? '' : 'group-hover:translate-x-1'}`} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default AboutUs;