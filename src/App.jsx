import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { AudioProvider } from './context/AudioContext';
import Home from './pages/Home';
import StoryMode from './pages/StoryMode';
import TsStoryMode from './pages/TsStoryMode';
import CyberStoryMode from './pages/CyberStoryMode';
import InterviewPrep from './pages/InterviewPrep';

function App() {
  return (
    <Router>
      <AudioProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="story" element={<StoryMode />} />
            <Route path="typescript" element={<TsStoryMode />} />
            <Route path="cyber-story" element={<CyberStoryMode />} />
            <Route path="interview" element={<InterviewPrep />} />
          </Route>
        </Routes>
      </AudioProvider>
    </Router>
  );
}

export default App;
