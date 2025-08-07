import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-icons">
        <a
          href="https://github.com/imamulkadir"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/imamulkadir"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="footer-text">
        © {currentYear} Imamul Kadir. Built with React. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
