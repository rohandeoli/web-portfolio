import { Box, Container, Typography, useTheme, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { portfolioData } from "../../portfolioData";
import { Code2, Server, Layout as LayoutIcon, Cpu, Globe } from "lucide-react";
import { Icon } from "@iconify-icon/react";
import React from "react";

const iconMap: Record<string, React.ReactNode> = {
  "Front End Development": <LayoutIcon size={24} />,
  "Back End Development": <Server size={24} />,
};

const BentoSkills = () => {
  const theme = useTheme();
  const { skills } = portfolioData;

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography
        variant="h3"
        sx={{ mb: 6, textAlign: "center", fontWeight: 700 }}
      >
        Technical Arsenal
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" },
          gap: 3,
        }}
      >
        {skills.data.map((skillGroup, index) => (
          <Box key={index} sx={{ gridColumn: { xs: "span 1", md: "span 6" } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ height: "100%" }}
            >
              <Paper
                sx={{
                  p: 4,
                  height: "100%",
                  backgroundColor: theme.palette.custom.surface,
                  border: `1px solid ${theme.palette.custom.border}`,
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: theme.palette.primary.main,
                    boxShadow: `0 0 30px ${theme.palette.primary.main}15`,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: `${theme.palette.primary.main}15`,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {iconMap[skillGroup.title] || <Code2 size={24} />}
                  </Box>
                  <Typography variant="h5" fontWeight={600}>
                    {skillGroup.title}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 4 }}>
                  {skillGroup.softwareSkills.map((skill, sIndex) => (
                    <Box
                      key={sIndex}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        px: 2,
                        py: 0.8,
                        borderRadius: 2,
                        backgroundColor: `${theme.palette.custom.border}50`,
                        border: `1px solid ${theme.palette.custom.border}`,
                        transition: "all 0.2s",
                        "&:hover": {
                          backgroundColor: `${theme.palette.primary.main}10`,
                          borderColor: theme.palette.primary.main,
                        },
                      }}
                    >
                      <Icon
                        icon={skill.fontAwesomeClassname}
                        style={{ ...skill.style }}
                        width={20}
                        height={20}
                      />
                      <Typography variant="body2" fontWeight={500}>
                        {skill.skillName}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
                  {skillGroup.skills.map((point, pIndex) => (
                    <Typography
                      key={pIndex}
                      component="li"
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 1.5,
                        display: "flex",
                        gap: 1.5,
                        "&::before": {
                          content: '"⚡"',
                          fontSize: "0.8rem",
                        },
                      }}
                    >
                      {point.replace("⚡ ", "")}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Box>
        ))}

        {/* Additional "Stats" or Info Cards for Bento feel */}
        <Box sx={{ gridColumn: { xs: "span 1", md: "span 4" } }}>
          <Paper
            sx={{
              p: 4,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: theme.palette.custom.surface,
              border: `1px solid ${theme.palette.custom.border}`,
              borderRadius: 4,
            }}
          >
            <Globe size={40} color={theme.palette.primary.main} style={{ marginBottom: "16px" }} />
            <Typography variant="h6" fontWeight={600}>Based in</Typography>
            <Typography color="text.secondary">Bengaluru, Karnataka, India 🇮🇳</Typography>
          </Paper>
        </Box>
        
        <Box sx={{ gridColumn: { xs: "span 1", md: "span 8" } }}>
          <Paper
            sx={{
              p: 4,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: theme.palette.custom.surface,
              border: `1px solid ${theme.palette.custom.border}`,
              borderRadius: 4,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -20,
                right: -20,
                opacity: 0.05,
                transform: "rotate(15deg)",
              }}
            >
              <Cpu size={120} />
            </Box>
            <Typography variant="h6" fontWeight={600} mb={1}>Current Focus</Typography>
            <Typography color="text.secondary">
              Architecting high-performance web applications and migrating legacy systems 
              to modern Micro Frontend architectures.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default BentoSkills;
