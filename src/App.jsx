import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import StoryMode from './pages/StoryMode';
import TsStoryMode from './pages/TsStoryMode';
import InterviewPrep from './pages/InterviewPrep';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="story" element={<StoryMode />} />
          <Route path="typescript" element={<TsStoryMode />} />
          <Route path="interview" element={<InterviewPrep />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
