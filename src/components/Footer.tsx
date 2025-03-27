import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const courses = [
    '7th & 8th All Subjects',
    '9th & 10th Science and Mathematics',
    'Physics, Chemistry and Mathematics',
    '11th, 12th, B.Sc., M.Sc.',
  ];

  const handleWhatsAppClick = (number: string) => {
    window.open(`https://wa.me/${number.replace(/[^0-9]/g, '')}`, '_blank');
  };

  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        pt: 6,
        pb: 3,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Institute Info */}
          <Grid item xs={12} md={4}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component={RouterLink}
                to="/"
                sx={{
                  display: 'block',
                  mb: 3,
                  textDecoration: 'none',
                }}
              >
                <Box
                  component="img"
                  src="/logo.png"
                  alt="V-GYAN"
                  sx={{
                    height: 50,
                    width: 'auto',
                    display: 'block',
                  }}
                />
              </Box>
              <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
                Empowering minds through quality education since 2015. Join us in your journey towards academic excellence.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <IconButton
                  color="inherit"
                  onClick={() => window.open('https://facebook.com', '_blank')}
                  sx={{ mr: 1 }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => window.open('https://instagram.com', '_blank')}
                  sx={{ mr: 1 }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                  sx={{ mr: 1 }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => handleWhatsAppClick('+918684947536')}
                >
                  <WhatsAppIcon />
                </IconButton>
              </Box>
            </MotionBox>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box component="nav">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    display: 'block',
                    mb: 1,
                    color: 'inherit',
                    textDecoration: 'none',
                    opacity: 0.9,
                    '&:hover': {
                      opacity: 1,
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Courses */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Our Courses
            </Typography>
            <Box>
              {courses.map((course) => (
                <Typography
                  key={course}
                  sx={{
                    mb: 1,
                    opacity: 0.9,
                  }}
                >
                  {course}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Copyright */}
        <Typography
          variant="body2"
          align="center"
          sx={{ opacity: 0.8 }}
        >
          {currentYear} V-GYAN. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
