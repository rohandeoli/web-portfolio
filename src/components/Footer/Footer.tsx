import { Box, Container, Link, Typography, useTheme } from "@mui/material";
import { portfolioData } from "../../portfolioData";
import { Heart } from "lucide-react";
import { Icon } from "@iconify-icon/react";

function Footer() {
  const theme = useTheme();
  const { socialMediaLinks, greeting } = portfolioData;

  const socials = [
    { icon: "ri:github-fill", url: socialMediaLinks.github, label: "GitHub" },
    { icon: "ri:linkedin-box-fill", url: socialMediaLinks.linkedin, label: "LinkedIn" },
    { icon: "ri:twitter-x-fill", url: socialMediaLinks.twitter, label: "Twitter" },
    { icon: "ri:mail-fill", url: greeting.mail, label: "Email" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: "auto",
        borderTop: `1px solid ${theme.palette.custom.border}`,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: theme.palette.primary.main,
                fontFamily: '"JetBrains Mono Variable", "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
                mb: 1,
              }}
            >
              {greeting.logo_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Crafting digital experiences with precision and passion.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 3 }}>
            {socials.map((social) => (
              <Link
                key={social.url}
                href={social.url}
                aria-label={social.label}
                target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                sx={{
                  color: "text.secondary",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Icon icon={social.icon} width={24} height={24} />
              </Link>
            ))}
          </Box>

          <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-end" }, gap: 0.5 }}
            >
              Made with <Heart size={14} color={theme.palette.primary.main} fill={theme.palette.primary.main} /> by {greeting.full_name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              © {new Date().getFullYear()} All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
