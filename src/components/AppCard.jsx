import { Link } from '@tanstack/react-router';

export default function AppCard({ icon, name, tagline, to, accentColor }) {
  return (
    <Link
      to={to}
      className="app-card"
      style={{ '--accent-color': accentColor }}
    >
      <div className="app-card-icon-wrapper">
        <img src={icon} alt={`${name} Icon`} className="app-card-icon" />
      </div>
      <div className="app-card-content">
        <h3 className="app-card-title">{name}</h3>
        <p className="app-card-tagline">{tagline}</p>
        <span className="app-card-action">
          View Support Page
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </div>
    </Link>
  );
}
