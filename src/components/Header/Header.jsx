import "./Header.css";
import { header } from "../../data";
import profileImage from "../../assets/images/profile.jpg";

import { FaGithub, FaLinkedin, FaHandPointRight } from "react-icons/fa";

const { name, LinkedIN, GitHub } = header[0];

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header-left">
        <h1 className="header-name">{name}</h1>
        <h2 className="header-subtitle">Frontend Developer</h2>
        <p className="header-about">
          Passionate developer crafting modern, responsive, and user-friendly
          web experiences using React and modern web technologies.
        </p>

        <div className="header-socials">
          <a
            href={GitHub}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={LinkedIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="download-btn-wrapper">
          <a
            href="./Resume_of_Imamul_Kadir.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
            data-tooltip="Show Resume"
          >
            Resume
            <FaHandPointRight />
          </a>
        </div>
      </div>

      <div className="header-right">
        <img src={profileImage} alt={name} className="header-image" />
      </div>
    </header>
  );
};

export default Header;
