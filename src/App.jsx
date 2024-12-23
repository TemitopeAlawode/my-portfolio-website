import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


const App = () => {
  return (
    <div>
    <Header />
    <Hero />
    <main>
    <section id="about">
    <About />
    </section>
    <section id="skills">
    <Skills />
    </section>
    <section id="projects">
    <Projects />
    </section>
    <section id="education">
    <Education />
    </section>
    <section id="contact">
    <Contact />
    </section>
    </main>
    <Footer />
    </div>
  )
}

export default App