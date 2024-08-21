import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
const BtnBookmark = () => {
  return <Button
    variant="text"
    color="primary"
    sx={{ width: '100%', padding: '20px 0' }}
    startIcon={<BookmarkBorderOutlinedIcon />}
  >
    <Typography
      sx={{
        display: { sm: 'none', md: 'inline' },
        fontWeight: 'bold'
      }}
    >
            Bookmark
    </Typography>
  </Button>
}
export default BtnBookmark