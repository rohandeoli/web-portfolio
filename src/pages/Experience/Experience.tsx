import { Box, Container, Paper, Typography, useTheme, Link } from "@mui/material";
import { motion } from "framer-motion";
import { portfolioData } from "../../portfolioData";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import PageMeta from "../../components/PageMeta/PageMeta";

const Experience = () => {
  const theme = useTheme();
  const { experience } = portfolioData;

  return (
    <Box sx={{ py: 10 }}>
      <PageMeta pageTitle="Experience" description={experience.description} path="/experience" />
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
              {experience.title}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: "800px", mx: "auto", lineHeight: 1.6 }}
            >
              {experience.description}
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ position: "relative", "&::before": {
          content: '""',
          position: "absolute",
          left: { xs: "20px", md: "50%" },
          top: 0,
          bottom: 0,
          width: "2px",
          backgroundColor: theme.palette.custom.border,
          transform: { md: "translateX(-50%)" },
        }}}>
          {experience.sections.flatMap((section) => section.experiences).map((exp, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" },
                alignItems: "center",
                mb: 8,
                position: "relative",
              }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: "20px", md: "50%" },
                  top: "20px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: theme.palette.primary.main,
                  border: `4px solid ${theme.palette.background.default}`,
                  transform: "translateX(-50%)",
                  zIndex: 1,
                  boxShadow: `0 0 10px ${theme.palette.primary.main}66`,
                }}
              />

              <Box sx={{ width: { xs: "100%", md: "45%" }, pl: { xs: 8, md: 0 } }}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      backgroundColor: theme.palette.custom.surface,
                      border: `1px solid ${theme.palette.custom.border}`,
                      borderRadius: 4,
                      position: "relative",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                        boxShadow: `0 0 30px ${theme.palette.primary.main}15`,
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                      <Typography variant="h5" fontWeight={700}>
                        {exp.title}
                      </Typography>
                      <Link
                        href={exp.company_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: theme.palette.primary.main, display: "flex", alignItems: "center" }}
                      >
                        <ExternalLink size={18} />
                      </Link>
                    </Box>
                    
                    <Typography variant="h6" color="primary" sx={{ mb: 2, fontWeight: 600 }}>
                      {exp.company}
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 3 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "text.secondary" }}>
                        <Calendar size={16} />
                        <Typography variant="body2">{exp.duration}</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "text.secondary" }}>
                        <MapPin size={16} />
                        <Typography variant="body2">{exp.location}</Typography>
                      </Box>
                    </Box>

                    <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
                      {exp.description.map((item, iIndex) => (
                        <Typography
                          key={iIndex}
                          variant="body2"
                          sx={{ 
                            mb: 2, 
                            color: "text.secondary",
                            lineHeight: 1.6,
                            display: "flex",
                            gap: 1.5,
                            "&::before": {
                              content: '"•"',
                              color: theme.palette.primary.main,
                              fontWeight: "bold",
                            }
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>

                    {exp.contributions && (
                      <Box sx={{ mt: 3, pt: 3, borderTop: `1px solid ${theme.palette.custom.border}` }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700, color: theme.palette.text.primary }}>
                          Key Contributions:
                        </Typography>
                        {exp.contributions.map((contrib, cIndex) => (
                          <Typography
                            key={cIndex}
                            variant="caption"
                            display="block"
                            sx={{ 
                              color: theme.palette.text.secondary, 
                              mb: 0.5,
                              fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
                            }}
                          >
                            {">"} {contrib}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </Paper>
                </motion.div>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
