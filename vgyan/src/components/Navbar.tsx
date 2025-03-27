import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Courses', path: '/courses' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {pages.map((page) => (
        <ListItem
          button
          component={Link}
          to={page.path}
          key={page.title}
          onClick={handleDrawerToggle}
          selected={location.pathname === page.path}
          sx={{
            '&.Mui-selected': {
              bgcolor: 'primary.light',
              '&:hover': {
                bgcolor: 'primary.light',
              },
            },
          }}
        >
          <ListItemText
            primary={page.title}
            sx={{
              color: location.pathname === page.path ? 'primary.main' : 'inherit',
              fontWeight: location.pathname === page.path ? 600 : 400,
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
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

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 1 }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={Link}
                to={page.path}
                sx={{
                  px: 2,
                  color: location.pathname === page.path ? 'primary.main' : 'text.primary',
                  fontWeight: location.pathname === page.path ? 600 : 400,
                  '&:hover': {
                    bgcolor: 'primary.light',
                  },
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* Mobile Navigation */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better mobile performance
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
