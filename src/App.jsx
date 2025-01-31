import { Route, Routes } from 'react-router-dom';

import Main from './components/Main';
import Skill from './components/Skill';

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
    </>
  );
}

export default App;
