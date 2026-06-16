export default function IBHeader() {
  return (
    <header className="hero-header ib-theme">
      <div className="container hero-container">
        <div className="hero-logo-wrapper">
          <img
            src="/assets/immersive-bible/icon.png"
            alt="Immersive Bible App Icon"
            className="hero-logo"
            loading="eager"
          />
        </div>
        <p className="hero-subtitle">Welcome to</p>
        <h1 className="hero-title">Immersive Bible</h1>
        <p className="hero-tagline">
          Experience Scripture like never before. Listen to dramatized audio, track your reading progress, study daily reading plans, and customize your reading view in a beautiful, distraction-free environment.
        </p>
        <div className="hero-cta-group">
          <a className="app-store-btn" href="#" style={{ display: "inline-block" }}>
            <img src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1453507200" alt="Download on the App Store" style={{ width: 185, height: 54, verticalAlign: "middle", objectFit: "contain" }} />
          </a>
        </div>
      </div>
    </header>
  );
}
