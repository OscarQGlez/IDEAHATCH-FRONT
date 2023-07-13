import React from 'react'
import './Header.css'


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { Link} from 'react-router-dom';



const pages = [
  { label: 'Log In', link: '/login' },
  { label: 'sign Up', link: '/signup' },
];

function Header() {
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: "#6e00ee"}}>
      <Container maxWidth="fixed">
        <Toolbar >
          <Typography
            variant="h4"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily:'cursive',
              fontWeight: 700,
              letterSpacing: '.15rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Idea Hatch
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end',paddingRight:"20px" }}>
            {pages.map((page) => (
                <Button
                  key={page.label}
                  component={Link}
                  to={page.link}
                  onClick={handleCloseNavMenu}
                  style={{
                  marginLeft: '50px'}}
                  variant="contained"
                      color="secondary"
                      sx={{  height:"100%"}}
                >
                  {page.label}
                </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;