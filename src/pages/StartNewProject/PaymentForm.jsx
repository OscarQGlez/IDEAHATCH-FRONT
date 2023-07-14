//import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
/* import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'; */
import { InputAdornment } from '@mui/material';

export default function PaymentForm() {
  return (
    <form>
      <Typography variant="h5" gutterBottom>
        Objetivo de financiación
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h8" gutterBottom>
            Establezca una meta alcanzable que cubra lo que necesita para completar su proyecto.
        </Typography>
        <Typography variant="h8" gutterBottom>
            La financiación es todo o nada. Si no cumples tu objetivo, no recibirás ningún dinero.
        </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="goal amount"
            label="Goal amount"
            fullWidth
            autoComplete="goal amount"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€</InputAdornment>
              ),
            }}
          />
        </Grid>
        
        <Grid item xs={12}>
        
        </Grid>
      </Grid>
    </form>
  );
}