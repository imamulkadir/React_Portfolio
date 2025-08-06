import "./Header.css";
import { header } from "../../data";
import profileImage from "../../assets/images/profile.jpg";

import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

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
            href="/your-cv.pdf"
            download
            className="download-btn"
            data-tooltip="Download CV"
          >
            <FaDownload />
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
