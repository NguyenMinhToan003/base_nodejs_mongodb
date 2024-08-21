import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
const BtnNotification = () => {
  return <Button
    variant="text"
    color="primary"
    sx={{ width: '100%', padding: '20px 0' }}
    startIcon={<NotificationsOutlinedIcon />}
  >
    <Typography
      sx={{
        display: { sm: 'none', md: 'inline' },
        fontWeight: 'bold'
      }}
    >
            Notification
    </Typography>
  </Button>
}
export default BtnNotification