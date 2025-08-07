import "./Experience.css";
import { experience } from "../../data";
import { useState } from "react";

const Experience = () => {
  const companies = experience.reduce((acc, item) => {
    if (!acc[item.company]) acc[item.company] = [];
    acc[item.company].push(item);
    return acc;
  }, {});

  const companyNames = Object.keys(companies);
  const [activeCompany, setActiveCompany] = useState(companyNames[0]);

  return (
    <div id="experience" className="experience-container">
      <h2 className="experience-title">Experience</h2>

      <div className="experience-tabs">
        {companyNames.map((company) => (
          <button
            key={company}
            className={`tab-button ${
              activeCompany === company ? "active" : ""
            }`}
            onClick={() => setActiveCompany(company)}
          >
            {company}
          </button>
        ))}
      </div>

      <div className="experience-content multiple-roles">
        {companies[activeCompany].map((item, index) => (
          <div key={index} className="experience-card">
            <div className="exp-flex">
              <div className="exp-details">
                <h3 className="company-name">{item.role}</h3>
                {/* <p className="role">
                  <strong>Role:</strong> {item.role}
                </p> */}
                <p className="duration">
                  <strong>Duration:</strong> {item.duration}
                </p>
                {/* {item.location && (
              <p className="location">
                <strong>Location:</strong> {item.location}
              </p>
            )} */}
                <ul className="responsibilities">
                  {item.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
              <div className="logo">
                <img src={item.logo} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
