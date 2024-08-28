import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
const RoomChat = ({ roomChat, setStatusAction, setRoom }) => {
  const handleChooseRoom = () => {
    setStatusAction('chat')
    setRoom(roomChat)
  }
  if (!roomChat) return null
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
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, backgroundColor: 'background.secondary', cursor: 'pointer', ':hover': { backgroundColor: 'background.primary' }, padding: '10px 0px' }} >
      <Box
        onClick={() => handleChooseRoom()}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 2, width: '100%' }}>
        <StyledBadge
          overlap="circular"
          variant="dot"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
          <Avatar src={roomChat.avatarRoom} sx={{ cursor: 'pointer', width: '1.8rem', height: '1.8rem' }} />
        </StyledBadge>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='body1' color='text.primary'>
            {roomChat.name}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton><MoreHorizIcon sx={{ fontSize: '25px', color: 'text.secondary' }} /></IconButton>
        <IconButton sx={{ color: 'text.secondary', ':hover': { color: 'error.main' } }}><CloseIcon sx={{ fontSize: '25px' }} /></IconButton>
      </Box>
    </Box >
  </>
}
export default RoomChat