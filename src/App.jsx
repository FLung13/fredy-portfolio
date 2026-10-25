import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Education />
        <Skills />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;