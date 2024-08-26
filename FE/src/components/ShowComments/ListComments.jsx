import Box from '@mui/material/Box'
import Comment from './Coment'
const ListComments = ({ comments }) => {
  return <Box sx={{ padding: '10px' }}>
    {
      comments.map((comment, index) => (
        <Box key={index} sx={{ display: 'flex', gap: 2, padding: '10px' }}>
          <Comment comment={comment} />
        </Box>
      ))
    }
  </Box>
}
export default ListComments