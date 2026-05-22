import { Moon, Sun, Menu as MenuIcon, X } from "lucide-react";
import { AppBar, Box, Container, IconButton, Toolbar, Typography, useTheme, Button, useScrollTrigger } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { portfolioData } from "../../portfolioData";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Education', path: '/education' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Writing', path: '/writing' },
  { name: 'Contact', path: '/contact' },
];

function Header(props: { setTheme: () => void; }) {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const { greeting } = portfolioData;

  // The Writing route is content-driven: hide its nav item until at least one
  // article exists (the route is gated the same way in App.tsx).
  const visibleNavItems = navItems.filter(
    (item) => item.path !== "/writing" || portfolioData.writing.length > 0
  );

  // Recompute only when the scroll trigger crosses the threshold or the theme
  // changes, instead of allocating a new sx object on every render.
  const appBarSx = useMemo(
    () => ({
      backgroundColor: trigger ? `${theme.palette.background.default}CC` : "transparent",
      backdropFilter: trigger ? "blur(10px)" : "none",
      borderBottom: trigger ? `1px solid ${theme.palette.custom.border}` : "none",
      transition: "all 0.3s ease",
      color: theme.palette.text.primary,
    }),
    [trigger, theme]
  );

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  // While the mobile menu is open: lock body scroll, trap focus inside it, move
  // focus to the first nav item, and close on Escape. On close, restore the
  // previous scroll state and return focus to the toggle button.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const getFocusable = () =>
      Array.from(menuRef.current?.querySelectorAll<HTMLElement>("button") ?? []);

    // Captured now since the toggle never remounts; used to restore focus on close.
    const toggleButton = toggleButtonRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Defer initial focus until the menu has mounted/painted.
    const focusTimer = window.setTimeout(() => getFocusable()[0]?.focus(), 0);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(focusTimer);
      document.body.style.overflow = prevOverflow;
      toggleButton?.focus();
    };
  }, [isMobileMenuOpen]);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={appBarSx}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 80, justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            noWrap
            onClick={() => navigate("/")}
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.02em',
              cursor: 'pointer',
              color: theme.palette.primary.main,
              display: 'flex',
              alignItems: 'center',
              fontFamily: '"JetBrains Mono Variable", "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
            }}
          >
            {greeting.logo_name}
          </Typography>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {visibleNavItems.map((item) => (
              <Button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                sx={{
                  color: location.pathname === item.path ? theme.palette.custom.accentText : theme.palette.text.primary,
                  px: 2,
                  '&:hover': {
                    backgroundColor: `${theme.palette.primary.main}10`,
                    color: theme.palette.custom.accentText,
                  },
                  fontWeight: location.pathname === item.path ? 700 : 500,
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              onClick={props.setTheme}
              aria-label={`Switch to ${theme.palette.mode === 'dark' ? 'light' : 'dark'} mode`}
              sx={{ 
                color: theme.palette.text.primary,
                '&:hover': { color: theme.palette.primary.main }
              }}
            >
              {theme.palette.mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </IconButton>

            <IconButton
              ref={toggleButtonRef}
              sx={{ display: { xs: 'flex', md: 'none' }, color: theme.palette.text.primary }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
              style={{
                position: 'fixed',
                top: 80,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999,
              }}
            />
            <motion.div
              ref={menuRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{
                position: 'fixed',
                top: 80,
                left: 0,
                right: 0,
                backgroundColor: theme.palette.background.default,
                borderBottom: `1px solid ${theme.palette.custom.border}`,
                padding: '20px',
                zIndex: 1000,
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {visibleNavItems.map((item) => (
                  <Button
                    key={item.name}
                    fullWidth
                    onClick={() => handleNavClick(item.path)}
                    sx={{
                      justifyContent: 'flex-start',
                      color: location.pathname === item.path ? theme.palette.custom.accentText : theme.palette.text.primary,
                      py: 1.5,
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </AppBar>
  );
}

export default Header;
