import { createRootRoute, Link, Outlet, useLocation } from '@tanstack/react-router';
import { useState, useEffect, useCallback } from 'react';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const location = useLocation();
  const path = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  // Toggle body scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // Determine footer content based on active route
  const getFooter = () => {
    const year = new Date().getFullYear();
    if (path.startsWith('/resume-validator')) {
      return (
        <footer className="app-footer">
          <div className="container footer-container">
            <p className="footer-copyright">
              &copy; {year} Yehor Dykhov. All rights reserved.
            </p>
            <div className="footer-links">
              <a href="https://drive.google.com/file/d/10yd0duUcgMtX7ioypLYPEfLmE7tWw_Ma/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="footer-link">Privacy Policy</a>
              <a href="https://drive.google.com/file/d/1WsaRxcrtw1vrMM1KStYjaXjrfi2DtPz3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="footer-link">Terms & Conditions</a>
            </div>
          </div>
        </footer>
      );
    } else if (path.startsWith('/immersive-bible')) {
      return (
        <footer className="app-footer">
          <div className="container footer-container">
            <p className="footer-copyright">
              &copy; {year} Yehor Dykhov. All rights reserved.
            </p>
            <div className="footer-links">
              <a href="https://docs.google.com/document/d/15iSL9r-j-DVc-JDOvTpPMHcdQCXdQ1T7KKZqJCa1tEY/edit?usp=drive_link" target="_blank" rel="noopener noreferrer" className="footer-link">Privacy Policy</a>
              <a href="https://docs.google.com/document/d/1ZeuyosATA8K_17b-Eh69TU-x6q_GyjnzsuFnx01WDo0/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="footer-link">Terms & Conditions</a>
            </div>
          </div>
        </footer>
      );
    } else {
      // General Portfolio footer
      return (
        <footer className="app-footer">
          <div className="container footer-container">
            <p className="footer-copyright">
              &copy; {year} Yehor Dykhov. All rights reserved.
            </p>
            <div className="footer-links">
              <a href="https://github.com/yehor-dykhov" className="footer-link">GitHub</a>
              <a href="https://www.linkedin.com/in/yehor-dykhov" className="footer-link">LinkedIn</a>
            </div>
          </div>
        </footer>
      );
    }
  };

  return (
    <div className="app-wrapper">
      <nav className="global-nav">
        <div className="container nav-container">
          <Link to="/" className="nav-brand" onClick={closeMenu}>
            <span className="brand-dot"></span>
            Yehor Dykhov
          </Link>

          {/* Burger button — visible only on mobile via CSS */}
          <button
            className={`burger-btn${menuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="burger-bar" />
            <span className="burger-bar" />
            <span className="burger-bar" />
          </button>

          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <Link to="/" className="nav-link" activeProps={{ className: 'active' }} onClick={closeMenu}>Apps</Link>
            <Link to="/resume-validator" className="nav-link" activeProps={{ className: 'active' }} onClick={closeMenu}>
              <img src="/assets/icon.png" alt="" className="nav-link-icon" />
              Resume Validator
            </Link>
            <Link to="/immersive-bible" className="nav-link" activeProps={{ className: 'active' }} onClick={closeMenu}>
              <img src="/assets/immersive-bible/icon.png" alt="" className="nav-link-icon" />
              Your Immersive Bible
            </Link>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      {getFooter()}
    </div>
  );
}
