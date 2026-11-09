import { LOREM, StaticPage } from '@/components/StaticPage';

export const metadata = { title: 'About — Arboreta by Shifuta' };

export default function AboutPage() {
  return (
    <StaticPage
      eyebrow="Our story"
      title="About Arboreta"
      intro="A curated botanical house for people who love plants a little too much."
      sections={[
        { heading: 'Who we are', body: [LOREM] },
        { heading: 'How we choose our plants', body: [LOREM, LOREM] },
        { heading: 'Meet Shifuta', body: [LOREM] },
      ]}
    />
  );
}
