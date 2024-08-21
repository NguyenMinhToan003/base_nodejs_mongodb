import Box from '@mui/material/Box'
import BtnHome from './Menu/BtnHome'
import BtnSearch from './Menu/BtnSearch'
import BtnNotification from './Menu/BtnNotification'
import BtnGroup from './Menu/BtnGroup'
import BtnBookmark from './Menu/BtnBookmark'
import BtnProfile from './Menu/BtnProfile'
import Divider from '@mui/material/Divider'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <Box
        sx={{
          width: (theme) => theme.socialMedia.widthLeft,
          position: 'fixed',
          left: '0',
          top: '0',
          bottom: '0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.2rem'
        }}
      >
        <NavLink to="/" className='navLink'>
          <BtnHome />
        </NavLink>
        <Divider orientation="horizontal" sx={{ width: '100%', margin: '0' }} />
        <NavLink to="/search" className='navLink'>
          <BtnSearch />
        </NavLink>
        <Divider orientation="horizontal" sx={{ width: '100%', margin: '0' }} />
        <NavLink to="/notification" className='navLink'>
          <BtnNotification />
        </NavLink>
        <Divider orientation="horizontal" sx={{ width: '100%', margin: '0' }} />
        <NavLink to="/group" className='navLink'>
          <BtnGroup />
        </NavLink>
        <Divider orientation="horizontal" sx={{ width: '100%', margin: '0' }} />
        <NavLink to="/bookmark" className='navLink'>
          <BtnBookmark />
        </NavLink>
        <Divider orientation="horizontal" sx={{ width: '100%', margin: '0' }} />
        <NavLink to="/profile" className='navLink'>
          <BtnProfile/>
        </NavLink>
      </Box>
      <Divider
        orientation="vertical"
        sx={{
          position: 'fixed',
          left: (theme) => theme.socialMedia.widthLeft,
          top: '0',
          bottom: '0',
          margin: '0'
        }}
      />
    </>
  )
}

export default Nav
