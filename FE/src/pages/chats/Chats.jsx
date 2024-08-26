import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Recovery from '~/components/Recovery/Recovery'
import { useState } from 'react'
import Chat from '~/pages/Chats/chat/Chat'
const Chats = () => {
  const [statusAction, setStatusAction] = useState('recovery')
  const [user, setUser] = useState({})
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {
          statusAction === 'recovery' && <Recovery setStatusAction={setStatusAction} setUser={setUser} />
        }
        {
          statusAction === 'chat' && <Chat setStatusAction={setStatusAction} user={user} />
        }
      </Box>
      <Divider orientation="vertical" sx={{ position: 'fixed', right: theme => theme.socialMedia.widthRight, top: '0', bottom: '0', margin: '0', display: { sm: 'none', md: 'block' } }} />
    </>
  )
}
export default Chats