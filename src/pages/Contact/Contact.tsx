import { Box, Button, Container, Typography, useTheme, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { portfolioData } from "../../portfolioData";
import { FileText, Send } from "lucide-react";
import { Icon } from "@iconify-icon/react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const theme = useTheme();
  const { contactData, socialMediaLinks, greeting } = portfolioData;

  const socials = [
    { icon: "ri:github-fill", name: "GitHub", url: socialMediaLinks.github, color: "#EDEDED" },
    { icon: "ri:linkedin-box-fill", name: "LinkedIn", url: socialMediaLinks.linkedin, color: "#0077B5" },
    { icon: "ri:twitter-x-fill", name: "Twitter", url: socialMediaLinks.twitter, color: "#1DA1F2" },
    { icon: "ri:mail-fill", name: "Email", url: greeting.mail, color: theme.palette.primary.main },
  ];

  return (
    <Box sx={{ py: 10 }}>
      <Helmet>
        <title>{greeting.full_name} | Contact</title>
        <meta name="description" content={contactData.description} />
      </Helmet>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontWeight: 800,
                background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {contactData.title}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: "700px", mx: "auto", lineHeight: 1.6 }}
            >
              {contactData.description}
            </Typography>
          </motion.div>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" },
            gap: 4,
            justifyContent: "center",
          }}
        >
          <Box sx={{ gridColumn: { xs: "span 1", md: "2 / span 10", lg: "3 / span 8" } }}>
            <Paper
              sx={{
                p: { xs: 4, md: 6 },
                backgroundColor: theme.palette.custom.surface,
                border: `1px solid ${theme.palette.custom.border}`,
                borderRadius: 4,
                textAlign: "center",
              }}
            >
              <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
                Let's Build Something Together
              </Typography>
              
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center", mb: 6 }}>
                {socials.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant="outlined"
                      href={social.url}
                      target="_blank"
                      startIcon={<Icon icon={social.icon} width={20} height={20} />}
                      sx={{
                        px: 3,
                        py: 1.5,
                        borderColor: theme.palette.custom.border,
                        color: theme.palette.text.primary,
                        "&:hover": {
                          borderColor: social.color,
                          backgroundColor: `${social.color}10`,
                          color: social.color,
                        },
                      }}
                    >
                      {social.name}
                    </Button>
                  </motion.div>
                ))}
              </Box>

              <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 3, justifyContent: "center" }}>
                <Button
                  variant="contained"
                  size="large"
                  href={greeting.resumeLink}
                  target="_blank"
                  startIcon={<FileText size={20} />}
                  sx={{
                    px: 6,
                    py: 2,
                    backgroundColor: theme.palette.primary.main,
                    fontWeight: 700,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
                      boxShadow: `0 0 20px ${theme.palette.primary.main}66`,
                    },
                  }}
                >
                  View My Resume
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  href={greeting.mail}
                  startIcon={<Send size={20} />}
                  sx={{
                    px: 6,
                    py: 2,
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    "&:hover": {
                      backgroundColor: `${theme.palette.primary.main}10`,
                      borderColor: theme.palette.primary.main,
                    },
                  }}
                >
                  Send a Message
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
