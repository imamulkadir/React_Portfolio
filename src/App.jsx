import "./App.css";

import {
  Navbar,
  Header,
  Projects,
  Education,
  Experience,
  Certifications,
  Skills,
  Publications,
  Achievements,
  Footer,
} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <hr className="section-divider" />
      <Experience />
      <hr className="section-divider" />
      <Education />
      <hr className="section-divider" />
      <Projects />
      <hr className="section-divider" />
      <Certifications />
      <hr className="section-divider" />
      <Skills />
      <hr className="section-divider" />
      <Publications />
      <Footer />
    </div>
  );
}

export default App;
