import Box from '@mui/material/Box'
import Message from './Message'
const GroupMessage = () => {
  return <>
    <Box sx={{ display:'flex', flexDirection:'column', gap:1 }}>
      <Message />
      <Message />
      <Message />
    </Box>
  </>
}
export default GroupMessage