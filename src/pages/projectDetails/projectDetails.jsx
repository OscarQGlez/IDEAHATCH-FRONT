//import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';

import Typography from '@mui/joy/Typography';

import { Grid } from '@mui/material';

export default function projectDetails() {
  return (
    <Card sx={{ width: 520, maxWidth: '100%', boxShadow: 'lg',borderRadius:"0px" }}>
      <CardOverflow >
        <AspectRatio sx={{ minWidth: 200, borderRadius:"0" }}>
          <img
            src="https://source.unsplash.com/random?project"
            srcSet="https://source.unsplash.com/random?project"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      
      </CardOverflow>
      
      <CardContent>
        <Grid container spacing={3}> 
            <Grid item xs={12}>
                <Typography 
                fontSize="xl"
                fontWeight="xl"
                sx={{ mt:  1}}
                >
                    Title:
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography
                fontSize="xl"
                
                sx={{ mt:  1}}
                >
                Subtitle:
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography
                fontSize="xl"
                sx={{ mt: 1}}
                >
                Categoria:
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography
                fontSize="xl"
                sx={{ mt:  1}}
                >
                Fecha Limite:
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography
                fontSize="xl"
                sx={{ mt:  1}}
                >
                Descipcion:
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography
                fontSize="xl"
                sx={{ mt: 1 }}
                >
                Estado:
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography
                fontSize="xl"
                sx={{ mt:  2}}
                >
                Goal Amount:
                </Typography>
            </Grid>            

        </Grid>
      </CardContent>
      <CardOverflow >
        <Button variant="solid" color="primary" size="lg" sx={{borderRadius:"0"}}>
          Contribuir
        </Button>
      </CardOverflow>
    </Card>
  );
}