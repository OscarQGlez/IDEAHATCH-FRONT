import { createProject } from '../../services/project.services';

const steps = ['Datos del proyecto', 'Objetivo de financiación'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [projectData, setProjectData] = React.useState({
    creator_id: '',
    title: '',
    subtitle: '',
    Project_Description: '',
    Deadline: '',
    Status: '', // Declararlo inicialmente vacío
    Project_Creation_Date: new Date().toISOString(), // Declararlo con la fecha actual
    Project_Update_Date: new Date().toISOString(), // Declararlo con la fecha actual
    Project_Type: '',
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSave = async () => {
    try {
      const res = await createProject(projectData);
      console.log('Proyecto guardado exitosamente');
      // Aquí puedes agregar lógica adicional después de guardar en la base de datos
    } catch (error) {
      console.log('Error al enviar la solicitud de crear un Proyecto:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <DataBasicForm handleChange={handleChange} />;
      case 1:
        return <GoalAmount handleChange={handleChange} />;
      default:
        throw new Error('Unknown step');
    }
  }

  // TODO remove, this demo shouldn't need to reset the theme.
  const defaultTheme = createTheme();

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
