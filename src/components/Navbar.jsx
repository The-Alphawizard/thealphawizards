import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const [prevScrollY, setPrevScrollY] = useState(0);
  const location = useLocation();

  const handleScroll = () => {
    const heroHeight = window.innerHeight;
    const currentScrollY = window.scrollY;

    setIsVisible(currentScrollY >= heroHeight);
    setPrevScrollY(currentScrollY);
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
    { to: "/about", label: "Guild Origins", icon: GiScrollQuill },
    { to: "/team", label: "The Circle", icon: GiTeamIdea },
    { to: "/tech", label: "Spell Book", icon: GiSpellBook },
    { to: "/projects", label: "Enchanted Works", icon: GiBookshelf },
    { to: "/comments", label: "Echoes", icon: GiScrollQuill },
    { to: "/contact", label: "Summon Us", icon: GiMailedFist }
  ];

  return (
    <div
      className={`fixed flex top-0 w-full h-[85px] items-center justify-between text-white py-4 px-4 md:px-8 transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo - 15% space */}
      <div className="flex items-center gap-2 md:gap-3 w-[15%]">
        <img
          src={wolfImg}
          alt="wolf logo"
          className="w-6 sm:w-7 md:w-5 lg:w-8"
        />
        <div className="flex flex-col items-start">
          <h1 className="text-xs sm:text-sm md:text-1xl lg:text-xl font-extrabold text-[#A100FF]">
            The
          </h1>
          <h1 className="text-xs sm:text-sm md:text-1xl lg:text-xl font-extrabold text-white">
            ALPHAWIZARDS
          </h1>
        </div>
      </div>

      {/* Desktop Navigation - 70% space in middle */}
      <div
        className="hidden md:flex max-w-6xl mx-auto justify-center items-center bg-black px-4 lg:px-15 py-10 h-8 w-[70%]"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 96% 100%, 4% 100%)',
          borderBottomLeftRadius: '50px',
          borderBottomRightRadius: '50px',
          overflow: 'hidden',
        }}
      >
        <div className="flex gap-2 md:gap-2 lg:gap-2 w-full h-auto justify-center text-[13px] md:text-[10px] lg:text-[15px] font-bold text-white text-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-gray-400 flex items-center justify-center gap-1 md:gap-2 px-2 md:px-3 lg:px-4 py-2 relative ${
                location.pathname === link.to 
                  ? "text-white before:absolute before:content-[''] before:w-full before:h-full before:bg-[#A100FF] before:opacity-30 before:rounded-full before:-z-10 before:animate-pulse before:top-0 before:left-0 flex justify-center items-center"
                  : ""
              }`}
            >
              <link.icon className="mr-1 z-10 text-sm md:hidden lg:hidden xl:inline xl:text-3xl" />
              <span className="hidden md:inline lg:text-1xl">{link.label}</span>
              <span className="md:hidden ">{link.label.split(' ')[0]}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Empty space - 15% for balance */}
      <div className="w-[15%] lg:hidden md:hidden"></div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button 
          onClick={toggleMobileMenu} 
          className="text-white text-3xl focus:outline-none"
        >
          {isMobileMenuOpen ? <GiMagicPalm /> : <GiMagicGate />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden absolute top-full left-0 w-full bg-black/90 text-white transition-all duration-300 ease-in-out"
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={toggleMobileMenu}
                className={`text-xl hover:text-gray-400 flex items-center justify-center gap-2 relative ${
                  location.pathname === link.to 
                    ? "text-white before:absolute before:content-[''] before:w-full before:h-full before:bg-[#A100FF] before:opacity-30 before:rounded-full before:-z-10 before:animate-pulse before:top-0 before:left-0 flex justify-center items-center"
                    : ""
                }`}
              >
                <link.icon className="mr-2 z-10" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;