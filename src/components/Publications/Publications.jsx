import "./Publications.css";

const Publications = () => {
  return (
    <div className="publications-container">
      <h2 className="publications-title">Publications</h2>
      <div className="publication-item">
        <h3 className="publication-title">
          Bangla Music Genre Classification Using Neural Network
        </h3>
        <p className="publication-details">
          Published in{" "}
          <strong>
            System Modeling and Advancement in Research Trends (SMART)
          </strong>
          , Moradabad, India (IEEE) on <strong>22nd November 2019</strong>.
        </p>
        <p className="publication-doi">
          DOI:{" "}
          <a
            href="https://doi.org/10.1109/SMART46866.2019.9117400"
            target="_blank"
            rel="noopener noreferrer"
          >
            10.1109/SMART46866.2019.9117400
          </a>
        </p>
      </div>
    </div>
  );
};

export default Publications;
