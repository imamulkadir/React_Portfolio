// Skills.jsx
import "./Skills.css";
import { skills } from "../../data";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="skill-logo"
            />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
