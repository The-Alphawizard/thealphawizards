import React, { useState, useEffect } from "react";
import wolfImg from "../images/pngs/wolf.png";
import logoImg from "../images/logo/Logo AW.png"

import { 
  GiMagicGate, 
  GiMagicPalm, 
  GiBookshelf, 
  GiScrollQuill, 
  GiTeamIdea, 
  GiSpellBook,
  GiMailedFist 
} from "react-icons/gi";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [prevActive, setPrevActive] = useState("");

  const handleScroll = () => {
    const heroHeight = window.innerHeight;
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY >= heroHeight);

    // Track previous active for transition
    const sections = navLinks.map(link => link.href.slice(1));
    const current = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    
    if (current !== activeSection) {
      setPrevActive(activeSection);
      setActiveSection(current || "");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "#about", label: "Guild Origins", icon: GiScrollQuill },
    { href: "#team", label: "The Circle", icon: GiTeamIdea },
    { href: "#tech", label: "Spell Book", icon: GiSpellBook },
    { href: "#projects", label: "Enchanted Works", icon: GiBookshelf },
    { href: "#comments", label: "Echoes", icon: GiScrollQuill },
    { href: "#contact", label: "Summon Us", icon: GiMailedFist }
  ];

  // Active link animation component
  const ActiveIndicator = ({ isActive, className = "" }) => (
    <div className={`absolute inset-0 transition-all duration-500 ${className} ${
      isActive ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="absolute inset-0 bg-purple-600/10 rounded-lg" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-lg animate-pulse" />
      <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/50 to-transparent rounded-lg opacity-50 blur-sm" />
      <div className="absolute top-0 left-0 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
    </div>
  );

  return (
    <nav
      className={`fixed top-0 w-full flex items-center justify-between text-white py-4 px-4 md:px-8 transition-all duration-500 ease-in-out z-50 
      ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
      {/* Logo Area */}
      <div className="flex items-center justify-between w-full md:w-auto bg-black/90 px-4 py-2 md:bg-transparent">
        <div className="flex items-center gap-2 md:gap-3">
          <img src={logoImg} alt="wolf logo" className="w-6 sm:w-7 md:w-5 lg:w-8" />
          <div className="flex flex-col items-start">
            <h1 className="text-xs sm:text-sm md:text-1xl lg:text-xl font-extrabold text-[#A100FF]">The</h1>
            <h1 className="text-xs sm:text-sm md:text-1xl lg:text-xl font-extrabold text-white">ALPHAWIZARDS</h1>
          </div>
        </div>

        <button onClick={toggleMobileMenu} className="md:hidden text-white text-3xl focus:outline-none">
          {isMobileMenuOpen ? <GiMagicPalm /> : <GiMagicGate />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div
        className="hidden md:flex max-w-6xl mx-auto justify-center items-center bg-black/90 px-4 lg:px-15 py-10 h-8 w-[70%]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
        }}
      >
        <div className="flex gap-2 w-full h-auto justify-center text-[13px] md:text-[10px] lg:text-[15px] font-bold">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            const wasPrevActive = prevActive === link.href.slice(1);
            
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative group px-2 md:px-3 lg:px-4 py-2"
              >
                <ActiveIndicator isActive={isActive} />
                
                <div className="relative flex items-center justify-center gap-1 md:gap-2">
                  <link.icon 
                    className={`mr-1 z-10 text-sm md:hidden lg:hidden xl:inline xl:text-3xl transition-all duration-300
                      ${isActive ? 'animate-bounce text-purple-400' : ''}`}
                  />
                  <span className={`hidden md:inline lg:text-1xl transition-all duration-300 relative
                    ${isActive ? 'text-purple-400' : 'text-white group-hover:text-purple-300'}`}>
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-purple-400 transition-all duration-300
                      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </span>
                  <span className="md:hidden">{link.label.split(" ")[0]}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/90 transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={toggleMobileMenu}
                className="relative text-xl px-4 py-2 w-4/5 rounded-lg"
              >
                <ActiveIndicator 
                  isActive={isActive} 
                  className="!duration-300"
                />
                <div className={`relative flex items-center justify-center gap-2 transition-all duration-300
                  ${isActive ? 'text-purple-400 scale-105' : 'text-white'}`}>
                  <link.icon className={`mr-2 z-10 transition-transform duration-300
                    ${isActive ? 'animate-bounce' : ''}`} />
                  <span>{link.label}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;