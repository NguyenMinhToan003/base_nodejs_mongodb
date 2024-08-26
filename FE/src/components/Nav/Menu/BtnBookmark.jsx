import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
const BtnBookmark = () => {
  return <Tooltip title="Bookmark">
    <Button
      variant="text"
      color="primary"
      sx={{ width: '100%', padding: '20px 0' }}
      startIcon={<BookmarkBorderOutlinedIcon />}
    >
      <Typography
        variant='body1'
        sx={{
          display: { sm: 'none', xl: 'inline' },
          fontWeight: 'bold'
        }}
      >
        Bookmark
      </Typography>
    </Button>
  </Tooltip>
}
export default BtnBookmark