import { useEffect, useRef } from 'react';

export default function Description() {
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
    <section className="description-section scroll-reveal" ref={sectionRef} id="about">
      <div className="container description-container">
        <h2 className="section-title text-center">Stop Getting Filtered by Recruiting Bots</h2>

        <div className="description-content">
          <p className="lead-paragraph">
            Are you submitting dozens of job applications but hearing nothing back? The problem isn’t your experience—it's the <strong>Applicant Tracking Systems (ATS)</strong> blocking your resume before a recruiter ever sees it.
          </p>

          <div className="body-paragraphs">
            <p>
              <strong>Resume Validator</strong> is your ultimate AI-powered career companion. Designed to help you beat the recruiting bots, this app scans, scores, and rewrites your resume in seconds, ensuring it is 100% ATS-compatible and tailor-made to land you more interviews.
            </p>
            <p>
              Whether you are a data analyst, software engineer, or marketing professional, Resume Validator turns your generic CV into a high-scoring, keyword-optimized masterpiece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
