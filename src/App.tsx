import { CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect, useMemo, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import './App.css';
import { themes } from './theme';
import Clarity from '@microsoft/clarity';
import Layout from './components/Layout/Layout';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy load pages
const Home = lazy(() => import('./pages/Home/Home'));
const Education = lazy(() => import('./pages/Education/Education'));
const Experience = lazy(() => import('./pages/Experience/Experience'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

// Simple loading fallback
const Loading = () => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#E3405F' }}>Loading...</div>;

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
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {

  useEffect(() => {
    const clarityId = import.meta.env.VITE_CLARITY_ID || '';
    if (clarityId && clarityId !== '') {
      Clarity.init(clarityId);
    }
  }, []);

  // Initialize theme from localStorage or default to dark
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const savedMode = localStorage.getItem('themeMode');
    return (savedMode as 'light' | 'dark') || 'dark';
  });

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
          <Suspense fallback={<Loading />}>
            <Layout setTheme={toggleTheme}>
              <AnimatedRoutes />
            </Layout>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App;
