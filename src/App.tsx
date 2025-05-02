import { CssBaseline, ThemeProvider } from '@mui/material';
import { createElement, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Education from './pages/Education/Education';
import Experience from './pages/Experience/Experience';
import Home from './pages/Home/Home';
import Splash from './pages/Splash/Splash';
import { themes } from './theme';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

function App() {

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
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
