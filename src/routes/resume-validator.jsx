import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import Header from '../components/Header';
import ScreenshotCarousel from '../components/ScreenshotCarousel';
import Description from '../components/Description';
import Features from '../components/Features';
import SupportCTA from '../components/SupportCTA';

export const Route = createFileRoute('/resume-validator')({
  component: ResumeValidatorSupport,
});

function ResumeValidatorSupport() {
  useEffect(() => {
    document.title = 'Resume Validator — AI-Powered ATS Resume Scanner & Optimizer';
  }, []);

  return (
    <div className="app-page-wrapper">
      <main>
        <Header />
        <ScreenshotCarousel />
        <Description />
        <Features />
        <SupportCTA />
      </main>
    </div>
  );
}
