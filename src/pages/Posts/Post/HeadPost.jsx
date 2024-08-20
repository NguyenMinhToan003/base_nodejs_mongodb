import PublicIcon from '@mui/icons-material/Public'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import avatar from '~/assets/avatar.png'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import CloseIcon from '@mui/icons-material/Close'
const HeadPost = ({ userName, date }) => {
  return <>
    <Box
      sx={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:1 }}>
      <Box
        sx={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:2 }}>
        <Avatar src={avatar} sx={{ cursor:'pointer' }}/>
        <Box
          sx={{ display:'flex', flexDirection:'column', alignItems:'start' }}>
          <Typography variant="h6" color='text.primary'
            sx={{ fontWeight:'bold', cursor:'pointer' }}>
            {userName}
          </Typography>
          <Box
            sx={{ display:'flex', justifyContent:'center', alignItems:'center', fontSize:'14px', color:'text.secondary', fontWeight:'200', gap:1 }}>
            <Typography variant="span" >{date}</Typography>
            <PublicIcon sx={{ fontSize:'16px' }}/>
          </Box>
        </Box>
      </Box>
      <Box>
        <IconButton><MoreHorizIcon sx={{ fontSize:'25px', color:'text.primary' }}/></IconButton>
        <IconButton sx={{ color:'text.primary', ':hover':{ color:'error.main' } }}><CloseIcon sx={{ fontSize:'25px' }}/></IconButton>
      </Box>
    </Box>
  </>
}
export default HeadPost