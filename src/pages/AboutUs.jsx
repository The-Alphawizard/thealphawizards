import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-scroll";
import girlImg from "../images/others/girl.jpg";
import backIMg from "../images/background/aboutback.png";

function AboutUs() {
  const [isLoading, setIsLoading] = useState(false);

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: { duration: 1, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <div id="about" className="relative min-h-screen overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full h-full bg-blue-950 -z-10"
        style={{ backgroundImage: `url(${backIMg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col lg:flex-row w-full min-h-screen items-center justify-center px-6 lg:px-16 py-10 gap-8"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
          animate={{ scale: 1, opacity: 0.9, rotate: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100, duration: 0.8 }}
          className="flex w-full lg:w-1/2 justify-center items-center"
        >
          <img src={girlImg} alt="Team Member" className="w-[60%] sm:w-[70%] md:w-[30%] lg:w-[500px] rounded-2xl xl:w-[600px]" />
        </motion.div>

        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
          <motion.h1 className="text-3xl md:text-4xl xl:text-7xl font-bold text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            About Us
          </motion.h1>
          <motion.p className="text-[15px] sm:text-base md:text-lg text-white font-medium space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            We are a dynamic team of seven aspiring tech enthusiasts studying at the University of Moratuwa. With diverse talents and shared ambitions, we are united by a passion for innovation, problem-solving, and creating impactful solutions in the field of software development.
          </motion.p>
          <motion.p className="text-[15px] sm:text-base md:text-lg text-white font-medium space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Whether it's building cutting-edge web platforms, exploring AI
              innovations, or designing seamless user experiences, we take pride
              in every project we undertake. Our time at the University of
              Moratuwa has equipped us with a strong foundation and a drive to
              make a difference in the tech industry. We are the Alphawizards,
          </motion.p>
          <motion.p className="text-[15px] sm:text-base md:text-lg text-white font-medium space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            We are a dynamic team of seven aspiring tech enthusiasts studying at the University of Moratuwa. With diverse talents and shared ambitions, we are united by a passion for innovation, problem-solving, and creating impactful solutions in the field of software development.
          </motion.p>
          <motion.div className="flex justify-center lg:justify-start pt-6">
            <Link to="contact" smooth={true} duration={1000} className="group cursor-pointer flex items-center justify-center gap-2 px-8 py-3 
                       rounded-full bg-gradient-to-r from-purple-800 via-purple-700 to-purple-800
                       text-white font-medium
                       transition-all duration-300
                       hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]
                       hover:bg-gradient-to-r hover:from-purple-900 hover:via-purple-700 hover:to-purple-900">
              <span>Contact Us</span>
              <motion.div variants={spinnerVariants}>
                <FiArrowRightCircle className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutUs;
