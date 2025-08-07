import "./Education.css";
import { education } from "../../data";
import { GiGraduateCap } from "react-icons/gi";
import { BiSolidInstitution } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineSportsScore } from "react-icons/md";

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="education-title">Education</h2>
      <div className="education-grid">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <h3 className="degree">{item.degree}</h3>
            <p className="group">
              <strong>
                <GiGraduateCap />
              </strong>{" "}
              {item.group}
            </p>
            <p className="institution">
              <strong>
                <BiSolidInstitution />
              </strong>{" "}
              {item.institution}
            </p>
            <p className="year">
              <strong>
                <FaRegCalendarAlt />
              </strong>{" "}
              {item.year}
            </p>
            <p className="grade">
              <strong>
                <MdOutlineSportsScore />
              </strong>{" "}
              {item.GPA}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
