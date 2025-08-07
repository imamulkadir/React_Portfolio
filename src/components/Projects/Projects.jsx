import "./Projects.css";
import { projects } from "../../data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects">Projects</h2>
      <div className="projects-grid">
        {projects.map((item, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{item.title}</h3>
            <p className="project-description">{item.description}</p>
            <div className="tech-stack">
              {item.techStack.map((tech, idx) => (
                <span className="tech-item" key={idx}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={item.repo} target="_blank" rel="noopener noreferrer">
                <FaGithub /> Repo
              </a>
              {item.link && item.link !== "#" && (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
