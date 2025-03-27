import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

interface WhatsAppButtonProps {
  text: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  sx?: object;
}

const WhatsAppButton = ({ text, startIcon, endIcon, fullWidth = false, sx = {} }: WhatsAppButtonProps) => (
  <Button
    variant="contained"
    size="large"
    color="primary"
    fullWidth={fullWidth}
    startIcon={startIcon}
    endIcon={endIcon}
    sx={{
      px: 4,
      py: 1.5,
      borderRadius: 2,
      fontSize: '1.1rem',
      textTransform: 'none',
      boxShadow: 2,
      bgcolor: '#25D366',
      '&:hover': {
        bgcolor: '#128C7E',
        boxShadow: 4,
      },
      ...sx,
    }}
  >
    {text}
  </Button>
);

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill in all required fields (Name, Phone, and Message)');
      return;
    }

    // Format WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `🎓 *V-Gyan Institute - Contact Form*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `${formData.email ? `📧 *Email:* ${formData.email}\n` : ''}` +
      `${formData.subject ? `📝 *Subject:* ${formData.subject}\n` : ''}\n` +
      `💬 *Message:*\n${formData.message}\n\n` +
      `🌟 Thank you for contacting V-Gyan Institute!`
    );

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/+918684947536?text=${whatsappMessage}`, '_blank');

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon fontSize="large" />,
      title: 'Visit Us',
      details: [
        'House No. 536',
        'Opposite M.G. High School',
        'Raipur Rani, Haryana 134203'
      ],
      color: '#2563eb',
      link: 'https://goo.gl/maps/YqQ8YZ3K8ZQ8Z3Zq9',
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      title: 'Call Us',
      details: ['+91 98765 43210'],
      color: '#059669',
      link: 'tel:+919876543210',
    },
    {
      icon: <WhatsAppIcon fontSize="large" />,
      title: 'Chat with Us',
      details: ['+91 98765 43210'],
      color: '#25D366',
      link: 'https://wa.me/+919876543210',
    },
    {
      icon: <EmailIcon fontSize="large" />,
      title: 'Email Us',
      details: ['contact@vgyan.com'],
      color: '#dc2626',
      link: 'mailto:contact@vgyan.com',
    },
  ];

  return (
    <Box 
      sx={{ 
        bgcolor: 'background.default',
        minHeight: '100vh',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              color: 'primary.main',
              mb: 2,
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: 800,
              mx: 'auto',
              mb: 6,
              color: 'text.secondary',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            }}
          >
            Have questions about our courses? We're here to help you succeed in your academic journey.
          </Typography>
        </MotionBox>

        {/* Contact Info Cards */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MotionPaper
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                elevation={2}
                onClick={() => window.open(info.link, '_blank')}
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: `${info.color}15`,
                    color: info.color,
                    mb: 2,
                  }}
                >
                  {info.icon}
                </Box>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    fontSize: '1.1rem',
                  }}
                >
                  {info.title}
                </Typography>
                {info.details.map((detail, idx) => (
                  <Typography 
                    key={idx} 
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.95rem',
                    }}
                  >
                    {detail}
                  </Typography>
                ))}
              </MotionPaper>
            </Grid>
          ))}
        </Grid>

        {/* Map and Form Section */}
        <Grid container spacing={4}>
          {/* Map */}
          <Grid item xs={12} md={6}>
            <MotionPaper
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              elevation={2}
              sx={{ height: '100%', minHeight: 500, borderRadius: 2, overflow: 'hidden' }}
            >
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.8026092298387!2d77.01596731511961!3d30.584475981698954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fa3cd74aed4ff%3A0xecc1ea96d29e6a9f!2sM%20G%20High%20School%20Raipur%20Rani!5e0!3m2!1sen!2sin!4v1648405821234!5m2!1sen!2sin"
                sx={{
                  border: 0,
                  width: '100%',
                  height: '100%',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MotionPaper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <MotionPaper
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              elevation={2}
              sx={{ p: 4, borderRadius: 2 }}
            >
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                  mb: 3,
                }}
              >
                Send us a Message
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ '.MuiOutlinedInput-root': { borderRadius: 1.5 } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ '.MuiOutlinedInput-root': { borderRadius: 1.5 } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ '.MuiOutlinedInput-root': { borderRadius: 1.5 } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ '.MuiOutlinedInput-root': { borderRadius: 1.5 } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      rows={4}
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ '.MuiOutlinedInput-root': { borderRadius: 1.5 } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      startIcon={<WhatsAppIcon />}
                      endIcon={<SendIcon />}
                      sx={{
                        py: 1.8,
                        borderRadius: 12,
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        bgcolor: '#25D366',
                        boxShadow: '0 8px 20px rgba(37, 211, 102, 0.25)',
                        '&:hover': {
                          bgcolor: '#25D366',
                          boxShadow: '0 10px 25px rgba(37, 211, 102, 0.35)',
                        },
                      }}
                    >
                      Send Message via WhatsApp
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </MotionPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
