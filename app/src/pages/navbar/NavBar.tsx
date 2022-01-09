

function NavBar() {
  return (
    <header>
      <nav className="navigation">
        <a href="#intro-section" className="logo">Dream City</a>
        <ul className="main-nav">
          <li className="nav-item">
            <a href="#orphans-section" className="list-link">The Orphans</a>
          </li>
          <li className="nav-item">
            <a href="#roadmap-section" className="list-link">Roadmap</a>
          </li>
          <li className="nav-item">
            <a href="#ourteam-section" className="list-link">Our Team</a>
          </li>
          <li className="nav-item">
            <a href="#faqs-section" className="list-link">FAQs</a>
          </li>
        </ul>
        <ul className="social">
          <li><a href="https://twitter.com/dreamcitynft" target="_blank" className="social-link twitter">Twitter</a></li>
          <li><a href="https://discord.gg/Hkg3NXEX6b" className="social-link discord">Discord</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
