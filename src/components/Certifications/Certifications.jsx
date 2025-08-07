import "./Certifications.css";
import { certifications } from "../../data";

const Certifications = () => {
  return (
    <div className="certifications-container">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, idx) => (
          <div key={idx} className="certification-card">
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-provider">{cert.provider}</p>
            <a
              href={cert.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
              aria-label={`View certificate for ${cert.title}`}
            >
              Check
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
