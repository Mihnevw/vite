import { Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Main from './components/Main';
import Skill from './components/Skill';
import AllGitHubProjects from './components/AllGitHubProjects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import MemberDetail from './components/MemberDetails';
import Example from './components/Example';
import Success from './components/Success';
import Cancel from './components/Cancel';

const stripePromise = loadStripe('pk_test_51OK5YbFIBGHUW2XTGWPGsK0rJecA6TFHyhJXGCApccEMnbemZBxWyRE2b9kIGgy5MYmIje11IKNaroEySaFy6yK000JOpbBxqr'); // Използвай .env файл за ключовете

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<AllGitHubProjects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/member/:memberName" element={<MemberDetail />} />
        <Route path="/checkout" element={<Example />} />
        <Route path="/success" element={<Success />} />
        <Route path="/canceled" element={<Cancel />} />
      </Routes>
    </Elements>
  );
}

export default App;
