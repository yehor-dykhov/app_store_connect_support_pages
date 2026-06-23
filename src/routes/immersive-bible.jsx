import { createFileRoute } from '@tanstack/react-router';
import SEOHead from '../components/SEOHead';
import IBHeader from '../components/immersive-bible/IBHeader';
import IBScreenshotCarousel from '../components/immersive-bible/IBScreenshotCarousel';
import IBDescription from '../components/immersive-bible/IBDescription';
import IBFeatures from '../components/immersive-bible/IBFeatures';
import IBSupportCTA from '../components/immersive-bible/IBSupportCTA';
import FAQ from '../components/FAQ';

export const Route = createFileRoute('/immersive-bible')({
  component: ImmersiveBibleSupport,
});

const immersiveBibleFAQ = [
  {
    question: 'What makes Your Immersive Bible different from other Bible apps?',
    answer: 'Your Immersive Bible is designed for deep focus and distraction-free reading. Instead of showing dense chapters with visual noise, it presents one verse at a time in a calm, minimal interface. It\'s built specifically for people who want a quieter, more meditative way to read Scripture.',
  },
  {
    question: 'Is Your Immersive Bible suitable for people with ADHD or dyslexia?',
    answer: 'Absolutely. Your Immersive Bible was created with accessibility in mind. It features a simplified one-verse-at-a-time layout to reduce visual distractions, a dyslexia-friendly font option to make letters easier to distinguish, and optional brown noise to help create a calm, focused reading environment.',
  },
  {
    question: 'What Bible translations are available?',
    answer: 'Your Immersive Bible currently supports major Bible translations. The app is regularly updated to include additional translations based on user feedback and demand.',
  },
  {
    question: 'Does Your Immersive Bible work offline?',
    answer: 'Yes, once downloaded, the Bible text is available for offline reading. You can read Scripture anytime, anywhere — even without an internet connection.',
  },
  {
    question: 'Is Your Immersive Bible free to download?',
    answer: 'Yes, Your Immersive Bible is free to download on the iOS App Store. Core reading features are available at no cost. Premium features like additional color themes and customization options may be available through optional purchases.',
  },
  {
    question: 'What are the soft color themes?',
    answer: 'Your Immersive Bible offers carefully selected color themes designed to reduce visual strain and create a peaceful reading atmosphere. These include warm, cool, and neutral palettes so you can choose the environment that feels most comfortable for your reading sessions.',
  },
];

function ImmersiveBibleSupport() {
  // JSON-LD: SoftwareApplication schema for rich results
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Your Immersive Bible',
    description: 'A calm, minimal, distraction-free Bible reading app. Read one verse at a time with ADHD-friendly layout, dyslexia-friendly fonts, soft color themes, and brown noise for focus. Experience Scripture like never before.',
    applicationCategory: 'ReferenceApplication',
    operatingSystem: 'iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    downloadUrl: 'https://apps.apple.com/ua/app/your-immersive-bible/id6779601396',
    softwareVersion: '1.0',
    author: {
      '@type': 'Person',
      name: 'Yehor Dykhov',
      url: 'https://dykhov.com',
    },
    screenshot: 'https://dykhov.com/assets/immersive-bible/screenshots/screen1.png',
  };

  return (
    <div className="app-page-wrapper ib-theme">
      <SEOHead
        title="Your Immersive Bible — Calm, ADHD-Friendly Bible Reading App | iOS"
        description="Your Immersive Bible is a distraction-free, ADHD-friendly Bible reading app. Read one verse at a time with dyslexia-friendly fonts, soft color themes, and brown noise for focus. Download free on iOS."
        keywords="Bible app, ADHD Bible reader, distraction-free Bible, immersive Bible, verse by verse Bible, dyslexia friendly Bible app, calm Bible reading, iOS Bible app, Scripture reader, meditation Bible app"
        canonicalPath="/immersive-bible"
        ogType="website"
        ogImage="https://dykhov.com/assets/og-immersive-bible.png"
        jsonLd={appSchema}
      />
      <main>
        <IBHeader />
        <IBScreenshotCarousel />
        <IBDescription />
        <IBFeatures />
        <FAQ
          sectionTitle="Your Immersive Bible — Frequently Asked Questions"
          items={immersiveBibleFAQ}
        />
        <IBSupportCTA />
      </main>
    </div>
  );
}
