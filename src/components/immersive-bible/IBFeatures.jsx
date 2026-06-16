import { useEffect, useRef } from 'react';

const featuresList = [
  {
    title: 'Listen to Dramatized Audio',
    description: 'Listen to high-fidelity audio narration with ambient orchestral backdrops. Turn scripture into a cinematic experience that fits your daily commute, exercise, or quiet time.',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      </svg>
    ),
  },
  {
    title: 'Follow Structured Plans',
    description: 'Access curated reading plans (like Bible-in-a-Year, Gospels, or topical reflections). Track progress with intuitive checkboxes, visual completion graphs, and reminders.',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
        <path d="M9 11l3 3L22 4"></path>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    ),
  },
  {
    title: 'Customize Your Canvas',
    description: 'Select between serif or sans-serif typography, adjust line-spacing, and choose beautiful pastel reading backgrounds or dynamic dark themes to ease eye strain.',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
      </svg>
    ),
  },
  {
    title: 'Engage with Community',
    description: 'Share verse quotes styled with scenic graphics directly to social platforms. Ask questions, post insights, and study alongside friends or small groups in real-time.',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
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
        <h2 className="section-title text-center">Engineered for Deeper Devotion</h2>
        <p className="section-subtitle text-center">
          Experience scriptures through advanced reading tools, beautiful layouts, and interactive studies.
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
      </div>
    </section>
  );
}
