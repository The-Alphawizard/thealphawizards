import React, { useState, useEffect } from "react";
import wolfImg from "../images/pngs/wolf.png";
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

  const handleScroll = () => {
    const heroHeight = window.innerHeight;
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY >= heroHeight);
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

  return (
    <div
      className={`fixed top-0 w-full h-[85px] flex items-center justify-between text-white py-4 px-4 md:px-8 transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Mobile & Logo Area (Black Background) */}
      <div className="flex items-center justify-between w-full md:w-auto bg-black px-4 py-2 md:bg-transparent">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          <img src={wolfImg} alt="wolf logo" className="w-6 sm:w-7 md:w-5 lg:w-8" />
          <div className="flex flex-col items-start">
            <h1 className="text-xs sm:text-sm md:text-1xl lg:text-xl font-extrabold text-[#A100FF]">The</h1>
            <h1 className="text-xs sm:text-sm md:text-1xl lg:text-xl font-extrabold text-white">ALPHAWIZARDS</h1>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white text-3xl focus:outline-none">
            {isMobileMenuOpen ? <GiMagicPalm /> : <GiMagicGate />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div
        className="hidden md:flex max-w-6xl mx-auto justify-center items-center bg-black px-4 lg:px-15 py-10 h-8 w-[70%]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)",
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
          overflow: "hidden",
        }}
      >
        <div className="flex gap-2 w-full h-auto justify-center text-[13px] md:text-[10px] lg:text-[15px] font-bold text-white text-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gray-400 flex items-center justify-center gap-1 md:gap-2 px-2 md:px-3 lg:px-4 py-2"
            >
              <link.icon className="mr-1 z-10 text-sm md:hidden lg:hidden xl:inline xl:text-3xl" />
              <span className="hidden md:inline lg:text-1xl">{link.label}</span>
              <span className="md:hidden">{link.label.split(" ")[0]}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 text-white transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={toggleMobileMenu}
                className="text-xl hover:text-gray-400 flex items-center justify-center gap-2"
              >
                <link.icon className="mr-2 z-10" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
