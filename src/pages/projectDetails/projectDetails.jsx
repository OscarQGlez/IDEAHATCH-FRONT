//import * as React from 'react';
import AspectRatio from '@mui/joy/react';
import { Button, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';


export default function projectDetails() {

  // Utiliza el hook useLocation para obtener la ubicación actual y el estado pasado.
  const location = useLocation();
  const card = location.state.card; // Extrae el objeto 'card' del estado

  return (
    <Card sx={{ width: 520, maxWidth: '100%', boxShadow: 'lg',borderRadius:"0px" }}>
      <CardMedia >
        <AspectRatio sx={{ minWidth: 200, borderRadius:"0" }}>
          <img
            src="https://source.unsplash.com/random?project"
            srcSet="https://source.unsplash.com/random?project"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      
      </CardMedia>
      
      <CardContent>
        <Grid container spacing={3}> 
            <Grid item xs={12}>
                <Typography 
                fontSize="xl"
                fontWeight="xl"
                sx={{ mt:  1}}
                >
                    Title: {card.title}
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography
                fontSize="xl"
                
                sx={{ mt:  1}}
                >
                Subtitle: {card.subtitle}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography
                fontSize="xl"
                sx={{ mt: 1}}
                >
                Categoria: {card.category_name}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography
                fontSize="xl"
                sx={{ mt:  1}}
                >
                Fecha Limite: {card.Deadline}
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography
                fontSize="xl"
                sx={{ mt:  1}}
                >
                Descipcion: {card.Project_Description}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography
                fontSize="xl"
                sx={{ mt: 1 }}
                >
                Estado: {card.Status}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography
                fontSize="xl"
                sx={{ mt:  2}}
                >
                Goal Amount: {card.goal_amount}
                </Typography>
            </Grid>            

        </Grid>
      </CardContent>
      <CardContent >
        <Button variant="solid" color="primary" size="lg" sx={{borderRadius:"0"}}>
          Contribuir
        </Button>
      </CardContent>
    </Card>
  );
}