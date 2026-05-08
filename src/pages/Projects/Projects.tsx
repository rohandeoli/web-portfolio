import { Box, Container, Typography, useTheme } from "@mui/material";
import { portfolioData } from "../../portfolioData";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { motion } from "framer-motion";
import PageMeta from "../../components/PageMeta/PageMeta";

function Projects() {
  const theme = useTheme();
  const { projects, projectsHeader } = portfolioData;

  return (
    <Box sx={{ py: 10 }}>
      <PageMeta pageTitle="Projects" description={projectsHeader.description} path="/projects" />
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
              {projectsHeader.title}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: "700px", mx: "auto", lineHeight: 1.6 }}
            >
              {projectsHeader.description}
            </Typography>
          </motion.div>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ height: "100%" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;
