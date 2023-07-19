//import React, { useState } from 'react'
// import '../../Components/Header/Header'
//import Header from '../../Components/Header/Header'
import { AppBar, Box,  Container,  Divider, Grid, InputAdornment, Link, TextField, Toolbar } from '@mui/material'
import { GridSearchIcon } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getAllProjectEager } from '../../services/project.services';
/* import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import { getAllProjectEager } from '../../services/project.services'; */

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

  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    async function handleProjects () {
      try {
        const allProjects = await getAllProjectEager()
        console.log(allProjects)
        setProjects(allProjects)
      } catch (error) {
        console.error('Error al obtener las todos los proyectos:', error);
      }
    }
    handleProjects ()
  }, [])



  /* const [projectAll, setProjectAll] = useState([]);
  const [projectCard, setRandomProjectCards] = useState([]);


  useEffect(() => {
    async function fetchProjectcards() {
      try {
        const projectCard = await getAllProjectEager
        setProjectAll(projectCard)
        const randomprojects = getRandomIndexArray(projectCard.length, 4).map ((index) => projectCard[index])
        setRandomProjectCards(randomTrips);
      } catch (error) {
        console.error("Error al obtener las tarjetas:", error);
      }

    }
    fetchProjectcards()
  }, []);

   function getRandomIndexArray(length, count) {
    const indexArray = [...Array(length).keys()]; // Crear un array con todos los índices
    const shuffledIndexArray = shuffleArray(indexArray); // Mezclar los índices aleatoriamente
    return shuffledIndexArray.slice(0, count); // Obtener los primeros 'count' índices del array mezclado
  }

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray; 
  }*/
  

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }
  console.log(searchTerm)
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

        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding:"5%"}}>
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






          <Grid
          container
          position="relative"
          spacing={4}
          justify="center"
          >  
            {(searchTerm.length!=0) ?
                  projects.filter((project)=>{             
                        console.log(project.title, searchTerm, project.title.includes(searchTerm))
                        return (project.title.includes(searchTerm))
                      }).map((card, index) => (
                  <Grid item xs={12} sm={3} md={3} key={index}>
                    <TripCard propCard={card}/>
                  </Grid>      
                  )) : 
                  randomTripCards           
                    .map((card, index) => (
                  <Grid item xs={12} sm={3} md={3} key={index}>
                    <TripCard propCard={card}/>
                  </Grid>      
                  )) }
          </Grid>



        </Container>
      </Box>

  )
}

export default Home