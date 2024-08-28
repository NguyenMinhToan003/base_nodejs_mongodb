import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Badge from '@mui/material/Badge'
import { useEffect, useState } from 'react'
import { socket } from '~/Socket'
import { toast } from 'react-toastify'
import { mockDataNotification } from '~/api/mockdata'
const BtnNotification = () => {
  const [countNotification, setCountNotification] = useState(0)

  useEffect(() => {
    setCountNotification(mockDataNotification.notifications.length)
  }, [])

  useEffect(() => {
    const handleNotification = (data) => {
      toast.success(data.message)
      setCountNotification(prevCount => prevCount + 1)
    }

    socket.on('notification', handleNotification)

    return () => {
      socket.off('notification', handleNotification)
    }
  }, [socket])

  return (
    <Tooltip title="Notification">
      <Button
        variant="text"
        color="primary"
        sx={{ width: '100%', padding: '20px 0' }}
        startIcon={
          <Badge badgeContent={countNotification} color="error">
            <NotificationsOutlinedIcon />
          </Badge>
        }
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
    </Tooltip>
  )
}

export default BtnNotification
