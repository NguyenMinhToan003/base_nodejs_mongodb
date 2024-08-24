import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
const BtnSearch = () => {
  return <Tooltip title="Search">
    <Button
      variant="text"
      color="primary"
      sx={{ width: '100%', padding: '20px 0' }}
      startIcon={<SearchOutlinedIcon fontSize="20px" />}
    >
      <Typography
        sx={{
          display: { sm: 'none', xl: 'inline' },
          fontWeight: 'bold'
        }}
      >
        Search
      </Typography>
    </Button>
  </Tooltip>
}
export default BtnSearch