import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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
      <Header setTheme={setTheme} />
      
      <Box component="main" sx={{ flexGrow: 1, paddingTop: "80px" }}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
