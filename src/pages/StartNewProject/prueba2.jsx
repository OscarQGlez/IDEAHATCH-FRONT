import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function DataBasicForm({ handleChange }) {
  return (
    <form>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            fullWidth
            autoComplete="title"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="subtitle"
            name="subtitle"
            label="Subtitle"
            fullWidth
            autoComplete="subtitle"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="category"
            name="category"
            label="Categoria"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
               
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="deadline"
            name="deadline"
            label="Fecha limite"
            fullWidth
            autoComplete="deadline"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            required
            id="descripcion"
            name="descripcion"
            label="Descripcion"
            multiline
            fullWidth
            autoComplete="descripcion"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        
      </Grid>
    </form>
  );
}
