import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Badge from '@mui/material/Badge'
import { mockDataNotification } from '~/api/mockdata'
import { useEffect, useState } from 'react'
import { socket } from '~/Socket'
const BtnNotification = () => {
  const [countNotification, setCountNotification] = useState(0)
  useEffect(() => {
    socket.on('notification', () => {
      setCountNotification(countNotification + 1)
    })
  }, [countNotification])
  useEffect(() => {
    setCountNotification(mockDataNotification.notifications.length)
  }, [])
  return <Tooltip title="Notification">
    <Button
      variant="text"
      color="primary"
      sx={{ width: '100%', padding: '20px 0' }}
      startIcon={<Badge badgeContent={countNotification} color="error"><NotificationsOutlinedIcon /></Badge>}
    >
      <Typography
        sx={{
          display: { sm: 'none', xl: 'inline' },
          fontWeight: 'bold',
          paddingLeft: '10px'
        }}
      >
        Notification
      </Typography>
    </Button>
  </Tooltip >
}
export default BtnNotification