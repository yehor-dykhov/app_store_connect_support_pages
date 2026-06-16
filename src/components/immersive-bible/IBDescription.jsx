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
        <h2 className="section-title text-center">Reimagine Your Scripture Reading Experience</h2>

        <div className="description-content">
          <p className="lead-paragraph">
            Do you struggle to stay consistent with scripture reading amidst constant notifications and digital clutter? The issue isn't your commitment—it's that traditional reading apps fail to offer a truly <strong>focused and peaceful</strong> space.
          </p>

          <div className="body-paragraphs">
            <p>
              <strong>Immersive Bible</strong> is designed to change that. Built with a gorgeous, distraction-free reading interface and a high-fidelity dramatized audio narrator, it transforms scripture reading from a routine task into a deeply engaging, immersive journey.
            </p>
            <p>
              Whether you are working through a 365-day plan, highlighting a meaningful verse, or looking to customize your view with elegant typefaces and pastel themes, Immersive Bible serves as your premium spiritual companion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
