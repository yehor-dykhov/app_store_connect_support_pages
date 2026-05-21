import { useRef, useState, useEffect } from 'react';

const screenshots = [
  { src: '/assets/1.jpg', alt: 'Scan Your Resume screen - Resume Validator' },
  { src: '/assets/2.jpg', alt: 'Analyze Your Score screen - Resume Validator' },
  { src: '/assets/3.jpg', alt: 'Optimize Keywords screen - Resume Validator' },
  { src: '/assets/4.jpg', alt: 'Rewrite Automatically screen - Resume Validator' },
  { src: '/assets/5.jpg', alt: 'Switch to Dark Mode screen - Resume Validator' },
];

export default function ScreenshotCarousel() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(index);
  };

  const scrollTo = (index) => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({
      left: clientWidth * index,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  const scrollLeft = () => {
    if (activeIndex > 0) {
      scrollTo(activeIndex - 1);
    } else {
      scrollTo(2); // loop to end
    }
  };

  const scrollRight = () => {
    if (activeIndex < 2) {
      scrollTo(activeIndex + 1);
    } else {
      scrollTo(0); // loop to start
    }
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollEl) {
        scrollEl.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeIndex]);

  return (
    <section className="screenshots-section" aria-label="App Screenshots">
      <div className="container carousel-outer-container">

        {/* Navigation Arrows for Desktop */}
        <button
          className="carousel-arrow prev"
          onClick={scrollLeft}
          aria-label="Previous screenshot"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="carousel-scroll-viewport" ref={scrollRef}>
          <div className="carousel-track">
            {screenshots.map((shot, index) => (
              <div className="carousel-slide" key={index}>
                {/* CSS iPhone Bezel Mockup */}
                <div className="iphone-mockup">
                  {/* <div className="iphone-screen"> */}
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="iphone-image"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  {/* </div> */}
                  {/* <div className="iphone-bezel"></div>
                  <div className="iphone-notch"></div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-arrow next"
          onClick={scrollRight}
          aria-label="Next screenshot"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="carousel-dots" role="tablist">
          {[0, 1].map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => scrollTo(index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}
