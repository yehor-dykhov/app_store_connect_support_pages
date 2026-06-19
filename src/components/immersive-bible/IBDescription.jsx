import { useEffect, useRef } from 'react';

export default function IBDescription() {
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
        <h2 className="section-title text-center">A Calm Space for God's Word</h2>

        <div className="description-content">
          <p className="lead-paragraph text-center">
            <strong>Your Immersive Bible</strong> is a calm, minimal Bible reading app created for deep focus, slow reflection, and distraction-free Scripture reading.
          </p>

          <div className="body-paragraphs">
            <p>
              Instead of overwhelming you with long chapters, dense layouts, and visual noise, Your Immersive Bible helps you focus on one verse at a time. The interface is intentionally simple, giving your mind more space to read, understand, and meditate on God’s Word.
            </p>
            <p>
              Your Immersive Bible was created for people who want a quieter and more focused way to read the Bible — including readers with ADHD, dyslexia, racing thoughts, visual crowding, or difficulty staying focused during longer reading sessions.
            </p>
            <p>
              Whether you are reading during daily devotion, prayer, study, or a quiet moment in a busy day, Your Immersive Bible helps you slow down and stay present with Scripture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
