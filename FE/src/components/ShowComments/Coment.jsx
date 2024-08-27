import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import Button from '@mui/material/Button'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
const Comment = ({ comment }) => {
  const [like, setLike] = useState('none')
  const time = new Date(comment?.createdAt)
  const day = time.toLocaleDateString()
  return <>
    <Box sx={{
      display: 'flex', gap: 2, justifyContent: 'space-between', alignItems: 'start', width: '100%'
    }}>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'start', alignItems: 'start', width: '100%' }}>
        <img src={comment?.profile_picture} alt='avatar' style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
        <Box sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'space-between' }}>
            <Typography variant='body1' color='text.primary' sx={{ fontSize: '14px', fontWeight: 'bold' }}>@{comment?.username}</Typography>
            <Typography variant='body1' color='text.secondary' sx={{ fontSize: '12px' }}>{day}</Typography>
          </Box>
          <Typography color='text.primary' sx={{ fontSize: '14px' }}>{comment?.comment}</Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button startIcon={like === 'like' ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />} onClick={() => { (like === 'like') ? setLike('none') : setLike('like') }} sx={{ fontSize: '0.8rem' }}>30</Button>
            <IconButton onClick={() => { (like === 'dislike') ? setLike('none') : setLike('dislike') }}>{like === 'dislike' ? <ThumbDownAltIcon sx={{ fontSize: '1.2rem' }} /> : <ThumbDownOffAltIcon sx={{ fontSize: '1.2rem' }} />}</IconButton>
          </Box>
        </Box>
      </Box >
      <IconButton><MoreVertIcon /></IconButton>
    </Box >
  </>
}
export default Comment