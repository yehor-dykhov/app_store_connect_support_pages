# Yehor Dykhov — Developer Portfolio & App Support Pages

[![React Version](https://img.shields.io/badge/react-v19.x-blue.svg)](https://react.dev/)
[![Vite Version](https://img.shields.io/badge/vite-v8.x-purple.svg)](https://vite.dev/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](#)

A beautiful, premium, and fully responsive developer portfolio and support page hub for applications built by **Yehor Dykhov**. This web application serves as a central hub where users can learn about different iOS and web applications, browse screenshot mockups, find official support channels, and access legal/privacy documentation.

---

## 📱 Hosted Applications & Pages

### 1. [Resume Validator](file:///Users/edykhov/src/JS/resume_validator_support_page/src/routes/resume-validator.jsx)
The ultimate AI-powered career companion designed to help job seekers beat the recruiting bots (Applicant Tracking Systems - ATS) by scanning, scoring, and optimizing resumes.

*   **Scan Your Resume**: Instantly parses PDF/DOCX formats to reveal hidden formatting or structure errors.
*   **Analyze Your Score**: Generates an instant AI Score out of 100 alongside a detailed weaknesses/strengths analysis.
*   **Optimize Keywords**: Identifies missing critical industry terms to help resumes align perfectly with job profiles.
*   **Automatic Optimization**: Automatically formats and writes a tailored, ATS-compliant version of the CV with a single tap.

### 2. [Your Immersive Bible](file:///Users/edykhov/src/JS/resume_validator_support_page/src/routes/immersive-bible.jsx)
An application designed for scripture engagement, built specifically for readers who want a quieter, more focused, and distraction-free way to read and reflect on God's Word.

*   **One Verse at a Time**: Read Scripture in a focused format that helps you stay present with the meaning of each verse.
*   **ADHD & Dyslexia Friendly**: Simplified layout options, visual styling to reduce line tracking errors, and specialized fonts (e.g., OpenDyslexic style).
*   **Soft Color Themes**: Carefully curated palettes to reduce eye strain and establish a peaceful reading atmosphere.
*   **Brown Noise for Focus**: Integrated background audio options to filter out external noise and aid deep concentration.

---

## 🎨 Page & Codebase Features

*   **Premium Dark Aesthetics**: Styled with a tailored HSL-based color palette, sleek gradients, and responsive layouts.
*   **Device Mockup Carousels**: Custom interactive screenshot sliders inside iPhone bezel mockups for both apps.
*   **Scroll-Reveal Animations**: Intersection-Observer scroll fade/slide animations for an interactive and polished presentation.
*   **Centralized Navigation**: A global navigation bar with responsive mobile menu overlay and active state indicators.
*   **Unified Support & Compliance**: Links to specific Google Forms for support and hosted Legal Agreements (Privacy Policies and Terms of Service) for App Store submission.

---

## 🛠 Tech Stack

*   **Core Library**: [React 19](https://react.dev/)
*   **Build Tool**: [Vite 8](https://vite.dev/)
*   **Routing**: [TanStack Router v1](https://tanstack.com/router) (file-based routing with Vite plugin configuration)
*   **Styling**: Vanilla CSS (Responsive Flexbox/Grid layouts, app-specific CSS variables/themes, and transitions)
*   **Icons**: Inline SVG icons for light/fast loading times
*   **Formatting**: [ESLint 10](file:///Users/edykhov/src/JS/resume_validator_support_page/eslint.config.js)

---

## 📂 Project Structure

Below is an overview of the directories and files in this repository:

```text
├── public/                      # Static assets served directly
│   └── assets/                  # Shared and app-specific visual resources
│       ├── icon.png             # Resume Validator App icon logo
│       ├── 1.jpg ... 5.jpg      # Resume Validator workflow mockup screenshots
│       ├── avatar_80s.png       # Portfolio avatar
│       └── immersive-bible/     # Immersive Bible assets
│           ├── icon.png         # Your Immersive Bible App icon logo
│           └── 1.png ... 5.png  # Your Immersive Bible workflow screenshots
├── src/
│   ├── components/              # Reusable React UI components
│   │   ├── AppCard.jsx          # Cards representing apps on the portfolio home
│   │   ├── Header.jsx           # Resume Validator Hero banner
│   │   ├── Description.jsx      # Resume Validator ATS intro
│   │   ├── Features.jsx         # Resume Validator feature grid
│   │   ├── ScreenshotCarousel.jsx # Resume Validator iPhone mockup slider
│   │   ├── SupportCTA.jsx       # Resume Validator contact & support panel
│   │   └── immersive-bible/     # Sub-components for Your Immersive Bible
│   │       ├── IBHeader.jsx
│   │       ├── IBDescription.jsx
│   │       ├── IBFeatures.jsx
│   │       ├── IBScreenshotCarousel.jsx
│   │       └── IBSupportCTA.jsx
│   ├── data/
│   │   └── apps.js              # Application catalog metadata
│   ├── routes/                  # TanStack Router file-based pages
│   │   ├── __root.jsx           # Root layout, global navbar, and dynamic footer
│   │   ├── index.jsx            # Portfolio homepage listing apps
│   │   ├── resume-validator.jsx # Support page route for Resume Validator
│   │   └── immersive-bible.jsx  # Support page route for Your Immersive Bible
│   ├── routeTree.gen.ts         # Generated route configuration
│   ├── App.css                  # Custom styling, responsive rules, themes, & keyframes
│   ├── index.css                # Base browser resets & global defaults
│   └── main.jsx                 # Entry point bootstrapping React with RouterProvider
├── index.html                   # HTML entry skeleton
├── vite.config.js               # Vite config containing TanStack Router plugin
├── package.json                 # Project dependencies & CLI run scripts
└── eslint.config.js             # Linter settings
```

### Key File Mapping:
- **Root Layout & Navigation**: [__root.jsx](file:///Users/edykhov/src/JS/resume_validator_support_page/src/routes/__root.jsx)
- **Home Portfolio**: [index.jsx](file:///Users/edykhov/src/JS/resume_validator_support_page/src/routes/index.jsx)
- **Resume Validator Support**: [resume-validator.jsx](file:///Users/edykhov/src/JS/resume_validator_support_page/src/routes/resume-validator.jsx)
- **Immersive Bible Support**: [immersive-bible.jsx](file:///Users/edykhov/src/JS/resume_validator_support_page/src/routes/immersive-bible.jsx)
- **App Catalog Metadata**: [apps.js](file:///Users/edykhov/src/JS/resume_validator_support_page/src/data/apps.js)
- **Shared & Portfolio Styling**: [App.css](file:///Users/edykhov/src/JS/resume_validator_support_page/src/App.css)
- **Vite Configuration**: [vite.config.js](file:///Users/edykhov/src/JS/resume_validator_support_page/vite.config.js)
- **Bootstrap Entry Point**: [main.jsx](file:///Users/edykhov/src/JS/resume_validator_support_page/src/main.jsx)
- **Metadata and scripts**: [package.json](file:///Users/edykhov/src/JS/resume_validator_support_page/package.json)
- **Index HTML Template**: [index.html](file:///Users/edykhov/src/JS/resume_validator_support_page/index.html)

---

## 🛠 Setup & Installation

Follow these steps to run the portfolio website locally.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed.

### 1. Install Dependencies
Run the following command to download and install all required package dependencies:
```bash
npm install
```

### 2. Run the Development Server
Launch the local Vite server with Hot Module Replacement (HMR) enabled. TanStack Router will automatically watch and compile the route tree:
```bash
npm run dev
```
By default, the application will be hosted at:  
👉 **[http://localhost:5173](http://localhost:5173)**

### 3. Build for Production
To bundle and optimize the project code for production deployment, execute:
```bash
npm run build
```
This builds static client assets and outputs them to the `dist/` directory.

### 4. Preview Production Build
Test the compiled production files locally:
```bash
npm run preview
```

### 5. Lint the Codebase
Analyze and lint source code to check for formatting and potential errors:
```bash
npm run lint
```

---

## 📄 License

This project is licensed under the MIT License.
