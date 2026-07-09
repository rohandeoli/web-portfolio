import { Box, Button, Container, Typography, useTheme, Paper, TextField, CircularProgress, Alert } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../portfolioData";
import { FileText, Send } from "lucide-react";
import { Icon } from "@iconify-icon/react";
import PageMeta from "../../components/PageMeta/PageMeta";

const Contact = () => {
  const theme = useTheme();
  const { contactData, socialMediaLinks, greeting } = portfolioData;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const res = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again later.');
    }
  };

  const socials = [
    { icon: "ri:github-fill", name: "GitHub", url: socialMediaLinks.github, color: "#EDEDED" },
    { icon: "ri:linkedin-box-fill", name: "LinkedIn", url: socialMediaLinks.linkedin, color: "#0077B5" },
    { icon: "ri:twitter-x-fill", name: "Twitter", url: socialMediaLinks.twitter, color: "#1DA1F2" },
    { icon: "ri:mail-fill", name: "Email", url: greeting.mail, color: theme.palette.primary.main },
  ];

  return (
    <Box sx={{ py: 10 }}>
      <PageMeta pageTitle="Contact" description={contactData.description} path="/contact" />
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
              
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center", mb: 4 }}>
                {socials.map((social) => (
                  <motion.div
                    key={social.name}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant="outlined"
                      href={social.url}
                      target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                      rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
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

              <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  size="large"
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
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
              </Box>

              <Typography variant="h5" fontWeight={600} sx={{ mb: 3, textAlign: 'left' }}>
                Send a Message
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3, textAlign: 'left' }}>
                <TextField 
                  label="Name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  fullWidth 
                  variant="outlined" 
                />
                <TextField 
                  label="Email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  fullWidth 
                  variant="outlined" 
                />
                <TextField 
                  label="Message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  fullWidth 
                  multiline 
                  rows={4} 
                  variant="outlined" 
                />
                
                {status === 'success' && (
                  <Alert severity="success">Message sent successfully! I will get back to you soon.</Alert>
                )}
                {status === 'error' && (
                  <Alert severity="error">{errorMessage}</Alert>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  disabled={status === 'loading'}
                  endIcon={status === 'loading' ? <CircularProgress size={20} color="inherit" /> : <Send size={20} />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    backgroundColor: theme.palette.primary.main,
                    fontWeight: 700,
                    alignSelf: { xs: 'stretch', sm: 'flex-start' },
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
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
