import { LOREM, StaticPage } from '@/components/StaticPage';

export const metadata = { title: 'Returns — Arboreta by Shifuta' };

export default function ReturnsPage() {
  return (
    <StaticPage
      eyebrow="Peace of mind"
      title="Returns & Refunds"
      intro="What happens if a plant doesn't arrive the way it should."
      sections={[
        { heading: 'Our plant guarantee', body: [LOREM] },
        { heading: 'How to request a return', body: [LOREM] },
        { heading: 'Refund timing', body: [LOREM] },
        { heading: 'What we can’t accept back', body: [LOREM] },
      ]}
    />
  );
}
