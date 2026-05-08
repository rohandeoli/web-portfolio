import { Box, CircularProgress, CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect, useMemo, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { themes } from './theme';
import Clarity from '@microsoft/clarity';
import Layout from './components/Layout/Layout';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy load pages
const Home = lazy(() => import('./pages/Home/Home'));
const Education = lazy(() => import('./pages/Education/Education'));
const Experience = lazy(() => import('./pages/Experience/Experience'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const Loading = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <CircularProgress sx={{ color: 'primary.main' }} />
  </Box>
);

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
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
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
          <ErrorBoundary>
            <Layout setTheme={toggleTheme}>
              <AnimatedRoutes />
            </Layout>
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App;
