import { CheckIcon } from '@heroicons/react/20/solid';

import Navigation from './Nav';
import Footer from './Footer';

const tiers = [
  {
    name: 'Notifications',
    id: 'tier-hobby',
    priceMonthly: '€13',
    stripePriceId: 'price_1QsinuFIBGHUW2XTB5BVoPOZ',
    description: "The perfect plan if you're just getting started with our product.",
    features: ['1 product', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    priceMonthly: '€99',
    stripePriceId: 'price_1QsinuFIBGHUW2XTB5BVoPOZ',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const handleCheckout = async () => {
    fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId: "price_1QsinuFIBGHUW2XTB5BVoPOZ" }) // ❗ Провери дали този priceId е реален
    })
      .then(res => res.json())
      .then(data => {
        console.log("Server response:", data); // ✅ Проверка на отговора
        if (data.url) {
          window.location.href = data.url;
        } else {
          throw new Error("No session URL received");
        }
      })
      .catch(error => console.error("Checkout error:", error));
  };

  return (
    <>
      <div className="bg-gray-800 p-6">
        <Navigation />
      </div>
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
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
              <p className="mt-4 text-4xl font-bold">{tier.priceMonthly}</p>
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
                className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500"
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
