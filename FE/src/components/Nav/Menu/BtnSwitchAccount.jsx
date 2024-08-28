import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import ManageHistoryIcon from '@mui/icons-material/ManageHistory'
import { mockDataUser } from '~/api/mockdata'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Popover from '@mui/material/Popover'
import { socket } from '~/Socket'
import { toast } from 'react-toastify'
const BtnSwitchAccount = () => {
  const [open, setOpen] = useState(false)
  const handleChangeAccount = (user) => {
    setOpen(false)
    toast.success(`Switch to ${user.username} ,${user._id} `)
    socket.emit('join_notification', user._id)
  }
  return <Tooltip title="Switch">
    <Button
      variant="text"
      color="primary"
      sx={{ width: '100%', padding: '20px 0' }}
      startIcon={<ManageHistoryIcon />}
      onClick={() => setOpen(!open)}
    >
      <Typography
        variant='body1'
        sx={{
          display: { sm: 'none', xl: 'inline' },
          fontWeight: 'bold'
        }}
      >
        Switch
      </Typography>
    </Button>
    <Box>
      {
        open && <Popover
          open={open}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 50, left: 400 }}
          onClose={() => setOpen(false)}
        >
          <Box sx={{ width: '300px', height: '200px' }}>
            {
              mockDataUser.map((user, index) => {
                return <Button key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid black' }}
                  onClick={() => handleChangeAccount(user)}>
                  <Typography variant='body1'>{user.username}</Typography>
                </Button>
              })
            }
          </Box>
        </Popover>
      }
    </Box>
  </Tooltip>
}
export default BtnSwitchAccount