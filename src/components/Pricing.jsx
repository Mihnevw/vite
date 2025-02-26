import { CheckIcon } from '@heroicons/react/20/solid';

import Navigation from './Nav';
import Footer from './Footer';

// Продуктите с данни за цените
const tiers = [
  {
    name: 'Signalix',
    id: 'tier-signalix',
    priceMonthly: '€13',         // Намалена цена
    originalPrice: '€25',        // Оригинална цена
    discountPercentage: 48,
    stripePriceId: 'price_1QsinuFIBGHUW2XTB5BVoPOZ',
    description: "If you want such amazing 'Signals', this plan is for you!",
    features: ['Unlimited Signalix', '1 website', 'Simple analytics'],
    featured: false,
  },
  {
    name: 'Signalix Pro',
    id: 'tier-enterprise',
    priceMonthly: '€55',         // Намалена цена (по-малка)
    originalPrice: '€99',        // Оригинална цена (по-голяма)
    discountPercentage: 44,
    stripePriceId: 'price_1QsinuFIBGHUW2XTB5BVoPOZ',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited Signalix',
      'Unlimited website',
      'Simple analytics',
    ],
    featured: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const handleCheckout = async (priceId) => {
    try {
      const response = await fetch("http://localhost:5000/api/checkout/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId })
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, body: ${text}`);
      }

      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <>
      <div className="bg-gray-800 p-6">
        <Navigation />
      </div>
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold text-indigo-600 uppercase">Pricing</h2>
          <p className="mt-2 text-5xl font-semibold text-gray-900 sm:text-6xl">
            Choose the right plan for you
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier) => (
            <div key={tier.id} className={classNames(tier.featured ? 'bg-gray-900 text-white' : 'bg-white', 'p-8 rounded-3xl shadow-lg')}>
              <h3 className="text-lg font-semibold text-indigo-600">{tier.name}</h3>
              {tier.discountPercentage && (
                <p className="text-sm text-gray-500">
                  ({tier.discountPercentage}% OFF)
                </p>
              )}
              <p className="mt-4 text-4xl font-bold">
                {tier.priceMonthly}
                {tier.originalPrice && (
                  <span className="ml-2 text-base text-gray-500 line-through">
                    {tier.originalPrice}
                  </span>
                )}
              </p>
              <p className="mt-4">{tier.description}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-x-2">
                    <CheckIcon className="h-5 w-5 text-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleCheckout(tier.stripePriceId)}
                className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 cursor-pointer"
              >
                Get started
              </button>
              <p className='flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative'>
                Pay once. Access forever.
              </p>
            </div>
          ))}
        </div>
        <div className='text-center text-xs text-base-content-secondary mt-8'>
          *With great power comes great responsibility. Use Signalix responsibly.
        </div>
      </div>
      <Footer />
    </>
  );
}
