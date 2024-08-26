import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
const BtnNotification = () => {
  return <Tooltip title="Notification">
    <Button
      variant="text"
      color="primary"
      sx={{ width: '100%', padding: '20px 0' }}
      startIcon={<NotificationsOutlinedIcon />}
    >
      <Typography
        sx={{
          display: { sm: 'none', xl: 'inline' },
          fontWeight: 'bold'
        }}
      >
        Notification
      </Typography>
    </Button>
  </Tooltip>
}
export default BtnNotification