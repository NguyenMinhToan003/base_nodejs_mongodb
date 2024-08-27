import Box from '@mui/material/Box'
import Notification from './Notification'
import { mockDataNotification } from '../../api/mockdata'
import { useEffect, useState } from 'react'
const Notifications = () => {
  const [notifications, setNotifications] = useState([])
  useEffect(() => {
    setNotifications(mockDataNotification.notifications)
  }, [])
  return <>
    <Box sx={{ display: 'flex', flexDirection: 'column-reverse', gap: 1, padding: '10px' }}>
      {
        notifications?.map((data, index) => {
          return <Notification key={index} notification={data} />
        })
      }
    </Box>
  </>
}
export default Notifications