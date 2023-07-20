//import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './SignUpArea.css'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { signup } from '../../services/auth.service';
import { getAllUsers } from '../../services/user.service'

import { Navigate } from "react-router-dom";


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passRegex = /^(?=.*\d)(.{5,})\1$/



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        IdeaHatch
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const defaultTheme = createTheme();


export default function SignUp() {
  const [isPassvisible, setIsPassVisible] = useState(false)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [valid, setValid] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [validRepeatPassword, setValidRepeatPassword] = useState(false)
  const [user, setUser] = useState([])
  const [mobilePhone, setMobilePhone] = useState('')
  const [dateBirth, setDateBirth] = useState(Date)
  const [country, setCountry] = useState('')

  const getUsersEmail = async () => {
    if (localStorage.getItem('token')) {
      const res = await getAllUsers()
      setUser(res)
    }
  }

  useEffect(() => {
    getUsersEmail()
  }, [])

  const navigate = useNavigate()

  const validateName = (e) => {
    const n = e.target.value.toLowerCase()
    const name = n.charAt(0).toUpperCase() + n.slice(1)
    setName(name)
  }

  const validateLastName = (e) => {
    const lN = e.target.value.toLowerCase()
    const lastName = lN
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')

    setLastName(lastName)
  }

  const validatePassword = (e) => {
    const password = e.target.value
    setPassword(password)
    if (!passRegex.test(password)) {
      setValidPassword(false)
    } else {
      setValidPassword(true)
      if (password === repeatPassword) {
        setValidRepeatPassword(true)
      } else {
        setValidRepeatPassword(false)
      }
    }
  }

  const validateRepeatPassword = (e) => {
    const repeatPassword = e.target.value
    setRepeatPassword(repeatPassword)
    if (password === repeatPassword) {
      setValidRepeatPassword(true)
      setValidPassword(true)
    } else {
      setValidRepeatPassword(false)
      setValidPassword(false)
    }
  }

  const validateEmail = (e) => {
    const email = e.target.value.toLowerCase()
    setEmail(email)
    if (!emailRegex.test(email)) {
      setValid(false)
    } else {
      setValid(true)
    }
  }
  const validateMobilePhone = (e) => {
    const mobilePhone = e.target.value
    setMobilePhone(mobilePhone)
  }
  const validateDateBirth = (e) => {
    const dateBirth = e.target.value
    setDateBirth(dateBirth)
  }

  const validateCountry = (e) => {
    const country = e.target.value
    setCountry(country)
  }

  const handleClick = () => {
    setIsPassVisible(!isPassvisible)
  }

const formValidate = (e) => {
    e.preventDefault()
    if (
      valid !== true ||
      validPassword !== true ||
      validRepeatPassword !== true
    ) {
      return alert('Verify the fields')
    } else {
      return alert('your connect')
    }
  }

  const signUp = async () => {
    user.map((u) => {
      if (email === u.email) {
        alert('This email is alredy used')
      }
    })

    if (valid !== true) {
      alert('verify your email')
    } else if (validPassword !== true) {
      alert('verify your password')
    } else {
      await signup(name, email, password, lastName, mobilePhone,  dateBirth, country)
      if (!localStorage.getItem('token')) alert('Error')
      else navigate('/')
    }
  }

  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={formValidate} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={validateName}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={validateLastName}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={validateEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  id="password"
                  /* type="password" */              
                  type={isPassvisible ? 'text' : 'password'}
                  onChange={validatePassword}
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={handleClick}>
                        {isPassvisible ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    ),
                  }}
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Repeat_password"
                  label="Repeat Password"
                  t/* ype="password" */
                  id="password"
                  autoComplete="new-password"

                  value={repeatPassword}
                  type={isPassvisible ? 'text' : 'password'}
                  color={validRepeatPassword ? 'info' : 'error'}
                  onChange={validateRepeatPassword}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="mobile_Phone"
                  label="Mobile Phone"
                  name="mobile_Phone"
                  autoComplete="new-mobile_Phone"
                  onChange={validateMobilePhone}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="date"
                  label="Birthday"
                  type="date"
                  name="date_of_Birth"
                  InputLabelProps={{
                    shrink: true,
                    style: { whiteSpace: 'pre-wrap' }
                  }}
                  onChange={validateDateBirth}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="country"
                  label="Country"
                  name="country"
                  autoComplete="new-country"
                  onChange={validateCountry}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Acept the privacy"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Link to="/login">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick = {signUp}
              >
                Crear cuenta
              </Button>
            </Link>


            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}