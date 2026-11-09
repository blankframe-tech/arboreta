import { LOREM, StaticPage } from '@/components/StaticPage';

export const metadata = { title: 'Terms of Service — Arboreta by Shifuta' };

export default function TermsPage() {
  return (
    <StaticPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="The ground rules for shopping with us."
      sections={[
        { heading: 'Using the website', body: [LOREM] },
        { heading: 'Orders & payment', body: [LOREM] },
        { heading: 'Live plants & natural variation', body: [LOREM] },
        { heading: 'Changes to these terms', body: [LOREM] },
      ]}
    />
  );
}
