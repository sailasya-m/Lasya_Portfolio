import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import ContactSection from "./components/ContactSection";
import { Footer } from "./components/Footer";
import StackSection from "./components/StackSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <StackSection />
      <Experience />
      <Education />
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
