import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { NavLink, Outlet } from 'react-router-dom'
import ButtonSettingAccount from '~/components/ButtonSettingAccount/ButtonSettingAccount'
import { useSelector } from 'react-redux'
const Profile = () => {
  const user = useSelector((state) => state.userData)

  const [isSticky, setIsSticky] = useState(false)
  const handleScroll = () => {
    setIsSticky(window.scrollY > 400)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const avatarProfile = 'https://avatars.githubusercontent.com/u/117341351?s=400&u=895161a6128008eb8d79b16760c7d7fa5cf0a20f&v=4'
  const urlImage = 'https://images.unsplash.com/photo-1538983314533-980fb0ae24d5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return (
    <>
      <Box sx={{ width: '100%', padding: '10px', color: 'text.secondary', position: 'relative' }}>
        <Box sx={{ height: '180px', borderRadius: '20px' }}>
          <img src={urlImage} alt='profile' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 2, padding: '10px', marginBottom: '30px' }}>
          <Box sx={{ borderRadius: '100rem', minWidth: '140px', height: '140px' }}>
            <img src={user.profile_picture} alt='avatar' style={{ width: '100%', height: '100%', borderRadius: 'inherit' }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 1 }}>
            <Typography variant='h5' color='text.primary' sx={{ fontWeight: 'bold' }}>{user.username}</Typography>
            <Typography variant='body1' color='text.secondary' sx={{ ':hover': { color: 'error.main' }, cursor: 'pointer' }}>@johndoe</Typography>
            <Typography color='text.primary' component='span'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet turpis in felis luctus vehicula. Integer semper, nunc ut sollicitudin aliquam, felis odio aliquet odio, nec ultricies metus nunc vel libero.
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          width: '100%',
          backgroundColor: 'background.paper', // Thêm background nếu cần để nội dung không bị ẩn
          zIndex: 1000 // Đảm bảo phần tử này nằm trên các phần tử khác
        }}>
          <NavLink className='navLink' to='posts'>
            <Button sx={{ padding: '20px', fontWeight: 'bold', width: '100%', color: 'inherit' }}>Posts</Button>
          </NavLink>
          <NavLink className='navLink' to='notification'>
            <Button sx={{ padding: '20px', fontWeight: 'bold', width: '100%', color: 'inherit' }}>Notification</Button>
          </NavLink>
          <NavLink className='navLink' to='follower'>
            <Button sx={{ padding: '20px', fontWeight: 'bold', width: '100%', color: 'inherit' }}>Follow</Button>
          </NavLink>
          <ButtonSettingAccount />
        </Box>
        <Divider />
        <Box >
          <Outlet />
        </Box>
      </Box>
    </>
  )
};

export default Profile
