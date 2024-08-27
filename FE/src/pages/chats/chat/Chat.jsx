import Box from '@mui/material/Box'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import AddReactionIcon from '@mui/icons-material/AddReaction'
import SendIcon from '@mui/icons-material/Send'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { socket } from '~/Socket'
import { useEffect, useState } from 'react'
import { mockDataChat } from '~/api/mockdata'
import { mockDataProfile } from '~/api/mockdata'
const Chat = ({ setStatusAction, room }) => {
  const profile = mockDataProfile.profile
  const [chat, setChat] = useState('')
  const [messagesReceived, setMessagesReceived] = useState({
    chatMessages: [],
    roomInfo: []
  })
  useEffect(() => {
    setMessagesReceived(mockDataChat)
  }, [])
  const handleSendChat = () => {
    if (chat) {
      const time = new Date().toLocaleTimeString()
      socket.emit('receive_message', { message: chat, userId: profile._id, time, avatar: profile.avatar })
      setChat('')
    }
  }

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessagesReceived({
        ...messagesReceived,
        chatMessages: [...messagesReceived.chatMessages, data]
      })
    }
    )
  }, [messagesReceived])
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100vh', padding: '10px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px', padding: '10px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 1, backgroundColor: 'background.primary' }}>
          <Tooltip title='Back'>
            <IconButton onClick={() => setStatusAction('recovery')} sx={{ color: 'error.main' }}>
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
          <Button startIcon={<Avatar src={messagesReceived.roomInfo.avatarRoom} sx={{ cursor: 'pointer', width: '40px', height: '40px' }} />}>
            <Typography variant='body1'>{messagesReceived.roomInfo.name}</Typography>
          </Button>
        </Box>
        <Tooltip title='More'>
          <IconButton>
            <MoreHorizIcon sx={{ color: 'text.primary' }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Divider />
      <Box sx={{ overflowY: 'auto', overflowX: 'hidden', height: '100%' }}>
        {messagesReceived?.chatMessages?.map((data, index) => {
          if (data.userId === profile._id) {
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
                <Typography variant='body1' sx={{ backgroundColor: 'error.main', color: '#ffffffff', borderRadius: '20px', padding: '10px 15px', fontSize: '14px' }}>
                  {data.message}
                </Typography>
              </Box>
            )
          } else {
            return (
              <Box key={index}
                sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, padding: '5px', ':hover .time': { opacity: 1, visibility: 'visible' } }} >
                <Avatar src={data.avatar} />
                <Typography variant='body1' sx={{ backgroundColor: 'secondary.main', color: '#ffffffff', borderRadius: '20px', padding: '10px 15px', fontSize: '14px' }}>
                  {data.message}
                </Typography>
                <Chip label={data.name} color='primary' />
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
            border: '1px solid green',
            borderRadius: '100rem',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Tooltip title='Add reaction'>
              <IconButton color='error'>
                <AddReactionIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Attach file'>
              <IconButton color='warning' component='label'>
                <AttachFileIcon />
                <input type='file' style={{ display: 'none' }} />
              </IconButton>
            </Tooltip>
          </Box>
          <input
            onChange={(e) => setChat(e.target.value)}
            value={chat}
            autoFocus
            placeholder='Write a comment...'
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              width: '100%',
              height: '100%',
              outline: 'none',
              fontSize: '1rem'
            }}
          />
          <Tooltip title='Send'>
            <IconButton color='info' onClick={handleSendChat}>
              <SendIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box >
  )
}

export default Chat
