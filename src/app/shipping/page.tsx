import { LOREM, StaticPage } from '@/components/StaticPage';

export const metadata = { title: 'Shipping — Arboreta by Shifuta' };

export default function ShippingPage() {
  return (
    <StaticPage
      eyebrow="Delivery"
      title="Shipping"
      intro="How your plants travel from our nursery to your door."
      sections={[
        { heading: 'Delivery areas & timing', body: [LOREM] },
        { heading: 'Shipping charges', body: [LOREM] },
        { heading: 'How we pack live plants', body: [LOREM] },
        { heading: 'Damaged on arrival?', body: [LOREM] },
      ]}
    />
  );
}
