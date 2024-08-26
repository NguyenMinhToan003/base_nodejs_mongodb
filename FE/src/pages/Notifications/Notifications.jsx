import Box from '@mui/material/Box'
import Notification from './Notification'
const Notifications = () => {
  return <>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, padding: '10px' }}>
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </Box>
  </>
}
export default Notifications