import { useRef, useState, useEffect } from 'react';

const screenshots = [
  { src: '/assets/immersive-bible/1.jpg', alt: 'Bible Reading Screen - Immersive Bible' },
  { src: '/assets/immersive-bible/2.jpg', alt: 'Reading Plans Screen - Immersive Bible' },
  { src: '/assets/immersive-bible/3.jpg', alt: 'Discover & Explore Screen - Immersive Bible' },
  { src: '/assets/immersive-bible/4.jpg', alt: 'Theme Customization Screen - Immersive Bible' },
  { src: '/assets/immersive-bible/5.jpg', alt: 'Community Discussion Screen - Immersive Bible' },
];

export default function IBScreenshotCarousel() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = screenshots.length - 1;

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
      scrollTo(maxIndex); // loop to end
    }
  };

  const scrollRight = () => {
    if (activeIndex < maxIndex) {
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
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="iphone-image"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
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
          {screenshots.map((_, index) => (
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
