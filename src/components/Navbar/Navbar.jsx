import { useState, useEffect } from "react";
import "./Navbar.css";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { TbTimelineEventFilled } from "react-icons/tb";
import { SiHyperskill } from "react-icons/si";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">
          <a href="#home">👨‍💻</a>
        </span>
      </div>

      <button className="hamburger-btn" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      <ul className={`navbar-center ${mobileMenuOpen ? "show" : ""}`}>
        <li>
          <a href="#header" data-tooltip="Home" onClick={toggleMobileMenu}>
            <FaHome className="nav-icon" />
            <span className="nav-label">Home</span>
          </a>
        </li>
        <li>
          <a
            href="#experience"
            data-tooltip="Experience"
            onClick={toggleMobileMenu}
          >
            <TbTimelineEventFilled className="nav-icon" />
            <span className="nav-label">Experience</span>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            data-tooltip="Projects"
            onClick={toggleMobileMenu}
          >
            <FaProjectDiagram className="nav-icon" />
            <span className="nav-label">Projects</span>
          </a>
        </li>
        <li>
          <a href="#skills" data-tooltip="Skills" onClick={toggleMobileMenu}>
            <SiHyperskill className="nav-icon" />
            <span className="nav-label">Skills</span>
          </a>
        </li>
      </ul>

      <div className="navbar-right">
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          data-tooltip={theme === "light" ? "Dark" : "Light"}
        >
          {theme === "light" ? <HiLightBulb /> : <HiOutlineLightBulb />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
