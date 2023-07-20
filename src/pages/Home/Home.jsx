//import React, { useState } from 'react'
// import '../../Components/Header/Header'
//import Header from '../../Components/Header/Header'
import { AppBar, Box,  Container,  Divider, Grid, InputAdornment, Link, TextField, Toolbar } from '@mui/material'
import { GridSearchIcon } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getAllProjectEager } from '../../services/project.services';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
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
  const [randomProjectCards, setRandomProjectCards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);


  useEffect(() => {
    async function handleProjects () {
      try {
        const allProjects = await getAllProjectEager()
        console.log(allProjects)
        setProjects(allProjects)

        const randomIndexArray = getRandomIndexArray(allProjects.length, 4)
        
        const randomProjects= randomIndexArray.map(
          (index) => allProjects[index]
        );
        setRandomProjectCards(randomProjects);
      } catch (error) {
        console.error('Error al obtener las todos los proyectos:', error);
      }
    }
    handleProjects ()
  }, [])


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
  }


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleCategoryClick = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
  };

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
              /* color="inherit" */
              color={selectedCategory === categoryn.title ? 'primary' : 'inherit'}
              noWrap
              key={categoryn.title}
              variant="body2"
              /* href='/' */
              onClick={() => handleCategoryClick(categoryn.title)}
              sx={{ p: 1, flexShrink: 0, textDecoration: 'none' }}
              
            >
              {categoryn.title}
            </Link>
          ))}
        </Toolbar>

        <Divider sx={{ backgroundColor: 'black' }} />
        
        </AppBar>

        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin:"auto", marginTop:'70px'}}>
          {/* display: 'flex', flexDirection: 'column', alignItems: 'center' */}
          <TextField
            id="search"
            type="search"
            label="Search"
            value={searchTerm}
            onChange={handleChange}
            sx={{ width: 900,  position: 'relative' }}
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
            {(searchTerm.length!=0) 
              ? projects
                  .filter((project)=>{             
                    console.log(project.title, searchTerm)
                    return (project.title.includes(searchTerm))})
                  .map((card, index) => (
                    <Grid item xs={12} sm={3} md={3} key={index}>
                       <ProjectCard propCard={card}/>
                    </Grid>      
                  ))
              : selectedCategory
              ? projects
                  .filter((project) => project.category === selectedCategory)
                  .map((card, index) => (
                    <Grid item xs={12} sm={3} md={3} key={index}>
                      <ProjectCard propCard={card} />
                    </Grid>
                  )) 
              : randomProjectCards           
                  .map((card, index) => (
                    <Grid item xs={12} sm={3} md={3} key={index}>
                      <ProjectCard propCard={card}/>
                    </Grid>
                  )) 
            }
          </Grid>



        </Container>
      </Box>

  )
}

export default Home