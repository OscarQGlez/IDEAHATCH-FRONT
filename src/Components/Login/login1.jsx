import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth.service";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

/*function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:5173/">
        IdeaHatch
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
*/
const defaultTheme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();
  const [isPassVisible, setIsPassVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setIsPassVisible(!isPassVisible);
  };

  const logIn = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    //console.log(password);
    const data = await login(email, password);

    if (!localStorage.getItem("token")) {
      alert("Error: Usuario o contraseña inválidos");
    } else {
      navigate("/"); // Redireccionar a la página de inicio (home)
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "80vh", display: "flex", justifyContent: "center"}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random?project)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "50vh",
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Acceso Usuarios
            </Typography>
            <Box component="form" noValidate onSubmit={logIn} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="outlined"
              />

              <TextField
                sx={{bgcolor: 'rgb(232, 240, 254)'}}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={isPassVisible ? "text" : "password"}
                id="password"
                variant="outlined"
                autoComplete="current-password"
                
                InputProps={{
                sx: {padding: '0px'},
                endAdornment: (
                  <IconButton sx={{padding:'10px'}} onClick={(e) => togglePasswordVisibility()}>
                    {isPassVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                
              >
                Log In
              </Button>
            
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
