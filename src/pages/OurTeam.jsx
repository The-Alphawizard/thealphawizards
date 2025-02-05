import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaGlobe } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
// import backIMg from "../images/background/withCir.png";
// import Balls from "../components/Balls"

// Import team member images
import dilshanImg from "../images/team/dilshan.jpg";
import weroshIMg from "../images/team/werosh.jpg";
import umayangaImg from "../images/team/mall.jpg";
import sameeraImg from "../images/team/sameera.jpg";
import ishanImg from "../images/team/ishan.jpg";
import sankalpaImg from "../images/team/sankalpa.jpg";
import rumethImg from "../images/team/rumeth.jpg";
import jinithaImg from "../images/team/jinitha.jpg";

// Loading Animation Component
const LoadingSpinner = () => (
  <motion.div 
    className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full"
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  />
);

// Modal Component with enhanced animations
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center z-[9999] px-4"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative bg-gradient-to-br from-black via-purple-900/50 to-black text-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 overflow-y-auto max-h-[90vh]"
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-purple-800/50 transition-colors"
          >
            <IoMdCloseCircleOutline className="w-6 h-6 cursor-pointer" />
          </motion.button>
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
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-black to-purple-900 rounded-3xl shadow-xl border-2 border-[#3c2463] overflow-hidden"
    >
      <div className="p-6 flex flex-col items-center space-y-4">
        <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-[#A100FF]">
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
          <motion.a
            whileHover={{ scale: 1.2 }}
            title="GitHub"
            target="_blank"
            href={member.github}
            className="hover:text-white transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            title="LinkedIn"
            target="_blank"
            href={member.linkedin}
            className="hover:text-white transition-colors"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            title="Portfolio"
            target="_blank"
            href={member.portfolio}
            className="hover:text-white transition-colors"
          >
            <FaGlobe className="w-5 h-5" />
          </motion.a>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onViewMore(member)}
          className="bg-[#a200ff] hover:bg-[hsl(278,100%,30%)] text-white px-6 py-2 rounded-lg transition-colors shadow-lg cursor-pointer"
        >
          View More
        </motion.button>
      </div>
    </motion.div>
  );
};

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      github: "http://github.com/maleeshagamage",
      linkedin: "http://www.linkedin.com/in/umayanga-gamage-62ba05260",
      portfolio: "https://maalsworkspace.netlify.app/",
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

  const handleViewMore = (member) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedMember(member);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div 
    id="team" className="relative min-h-screen p-8 ">
      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${backIMg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      /> */}

      <div className="max-w-7xl mx-auto mt-20">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl xl:text-7xl font-bold text-white text-center mb-10"
        >
          Our Team
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              member={member}
              onViewMore={handleViewMore}
            />
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedMember || isLoading} onClose={() => setSelectedMember(null)}>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner />
          </div>
        ) : selectedMember && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center space-y-6"
          >
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-[#A100FF]">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
              <p className="text-purple-200 font-medium">{selectedMember.title}</p>
              <p className="text-purple-300">{selectedMember.role}</p>
              <p className="mt-4 text-gray-200 leading-relaxed">{selectedMember.bio}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={selectedMember.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 border border-purple-400 rounded-full text-purple-200 hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <FaGithub className="text-lg" />
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={selectedMember.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 border border-purple-400 rounded-full text-purple-200 hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn className="text-lg" />
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={selectedMember.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 border border-purple-400 rounded-full text-purple-200 hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                <FaGlobe className="text-lg" />
                Portfolio
              </motion.a>
            </div>
          </motion.div>
        )}
      </Modal>
    </div>
  );
};

export default OurTeam;