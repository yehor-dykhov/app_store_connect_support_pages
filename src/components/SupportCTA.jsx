import { useEffect, useRef } from 'react';

export default function SupportCTA() {
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
    <section className="support-cta-section scroll-reveal" ref={sectionRef} id="support">
      <div className="container support-container">
        <div className="support-card">
          <h2 className="support-title">Need Help or Have Feedback?</h2>
          <p className="support-subtitle">
            Our team is here to assist you. If you have questions about scanning your resume, interpreting your score, or optimizing your CV, don't hesitate to reach out.
          </p>
          <div className="support-button-group">
            <a href="https://forms.gle/tLsEKeukSmYngkFQ7" className="btn btn-primary" aria-label="Contact Support">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
