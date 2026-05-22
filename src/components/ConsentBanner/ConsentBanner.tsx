import { useState } from "react";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

/** localStorage key holding the analytics consent decision: "granted" | "denied". */
export const CONSENT_KEY = "analyticsConsent";

interface ConsentBannerProps {
  /** Called when the visitor accepts — wire this to analytics initialization. */
  onAccept: () => void;
}

/**
 * Lightweight GDPR consent banner. Shows only until the visitor makes a choice,
 * which is persisted in localStorage so it never reappears once decided.
 */
const ConsentBanner = ({ onAccept }: ConsentBannerProps) => {
  const theme = useTheme();
  const [visible, setVisible] = useState(
    () => localStorage.getItem(CONSENT_KEY) === null
  );

  const decide = (granted: boolean) => {
    localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    if (granted) onAccept();
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          role="dialog"
          aria-label="Analytics consent"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1300,
            backgroundColor: theme.palette.custom.surface,
            borderTop: `1px solid ${theme.palette.custom.border}`,
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { sm: "center" },
                gap: 2,
                py: 2,
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ flexGrow: 1, lineHeight: 1.6 }}
              >
                This site uses Microsoft Clarity to understand how visitors interact
                with it. No analytics are loaded until you accept.
              </Typography>
              <Box sx={{ display: "flex", gap: 1.5, flexShrink: 0 }}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => decide(false)}
                  sx={{
                    borderColor: theme.palette.custom.border,
                    color: theme.palette.text.primary,
                  }}
                >
                  Decline
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => decide(true)}
                  sx={{ backgroundColor: theme.palette.primary.main }}
                >
                  Accept
                </Button>
              </Box>
            </Box>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsentBanner;
