import Box from '@mui/material/Box'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import SendIcon from '@mui/icons-material/Send'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { socket } from '~/Socket'
import { useEffect, useState } from 'react'

const Chat = ({ setStatusAction, user }) => {
  const [chat, setChat] = useState('')
  const [messagesReceived, setMessagesReceived] = useState({
    chatData: [],
    userChat: {}
  })
  const handleSendChat = () => {
    if (chat) {
      const time = new Date().toLocaleTimeString()
      socket.emit('receive_message', { message: chat, userId: user.id, time, avatar: user.avatar })
      setChat('')
    }
  }

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessagesReceived({
        ...messagesReceived,
        chatData: [...messagesReceived.chatData, data]
      })
    }
    )
  }, [messagesReceived])
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, height: '100vh', padding: '10px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px', padding: '10px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 1, backgroundColor: 'background.primary' }}>
          <Tooltip title="Back">
            <IconButton onClick={() => setStatusAction('recovery')} sx={{ color: 'error.main' }}>
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
          <Button startIcon={<Avatar src={user.avatar} sx={{ cursor: 'pointer', width: '1.8rem', height: '1.8rem' }} />}>
            <Typography variant="body1">{user.name}</Typography>
          </Button>
        </Box>
        <Tooltip title="More">
          <IconButton>
            <MoreHorizIcon sx={{ color: 'text.primary' }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Divider />
      <Box sx={{ overflowY: 'auto', overflowX: 'hidden', height: '100%' }}>
        {messagesReceived?.chatData?.map((data, index) => {
          if (data.userId === user.id) {
            return (
              <Box key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  gap: 1,
                  padding: '1px 10px',
                  '&:hover .time': {
                    opacity: 1, visibility: 'visible'
                  }
                }} >
                <Typography variant='caption' className='time'
                  sx={{ opacity: 0, transition: 'opacity 0.3s', visibility: 'hidden' }} >
                  {data.time}
                </Typography>
                <Chip label={data.message} color="error" />
              </Box>
            )
          } else {
            return (
              <Box key={index}
                sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 1, padding: '5px', ':hover .time': { opacity: 1, visibility: 'visible' } }} >
                <Avatar src={data.avatar}
                  sx={{ cursor: 'pointer', width: '1.8rem', height: '1.8rem' }} />
                <Chip label={data.message} color="secondary" />
                <Typography variant='caption' className='time'
                  sx={{ opacity: 0, transition: 'opacity 0.3s', visibility: 'hidden' }} >
                  {data.time}
                </Typography>
              </Box>
            )
          }
        })}
      </Box>
      <Divider />
      <Box sx={{ padding: '10px' }}>
        <Box
          sx={{
            backgroundColor: 'background.primary',
            height: '45px',
            width: '100%',
            padding: '10px 10px 10px 20px',
            border: '2px solid #1776f2',
            borderRadius: '100rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <input
            onChange={(e) => setChat(e.target.value)}
            value={chat}
            autoFocus
            placeholder="Write a comment..."
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              width: '100%',
              height: '100%',
              outline: 'none',
              fontSize: '1rem'
            }}
          />
          <Tooltip title="Send">
            <IconButton color="info" onClick={handleSendChat}>
              <SendIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}

export default Chat
