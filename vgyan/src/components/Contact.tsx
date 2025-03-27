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
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Contact = () => {
  const theme = useTheme();

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
      details: ['+91 868-494-7536'],
      color: '#059669',
      link: 'tel:+918684947536',
    },
    {
      icon: <EmailIcon fontSize="large" />,
      title: 'Email Us',
      details: ['contact@vgyan.com'],
      color: '#dc2626',
      link: 'mailto:contact@vgyan.com',
    },
    {
      icon: <WhatsAppIcon fontSize="large" />,
      title: 'WhatsApp',
      details: ['+91 868-494-7536'],
      color: '#25D366',
      link: 'https://wa.me/+918684947536',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <MotionPaper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            elevation={3}
            sx={{ p: { xs: 3, md: 4 }, borderRadius: 2 }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
              Get in Touch
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
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

        {/* Contact Information */}
        <Grid item xs={12} md={5}>
          <Grid container spacing={3}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} md={12} key={info.title}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={2}
                    component="a"
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      borderRadius: 2,
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Box sx={{ color: info.color }}>{info.icon}</Box>
                    <Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        {info.title}
                      </Typography>
                      {info.details.map((detail, i) => (
                        <Typography key={i} color="text.secondary">
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                  </Paper>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
