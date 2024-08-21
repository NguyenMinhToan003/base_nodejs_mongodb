import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
const BtnGroup =() => {
  return <Button
    variant="text"
    color="primary"
    sx={{ width: '100%', padding: '20px 0' }}
    startIcon={<PeopleAltOutlinedIcon />}
  >
    <Typography
      sx={{
        display: { sm: 'none', md: 'inline' },
        fontWeight: 'bold'
      }}
    >
            Group
    </Typography>
  </Button>
}
export default BtnGroup