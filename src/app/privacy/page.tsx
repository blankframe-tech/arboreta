import { LOREM, StaticPage } from '@/components/StaticPage';

export const metadata = { title: 'Privacy Policy — Arboreta by Shifuta' };

export default function PrivacyPage() {
  return (
    <StaticPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="What we collect, why we collect it, and how we look after it."
      sections={[
        { heading: 'Information we collect', body: [LOREM] },
        { heading: 'How we use your information', body: [LOREM] },
        { heading: 'Cookies', body: [LOREM] },
        { heading: 'Your choices', body: [LOREM] },
      ]}
    />
  );
}
