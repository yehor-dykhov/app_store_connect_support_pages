# Resume Validator - Support Page

[![React Version](https://img.shields.io/badge/react-v19.x-blue.svg)](https://react.dev/)
[![Vite Version](https://img.shields.io/badge/vite-v8.x-purple.svg)](https://vite.dev/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](#)

A beautiful, premium, and fully responsive support and landing page for **Resume Validator**—the ultimate AI-powered career companion. This web application highlights the mobile app's key features, offers a showcase mockup carousel, and provides direct support channels and legal documentation.

---

## 🚀 App Overview

**Resume Validator** is designed to help job seekers beat the recruiting bots (Applicant Tracking Systems - ATS) by scanning, scoring, and optimizing resumes in seconds.

### Key Mobile App Features:
- **Scan Your Resume**: Instantly parses PDF/DOCX formats to reveal hidden formatting or structure errors.
- **Analyze Your Score**: Generates an instant AI Score out of 100 alongside a detailed weaknesses/strengths analysis.
- **Optimize Keywords**: Identifies missing critical industry terms to help resumes align perfectly with job profiles.
- **Automatic Optimization**: Automatically formats and writes a tailored, ATS-compliant version of the CV with a single tap.

---

## 🎨 Page & Codebase Features

This support and landing page has been engineered with modern web standards and high-fidelity aesthetics:
- **Premium Dark Aesthetics**: Styled with a tailored HSL-based color palette, clean gradients, and subtle borders.
- **iPhone Bezel Mockup Carousel**: A custom interactive carousel that displays actual mobile application workflow screenshots.
- **Intersection-Observer Animations**: Smooth reveal-on-scroll fade and slide micro-animations for an interactive feel.
- **Direct Support Integration**: Embedded action CTA that links users to an official Google Support Form.
- **Legal Compliance**: Standard footer with links to verified Privacy Policy and Terms & Conditions.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: Vanilla CSS (Premium styling, responsive flexbox/grid layout, CSS transitions)
- **Icons**: Custom inline SVGs (high-performance, fully stylable)
- **Formatting & Linting**: ESLint 10

---

## 📦 Setup & Installation

Follow these steps to run the landing/support page project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed.

### 1. Install Dependencies
Run the following command to download and install all required package dependencies:
```bash
npm install
```

### 2. Run the Development Server
Launch the local Vite server with Hot Module Replacement (HMR) enabled:
```bash
npm run dev
```
By default, the application will be hosted at:  
👉 **[http://localhost:5173](http://localhost:5173)**

### 3. Build for Production
To build a production-optimized version of the website, execute:
```bash
npm run build
```
This bundles the HTML, Javascript, and CSS assets and outputs them into the `dist/` directory, ready to be served.

### 4. Preview Production Build
Test the compiled production files locally to verify build behavior:
```bash
npm run preview
```

### 5. Lint the Codebase
Analyze and lint source code to check for formatting and programmatic errors:
```bash
npm run lint
```

---

## 📂 Project Structure

Below is an overview of the key folders and files in this repository:

```text
├── public/                  # Static assets
│   ├── assets/
│   │   ├── icon.png         # Resume Validator App icon logo
│   │   ├── 1.jpg ... 5.jpg  # App workflow mockup screenshots
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx       # Hero header with logo & App Store badge
│   │   ├── Description.jsx  # Context section explaining the ATS problem
│   │   ├── Features.jsx     # Feature grids showcasing features with custom SVGs
│   │   ├── SupportCTA.jsx   # Feedback & Support contact form card
│   │   └── ScreenshotCarousel.jsx # Custom iPhone mockup carousel slideshow
│   ├── App.css              # Custom premium styles, variables, & animations
│   ├── index.css            # Base browser resets & global defaults
│   ├── App.jsx              # Main parent layout assembling components
│   ├── main.jsx             # Entry point bootstrapping React
├── index.html               # Main HTML entry page
├── vite.config.js           # Vite server & bundler configuration
└── package.json             # NPM metadata, scripts, and dependencies
```

---

## 📄 License

This project is licensed under the MIT License.
