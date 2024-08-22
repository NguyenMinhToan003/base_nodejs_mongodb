
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import SettingsIcon from '@mui/icons-material/Settings'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { NavLink, Outlet } from 'react-router-dom'
import { useRef } from 'react'
const Profile = () => {
  const avatarProfile='https://avatars.githubusercontent.com/u/117341351?s=400&u=895161a6128008eb8d79b16760c7d7fa5cf0a20f&v=4'
  const urlImage = 'https://images.unsplash.com/photo-1538983314533-980fb0ae24d5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  const containerRef = useRef(null)
  const stickyRef = useRef(null)
  const handleScroll = () => {
    if (containerRef.current.scrollTop > stickyRef.current.offsetTop) {
      stickyRef.current.style.position = 'sticky'
      stickyRef.current.style.top = '0'
    } else {
      stickyRef.current.style.position = 'relative'
    }
  }
  return <>
    <Box onScroll={handleScroll} sx={{ with:'100%', padding:'10px', color:'text.secondary' }} ref={containerRef}>
      <Box sx={{ height:'180px', borderRadius:'20px' }} >
        <img src={urlImage} alt='profile' style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:'inherit' }} />
      </Box>
      <Box sx={{ display:'flex', alignItems:'center', justifyContent:'start', gap:2, padding:'10px', marginBottom:'30px' }}>
        <Box sx={{ borderRadius:'100rem', minWidth:'140px', height:'140px' }}>
          <img src={avatarProfile } alt='avatar' style={{ width:'100%', height:'100%', borderRadius:'inherit' }} />
        </Box>
        <Box>
          <Typography variant='h4' color='text.primary' sx={{ fontWeight:'bold' }}>Nguyen Minh Toan</Typography>
          <Typography variant='h6' color='text.secondary' >@johndoe</Typography>
          <Typography color='text.primary' component='span'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet turpis in felis luctus vehicula. Integer semper, nunc ut sollicitudin aliquam, felis odio aliquet odio, nec ultricies metus nunc vel libero. </Typography>
        </Box>
      </Box>
      <Divider />
      <Box ref={stickyRef} sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', position: 'relative' }}>
        <NavLink className='navLink' to='posts'>
          <Button sx={{ padding:'20px', fontWeight:'bold', width:'100%', color:'inherit' }}>Posts</Button>
        </NavLink>
        <NavLink className='navLink' to='comments'>
          <Button sx={{ padding:'20px', fontWeight:'bold', width:'100%', color:'inherit' }}>Comments</Button>
        </NavLink>
        <NavLink className='navLink' to='/likes'>
          <Button sx={{ padding:'20px', fontWeight:'bold', width:'100%', color:'inherit' }}>Likes</Button>
        </NavLink>
        <Tooltip title="Settings"><IconButton sx={{ color:'text.primary' }}><SettingsIcon/></IconButton></Tooltip>
      </Box>
      <Divider />
      <Box>
        <Outlet />
      </Box>
    </Box>
  </>
}
export default Profile