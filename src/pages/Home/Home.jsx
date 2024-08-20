import Box from '@mui/material/Box'
import Posts from '~/pages/Posts/Posts'
import Nav from '~/components/Nav/Nav'
import Recovery from '../../components/Recovery/Recovery'
const Home = () => {
  return (
    <>
      <Nav />
      <Recovery />
      <Box sx={{ display:'flex' }}>
        <Box
          sx={{
            minWidth:theme => theme.socialMedia.widthLeft,
            maxWidth:theme => theme.socialMedia.widthLeft
          }}
        >
        </Box>
        <Box
          sx={{
            width:{ sx: '100%', md: '55%' },
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </Box>
        <Box
          sx={{
            minWidth:theme => theme.socialMedia.widthRight,
            maxWidth:theme => theme.socialMedia.widthRight,
            display:{ xs:'none', md:'block' }
          }}>
        </Box>
      </Box>
    </>
  )
}

export default Home
