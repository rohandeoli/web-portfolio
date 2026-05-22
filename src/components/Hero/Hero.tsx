import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { portfolioData } from "../../portfolioData";
import { FileText, Mail } from "lucide-react";
import { Icon } from "@iconify-icon/react";

const Hero = () => {
  const theme = useTheme();
  const { greeting, socialMediaLinks } = portfolioData;

  return (
    <Container maxWidth="lg">
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
              fontSize: { xs: "2.5rem", md: "4.5rem" },
              mb: 2,
              background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {greeting.title} {greeting.title2}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography
            variant="h4"
            component="p"
            color="text.secondary"
            sx={{
              fontSize: { xs: "1.2rem", md: "1.8rem" },
              maxWidth: "800px",
              mb: 6,
              lineHeight: 1.6,
            }}
          >
            {greeting.subTitle}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<FileText size={20} />}
              href={greeting.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 4,
                py: 1.5,
                backgroundColor: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                  boxShadow: `0 0 20px ${theme.palette.primary.main}66`,
                },
              }}
            >
              Resume
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Mail size={20} />}
              href={greeting.mail}
              sx={{
                px: 4,
                py: 1.5,
                borderColor: theme.palette.custom.border,
                color: theme.palette.text.primary,
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  backgroundColor: 'transparent',
                },
              }}
            >
              Get in touch
            </Button>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Box sx={{ mt: 8, display: "flex", gap: 4 }}>
            {[
              { icon: "ri:github-fill", url: socialMediaLinks.github, label: "GitHub Profile" },
              { icon: "ri:linkedin-box-fill", url: socialMediaLinks.linkedin, label: "LinkedIn Profile" },
            ].map((social) => (
              <Box
                key={social.url}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                sx={{
                  color: theme.palette.text.secondary,
                  transition: "color 0.2s",
                  display: "flex",
                  alignItems: "center",
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                <Icon icon={social.icon} width={28} height={28} />
              </Box>
            ))}
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Hero;
