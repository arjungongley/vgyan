import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const menuItems = ['Home', 'Courses', 'About', 'Contact'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path: string) => {
    if (path === 'Home') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname === `/${path.toLowerCase()}`;
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          key={item}
          component={Link}
          to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
          onClick={handleDrawerToggle}
          sx={{
            color: isActive(item) ? 'primary.main' : 'text.primary',
            '&:hover': {
              bgcolor: 'rgba(37, 99, 235, 0.1)',
            },
          }}
        >
          <ListItemText
            primary={item}
            primaryTypographyProps={{
              fontWeight: isActive(item) ? 600 : 400,
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <MotionBox
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar
        position="sticky"
        sx={{
          bgcolor: 'background.paper',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar>
          <Box
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <Box
              component="img"
              src="/logo.png"
              alt="V-GYAN"
              sx={{
                height: 40,
                width: 'auto',
                display: 'block',
              }}
            />
          </Box>

          {isMobile ? (
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  component={Link}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  sx={{
                    color: isActive(item) ? 'primary.main' : 'text.primary',
                    fontWeight: isActive(item) ? 600 : 400,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: isActive(item) ? '100%' : '0%',
                      height: '2px',
                      bgcolor: 'primary.main',
                      transform: 'translateX(-50%)',
                      transition: 'width 0.3s ease-in-out',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>
    </MotionBox>
  );
};

export default Navbar;
