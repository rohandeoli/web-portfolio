import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CommandPalette from "../CommandPalette/CommandPalette";

interface LayoutProps {
  children: ReactNode;
  setTheme: () => void;
}

const Layout = ({ children, setTheme }: LayoutProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        color: theme.palette.text.primary,
      }}
    >
      <CommandPalette setTheme={setTheme} />
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
          px: 2,
          py: 1,
          backgroundColor: theme.palette.primary.main,
          color: "#fff",
          fontWeight: 700,
          borderRadius: 1,
          textDecoration: "none",
          zIndex: 9999,
          transform: "translateY(-200%)",
          transition: "transform 0.2s",
          "&:focus": {
            transform: "translateY(0)",
          },
        }}
      >
        Skip to content
      </Box>
      <Header setTheme={setTheme} />

      <Box
        component="main"
        id="main-content"
        tabIndex={-1}
        sx={{
          flexGrow: 1,
          paddingTop: "80px",
          "&:focus": {
            outline: `2px solid ${theme.palette.primary.main}`,
            outlineOffset: "-4px",
          },
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
