import Header from './components/Header';
import ScreenshotCarousel from './components/ScreenshotCarousel';
import Description from './components/Description';
import Features from './components/Features';
import SupportCTA from './components/SupportCTA';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <main>
        <Header />
        <ScreenshotCarousel />
        <Description />
        <Features />
        <SupportCTA />
      </main>

      <footer className="app-footer">
        <div className="container footer-container">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Resume Validator. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="https://drive.google.com/file/d/10yd0duUcgMtX7ioypLYPEfLmE7tWw_Ma/view?usp=drive_link" className="footer-link">Privacy Policy</a>
            <a href="https://drive.google.com/file/d/1WsaRxcrtw1vrMM1KStYjaXjrfi2DtPz3/view?usp=sharing" className="footer-link">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
