import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
const ListComments = ({ comments }) => {
  return <Box sx={{ padding: '10px' }}>
    {
      comments.map((comment, index) => (
        <Box key={index} sx={{ display: 'flex', gap: 2, padding: '10px' }}>
          <img src={comment?.avatar} alt='avatar' style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
          <Box>
            <Typography variant='p' color='text.primary'>{comment?.name}</Typography>
            <Typography color='text.secondary'>{comment?.comment}</Typography>
          </Box>
        </Box>
      ))
    }
  </Box>
}
export default ListComments