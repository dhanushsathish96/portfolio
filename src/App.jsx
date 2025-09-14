import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="project"><Project /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}

export default App;
