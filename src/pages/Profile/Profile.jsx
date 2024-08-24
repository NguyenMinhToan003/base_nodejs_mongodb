
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import SettingsIcon from '@mui/icons-material/Settings'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { NavLink, Outlet } from 'react-router-dom'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import { useState } from 'react'
const Profile = () => {
  const avatarProfile = 'https://avatars.githubusercontent.com/u/117341351?s=400&u=895161a6128008eb8d79b16760c7d7fa5cf0a20f&v=4'
  const urlImage = 'https://images.unsplash.com/photo-1538983314533-980fb0ae24d5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return <>
    <Box sx={{ with: '100%', padding: '10px', color: 'text.secondary' }} >
      <Box sx={{ height: '180px', borderRadius: '20px' }} >
        <img src={urlImage} alt='profile' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 2, padding: '10px', marginBottom: '30px' }}>
        <Box sx={{ borderRadius: '100rem', minWidth: '140px', height: '140px' }}>
          <img src={avatarProfile} alt='avatar' style={{ width: '100%', height: '100%', borderRadius: 'inherit' }} />
        </Box>
        <Box>
          <Typography variant='h4' color='text.primary' sx={{ fontWeight: 'bold' }}>Nguyen Minh Toan</Typography>
          <Typography variant='h6' color='text.secondary' >@johndoe</Typography>
          <Typography color='text.primary' component='span'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet turpis in felis luctus vehicula. Integer semper, nunc ut sollicitudin aliquam, felis odio aliquet odio, nec ultricies metus nunc vel libero. </Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        <NavLink className='navLink' to='posts'>
          <Button sx={{ padding: '20px', fontWeight: 'bold', width: '100%', color: 'inherit' }}>Posts</Button>
        </NavLink>
        <NavLink className='navLink' to='notification'>
          <Button sx={{ padding: '20px', fontWeight: 'bold', width: '100%', color: 'inherit' }}>Notification</Button>
        </NavLink>
        <NavLink className='navLink' to='follower'>
          <Button sx={{ padding: '20px', fontWeight: 'bold', width: '100%', color: 'inherit' }}>Follow</Button>
        </NavLink>
        <Tooltip title="Settings"><IconButton sx={{ color: 'text.primary' }} onClick={handleClick}
          size="small"
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}><SettingsIcon /></IconButton></Tooltip>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <NavLink to='/login'>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <Typography variant='span' sx={{ textDecoration: 'none' }}>Logout</Typography>
            </MenuItem>
          </NavLink>
        </Menu>
      </Box>
      <Divider />
      <Box>
        <Outlet />
      </Box>
    </Box>
  </>
}
export default Profile