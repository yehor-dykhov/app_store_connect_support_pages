import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import IBHeader from '../components/immersive-bible/IBHeader';
import IBScreenshotCarousel from '../components/immersive-bible/IBScreenshotCarousel';
import IBDescription from '../components/immersive-bible/IBDescription';
import IBFeatures from '../components/immersive-bible/IBFeatures';
import IBSupportCTA from '../components/immersive-bible/IBSupportCTA';

export const Route = createFileRoute('/immersive-bible')({
  component: ImmersiveBibleSupport,
});

function ImmersiveBibleSupport() {
  useEffect(() => {
    document.title = 'Your Immersive Bible — Experience Scripture Like Never Before';
  }, []);

  return (
    <div className="app-page-wrapper ib-theme">
      <main>
        <IBHeader />
        <IBScreenshotCarousel />
        <IBDescription />
        <IBFeatures />
        <IBSupportCTA />
      </main>
    </div>
  );
}
