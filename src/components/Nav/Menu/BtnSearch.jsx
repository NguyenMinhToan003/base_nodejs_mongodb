import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
const BtnSearch = () => {
  return <Button
    variant="text"
    color="primary"
    sx={{ width: '100%', padding: '20px 0' }}
    startIcon={<SearchOutlinedIcon fontSize="20px" />}
  >
    <Typography
      sx={{
        display: { sm: 'none', md: 'inline' },
        fontWeight: 'bold'
      }}
    >
            Search
    </Typography>
  </Button>
}
export default BtnSearch