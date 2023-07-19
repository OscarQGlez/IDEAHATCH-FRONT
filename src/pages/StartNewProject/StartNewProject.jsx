import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
//import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//mport AddressForm from './AddressForm';
import GoalAmount from './GoalAmount';
//import Review from './Review';
import DataBasicForm from './DataBasicForm';
import { createProject } from '../../services/project.services';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const steps = ['Datos del proyecto', 'Objetivo de financiación'];



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [projectData, setProjectData] = useState({
    title: '',
    subtitle: '',
    Project_Description: '',
    Deadline: '',
    Status: 'Activo',
    Project_Creation_Date: new Date().toISOString(),
    Project_Update_Date: new Date().toISOString(),
    Project_Type: '',
    categories:'',
    goal_amount:0,
  });
  const navigate = useNavigate();


  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSave = async () => {
    try {
      const res = await createProject(projectData);
      console.log("Proyecto guardado exitosamente");
      //return redirect ("www.google.com")
      navigate("/")
      
    } catch (error) {
         console.log("Error al enviar la solicitud de crear un Proyecto:", error);
      
    }
  }
  const handleChange = (e) => {
    const {name,value} = e.target;
    //console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<hola')
    console.log(e)
    setProjectData ((prevData) => ({ ...prevData, [name]: value}))
  }


  function getStepContent(step) {
  switch (step) {
    case 0:
      return <DataBasicForm handleChange={handleChange}/>;
    case 1:
      return <GoalAmount handleChange={handleChange}/>;
    default:
      throw new Error('Unknown step');
  }
}

  return (

    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Crear un Nuevo Proyecto
          </Typography>

          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? (
            <form>
              <Typography variant="h5" gutterBottom>
                Tu proyecto se ha creado.
              </Typography>
        
            </form>
          ) : (
            <form>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                
                <Button
                  variant="contained"
                  onClick={activeStep === steps.length - 1 ? handleSave : handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Guardar' : 'Next'}
                </Button>
              </Box>
            </form>
          )}
        </Paper>
        
      </Container>
    </ThemeProvider>
  );
}