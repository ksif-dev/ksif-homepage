import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from './components/Layout';
import { AboutUs } from './pages/AboutUs';
import { Alumni } from './pages/Alumni';
import { Home } from './pages/Home';
import { TeamRoute } from './pages/TeamRoute';
import './index.css';

const root = document.getElementById('root');
if (!root) throw new Error('#root element not found');

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/team/:slug" element={<TeamRoute />} />
          <Route path="/alumni" element={<Alumni />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
