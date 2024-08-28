import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt'
import { useState } from 'react'
import { socket } from '~/Socket'
const Notification = ({ notification }) => {
  const [actionChoice, setActionChoice] = useState(null)
  const timeAgo = (date) => {
    const now = new Date()
    const diff = now - date
    const seconds = diff / 1000
    if (seconds < 60) {
      return `${Math.floor(seconds)} seconds ago`
    }
    const minutes = seconds / 60
    if (minutes < 60) {
      return `${Math.floor(minutes)} minutes ago`
    }
    const hours = minutes / 60
    if (hours < 24) {
      return `${Math.floor(hours)} hours ago`
    }
    const days = hours / 24
    if (days < 30) {
      return `${Math.floor(days)} days ago`
    }
  }
  const handleAccept = () => {
    socket.emit('notification', { ...notification, status: 'accepted', message: 'Friend request accepted' })
  }
  const handleReject = () => {
    socket.emit('notification', { ...notification, status: 'rejected', message: 'Friend request rejected' })
  }
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '22px',
        gap: 2,
        alignItems: 'start',
        justifyContent: 'start',
        backgroundColor: 'background.primary',
        borderRadius: '10px',
        cursor: 'pointer',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Avatar alt={notification?.sender.name} src={notification?.sender.profile_picture} />
      <Box sx={{ width: '100%', display: 'flex', gap: 2, flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', }}>
          <Typography color='text.secondary' sx={{ fontWeight: '500', fontSize: '18px' }}>
            {notification?.sender.username}
          </Typography>
          <Typography color='error.main' sx={{ fontSize: '11px' }}>
            {timeAgo(new Date(notification?.createdAt))}
          </Typography>
        </Box>
        <Typography color='text.primary' sx={{ fontSize: '14px' }}>
          {notification?.message}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', gap: 2 }}>
          {actionChoice === null && notification?.type === 'friend_request' && (
            <>
              <Button variant='text' sx={{ color: '#0071FF', fontWeight: 'bold' }} onClick={() => { handleAccept(), setActionChoice('Accept') }}>
                Accept
              </Button>
              <Button variant='text' onClick={() => { setActionChoice('Reject'), handleReject() }}>
                Reject
              </Button>
            </>
          )}
          {actionChoice === 'Accept' && notification?.type === 'friend_request' && (
            <Chip label='Accepted' icon={<CheckCircleOutlineIcon />} color='success' />
          )}
          {actionChoice === 'Reject' && notification?.type === 'friend_request' && (
            <Chip label='Rejected' icon={<DoDisturbAltIcon color='error' />} sx={{ color: 'error.main' }} />
          )}

        </Box>
      </Box>
    </Box >
  )
}

export default Notification
