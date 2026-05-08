import { Box, Card, CardContent, Chip, IconButton, Link, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Icon } from "@iconify-icon/react";
import { Project } from "../../types/portfolio.types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const theme = useTheme();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.custom.surface,
          border: `1px solid ${theme.palette.custom.border}`,
          borderRadius: 4,
          overflow: "hidden",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 0 30px ${theme.palette.primary.main}20`,
          },
        }}
      >
        <CardContent sx={{ p: 4, flexGrow: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
            <Typography variant="h5" fontWeight={700} sx={{ color: theme.palette.text.primary }}>
              {project.name}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {project.links.map((link, index) => (
                <IconButton
                  key={index}
                  component={Link}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  aria-label={link.name === "Github" ? `View source code for ${project.name}` : `View live demo for ${project.name}`}
                  sx={{ 
                    color: theme.palette.text.secondary,
                    "&:hover": { color: theme.palette.primary.main }
                  }}
                >
                  {link.name === "Github" ? <Icon icon="ri:github-fill" width={24} height={24} /> : <ExternalLink size={20} />}
                </IconButton>
              ))}
            </Box>
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 3, lineHeight: 1.6, minHeight: "3.2em" }}
          >
            {project.description}
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: "auto" }}>
            {project.languages.map((lang, index) => (
              <Chip
                key={index}
                label={lang.name}
                size="small"
                icon={<Icon icon={lang.iconifyClass} style={{ fontSize: '14px' }} />}
                sx={{
                  backgroundColor: `${theme.palette.custom.border}50`,
                  color: theme.palette.text.primary,
                  border: `1px solid ${theme.palette.custom.border}`,
                  "& .MuiChip-icon": { color: 'inherit' },
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
