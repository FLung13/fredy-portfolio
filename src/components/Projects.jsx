const projects = [
  {
    title: 'Custom SQL Database Engine',
    description:
      'Built a custom SQL database engine in C++ with B+ tree indexing, query parsing, and file-based storage.',
    tech: 'C++, Data Structures, Algorithms',
    link: 'https://github.com/FLung13/mini-sql-database',
    icon: '</>',
  },
  {
    title: 'Book Library Web App',
    description:
      'Full-stack Django application for managing and discovering books with authentication, ratings, and a shopping cart.',
    tech: 'Django, Python, SQLite, Bootstrap',
    link: 'https://github.com/FLung13/book-exchange-app',
    icon: '▣',
  },
  {
    title: 'Spring Boot Web Apps',
    description:
      'Java web applications with secure authentication, role-based access control, and dynamic server-rendered pages.',
    tech: 'Java, Spring Boot, FreeMarker, Bootstrap',
    link: 'https://github.com/FLung13',
    icon: '</>',
  },
]

function Projects() {
  return (
    <section id="projects" className="portfolio-section">
      <div className="section-header">
        <span className="section-icon">{'</>'}</span>
        <h2>PROJECTS</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">{project.tech}</div>
            <a href={project.link} target="_blank" rel="noreferrer">
              View on GitHub →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects