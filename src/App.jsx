import React from "react";
import Background from "./pages/Background";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import TechStack from "./pages/TechStack";
import Project from "./pages/Project";
import Comments from "./pages/Comments";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import HeaderNavArrow from "./pages/HeaderNavArrow";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      <Navbar />

      <HeaderNavArrow />
      <div className="flex flex-col gap-16">
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>

        <section id="about" className="min-h-screen">
          <AboutUs />
        </section>

        <section id="team" className="min-h-screen">
          <OurTeam />
        </section>

        <section id="tech" className="min-h-screen">
          <TechStack />
        </section>

        <section id="projects" className="min-h-screen pt-16 pb-16">
          <Project />
        </section>

        <section id="testimonials" className="min-h-screen pt-16 pb-16">
          <Comments />
        </section>

        <section id="contact" className="min-h-screen pt-16 pb-16">
          <ContactUs />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default App;
