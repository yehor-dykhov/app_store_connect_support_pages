export default function Header() {
  return (
    <header className="hero-header">
      <div className="container hero-container">
        <div className="hero-logo-wrapper">
          <img
            src="/assets/icon.png"
            alt="Resume Validator App Icon"
            className="hero-logo"
            loading="eager"
          />
        </div>
        <p className="hero-subtitle">Welcome to</p>
        <h1 className="hero-title">Resume Validator</h1>
        <p className="hero-tagline">
          The ultimate AI-powered career companion. Scan, score, and rewrite your resume in seconds to beat the recruiting bots and land more interviews.
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
