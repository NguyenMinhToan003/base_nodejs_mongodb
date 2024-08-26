import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import image from '~/assets/error.png'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from '@mui/material'
const ErrorRouter = () => {
  const navigate = useNavigate()
  return (
    // eslint-disable-next-line no-dupe-keys
    <Box sx={{ background:'rgb(2,0,36)', background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(82,108,112,1) 85%)', width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', gap:'170px', flexDirection:{ sm:'column', md:'row' } }}>
      <Box sx={{ color:'background.primary', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
        <Typography
          sx={{ letterSpacing:'14.5px', lineHeight:'92.5px', fontWeight:'bold', fontSize:'80px' }}>
          404-error
        </Typography>
        <Typography
          sx={{ letterSpacing:'2.5px', lineHeight:'92.5px', fontWeight:'600', fontSize:'40px' }}
        >PAGE NOT FOUND</Typography>
        <Typography
          sx={{ letterSpacing:'0px', lineHeight:'28px', fontWeight:'300', fontSize:'20px', color:'#a0a0a9' }}>
          Your search has ventured beyond the known universe.
        </Typography>
        <Box sx={{ display:'flex', alignItems:'center', gap:2, marginTop:'22px' }}>
          <Link variant="outlined" sx={{ fontSize:'16px', color:'#7F60F9', cursor:'pointer' }} onClick={() => navigate(-1)}>Cancel</Link>
          <NavLink to='/'>
            <Button variant="outlined"
              sx={{ padding:'12px 22.5px', borderRadius:'60px', background:' #7F60F9', fontSize:'16px', color:'background.primary' }}>
            Back To Home
            </Button>
          </NavLink>
        </Box>
      </Box>
      <Box>
        <img src={image} alt='error' style={{ width:'300px', height:'300px' }} />
      </Box>
    </Box>
  )
}
export default ErrorRouter