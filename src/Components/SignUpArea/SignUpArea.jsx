

// function SignUpArea() {
//   return (
//     <div>SignUpArea</div>
//   )
// }

// export default SignUpArea
import React from 'react'
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardHeader, Divider, IconButton, TextField, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import { useState } from 'react'

function Signup() {
  const [isPassVisible, setIsPassVisible] = useState (false)
  
  function handleClick (){
    setIsPassVisible (!isPassVisible)
  }

  return (
    <>      
      <Card 
        sx={{ maxWidth: '1200px', backgroundColor: green[300] }}
        raised={true}>
        <CardHeader title= "Login"> </CardHeader>
          <CardContent>
            <Typography variant='h2'> Card Connect Trip </Typography>
            <TextField 
              fullWidth={true} 
              margin='dense' 
              label="email" 
              variant='standard' 
              InputProps={{ 
              startAdornment: <Email/>
            }}
            ></TextField>
            <TextField 
              fullWidth={true} 
              // type='password'
              type={isPassVisible ? 'text':'password'}              
              margin='dense' 
              label="Password" 
              variant='standard'
              InputProps={{
                startAdornment:<Lock/>,
                endAdornment: (
                <IconButton onClick = {(e) => handleClick()}>
                  {/* <VisibilityOff/> */}
                  {isPassVisible ? <Visibility/>: <VisibilityOff/>}
                </IconButton>
              )
            }}
              > </TextField>
          </CardContent>
          {/* <h1>Material UI React</h1> */}
          <Divider/>
          <CardActions>
            <Button size='small'color='primary' variant='contained'> LogIn </Button>
            <Button size='small'color='secondary' variant='outlined'> SignUp </Button>
          </CardActions>
        
        </Card>
    </>
  )
}

export default Signup