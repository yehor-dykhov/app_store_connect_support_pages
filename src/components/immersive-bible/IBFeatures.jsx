import { useEffect, useRef } from 'react';

const featuresList = [
  {
    title: 'One verse at a time',
    description: 'Read Scripture in a focused format that helps you stay present with the meaning of each verse.',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
        <line x1="4" y1="6" x2="20" y2="6" strokeDasharray="1,2"></line>
        <line x1="4" y1="12" x2="20" y2="12" strokeWidth="3"></line>
        <line x1="4" y1="18" x2="14" y2="18" strokeDasharray="1,2"></line>
      </svg>
    ),
  },
  {
    title: 'Minimal, distraction-free design',
    description: 'No clutter. No unnecessary elements. Just the Bible text and a calm reading experience.',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
        <line x1="16" y1="8" x2="2" y2="22"></line>
        <line x1="17.5" y1="15" x2="9" y2="15"></line>
      </svg>
    ),
  },
  {
    title: 'ADHD-friendly reading experience',
    description: 'A simplified layout helps reduce visual distractions and supports a more focused reading flow.',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="3"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
      </svg>
    ),
  },
  {
    title: 'Reading-friendly text layout',
    description: 'Each word is visually shaped to support smoother reading and reduce the feeling of losing your place.',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
  },
  {
    title: 'Dyslexia-friendly font option',
    description: 'Choose a font designed to make letters easier to distinguish and improve reading comfort.',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
        <path d="M4 7V4h16v3M9 20h6M12 4v16"></path>
      </svg>
    ),
  },
  {
    title: 'Soft color themes',
    description: 'Carefully selected colors help reduce visual strain and create a peaceful reading atmosphere.',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
        <path d="M12 22C17.52 22 22 17.52 22 12S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z"></path>
        <circle cx="7.5" cy="10.5" r="1.5"></circle>
        <circle cx="11.5" cy="7.5" r="1.5"></circle>
        <circle cx="16.5" cy="9.5" r="1.5"></circle>
      </svg>
    ),
  },
  {
    title: 'Brown noise for focus',
    description: 'Optional background brown noise can help create a calm environment for reading and reflection.',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
      </svg>
    ),
  },
];

export default function IBFeatures() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="features-section scroll-reveal" ref={sectionRef} id="features">
      <div className="container">
        <h2 className="section-title text-center">Why Your Immersive Bible is Different</h2>
        <p className="section-subtitle text-center">
          Built for readers who want a quieter, more focused way to read and reflect on God’s Word.
        </p>

        <div className="features-grid">
          {featuresList.map((feat, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon-wrapper">
                {feat.icon}
              </div>
              <h3 className="feature-card-title">{feat.title}</h3>
              <p className="feature-card-desc">{feat.description}</p>
            </div>
          ))}
        </div>

        <div className="features-conclusion text-center">
          <p className="conclusion-lead">
            Your Immersive Bible is for anyone who wants to slow down, remove distractions, and engage with Scripture more deeply — one verse at a time.
          </p>
          <div className="tagline-group">
            <div className="tagline-item">Read less noise.</div>
            <div className="tagline-item">Focus more deeply.</div>
            <div className="tagline-item">Stay with the Word.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
