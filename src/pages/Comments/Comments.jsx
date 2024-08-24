import Box from '@mui/material/Box'
import Comment from './Comment'
const Comments = () => {
  return <>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, padding: '10px' }}>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Box>
  </>
}
export default Comments