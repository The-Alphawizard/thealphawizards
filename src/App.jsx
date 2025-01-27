import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import TechStack from "./pages/TechStack";
import Projects from "./pages/Project";
import Comments from "./pages/Comments";
import ContactUs from "./pages/ContactUs";

const pageVariants = {
  initial: { 
    opacity: 0, 
    x: "100%" 
  },
  in: { 
    opacity: 1, 
    x: 0 
  },
  out: { 
    opacity: 0, 
    x: "-100%" 
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/about" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <AboutUs />
            </motion.div>
          } 
        />
        <Route 
          path="/team" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <OurTeam />
            </motion.div>
          } 
        />
        <Route 
          path="/tech" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <TechStack />
            </motion.div>
          } 
        />
        <Route 
          path="/projects" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Projects />
            </motion.div>
          } 
        />
        <Route 
          path="/comments" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Comments />
            </motion.div>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ContactUs />
            </motion.div>
          } 
        />
        <Route 
          path="/" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <AboutUs />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Main>
          <AnimatedRoutes />
        </Main>
      </div>
    </Router>
  );
};

export default App;