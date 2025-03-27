import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ScienceIcon from '@mui/icons-material/Science';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

interface WhatsAppButtonProps {
  text: string;
  sx?: object;
}

const WhatsAppButton = ({ text, sx = {} }: WhatsAppButtonProps) => (
  <Button
    variant="contained"
    size="small"
    startIcon={<WhatsAppIcon />}
    onClick={() => window.open('https://wa.me/+918684947536', '_blank')}
    sx={{
      px: { xs: 2.5, md: 3 },
      py: { xs: 0.5, md: 0.6 },
      minHeight: '32px',
      borderRadius: 20,
      fontSize: { xs: '0.875rem', md: '0.9rem' },
      fontWeight: 500,
      lineHeight: 1,
      textTransform: 'none',
      bgcolor: '#25D366',
      boxShadow: '0 2px 5px rgba(37, 211, 102, 0.15)',
      width: { xs: '100%', sm: 'auto' },
      minWidth: { sm: '130px' },
      '&:hover': {
        bgcolor: '#22c15e',
        boxShadow: '0 3px 8px rgba(37, 211, 102, 0.25)',
      },
      '& .MuiSvgIcon-root': {
        fontSize: '1.1rem',
        marginRight: '4px',
      },
      ...sx,
    }}
  >
    {text}
  </Button>
);

const Home = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  React.useEffect(() => {
    if (ref.current) {
      inViewRef(ref.current);
    }
  }, [inViewRef]);

  const sliderRef = React.useRef<Slider | null>(null);

  const NextArrow = () => (
    <Button
      onClick={() => sliderRef.current?.slickNext()}
      sx={{
        position: 'absolute',
        right: { xs: -20, md: -50 },
        top: '50%',
        transform: 'translateY(-50%)',
        minWidth: 'auto',
        width: 40,
        height: 40,
        borderRadius: '50%',
        bgcolor: 'white',
        boxShadow: 2,
        color: 'primary.main',
        '&:hover': {
          bgcolor: 'primary.main',
          color: 'white',
        },
      }}
    >
      <NavigateNextIcon />
    </Button>
  );

  const PrevArrow = () => (
    <Button
      onClick={() => sliderRef.current?.slickPrev()}
      sx={{
        position: 'absolute',
        left: { xs: -20, md: -50 },
        top: '50%',
        transform: 'translateY(-50%)',
        minWidth: 'auto',
        width: 40,
        height: 40,
        borderRadius: '50%',
        bgcolor: 'white',
        boxShadow: 2,
        color: 'primary.main',
        '&:hover': {
          bgcolor: 'primary.main',
          color: 'white',
        },
      }}
    >
      <NavigateBeforeIcon />
    </Button>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    dotsClass: 'slick-dots custom-dots',
    appendDots: (dots: React.ReactNode) => (
      <Box
        sx={{
          position: 'relative',
          bottom: '-30px',
          '& .custom-dots': {
            position: 'relative',
            bottom: 0,
            '& li': {
              margin: '0 6px',
              '& button': {
                width: 12,
                height: 12,
                padding: 0,
                '&::before': {
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  opacity: 0.3,
                  transition: 'all 0.3s ease',
                },
              },
              '&.slick-active button::before': {
                opacity: 1,
                transform: 'scale(1.2)',
              },
            },
          },
        }}
      >
        {dots}
      </Box>
    ),
  };

  const courses = [
    {
      title: '7th & 8th All Subjects',
      icon: <AutoStoriesIcon fontSize="large" />,
      description: 'Comprehensive foundation program covering all subjects with focus on conceptual learning.',
      highlights: [
        'All NCERT subjects covered',
        'Weekly tests and assessments',
        'Parent-teacher meetings',
        'Doubt clearing sessions'
      ],
      stats: '500+ successful students',
      color: '#3b82f6',
      duration: '12 months',
    },
    {
      title: '9th & 10th Science and Mathematics',
      icon: <SchoolIcon fontSize="large" />,
      description: 'Intensive program designed to excel in board exams with special focus on Science and Mathematics.',
      highlights: [
        'Board exam preparation',
        'Practical lab sessions',
        'Mock tests series',
        'Performance analysis'
      ],
      stats: '98% board results',
      color: '#10b981',
      duration: '12 months',
    },
    {
      title: 'Physics, Chemistry and Mathematics',
      icon: <ScienceIcon fontSize="large" />,
      description: 'Advanced PCM program for competitive exam preparation and higher studies.',
      highlights: [
        'JEE/NEET preparation',
        'Advanced problem solving',
        'Weekly mock tests',
        'Personal mentoring'
      ],
      stats: '90% selection rate',
      color: '#8b5cf6',
      duration: '24 months',
    },
    {
      title: '11th, 12th, B.Sc., M.Sc.',
      icon: <GroupsIcon fontSize="large" />,
      description: 'Specialized coaching for higher education in science and mathematics streams.',
      highlights: [
        'College subjects support',
        'Entrance exam prep',
        'Research guidance',
        'Career counseling'
      ],
      stats: '85% distinction rate',
      color: '#f59e0b',
      duration: 'Flexible',
    },
    {
      title: 'Mathematics Excellence',
      icon: <TrendingUpIcon fontSize="large" />,
      description: 'Dedicated mathematics program from basic to advanced levels with personalized attention.',
      highlights: [
        'Concept strengthening',
        'Problem solving skills',
        'Competition preparation',
        'Regular assessments'
      ],
      stats: '95% improvement rate',
      color: '#ec4899',
      duration: '6 months',
    },
    {
      title: 'B.A., B.Com., M.Com. B.Pharma',
      icon: <EmojiEventsIcon fontSize="large" />,
      description: 'Specialized mathematics and statistics support for commerce and pharmacy students.',
      highlights: [
        'Subject expertise',
        'Exam preparation',
        'Practical applications',
        'Industry insights'
      ],
      stats: '92% success rate',
      color: '#6366f1',
      duration: 'Flexible',
    },
  ];

  const features = [
    {
      icon: <AutoStoriesIcon fontSize="large" />,
      title: 'Personalized Learning',
      description: 'Small batch sizes ensure individual attention and customized learning paths for each student.',
      stats: '10-15 students per batch',
      color: '#3b82f6',
    },
    {
      icon: <EmojiEventsIcon fontSize="large" />,
      title: 'Proven Track Record',
      description: 'Consistently high success rates in board exams and competitive examinations.',
      stats: '95% success rate',
      color: '#10b981',
    },
    {
      icon: <GroupsIcon fontSize="large" />,
      title: 'Expert Faculty',
      description: 'Highly qualified teachers with years of experience in their respective subjects.',
      stats: '10+ years experience',
      color: '#8b5cf6',
    },
    {
      icon: <SchoolIcon fontSize="large" />,
      title: 'Comprehensive Study Material',
      description: 'Well-structured study materials, practice papers, and regular assessments.',
      stats: '1000+ practice questions',
      color: '#f59e0b',
    },
    {
      icon: <TrendingUpIcon fontSize="large" />,
      title: 'Performance Tracking',
      description: 'Regular progress monitoring and detailed feedback to parents.',
      stats: 'Monthly reports',
      color: '#ec4899',
    },
    {
      icon: <CheckCircleIcon fontSize="large" />,
      title: 'Modern Infrastructure',
      description: 'Well-equipped classrooms with modern teaching aids and comfortable seating.',
      stats: 'AC classrooms',
      color: '#6366f1',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'hidden',
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
          <Grid container spacing={4} sx={{ py: { xs: 6, md: 10 } }} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 800,
                    mb: 2,
                    background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Transform Your Future with V-Gyan
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 500,
                    color: 'text.secondary',
                    mb: 3,
                  }}
                >
                  <Typewriter
                    options={{
                      strings: [
                        'Expert Faculty',
                        'Personalized Attention',
                        'Proven Results',
                        'Interactive Learning'
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Typography>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    gap: { xs: 1.5, sm: 2 },
                    mb: 4,
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: '100%',
                    '& > *': {
                      flex: { sm: '0 0 auto' }
                    }
                  }}
                >
                  <WhatsAppButton text="Join Now" />
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    component={Link}
                    to="/courses"
                    endIcon={<NavigateNextIcon sx={{ fontSize: '1.1rem' }} />}
                    sx={{
                      px: { xs: 2.5, md: 3 },
                      py: { xs: 0.5, md: 0.6 },
                      minHeight: '32px',
                      borderRadius: 20,
                      fontSize: { xs: '0.875rem', md: '0.9rem' },
                      fontWeight: 500,
                      lineHeight: 1,
                      textTransform: 'none',
                      borderWidth: 1,
                      color: '#1976d2',
                      borderColor: 'rgba(25, 118, 210, 0.5)',
                      bgcolor: 'white',
                      width: { xs: '100%', sm: 'auto' },
                      minWidth: { sm: '130px' },
                      boxShadow: 'none',
                      '&:hover': {
                        borderColor: '#1976d2',
                        bgcolor: 'rgba(25, 118, 210, 0.04)',
                        boxShadow: 'none',
                      },
                      '& .MuiSvgIcon-root': {
                        marginLeft: '2px',
                      },
                    }}
                  >
                    Explore Courses
                  </Button>
                </Box>
                <Grid container spacing={2}>
                  {[
                    { icon: <CheckCircleIcon />, text: '10+ Years of Excellence' },
                    { icon: <GroupsIcon />, text: '1000+ Success Stories' },
                    { icon: <EmojiEventsIcon />, text: '95% Success Rate' },
                    { icon: <AutoStoriesIcon />, text: 'Comprehensive Study Material' },
                  ].map((item, index) => (
                    <Grid item xs={6} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ color: 'primary.main' }}>{item.icon}</Box>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {item.text}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: 200,
                    height: 200,
                    background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, rgba(37,99,235,0.1) 100%)',
                    borderRadius: '50%',
                    zIndex: -1,
                  },
                }}
              >
                <Box
                  component="img"
                  src="/images/2148898690.jpg"
                  alt="V-Gyan Education"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: 500,
                    objectFit: 'cover',
                    borderRadius: 4,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    transform: 'scale(1.02)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Courses Section */}
      <Box sx={{ py: { xs: 3, md: 4 } }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: { xs: 2, md: 3 } }}
        >
          <Typography variant="h2" sx={{ mb: 1 }}>
            Our Courses
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: '700px', mx: 'auto', mb: 3 }}
          >
            Explore our diverse range of courses designed to help you excel
          </Typography>
        </MotionBox>

        <Box sx={{ position: 'relative', mx: { xs: 1, md: 4 }, mb: { xs: 3, md: 4 } }}>
          <PrevArrow />
          <Slider ref={sliderRef} {...sliderSettings}>
            {courses.map((course, index) => (
              <Box key={index} sx={{ p: 1 }}>
                <MotionPaper
                  elevation={2}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  sx={{
                    p: 2.5,
                    height: 340,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'all 0.3s ease-in-out',
                      '& .course-icon': {
                        transform: 'scale(1.1)',
                        color: 'white',
                        backgroundColor: course.color,
                      },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box
                      className="course-icon"
                      sx={{
                        display: 'inline-flex',
                        p: 1.25,
                        borderRadius: '12px',
                        bgcolor: `${course.color}15`,
                        color: course.color,
                        transition: 'all 0.3s ease-in-out',
                        mb: 2,
                        alignSelf: 'flex-start',
                      }}
                    >
                      {course.icon}
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        minHeight: 52,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        mb: 1,
                      }}
                    >
                      {course.title}
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
                        minHeight: 36,
                      }}
                    >
                      {course.description}
                    </Typography>

                    {/* Course Highlights */}
                    <Box sx={{ mb: 'auto' }}>
                      {course.highlights.slice(0, 2).map((highlight, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 0.5,
                            color: 'text.secondary',
                            fontSize: '0.8125rem',
                            '&::before': {
                              content: '""',
                              width: 3,
                              height: 3,
                              bgcolor: course.color,
                              borderRadius: '50%',
                              mr: 1,
                            },
                          }}
                        >
                          {highlight}
                        </Typography>
                      ))}
                    </Box>

                    {/* Course Stats and Duration */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pt: 1.5,
                        borderTop: '1px solid',
                        borderColor: 'divider',
                        mt: 2,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 600,
                          color: course.color,
                        }}
                      >
                        {course.stats}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          bgcolor: `${course.color}15`,
                          color: course.color,
                          px: 1.25,
                          py: 0.375,
                          borderRadius: '8px',
                          fontWeight: 500,
                        }}
                      >
                        {course.duration}
                      </Typography>
                    </Box>
                  </Box>
                </MotionPaper>
              </Box>
            ))}
          </Slider>
          <NextArrow />
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 3, md: 4 } }}>
        <Container maxWidth="lg">
          <MotionBox
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            sx={{ textAlign: 'center', mb: { xs: 2, md: 3 } }}
          >
            <Typography variant="h2" sx={{ mb: 1 }}>
              Why Choose Us
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: '700px', mx: 'auto', mb: 3 }}
            >
              Experience the perfect blend of academic excellence
            </Typography>
          </MotionBox>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <MotionPaper
                  elevation={2}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  sx={{
                    p: 4,
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'all 0.3s ease-in-out',
                      '& .feature-icon': {
                        transform: 'scale(1.1)',
                        color: 'white',
                      },
                      '& .feature-overlay': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {/* Background Overlay */}
                  <Box
                    className="feature-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: feature.color,
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      zIndex: 0,
                    }}
                  />

                  {/* Content */}
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Box
                      className="feature-icon"
                      sx={{
                        display: 'inline-flex',
                        p: 2,
                        borderRadius: '50%',
                        bgcolor: `${feature.color}20`,
                        color: feature.color,
                        transition: 'all 0.3s ease-in-out',
                        mb: 2,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        transition: 'color 0.3s ease-in-out',
                        '.feature-overlay:hover &': {
                          color: 'white',
                        },
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      sx={{
                        mb: 2,
                        transition: 'color 0.3s ease-in-out',
                        '.feature-overlay:hover &': {
                          color: 'white',
                        },
                      }}
                    >
                      {feature.description}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        color: feature.color,
                        transition: 'color 0.3s ease-in-out',
                        '.feature-overlay:hover &': {
                          color: 'white',
                        },
                      }}
                    >
                      {feature.stats}
                    </Typography>
                  </Box>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>

          {/* Call to Action */}
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            sx={{
              mt: 8,
              p: 6,
              textAlign: 'center',
              borderRadius: 4,
              background: 'linear-gradient(45deg, #2563eb 30%, #7c3aed 90%)',
              color: 'white',
              boxShadow: '0 4px 20px rgba(37, 99, 235, 0.2)',
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Ready to Start Your Learning Journey?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Join V-Gyan Institute and unlock your potential with our expert guidance
            </Typography>
            <WhatsAppButton 
              text="Enroll Now" 
              sx={{ 
                px: 6,
                fontSize: '1.2rem',
                fontWeight: 600,
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'grey.100',
                  color: 'primary.dark',
                },
              }} 
            />
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
