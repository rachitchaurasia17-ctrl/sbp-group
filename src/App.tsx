import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import IntroTunnel from './components/IntroTunnel';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import CSRPage from './pages/CSRPage';

export default function App() {
  const location = useLocation();
  // Only show the intro on the very first route the tab lands on, and only
  // if that route is home — so opening a project/category in a new tab skips it,
  // but a normal home visit always gets the cinematic tunnel.
  const [introDone, setIntroDone] = useState(() => location.pathname !== '/');

  const isHome = location.pathname === '/';

  const finishIntro = () => setIntroDone(true);

  return (
    <div className="bg-[var(--bg)]">
      {isHome && !introDone && <IntroTunnel onDone={finishIntro} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/residential" element={<CategoryPage />} />
        <Route path="/commercial" element={<CategoryPage />} />
        <Route path="/industrial" element={<CategoryPage />} />
        <Route path="/csr" element={<CSRPage />} />
        <Route path="/project/:slug" element={<ProjectDetailPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}
