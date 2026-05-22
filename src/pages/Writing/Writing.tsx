import { Box, Card, CardContent, Container, IconButton, Link, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { portfolioData } from "../../portfolioData";
import PageMeta from "../../components/PageMeta/PageMeta";

const Writing = () => {
  const theme = useTheme();
  const { writing } = portfolioData;

  return (
    <Box sx={{ py: 10 }}>
      <PageMeta
        pageTitle="Writing"
        description="Articles and notes by Rohan Deoli on web architecture, performance, and front-end engineering."
        path="/writing"
      />
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                mb: 2,
                fontWeight: 800,
                background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Writing
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: "700px", mx: "auto", lineHeight: 1.6 }}
            >
              Notes and articles on architecture, performance, and front-end engineering.
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
          {writing.map((item, index) => (
            <motion.div
              key={item.url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ height: "100%" }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: theme.palette.custom.surface,
                  border: `1px solid ${theme.palette.custom.border}`,
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: theme.palette.primary.main,
                    boxShadow: `0 0 30px ${theme.palette.primary.main}20`,
                  },
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2, mb: 1 }}>
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      sx={{ color: theme.palette.text.primary, "&:hover": { color: theme.palette.custom.accentText } }}
                    >
                      <Typography variant="h5" fontWeight={700}>
                        {item.title}
                      </Typography>
                    </Link>
                    <IconButton
                      component={Link}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      aria-label={`Read "${item.title}" on ${item.source}`}
                      sx={{ color: theme.palette.text.secondary, "&:hover": { color: theme.palette.primary.main } }}
                    >
                      <ExternalLink size={20} />
                    </IconButton>
                  </Box>

                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.custom.accentText,
                      fontWeight: 600,
                      mb: 2,
                      fontFamily: '"JetBrains Mono Variable", "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
                    }}
                  >
                    {item.source} ·{" "}
                    {item.publishedAt ? <time dateTime={item.publishedAt}>{item.date}</time> : item.date}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Writing;
