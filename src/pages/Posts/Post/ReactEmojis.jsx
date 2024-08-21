import { useState } from 'react'
import Button from '@mui/material/Button'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import TelegramIcon from '@mui/icons-material/Telegram'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
const ReactEmojis = () => {
  const [bookmark, setBookmark] = useState(true)
  const [like, setLike] = useState(true)
  return <>
    <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
      <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
        <Box >
          <IconButton sx={{ transition:'all 0.25s ease-out', backgroundColor:'#0b7ede', color:'primary.main', ':hover':{ backgroundColor:'bacground.primary', color:'#0b7ede' ,scale:'1.8'} }}>
            <ThumbUpAltIcon />
          </IconButton>
          <IconButton sx={{ transition:'all 0.25s ease-out', backgroundColor:'#f23d5b', color:'primary.main', ':hover':{ backgroundColor:'bacground.primary', color:'#f23d5b', scale:'1.8'} }}>
            <FavoriteIcon />
          </IconButton>
          <IconButton sx={{ transition:'all 0.25s ease-out', backgroundColor:'#f7b928', color:'primary.main', ':hover':{ backgroundColor:'bacground.primary', color:'#f7b928', scale:'1.8' } }}>
            <SentimentVerySatisfiedIcon />
          </IconButton>
        </Box>
        <Typography variant="span" color='text.secondary'>172</Typography>
      </Box>
      <Box sx={{ display:'flex', gap:1 }}>
        <Typography variant="span" color='text.secondary'>42 Comments</Typography>
        <Typography variant="span" color='text.secondary'>5 Shares</Typography>
      </Box>
    </Box>
    <Box>
      <Divider/>
      <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', height:'50px' }}>

        <Button onClick={() => setLike(!like)} sx={{ color:'red', width:'100%', height:'100%' }}
          startIcon={like? <FavoriteIcon/>: <FavoriteBorderIcon sx={{ color:'text.primary' }}/>}>
          <Typography variant="span" color='text.secondary'>Like</Typography>
        </Button>

        <Button sx={{ color:'text.primary', width:'100%', height:'100%' }} startIcon={<ChatBubbleOutlineIcon/>}>
          <Typography variant="span" color='text.secondary'>Comment</Typography>
        </Button>
        <Button sx={{ color:'text.primary', width:'100%', height:'100%' }} startIcon={<TelegramIcon/>}>
          <Typography variant="span" color='text.secondary'>Share</Typography>
        </Button>

        <IconButton onClick={() => setBookmark(!bookmark)} sx={{ color:'text.primary' }}>
          {
            bookmark ? <BookmarkIcon/> : <BookmarkBorderIcon/>
          }
        </IconButton>
      </Box>
      <Divider/>
    </Box>
  </>
}
export default ReactEmojis