import { Box, CircularProgress, CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect, useMemo, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { themes } from './theme';
import Clarity from '@microsoft/clarity';
import Layout from './components/Layout/Layout';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import ConsentBanner, { CONSENT_KEY } from './components/ConsentBanner/ConsentBanner';
import { portfolioData } from './portfolioData';

// Lazy load pages
const Home = lazy(() => import('./pages/Home/Home'));
const Education = lazy(() => import('./pages/Education/Education'));
const Experience = lazy(() => import('./pages/Experience/Experience'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Writing = lazy(() => import('./pages/Writing/Writing'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const Loading = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <CircularProgress sx={{ color: 'primary.main' }} />
  </Box>
);

// Mirror the resolution done by the inline script in index.html so React and the
// DOM agree on the initial theme (no flash). The inline script stores the resolved
// value on <html data-theme>, so prefer that; fall back to the same logic otherwise.
const getInitialMode = (): 'light' | 'dark' => {
  const domTheme = document.documentElement.dataset.theme;
  if (domTheme === 'light' || domTheme === 'dark') return domTheme;

  const saved = localStorage.getItem('themeMode');
  if (saved === 'light' || saved === 'dark') return saved;

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Suspense fallback={<Loading />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            {portfolioData.writing.length > 0 && (
              <Route path="/writing" element={<Writing />} />
            )}
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

// Initialize Microsoft Clarity. Called on mount when consent was previously
// granted, or immediately when the visitor accepts via the consent banner.
const initClarity = () => {
  const clarityId = import.meta.env.VITE_CLARITY_ID || '';
  if (clarityId) {
    Clarity.init(clarityId);
  }
};

function App() {

  // Only load analytics if the visitor has already granted consent.
  useEffect(() => {
    if (localStorage.getItem(CONSENT_KEY) === 'granted') {
      initClarity();
    }
  }, []);

  // Initialize from the value the inline script already resolved (respects saved
  // preference, then OS preference). Keeps the first React render in sync with the DOM.
  const [mode, setMode] = useState<'light' | 'dark'>(getInitialMode);

  // Keep <html> in sync so the background stays correct after toggling.
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    document.documentElement.style.backgroundColor = mode === 'light' ? '#FAFAFA' : '#0A0A0A';
  }, [mode]);

  const theme = useMemo(() => {
    return themes[mode];
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', newMode);
      return newMode;
    });
  };

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <ErrorBoundary>
            <Layout setTheme={toggleTheme}>
              <AnimatedRoutes />
            </Layout>
          </ErrorBoundary>
        </BrowserRouter>
        <ConsentBanner onAccept={initClarity} />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App;
