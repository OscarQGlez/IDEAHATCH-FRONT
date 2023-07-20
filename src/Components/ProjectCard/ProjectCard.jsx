//import * as React from 'react';
import { AspectRatio } from 'react-aspect-ratio';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
//import Chip from '@mui/joy/Chip';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
//import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';



export default function ProjectCard({propCard}) {
  let [card, setCard] = useState(propCard)
    console.log(card);

  useEffect(() => {
    setCard(propCard)
  }, [propCard])
  
  
  return (
    <Card sx={{ bottom: '0', marginTop: '40px', maxWidth: '100%', boxShadow: 'lg',borderRadius:"0px" }}>
      <CardMedia>
{/*         <AspectRatio sx={{minWidth: 200}}> */}
          <img
            src="https://source.unsplash.com/random?project"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
      {/*   </AspectRatio> */}
      
      </CardMedia>
      
      <CardContent>
        <Typography 
          fontSize="xl"
          fontWeight="xl"
          sx={{ mt:  1}}
        >
            title: {card.title}
        </Typography>
        
        

        <Typography
          fontSize="xl"
          fontWeight="xl"
          sx={{ mt:  2}}
        >
          subtitle: {card.subtitle}
        </Typography>

        <Link
          to={{
            pathname: '/projectDetails',
            state: { card: card }
          }}
          
          fontWeight="xl"
          color="neutral"
          textColor="text.primary"
          overlay
          
          style={{ mt:  1, justifyContent: 'end', underline: 'none',textDecoration: 'none'}}
        >
          + Info
        </Link>

        
      </CardContent>
      <CardContent >
        <Button variant="solid" color="primary" size="lg" sx={{borderRadius:"0"}}>
          Contribuir
        </Button>
      </CardContent>
    </Card>
  );
}