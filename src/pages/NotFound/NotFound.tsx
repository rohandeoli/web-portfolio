import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Home } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { portfolioData } from "../../portfolioData";

const NotFound = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { greeting } = portfolioData;

  return (
    <Container maxWidth="lg">
      <Helmet>
        <title>404 | {greeting.full_name}</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Box
        sx={{
          py: { xs: 8, md: 15 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "7rem", md: "12rem" },
              fontWeight: 800,
              lineHeight: 1,
              mb: 4,
              background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </Typography>
          <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
            Page not found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
            This page doesn't exist or has been moved.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<Home size={20} />}
            onClick={() => navigate("/")}
            sx={{
              px: 4,
              py: 1.5,
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                boxShadow: `0 0 20px ${theme.palette.primary.main}66`,
              },
            }}
          >
            Back to home
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default NotFound;
