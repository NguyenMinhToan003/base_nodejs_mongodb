import Box from '@mui/material/Box'
import Nav from '~/components/Nav/Nav'
import Recovery from '../../components/Recovery/Recovery'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <Nav />
      <Recovery />
      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            minWidth: theme => theme.socialMedia.widthLeft,
            maxWidth: theme => theme.socialMedia.widthLeft
          }}
        >
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            overflowY: 'auto',
            overflowX: 'hidden'
          }}
        >
          <Outlet />
        </Box>
        <Box
          sx={{
            minWidth: theme => theme.socialMedia.widthRight,
            maxWidth: theme => theme.socialMedia.widthRight,
            display: { xs: 'none', md: 'block' }
          }}>
        </Box>
      </Box>
    </>
  )
}

export default Home
