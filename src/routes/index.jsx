import { createFileRoute } from '@tanstack/react-router';
import SEOHead from '../components/SEOHead';
import AppCard from '../components/AppCard';
import { apps } from '../data/apps';

export const Route = createFileRoute('/')({
  component: PortfolioHome,
});

function PortfolioHome() {
  // JSON-LD: Person + WebSite schema for the developer portfolio
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Yehor Dykhov — Developer Portfolio',
      url: 'https://dykhov.com',
      description: 'Portfolio of Yehor Dykhov, indie iOS & web developer. Home of Resume Validator and Your Immersive Bible.',
      author: {
        '@type': 'Person',
        name: 'Yehor Dykhov',
        url: 'https://dykhov.com',
        sameAs: [
          'https://github.com/yehor-dykhov',
          'https://www.linkedin.com/in/yehor-dykhov',
          'https://x.com/yehordykhov',
        ],
      },
    },
  ];

  return (
    <div className="portfolio-container container">
      <SEOHead
        title="Yehor Dykhov — iOS & Web Developer | Resume Validator & Immersive Bible"
        description="Portfolio of Yehor Dykhov, indie iOS & web developer. Explore Resume Validator — the AI-powered ATS resume scanner, and Your Immersive Bible — a calm, ADHD-friendly Bible reading app. Download free on iOS."
        keywords="Yehor Dykhov, iOS Developer, React Developer, App Developer, Resume Validator, Your Immersive Bible, indie developer portfolio"
        canonicalPath="/"
        jsonLd={jsonLd}
      />

      {/* Developer Profile Header */}
      <section className="portfolio-hero">
        <div className="portfolio-avatar-wrapper">
          <img
            src="/assets/avatar_80s.png"
            alt="Yehor Dykhov — iOS and Web Developer"
            className="portfolio-avatar"
            style={{ objectFit: 'cover' }}
          />
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
          <a href="https://www.linkedin.com/in/yehor-dykhov" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="https://x.com/yehordykhov?s=11" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="X (Twitter)">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
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
