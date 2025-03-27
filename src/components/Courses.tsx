import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import CalculateIcon from '@mui/icons-material/Calculate';

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  students: string;
  topics: string[];
  icon: React.ReactNode;
  color: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  students,
  topics,
  icon,
  color,
}) => {
  const encodedMessage = encodeURIComponent(`Hi, I'm interested in the ${title} course. Can you provide more information?`);
  
  return (
    <MotionPaper
      elevation={0}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      sx={{
        height: '100%',
        borderRadius: 4,
        overflow: 'hidden',
        position: 'relative',
        bgcolor: 'background.paper',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          '& .course-details': {
            opacity: 1,
            visibility: 'visible',
          },
        },
      }}
    >
      {/* Main Content */}
      <Box
        className="course-content"
        sx={{
          p: 3,
          height: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            p: 1.5,
            borderRadius: 2,
            bgcolor: `${color}15`,
            color: color,
            mb: 2,
          }}
        >
          {icon}
        </Box>
        <Typography variant="h5" gutterBottom fontWeight="600">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            color: 'text.secondary',
            fontSize: '0.875rem',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AccessTimeIcon fontSize="small" />
            {duration}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <GroupIcon fontSize="small" />
            {students}
          </Box>
        </Box>
      </Box>

      {/* Overlay Content */}
      <Box
        className="course-details"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          p: 3,
          opacity: 0,
          visibility: 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
          bgcolor: `${color}F2`,
          color: 'white',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h6" gutterBottom fontWeight="600">
          Key Topics
        </Typography>
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          {topics.map((topic, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1,
                '&::before': {
                  content: '""',
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  bgcolor: 'white',
                  mr: 1,
                },
              }}
            >
              {topic}
            </Typography>
          ))}
        </Box>
        <Button
          variant="contained"
          startIcon={<WhatsAppIcon />}
          onClick={() => window.open(`https://wa.me/+919876543210?text=${encodedMessage}`, '_blank')}
          sx={{
            mt: 2,
            width: '100%',
            bgcolor: 'white',
            color: color,
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.9)',
            },
          }}
        >
          Enquire Now
        </Button>
      </Box>
    </MotionPaper>
  );
};

const Courses = () => {
  const courses = [
    {
      title: 'Mathematics Excellence',
      description: 'Master mathematics from basic to advanced levels with personalized attention and proven methodologies.',
      duration: '6 Months',
      students: '500+ Students',
      icon: <CalculateIcon fontSize="large" />,
      color: '#2563eb',
      topics: [
        'Advanced Calculus',
        'Linear Algebra',
        'Probability & Statistics',
        'Number Theory',
        'Problem Solving Techniques'
      ]
    },
    {
      title: 'B.A., B.Com., M.Com.',
      description: 'Comprehensive commerce and arts education with focus on practical applications and industry relevance.',
      duration: 'Flexible',
      students: '1000+ Students',
      icon: <SchoolIcon fontSize="large" />,
      color: '#7c3aed',
      topics: [
        'Business Studies',
        'Economics',
        'Accountancy',
        'Marketing',
        'Financial Management'
      ]
    },
    {
      title: 'B.Pharma',
      description: 'Expert guidance in pharmaceutical studies with emphasis on research and practical knowledge.',
      duration: '4 Years',
      students: '300+ Students',
      icon: <ScienceIcon fontSize="large" />,
      color: '#059669',
      topics: [
        'Pharmaceutical Chemistry',
        'Pharmacology',
        'Medicinal Chemistry',
        'Drug Design',
        'Clinical Research'
      ]
    },
    {
      title: '7th & 8th All Subjects',
      description: 'Foundational education covering all subjects with focus on building strong academic base.',
      duration: '12 Months',
      students: '800+ Students',
      icon: <AutoStoriesIcon fontSize="large" />,
      color: '#dc2626',
      topics: [
        'Mathematics',
        'Science',
        'English',
        'Social Studies',
        'Language Skills'
      ]
    }
  ];

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        sx={{ textAlign: 'center', mb: 6 }}
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
          Our Courses
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ maxWidth: 800, mx: 'auto', mb: 2 }}
        >
          Choose from our wide range of specialized courses designed to help you excel
        </Typography>
      </MotionBox>

      <Grid container spacing={4}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CourseCard {...course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Courses;
