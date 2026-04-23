function About() {
  return (
    <section id="about" className="portfolio-section about-section">
      <div className="section-header">
        <span className="section-icon">◌</span>
        <h2>ABOUT ME</h2>
      </div>

      <div className="about-content">
        <p>
          I am a Computer Science student at California State University, Los Angeles
          with a passion for building robust and efficient software.
        </p>

        <p>
          I enjoy working on projects that challenge me to solve complex problems
          and create meaningful solutions. From low-level systems programming in C++
          to full-stack web applications, I love turning ideas into reality.
        </p>

        <div className="skills-list">
          <span>C++</span>
          <span>Java</span>
          <span>Python</span>
          <span>Django</span>
          <span>Spring Boot</span>
          <span>SQL</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Git</span>
          <span>Bootstrap</span>
        </div>
      </div>
    </section>
  )
}

export default About