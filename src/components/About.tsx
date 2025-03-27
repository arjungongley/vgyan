import React from 'react';
import { Container, Typography, Grid, Box, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const stats = [
  {
    value: '15+',
    label: 'Years Experience',
    icon: SchoolIcon,
    color: '#2563eb',
  },
  {
    value: '5000+',
    label: 'Students Taught',
    icon: GroupsIcon,
    color: '#7c3aed',
  },
  {
    value: '95%',
    label: 'Success Rate',
    icon: EmojiEventsIcon,
    color: '#059669',
  },
  {
    value: '4.8',
    label: 'Average Rating',
    icon: StarIcon,
    color: '#dc2626',
  },
];

const facultyMembers = [
  {
    name: 'Dr. Vishal Dhiman',
    role: 'Physics Expert',
    specialization: 'Ph.D. in Physics',
    experience: '15+ years of teaching experience',
    contact: {
      whatsapp: '+919876543210',
      email: 'contact@vgyan.com',
      linkedin: 'linkedin.com/company/vgyan',
    },
  },
  {
    name: 'Neha Dhiman',
    role: 'Mathematics Expert',
    specialization: 'M.Sc. Mathematics, HTET, CTET',
    experience: '10+ years of teaching experience',
    contact: {
      whatsapp: '+919876543210',
      email: 'contact@vgyan.com',
      linkedin: 'linkedin.com/company/vgyan',
    },
  },
];

const About = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl">
        {/* Hero Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #2563eb 30%, #7c3aed 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About V-Gyan Institute
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}
          >
            Empowering students with quality education and personalized guidance since 2008
          </Typography>
        </MotionBox>

        {/* Stats Section */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <MotionPaper
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  borderRadius: 4,
                  bgcolor: 'background.paper',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    bgcolor: stat.color,
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: `${stat.color}15`,
                    color: stat.color,
                    mb: 2,
                  }}
                >
                  <stat.icon fontSize="large" />
                </Box>
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {stat.label}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>

        {/* Mission Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ mb: 10 }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom fontWeight="bold">
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                At V-Gyan Institute, we are committed to providing exceptional educational experiences that empower students to achieve their academic goals and realize their full potential.
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                Our personalized approach to teaching ensures that each student receives the attention and guidance they need to excel in their studies and build a strong foundation for their future.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Key Highlights:
                </Typography>
                {[
                  'Experienced and dedicated faculty members',
                  'Personalized attention to each student',
                  'Comprehensive study materials',
                  'Regular assessments and feedback',
                  'Focus on conceptual understanding',
                ].map((point, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 1,
                      '&::before': {
                        content: '""',
                        width: 6,
                        height: 6,
                        bgcolor: 'primary.main',
                        borderRadius: '50%',
                        mr: 2,
                      },
                    }}
                  >
                    {point}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: '100%',
                  height: 400,
                  borderRadius: 4,
                  bgcolor: '#f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <SchoolIcon sx={{ fontSize: 120, color: 'primary.main', opacity: 0.5 }} />
              </Box>
            </Grid>
          </Grid>
        </MotionBox>

        {/* Faculty Section */}
        <Typography
          variant="h3"
          gutterBottom
          fontWeight="bold"
          sx={{ textAlign: 'center', mb: 6 }}
        >
          Our Expert Faculty
        </Typography>
        <Grid container spacing={4}>
          {facultyMembers.map((faculty, index) => (
            <Grid item xs={12} md={6} key={index}>
              <MotionPaper
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  bgcolor: 'background.paper',
                  display: 'flex',
                  gap: 3,
                  alignItems: 'center',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    transform: 'translateY(-4px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Avatar
                  sx={{ 
                    width: 120, 
                    height: 120,
                    bgcolor: 'primary.main',
                  }}
                >
                  <PersonIcon sx={{ fontSize: 60 }} />
                </Avatar>
                <Box>
                  <Typography variant="h5" gutterBottom fontWeight="600">
                    {faculty.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary.main" gutterBottom>
                    {faculty.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {faculty.specialization}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {faculty.experience}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <WhatsAppIcon
                      sx={{ color: '#25D366', cursor: 'pointer' }}
                      onClick={() => window.open(`https://wa.me/${faculty.contact.whatsapp}`, '_blank')}
                    />
                    <EmailIcon
                      sx={{ color: '#EA4335', cursor: 'pointer' }}
                      onClick={() => window.open(`mailto:${faculty.contact.email}`, '_blank')}
                    />
                    <LinkedInIcon
                      sx={{ color: '#0A66C2', cursor: 'pointer' }}
                      onClick={() => window.open(`https://${faculty.contact.linkedin}`, '_blank')}
                    />
                  </Box>
                </Box>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
