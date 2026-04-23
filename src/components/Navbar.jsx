function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="logo">FREDY LUNG</a>

          <ul className="nav-links">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a href="/Fredy_Lung_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar