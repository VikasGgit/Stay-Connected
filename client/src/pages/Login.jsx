import React, { useState } from 'react'
import {Container, Paper, Typography, TextField, Button, Avatar} from '@mui/material'

function Login() {
        const[isLoggedIn, setLoggedIn] =useState(true)
const toggleLogin=()=>setLoggedIn((prev)=>!prev);
  return (
    <Container component={"main"}  maxWidth="xs" sx={{
        padding:3,
        height:"100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }}>
        <Paper elevation={4} 
        sx={{
            padding:3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {
                isLoggedIn? <>
                    <Typography variant="h5" mt={2} >Login</Typography>
                    <form>
                        <TextField
                        fullWidth
                        margin='normal'
                        variant='outlined'
                        required
                        label="username"
                        />
                        <TextField
                        fullWidth
                        margin='normal'
                        variant='outlined'
                        required
                        label="password"
                        type='password'
                        />

                        <Button
                        sx={{ marginTop:'1rem', left:'50%', transform:"-50%" ,translate: "-50%"}}
                          >Login</Button>
                    <Typography sx={{textAlign:"center"}}>OR</Typography>
                    <Button 
                        sx={{ left:'50%', transform:"-50%" ,translate: "-50%"}}
                        onClick={toggleLogin}
                        >
                        Sign in Instead
                    </Button>

                    </form>
                        
                </>:
               <>
               <Typography variant="h5" mt={2} >SignUp</Typography>
               <form>
                <Avatar>
                    
                </Avatar>
               <TextField
                   fullWidth
                   margin='normal'
                   variant='outlined'
                   required
                   label="Fullname"
                   />
                    <TextField
                   fullWidth
                   margin='normal'
                   variant='outlined'
                   required
                   label="Bio"
                   />
                   <TextField
                   fullWidth
                   margin='normal'
                   variant='outlined'
                   required
                   label="username"
                   />
                   <TextField
                   fullWidth
                   margin='normal'
                   variant='outlined'
                   required
                   label="password"
                   type='password'
                   />

                   <Button
                   sx={{ marginTop:'1rem', left:'50%', transform:"-50%" ,translate: "-50%"}}
                     >SignUp</Button>
               <Typography sx={{textAlign:"center"}}>OR</Typography>
               <Button 
                   sx={{ left:'50%', transform:"-50%" ,translate: "-50%"}}
                   onClick={toggleLogin}
                   >
                   Login Instead
               </Button>

               </form>
                   
           </>
            }
        </Paper>
    </Container>
  )
}

export default Login