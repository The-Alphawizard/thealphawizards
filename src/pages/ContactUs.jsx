import React from "react";
import { motion } from "framer-motion";
import backIMg from "../images/background/withCir.png";


const ContactUs = () => {
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <div id="contact" className="relative w-full py-16 flex flex-col justify-center items-center">
  {/* <motion.div
    initial="hidden"
    animate="visible"
    variants={backgroundVariants}
    className="absolute inset-0 bg-blue-950 rounded-[50px] -z-10"
    style={{
      backgroundImage: `url(${backIMg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
       */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="w-full max-w-xl px-8 py-12 relative"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl font-bold text-white text-center mb-4"
        >
          Contact Us
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-gray-300 text-center mb-8"
        >
          We would love to hear from you. Please fill out the form below to get in touch with us.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <label className="block text-gray-300 mb-2">Your Name</label>
            <input 
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-gray-300 mb-2">Your Email</label>
            <input 
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-gray-300 mb-2">Subject</label>
            <input 
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-gray-300 mb-2">Your Message</label>
            <textarea 
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
          </motion.div>

          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            View Project
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;