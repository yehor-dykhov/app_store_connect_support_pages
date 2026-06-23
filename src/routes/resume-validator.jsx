import { createFileRoute } from '@tanstack/react-router';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import ScreenshotCarousel from '../components/ScreenshotCarousel';
import Description from '../components/Description';
import Features from '../components/Features';
import SupportCTA from '../components/SupportCTA';
import FAQ from '../components/FAQ';

export const Route = createFileRoute('/resume-validator')({
  component: ResumeValidatorSupport,
});

const resumeValidatorFAQ = [
  {
    question: 'What is an ATS and why does it matter for my resume?',
    answer: 'An Applicant Tracking System (ATS) is software used by over 97% of Fortune 500 companies to filter resumes before a human recruiter ever sees them. If your resume isn\'t formatted correctly or lacks the right keywords, it gets rejected automatically — even if you\'re a perfect fit for the job. Resume Validator helps you beat these systems.',
  },
  {
    question: 'How does Resume Validator score my resume?',
    answer: 'Resume Validator uses advanced AI to analyze your resume exactly like a corporate ATS would. It checks formatting, keyword density, section structure, and content quality, then gives you an instant score out of 100 along with a detailed analysis report highlighting strengths and weaknesses.',
  },
  {
    question: 'Can Resume Validator rewrite my resume automatically?',
    answer: 'Yes! With a single tap, Resume Validator\'s AI generates a fully optimized, professionally structured version of your resume. It rewrites content to include missing keywords, fix formatting issues, and maximize your ATS compatibility score.',
  },
  {
    question: 'What file formats does Resume Validator support?',
    answer: 'Resume Validator supports PDF and DOCX file formats. Simply upload your existing resume in either format, and the app will parse and analyze it instantly.',
  },
  {
    question: 'Is Resume Validator free to download?',
    answer: 'Yes, Resume Validator is free to download on the iOS App Store. The app includes a free resume scan so you can see your score. Premium features like full analysis reports and AI-powered resume rewrites are available through an affordable subscription.',
  },
  {
    question: 'Who should use Resume Validator?',
    answer: 'Resume Validator is perfect for job seekers in any industry — whether you\'re a software engineer, data analyst, marketing professional, designer, or recent graduate. Anyone submitting resumes online will benefit from ATS optimization.',
  },
];

function ResumeValidatorSupport() {
  // JSON-LD: SoftwareApplication schema for rich results
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Resume Validator',
    alternateName: 'Smart CV Resume Validator',
    description: 'AI-powered ATS resume scanner and optimizer. Upload your resume, get an instant ATS compatibility score, and let AI rewrite your CV to beat recruiting bots and land more interviews.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    downloadUrl: 'https://apps.apple.com/us/app/smart-cv-resume-validator/id6762081081',
    softwareVersion: '1.0',
    author: {
      '@type': 'Person',
      name: 'Yehor Dykhov',
      url: 'https://dykhov.com',
    },
    screenshot: 'https://dykhov.com/assets/screenshots/screen1.png',
  };

  return (
    <div className="app-page-wrapper">
      <SEOHead
        title="Resume Validator — AI-Powered ATS Resume Scanner & Optimizer | iOS App"
        description="Resume Validator scans, scores, and rewrites your resume to beat Applicant Tracking Systems (ATS). Upload your CV, get an AI score, optimize keywords, and land more interviews. Download free on iOS."
        keywords="resume validator, ATS resume checker, resume scanner app, AI resume optimizer, CV checker, applicant tracking system, resume score, job application tool, iOS resume app, beat recruiting bots"
        canonicalPath="/resume-validator"
        ogType="website"
        ogImage="https://dykhov.com/assets/og-resume-validator.png"
        jsonLd={appSchema}
      />
      <main>
        <Header />
        <ScreenshotCarousel />
        <Description />
        <Features />
        <FAQ
          sectionTitle="Resume Validator — Frequently Asked Questions"
          items={resumeValidatorFAQ}
        />
        <SupportCTA />
      </main>
    </div>
  );
}
