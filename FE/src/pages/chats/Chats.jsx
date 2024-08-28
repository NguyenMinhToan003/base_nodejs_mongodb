import Box from '@mui/material/Box'
import Recovery from '~/components/Recovery/Recovery'
import { useState } from 'react'
import Chat from '~/pages/Chats/chat/Chat'
const Chats = () => {
  const [statusAction, setStatusAction] = useState('recovery')
  const [room, setRoom] = useState({})
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {
          statusAction === 'recovery' && <Recovery setStatusAction={setStatusAction} setRoom={setRoom} />
        }
        {
          statusAction === 'chat' && <Chat setStatusAction={setStatusAction} room={room} />
        }
      </Box>
    </>
  )
}
export default Chats