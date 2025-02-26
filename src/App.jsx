import { Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Main from './components/Main';
import Skill from './components/Skill';
import AllGitHubProjects from './components/AllGitHubProjects';
import Resume from './components/Resume';
import ContactHeader from './components/ContactHeader';
import MemberDetail from './components/MemberDetails';
import Pricing from './components/Pricing';
import Success from './components/Success';
import Cancel from './components/Cancel';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY); // Използвай .env файл за ключовете

// По-нататък използвайте `VITE_BACKEND_URL` за API заявки, напр.:
//const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<AllGitHubProjects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactHeader />} />
        <Route path="/member/:memberName" element={<MemberDetail />} />
        <Route path="/checkout" element={<Pricing />} />
        <Route path="/success" element={<Success />} />
        <Route path="/canceled" element={<Cancel />} />
      </Routes>
    </Elements>
  );
}

export default App;
