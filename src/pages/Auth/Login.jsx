/* eslint-disable react/no-unescaped-entities */
import image from '~/assets/login_art.jpg'
import IconGoogle from '~/assets/Google'
import IconFacebook from '~/assets/Facebook'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <Grid container sx={{ height: '100%', width: '100%', padding: '5px', backgroundColor: 'background.secondary', color: 'text.primary' }}>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ maxWidth: ' 25rem' }}>
            <Typography variant='h4' sx={{ marginBottom: 2 }}>
              Welcome Back 👋
            </Typography>
            <Typography variant='span'>
              Today is a new day. It's your day. Your shape it. Sign in to start
              management your project
            </Typography>
            <Box sx={{ width: '24rem', display: 'flex', flexDirection: 'column', gap: 3, marginTop: 5 }}>
              <TextField id='email' label='Email' type='email' color='secondary' />
              <TextField id='password' label='Password' type='password' color='secondary' />
              <Link sx={{ color: '#2b54ea', textAlign: 'right' }}>
                Forgot Password?
              </Link>
              <Button
                sx={{ fontWeight: 'bold', paddingX: 2, paddingY: 2, borderRadius: 3, border: '2px solid #162d3a', backgroundColor: '#162d3a', textAlign: 'center', color: 'background.primary', ':hover': { color: '#162d3a' } }}>
                Login
              </Button>
              <Divider>Or</Divider>
              <Button sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, backgroundColor: '#f3f9fa', borderRadius: '16px', paddingX: 1, paddingY: 2 }}>
                <IconGoogle />
                <Typography variant='span'>Login with Google</Typography>
              </Button>
              <Button sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, backgroundColor: '#f3f9fa', borderRadius: '16px', paddingX: 1, paddingY: 2 }}>
                <IconFacebook />
                <Typography variant='span'>Login with Facebook</Typography>
              </Button>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 3 }}>
              <Typography variant='span'> Don't have an account ?</Typography>
              <NavLink to='/signup' >
                <Typography variant='span' sx={{ color: '#2b54ea', marginLeft: 1 }}>Sign up</Typography>
              </NavLink>
            </Box>
            <Box sx={{ color: '#959CB6', textAlign: 'center', marginTop: 3 }}>
              © 2023 ALL RIGHTS RESERVED
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img src={image} style={{ width: '100%', objectFit: 'scale-down' }} alt='login_art' />
        </Grid>
      </Grid>
    </>
  )
}
export default Login