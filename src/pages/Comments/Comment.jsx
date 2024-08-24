import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
const Comment = ({ comment }) => {
  return (
    <Box sx={{ display: 'flex', padding: '22px', gap: 2, alignItems: 'start', justifyContent: 'start', backgroundColor: 'background.primary', borderRadius: '10px', cursor: 'pointer', }}>
      <Avatar alt="Remy Sharp" src='https://avatars.githubusercontent.com/u/117341351?s=400&u=895161a6128008eb8d79b16760c7d7fa5cf0a20f&v=4' />
      <Box sx={{ width: '100%', display: 'flex', gap: 1, flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography color='text.primary' sx={{ fontWeight: '400', fontSize: '18px' }}>Jenny Wilson</Typography>
          <Typography variant="p" color='error.main' sx={{ fontSize: '14px' }}>1 min ago</Typography>
        </Box>
        <Typography color='text.secondary' sx={{ fontSize: '14px' }}>Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor.</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', gap: 2 }}>
          <Button variant="text" sx={{ color: '#0071FF', fontWeight: 'bold' }}>Accept</Button>
          <Button variant="text">Reject</Button>
        </Box>
      </Box >
    </Box >
  )
}
export default Comment