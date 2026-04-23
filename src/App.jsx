import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="content-shell">
          <div className="content-grid container">
            
            <div className="content-main">
              <Projects />
            </div>

            <aside className="content-side">
              <About />
            </aside>

          </div>

          <div className="container">
            <Contact />
          </div>

        </section>
      </main>
    </>
  )
}

export default App