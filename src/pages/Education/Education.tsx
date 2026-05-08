import { Box, Container, Paper, Typography, useTheme, Link } from "@mui/material";
import { motion } from "framer-motion";
import { portfolioData } from "../../portfolioData";
import { Award, Calendar, ExternalLink } from "lucide-react";
import PageMeta from "../../components/PageMeta/PageMeta";

const Education = () => {
  const theme = useTheme();
  const { degrees, certifications, greeting } = portfolioData;

  return (
    <Box sx={{ py: 10 }}>
      <PageMeta
        pageTitle="Education"
        description={`Education and Certifications of ${greeting.full_name}`}
        path="/education"
      />
      <Container maxWidth="lg">
        {/* Degrees Section */}
        <Box sx={{ mb: 12 }}>
          <Box sx={{ mb: 6, textAlign: "center" }}>
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
                Education
              </Typography>
            </motion.div>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {degrees.map((degree, index) => (
              <motion.div
                key={degree.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  sx={{
                    p: 4,
                    backgroundColor: theme.palette.custom.surface,
                    border: `1px solid ${theme.palette.custom.border}`,
                    borderRadius: 4,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: theme.palette.primary.main,
                      boxShadow: `0 0 30px ${theme.palette.primary.main}15`,
                    },
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3 }}>
                    <Box>
                      <Typography variant="h5" fontWeight={700} sx={{ mb: 1 }}>
                        {degree.title}
                      </Typography>
                      <Typography variant="h6" color="primary" fontWeight={600}>
                        {degree.subtitle}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography variant="body2" color="text.secondary" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Calendar size={16} />
                        {degree.duration}
                      </Typography>
                      {degree.website_link && (
                        <Link
                          href={degree.website_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ color: theme.palette.primary.main, display: "flex", alignItems: "center", justifyContent: "flex-end", mt: 1, gap: 0.5 }}
                        >
                          <Typography variant="caption" fontWeight={600}>Website</Typography>
                          <ExternalLink size={14} />
                        </Link>
                      )}
                    </Box>
                  </Box>

                  <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
                    {degree.descriptions.map((desc, dIndex) => (
                      <Typography
                        key={dIndex}
                        variant="body2"
                        sx={{ 
                          mb: 1.5, 
                          color: "text.secondary",
                          display: "flex",
                          gap: 1.5,
                          "&::before": {
                            content: '"⚡"',
                            fontSize: "0.8rem",
                          }
                        }}
                      >
                        {desc.replace("⚡ ", "")}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Certifications Section */}
        <Box>
          <Box sx={{ mb: 6, textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 2,
                  fontWeight: 800,
                  color: theme.palette.text.primary,
                }}
              >
                Certifications
              </Typography>
            </motion.div>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
            }}
          >
            {certifications.map((cert, index) => (
              <Box key={cert.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ height: "100%" }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      height: "100%",
                      backgroundColor: theme.palette.custom.surface,
                      border: `1px solid ${theme.palette.custom.border}`,
                      borderRadius: 4,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                        boxShadow: `0 0 30px ${theme.palette.primary.main}15`,
                      },
                    }}
                  >
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                        <Box sx={{ p: 1, borderRadius: 2, backgroundColor: `${theme.palette.primary.main}15`, color: theme.palette.primary.main }}>
                          <Award size={24} />
                        </Box>
                        <Typography variant="h6" fontWeight={700}>
                          {cert.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                        {cert.subtitle}
                      </Typography>
                    </Box>

                    <Link
                      href={cert.certificate_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: theme.palette.primary.main,
                        textDecoration: "none",
                        fontWeight: 700,
                        "&:hover": { textDecoration: "underline" }
                      }}
                    >
                      View Certificate <ExternalLink size={16} />
                    </Link>
                  </Paper>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Education;
