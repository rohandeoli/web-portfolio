import { Component, ErrorInfo, ReactNode } from "react";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

const ErrorFallback = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 12, textAlign: "center" }}>
        <Typography variant="h3" fontWeight={800} sx={{ mb: 2 }}>
          Something went wrong
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>
          The page failed to load. This is usually transient — try refreshing.
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<RefreshCw size={18} />}
          onClick={() => window.location.reload()}
          sx={{
            px: 4,
            py: 1.5,
            backgroundColor: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
              boxShadow: `0 0 20px ${theme.palette.primary.main}66`,
            },
          }}
        >
          Reload page
        </Button>
      </Box>
    </Container>
  );
};

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
