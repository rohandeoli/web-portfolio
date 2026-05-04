import { CssBaseline, ThemeProvider } from '@mui/material';
import { createElement, useEffect, useMemo, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import { themes } from './theme';
import Clarity from '@microsoft/clarity';

// Lazy load pages
const Home = lazy(() => import('./pages/Home/Home'));
const Education = lazy(() => import('./pages/Education/Education'));
const Experience = lazy(() => import('./pages/Experience/Experience'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Splash = lazy(() => import('./pages/Splash/Splash'));

// Simple loading fallback
const Loading = () => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#E3405F' }}>Loading...</div>;

function App() {

  useEffect(() => {
    // Check if the environment variable is available, otherwise use a placeholder
    const clarityId = import.meta.env.VITE_CLARITY_ID || '';
    if (clarityId && clarityId !== '') {
      Clarity.init(clarityId);
    }
  }, []);

  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const theme = useMemo(() => {
    return themes[mode];
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const settings = {
    isSplash: true, // Set this to true or false based on your requirement
  }

  // Define all possible routes with their components
  let routeConfig = [
    { path: "/", component: settings.isSplash ? Splash : Home },
  ];

  // Add the splash route only if it's not the default route
  if (settings.isSplash) {
    routeConfig.push({ path: "/splash", component: Splash });
  }

  routeConfig = [...routeConfig,
  { path: "/home", component: Home },
  { path: "/education", component: Education },
  { path: "/experience", component: Experience },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* This normalizes the CSS */}
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            {routeConfig.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={createElement(route.component, {
                  theme: theme,
                  setTheme: toggleTheme,
                })}
              />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
