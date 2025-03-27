import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MotionBox = motion(Box);

const courses = [
  {
    title: 'Mathematics',
    description: 'Master mathematical concepts from basic to advanced levels',
    image: '/images/math.jpg',
  },
  {
    title: 'Science',
    description: 'Explore physics, chemistry, and biology with hands-on experiments',
    image: '/images/science.jpg',
  },
  {
    title: 'English',
    description: 'Develop strong communication and writing skills',
    image: '/images/english.jpg',
  },
  // Add more courses as needed
];

const Courses = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          mb: 6,
          background: 'linear-gradient(45deg, #2196F3 30%, #1565C0 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Our Courses
      </Typography>

      <Grid container spacing={4}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={course.title}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  boxShadow: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  },
                }}
              >
                <Box
                  component="img"
                  src={course.image}
                  alt={course.title}
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    borderRadius: 1,
                    mb: 2,
                  }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  {course.title}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 2, flex: 1 }}>
                  {course.description}
                </Typography>
                <Button
                  variant="outlined"
                  endIcon={<NavigateNextIcon />}
                  sx={{
                    alignSelf: 'flex-start',
                    textTransform: 'none',
                    borderRadius: 2,
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Courses;
