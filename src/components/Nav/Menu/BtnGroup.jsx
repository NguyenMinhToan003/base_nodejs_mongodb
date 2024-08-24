import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
const BtnGroup = () => {
  return <Tooltip title="Group">
    <Button
      variant="text"
      color="primary"
      sx={{ width: '100%', padding: '20px 0' }}
      startIcon={<PeopleAltOutlinedIcon />}
    >
      <Typography
        sx={{
          display: { sm: 'none', xl: 'inline' },
          fontWeight: 'bold'
        }}
      >
        Group
      </Typography>
    </Button>
  </Tooltip>
}
export default BtnGroup