import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
/* import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'; */
import {getAllCategories} from  '../../services/categories.service'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function DataBasicForm({handleChange}) {
  
  const [selectcategories, setSelectCategories] = useState([]);
  const [thecategory,setTheCategory] = useState('')

    useEffect(() => {
        async function fetchCategories() {
            try {
            const categories = await getAllCategories() 
            //console.log(categories)
            setSelectCategories(categories)
            
            } catch (error) {
            console.error('Error al obtener las Categories:', error);
            }
        }

        fetchCategories();
    }, []);
  
  function handleSelect(e) {
    setTheCategory(e.target.value)
    //console.log(e)
    handleChange(e)
  }

  return (
    <form>
      {/* {console.log(selectcategories)} */}
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
          <FormControl fullWidth>
            <InputLabel id="category-label">Categoría</InputLabel>
            <Select
              labelId="Categoria"
              id="category"
              name="categories"
              value={thecategory}
              onChange={handleSelect}
              variant="standard"
            >
              {selectcategories.map((selectcategory) => (
                <MenuItem key={selectcategory.id} value={selectcategory.id}>
                   {selectcategory.category_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* <TextField
            id="category"
            name="category_name"
            label="Categoria"
            fullWidth
            variant="standard"
            onChange={handleChange}
          /> */}

        </Grid>
               
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="deadline"
            name="Deadline"
            label="Fecha limite"
            fullWidth
            autoComplete="deadline"
            variant="standard"
            type="date"
            InputLabelProps={{
              shrink: true,
              style: { whiteSpace: 'pre-wrap' }
            }}

            onChange={handleChange}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            required
            id="descripcion"
            name="Project_Description"
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
