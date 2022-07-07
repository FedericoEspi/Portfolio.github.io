import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import TitleProjects from "./components/TitleProjects";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { MailBox } from "./components/MailBox";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <AboutMe />
      <TitleProjects />
      <div className="divProjects">
        <Projects />
      </div>
      <MailBox/>
      <Link to="/federico"/>
    </div>

  );
}

export default App;
