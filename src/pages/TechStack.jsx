import React, { useState } from "react";
import { motion } from "framer-motion";
// import backIMg from "../images/background/withCir.png";
import reactImg from "../images/icons/react.png"
import pythonImg from "../images/icons/python.png"
import mongoImg from "../images/icons/mongo.png"
import tailwindImg from "../images/icons/tailwind.png"
import phpImg from "../images/icons/php.png"
import CSImg from "../images/icons/c-sharp.png"
import mySqlImg from "../images/icons/mysql.png"
import cssImg from "../images/icons/css-3.png"
import htmlImg from "../images/icons/HTML.png"
import nodeImg from "../images/icons/node.png"
import jsImg from "../images/icons/js.png"
import tsImg from "../images/icons/ts.png"
import javaImg from "../images/icons/java.png"
import expressImg from "../images/icons/express.png"
import fireBaseImg from "../images/icons/firebase.png"

const TechStack = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const technologies = [
    { name: "React", image: reactImg},
    { name: "Node.js", image: nodeImg},
    { name: "Python", image: pythonImg },
    { name: "JavaScript", image: jsImg},
    { name: "TypeScript", image: tsImg },
    { name: "HTML", image: htmlImg },
    { name: "CSS", image: cssImg },
    { name: "Java", image: javaImg},
    { name: "C#", image: CSImg},
    { name: "MongoDB", image: mongoImg},
    { name: "PHP", image: phpImg},
    { name: "Express", image: expressImg },
    { name: "Tailwind", image: tailwindImg },
    { name: "Firebase", image: fireBaseImg },
    { name: "SQL", image: mySqlImg },
  ];

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div id="tech" className="relative min-h-screen w-full p-8">
      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
        className="absolute  w-[calc(100vw-4rem)] flex justify-center items-center  rounded-[50px] -z-10"
        style={{
          backgroundImage: `url("")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      /> */}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 mt-15 sm:text-4xl">
            Technology Stack
          </h1>
          <p className="text-xl text-gray-300">
            Explore the technologies we use to build innovative solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="relative group"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className="bg-[#1a0f2e] rounded-2xl cursor-pointer  p-8 border border-purple-500/20 shadow-lg backdrop-blur-sm flex flex-col items-center justify-center gap-6 h-[220px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-25 h-25 rounded-full border-4 border-purple-400 flex items-center justify-center relative z-10 ">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <span className="text-white font-medium text-lg relative z-10">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
