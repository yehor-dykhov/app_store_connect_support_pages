import { useState, useRef, useEffect } from 'react';

/**
 * FAQ — Reusable accordion component with FAQPage JSON-LD schema.
 *
 * @param {object}   props
 * @param {string}   props.sectionTitle — Heading above the FAQ
 * @param {Array<{question: string, answer: string}>} props.items — FAQ entries
 */
export default function FAQ({ sectionTitle = 'Frequently Asked Questions', items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);
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

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Build FAQPage JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="faq-section scroll-reveal" ref={sectionRef} id="faq">
      <div className="container">
        <h2 className="section-title text-center">{sectionTitle}</h2>

        <div className="faq-list">
          {items.map((item, index) => (
            <div
              className={`faq-item${openIndex === index ? ' open' : ''}`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-chevron" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div
                className="faq-answer"
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ structured data for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
