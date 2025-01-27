import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaGithub, FaLinkedinIn, FaGlobe } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import backIMg from "../images/background/withCir.png";
import Balls from "../components/Balls";

// members images
import dilshanImg from "../images/team/dilshan.jpg";
import weroshIMg from "../images/team/werosh.jpg";
import umayangaImg from "../images/team/mall.jpg";
import sameeraImg from "../images/team/sameera.jpg";
import ishanImg from "../images/team/ishan.jpg";
import sankalpaImg from "../images/team/sankalpa.jpg";
import rumethImg from "../images/team/rumeth.jpg";
import jinithaImg from "../images/team/jinitha.jpg";

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-120 sm:inset-60 md:inset-10 lg:inset-20 xl:inset-0 lg:top-120 md:top-100 xl:top-100 flex items-center justify-center z-[9999]"
      >
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
          onClick={onClose}
        />

        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="relative bg-gradient-to-br from-black to-black text-white rounded-lg shadow-lg w-11/12 max-w-lg p-6"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-purple-800/50 transition-colors"
          >
            <IoMdCloseCircleOutline className="w-6 h-6" />
          </button>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Team Member Card Component
const TeamMember = ({ member, onViewMore }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="flex-shrink-0 w-72 p-6 bg-gradient-to-br from-black to-purple-900 rounded-[50px] shadow-xl mx-4 border-2 border-[#3c2463]"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-[#A100FF]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="text-purple-200 font-medium">{member.title}</p>
        <p className="text-purple-300 text-sm">{member.role}</p>

        <div className="flex space-x-4 text-purple-200">
          <a
          title="GitHub"
          target="_blank"
            href={member.github}
            className="hover:text-white transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
          title="LinkedIn"
          target="_blank"
            href={member.linkedin}
            className="hover:text-white transition-colors"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a
          title="Portfolio"
          target="_blank"
            href={member.portfolio}
            className="hover:text-white transition-colors"
          >
            <FaGlobe className="w-5 h-5" />
          </a>
        </div>

        <button
          onClick={() => onViewMore(member)}
          className="bg-[#a200ff] hover:bg-[hsl(278,100%,30%)] text-white px-6 py-2 rounded-[5px] transition-colors shadow-lg cursor-pointer hidden xl:block lg:block md:block "
        >
          View More
        </button>
      </div>
    </motion.div>
  );
};

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const scrollContainerRef = useRef(null);

  const teamMembers = [
    //dilshan
    {
      name: "Dilshan Sulakshana",
      title: "Team Leader",
      role: "Software Developer",
      image: dilshanImg,
      github: "https://github.com/DilshanSulakshana",
      linkedin: "http://www.linkedin.com/in/dilshansk520",
      portfolio: "#",
      bio: "ExEnthusiastic BIT student at the University of Moratuwa,Sri Lanka. Experienced Computer Technician with one year of hands-on troubleshooting experience, dedicated to delivering efficient IT support to enhance organizational productivity, excited about achieving goals and advancing in the IT field.",
    },
    //werosh
    {
      name: "Werosh Kriyanjala",
      title: "Software Engineer",
      role: "Front-End Developer",
      image: weroshIMg,
      github: "https://github.com/Werosh",
      linkedin: "https://www.linkedin.com/in/werosh-kriyanjala-0318b1292/",
      portfolio: "https://weroshportfolio.netlify.app/",
      bio: "A passionate Front-End Web Developer and a proud student of the University of Moratuwa, with expertise in crafting visually appealing, responsive, and user-friendly websites. I thrive on creating seamless digital interfaces that combine aesthetics and functionality, ensuring engaging and impactful web experiences for users and businesses alike.",
    },
    //mall
    {
      name: "Umayanga Gamage",
      title: "Business Analyst",
      role: "Frontend Developer",
      image: umayangaImg,
      github: "https://github.com/Maalgamage~",
      linkedin: "http://www.linkedin.com/in/umayanga-gamage-62ba05260",
      portfolio: "#",
      bio: "Enthusiastic MIS UG at KIU University and BIT UG at the University of Moratuwa. Skilled in Business Analysis, UI/UX design, and Conducting Machine Learning researches. Experienced in analyzing requirements, crafting user-focused designs, and delivering top-notch project documentation. A dedicated learner and professional announcer passionate about driving IT solutions and innovation",
    },
    //sameera
    {
      name: "Sameera Udesh",
      title: "Back-End Developer",
      role: "Back-End Developer",
      image: sameeraImg,
      github: "https://github.com/sameeraudesh995",
      linkedin: "#",
      portfolio: "https://sameeraudesh995.github.io/myportfolio-original/#",
      bio: "UG in BIT University of Moratuwa | Software Developer | Passionate about Web Design, Front-End & Back-End Development | Experienced in Java, Spring Boot, Node.js, Express.js, MongoDB, MySQL, and PostgreSQL |",
    },
    //Ishan
    {
      name: "Ishan Nilaksha",
      title: " Electronic Engineer ",
      role: "UI Designer",
      image: ishanImg,
      github: "https://github.com/ishanHatharasinghe",
      linkedin: "https://www.linkedin.com/in/ishan-nilaksha-686461308?",
      portfolio: "https://ishanHatharasinghe.github.io/portfolio_web",
      bio: "UG in HND Engineering (Electrical and Electronics) | UG in BIT University of Moratuwa | Data Science, Cloud, and Electronics Engineering Intern (SLT Mobitel Digital Lab - Embryo Innovation Center, Maradana) | Freelancer Graphic Designer |",
    },
    //Sankalpa
    {
      name: "Sankalpa Sithmina",
      title: " UI Designer",
      role: "Member",
      image: sankalpaImg,
      github: "https://github.com/sana1211",
      linkedin: "http://www.linkedin.com/in/sankalpa-sithmina-29b728311",
      portfolio: "https://sana1211.github.io/sankalpa-portfolio/",
      bio: "I am a BIT undergraduate student at the University of Moratuwa, with a strong background in Frontend Development, UI/UX Design and Robotics. With a passion for creating intuitive digital experiences and building innovative systems, I combine creativity and technical expertise to deliver impactful solutions.",
    },
    //Rumeth
    {
      name: "Rumeth Rathubalage",
      title: " UI Designer",
      role: "Member (QA)",
      image: rumethImg,
      github: "https://github.com/RathuGT",
      linkedin: "https://www.linkedin.com/in/rumethrathuu/",
      portfolio: "#",
      bio: "SE Undergrad with a passion for weird things in life. I'm a QA Engineer who loves to break things and make them better. I'm a tech enthusiast who loves to learn new things and share them with others",
    },
    //jinitha
    {
      name: "Jinitha Nadeepa",
      title: " Backend Developer",
      role: "Member",
      image: jinithaImg,
      github: "https://github.com/jinitha-RA",
      linkedin: "https://www.linkedin.com/in/rumethrathuu/",
      portfolio: "#",
      bio: "Passionate Software Engineering student with a strong interest in developing innovative solutions. Skilled in programming, ICT systems, and graphic design, with hands-on experience in web development and management systems. Eager to  grow, and contribute to impactful projects.",
    },


  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
    <div className="relative">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
        className={`absolute h-[calc(100vh-4rem)] w-[calc(100vw-4rem)] flex justify-center items-center bg-blue-950 rounded-[50px] -z-10 ${
          selectedMember ? "blur-sm" : ""
        }`}
        style={{
          backgroundImage: `url(${backIMg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto xl:w-[1500px]  w-[500px] sm:w-[300px] md:w-[650px] lg:w-[850px]">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl xl:text-8xl font-bold text-white text-center mb-12 "
          >
            Our Team
          </motion.h1>
          <Balls
            imageSrc={""}
            index={-100}
            width={593}
            position={{ top: "50px", left: "640px" }}
          />

          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className="absolute left-[-70px] top-1/2 -translate-y-1/2 z-10 flex items-center space-x-2 group"
            >
              <IoIosArrowBack className="w-30 h-50 text-purple-500 opacity-70 group-hover:opacity-100 transition- cursor-pointer" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory py-8 px-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  member={member}
                  onViewMore={setSelectedMember}
                />
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute right-[-100px] top-1/2 -translate-y-1/2 z-10 flex items-center space-x-2 group"
            >
              <IoIosArrowForward className="w-30 h-50 text-purple-500 opacity-70 group-hover:opacity-100 transition-opacity cursor-pointer" />
            </button>
          </div>
        </div>
      </motion.div>

      <Modal isOpen={!!selectedMember} onClose={() => setSelectedMember(null)}>
        {selectedMember && (
          <div className="flex flex-col items-center space-y-6">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-[#A100FF]">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
              <p className="text-purple-200 font-medium">
                {selectedMember.title}
              </p>
              <p className="text-purple-300">{selectedMember.role}</p>
              <p className="mt-4 text-gray-200 leading-relaxed">
                {selectedMember.bio}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={selectedMember.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 border border-purple-400 rounded-full text-purple-200 hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <FaGithub className="text-lg" />
                GitHub
              </a>
              <a
                href={selectedMember.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 border border-purple-400 rounded-full text-purple-200 hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn className="text-lg" />
                LinkedIn
              </a>
              <a
                href={selectedMember.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 border border-purple-400 rounded-full text-purple-200 hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <FaGlobe className="text-lg" />
                Portfolio
              </a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default OurTeam;
