import PublicIcon from '@mui/icons-material/Public'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import avatar from '~/assets/avatar.png'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
const Message = () => {
  const userName = 'John Doe'
  const date = 'October 11 •'
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""'
      }
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0
      }
    }
  }))
  return <>
    <Box
      sx={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:1, backgroundColor:'background.secondary', ':hover':{ backgroundColor:'background.primary' }, padding:'10px 0px' }}>
      <Box
        sx={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:2 }}>
        <StyledBadge
          overlap="circular"
          variant="dot"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        ><Avatar src={avatar} sx={{ cursor:'pointer' }}/></StyledBadge>

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
export default Message