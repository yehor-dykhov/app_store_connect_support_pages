import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import AppCard from '../components/AppCard';
import { apps } from '../data/apps';

export const Route = createFileRoute('/')({
  component: PortfolioHome,
});

function PortfolioHome() {
  useEffect(() => {
    document.title = 'Yehor Dykhov — Mobile & Web Developer Portfolio';
  }, []);

  return (
    <div className="portfolio-container container">
      {/* Developer Profile Header */}
      <section className="portfolio-hero">
        <div className="portfolio-avatar-wrapper">
          <div className="portfolio-avatar">
            YD
          </div>
        </div>
        <h1 className="portfolio-title">Yehor Dykhov</h1>
        <p className="portfolio-subtitle">iOS & Web Developer</p>
        <p className="portfolio-bio">
          I build high-performance, polished mobile and web applications with a focus on clean design, delightful micro-animations, and outstanding user experiences. Check out the support and presentation pages for my apps below.
        </p>

        {/* Social Links */}
        <div className="portfolio-socials">
          <a href="https://github.com/yehor-dykhov" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="#" className="social-icon-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="#" className="social-icon-link" aria-label="X (Twitter)">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a href="mailto:contact@example.com" className="social-icon-link" aria-label="Email">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </section>

      {/* Grid of Apps */}
      <section className="portfolio-apps-section">
        <h2 className="portfolio-section-title">My Applications</h2>
        <div className="portfolio-grid">
          {apps.map((app) => (
            <AppCard
              key={app.id}
              icon={app.icon}
              name={app.name}
              tagline={app.tagline}
              to={app.route}
              accentColor={app.accentColor}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
