import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
const BtnHome = () => {
  return <Button
    variant="text"
    color="primary"
    sx={{
      width: '100%',
      padding: '20px 0'
    }}
    startIcon={<LocalFireDepartmentOutlinedIcon />}
  >
    <Typography
      sx={{
        display: { sm: 'none', md: 'inline' },
        fontWeight: 'bold'
      }}
    >
            Home
    </Typography>
  </Button>
}
export default BtnHome