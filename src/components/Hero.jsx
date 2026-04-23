import fullPicture from '../assets/fullpicture.png'

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${fullPicture})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-gradient"></div>

      <div className="container hero-content">
        <p className="hero-label">SOFTWARE DEVELOPER</p>
        <h1>Building scalable solutions with clean code.</h1>
        <p className="hero-text">
          Computer Science student specializing in full-stack web development
          and systems programming.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero