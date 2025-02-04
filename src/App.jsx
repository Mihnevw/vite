import { Route, Routes } from 'react-router-dom';

import Main from './components/Main';
import Skill from './components/Skill';
import AllGitHubProjects from './components/AllGitHubProjects';
import Resume from './components/Resume';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<AllGitHubProjects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
