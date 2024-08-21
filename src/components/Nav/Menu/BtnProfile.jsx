import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
const BtnProfile = () => {
  return <Button
    variant="text"
    color="primary"
    sx={{ width: '100%', padding: '20px 0' }}
    startIcon={<ManageAccountsOutlinedIcon />}
  >
    <Typography
      sx={{
        display: { sm: 'none', md: 'inline' },
        fontWeight: 'bold'
      }}
    >
            Account
    </Typography>
  </Button>
}
export default BtnProfile