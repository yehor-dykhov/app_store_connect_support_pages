import { useEffect, useRef } from 'react';

const featuresList = [
  {
    title: 'Scan Your Resume',
    description: 'Instantly upload your CV in PDF/DOCX formats. Our advanced AI parses your data exactly how a corporate Applicant Tracking System would, revealing hidden formatting errors.',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
  },
  {
    title: 'Analyze Your Score',
    description: 'Get an instant "AI Score" out of 100. Receive a comprehensive Analysis Report highlighting your strengths, critical weaknesses, and actionable suggestions (like fixing multi-column layouts or adding quantifiable achievements).',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    ),
  },
  {
    title: 'Optimize Keywords',
    description: 'Recruiters look for specific industry terms. Our AI extracts essential missing keywords (e.g., Data Visualization, ETL, Predictive Analytics) and tells you exactly what to add to match your target job profile.',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        <path d="M10 7v6"></path>
        <path d="M7 10h6"></path>
      </svg>
    ),
  },
  {
    title: 'Optimize Automatically',
    description: 'With a single tap, the app automatically generates an optimized, beautifully structured, and professional version of your resume that is ready to impress.',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    ),
  },
];

export default function Features() {
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
        <h2 className="section-title text-center">Engineered for Career Success</h2>
        <p className="section-subtitle text-center">
          Get everything you need to fast-track your job hunt and stand out to recruiters.
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
