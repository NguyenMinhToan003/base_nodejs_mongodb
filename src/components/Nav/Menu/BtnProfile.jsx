import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
const BtnProfile = () => {
  return <Tooltip title="Profile">
    <Button
      variant="text"
      color="primary"
      sx={{ width: '100%', padding: '20px 0' }}
      startIcon={<ManageAccountsOutlinedIcon />}
    >
      <Typography
        sx={{
          display: { sm: 'none', xl: 'inline' },
          fontWeight: 'bold'
        }}
      >
        Account
      </Typography>
    </Button>
  </Tooltip>
}
export default BtnProfile