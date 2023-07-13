//import React, { useState } from 'react'
// import '../../Components/Header/Header'
//import Header from '../../Components/Header/Header'
import { AppBar, Box,  Divider, InputAdornment, Link, TextField, Toolbar } from '@mui/material'
import { GridSearchIcon } from '@mui/x-data-grid';
import { useState } from 'react';

function Home() {
  const categoriesn = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ];  

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <Box>
      <AppBar 
        maxWidth="fixed" 
        component="div"
        position="static" 
        elevation={0} 
        sx={{ zIndex: 0, bgcolor: 'white', color:'black'}} 
        >
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent:'space-around', overflowX: 'auto' }}
        >
          {categoriesn.map((categoryn) => (
            <Link
              color="inherit"
              noWrap
              key={categoryn.title}
              variant="body2"
              href='/'
              sx={{ p: 1, flexShrink: 0, textDecoration: 'none' }}
              
            >
              {categoryn.title}
            </Link>
          ))}
        </Toolbar>

        <Divider sx={{ backgroundColor: 'black' }} />
        
        </AppBar>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', padding:"20%"}}>
          <TextField
            id="search"
            type="search"
            label="Search"
            value={searchTerm}
            onChange={handleChange}
            sx={{ width: 900,   }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <GridSearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>

  )
}

export default Home