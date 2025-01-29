import React from "react";
import { motion } from "framer-motion";
import backIMg from "../images/background/withCir.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "This is a brief description of Project One. It demonstrates our innovative approach to problem-solving.",
      image: "/api/placeholder/600/400",
      link: "#",
    },
    {
      id: 2,
      title: "Project One",
      description:
        "This is a brief description of Project One. It demonstrates our innovative approach to problem-solving.",
      image: "/api/placeholder/600/400",
      link: "#",
    },
    {
      id: 3,
      title: "Project One",
      description:
        "This is a brief description of Project One. It demonstrates our innovative approach to problem-solving.",
      image: "/api/placeholder/600/400",
      link: "#",
    },
  ];

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div id="projects" className="relative w-full p-8">
  <motion.div
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

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-gray-300">
            Discover some of the amazing projects we've worked on.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-[#1a0f2e] rounded-3xl p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
              >
                View Project
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Background decoration */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 rounded-full bg-purple-600/5"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: `${20 + i * 20}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;