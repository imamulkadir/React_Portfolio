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
      <hr />
      <Experience />
      <hr />

      <Education />
      <Projects />
      <Certifications />
      <Skills />
      <Publications />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
