import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
const BtnHome = () => {
  return <Tooltip title="Home">
    <Button
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
          display: { sm: 'none', xl: 'inline' },
          fontWeight: 'bold'
        }}
      >
        Home
      </Typography>
    </Button>
  </Tooltip>
}
export default BtnHome