function NavBar() {
  return (
    <aside>
      <nav className="navigation">
        <a href="#intro-section" className="logo">Dream City</a>
        <div className="mobile-nav">
          <ul className="social">
            <li><a href="https://twitter.com/dreamcitynft" target="_blank" className="social-link twitter">Twitter</a></li>
            <li><a href="https://discord.gg/Hkg3NXEX6b" className="social-link discord">Discord</a></li>
          </ul>
        </div>
        <div className="nav-items">
          <h3>Project //////</h3>
          <ul className="main-nav">
            <li className="nav-item">
              <a href="/#what-section" className="list-link">The What</a>
            </li>
            <li className="nav-item">
              <a href="/#process-section" className="list-link">The Process</a>
            </li>
            <li className="nav-item">
              <a href="/#ourteam-section" className="list-link">The Team</a>
            </li>
            <li className="nav-item">
              <a href="/#roadmap-section" className="list-link">Roadmap</a>
            </li>
            <li className="nav-item">
              <a href="/#faqs-section" className="list-link">FAQs</a>
            </li>
          </ul>
          <h3>World //////</h3>
          <ul className="main-nav">
            <li className="nav-item">
              <a href="/lorestart" className="list-link"> Lore </a>
            </li>
            <li className="nav-item">
              Coming Soon:
            </li>
            <li className="nav-item">
              Comics
            </li>
          </ul>
          <ul className="social">
            <li><a href="https://twitter.com/dreamcitynft" target="_blank" className="social-link twitter">Twitter</a></li>
            <li><a href="https://discord.gg/Hkg3NXEX6b" className="social-link discord">Discord</a></li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}

export default NavBar;
