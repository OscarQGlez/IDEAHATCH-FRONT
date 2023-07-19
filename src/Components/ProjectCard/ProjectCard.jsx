import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function ProjectCard() {
  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg',borderRadius:"0px" }}>
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
        <Typography 
          fontSize="xl"
          fontWeight="xl"
          sx={{ mt:  1}}
        >
            title
        </Typography>
        
        

        <Typography
          fontSize="xl"
          fontWeight="xl"
          sx={{ mt:  2}}
        >
          subtitle
        </Typography>

        <Link
          href="#product-card"
          fontWeight="xl"
          color="neutral"
          textColor="text.primary"
          overlay
          
          style={{ mt:  1, justifyContent: 'end', underline: 'none',textDecoration: 'none'}}
        >
          + Info
        </Link>

        
      </CardContent>
      <CardOverflow >
        <Button variant="solid" color="primary" size="lg" sx={{borderRadius:"0"}}>
          Contribuir
        </Button>
      </CardOverflow>
    </Card>
  );
}