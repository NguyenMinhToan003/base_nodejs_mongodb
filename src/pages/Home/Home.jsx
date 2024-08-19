import Box from '@mui/material/Box'
import Post from '~/pages/Posts/Posts'
const Home = () => {
  return <>
    <Box sx={{ maxWidth:(theme) => theme.socialMedia.withMain, minWidth:(theme) => theme.socialMedia.withMain, margin:'0 auto', display:'flex', flexDirection:'column', gap:2 }}>
      <Post />
      <Post />
      <Post />
    </Box>
  </>
}
export default Home