import Typography from '@mui/material/Typography'
import Picture from '~/assets/postImg.png'
import Box from '@mui/material/Box'
import avatar from '~/assets/avatar.png'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import ReactEmojis from './ReactEmojis'
import HeadPost from './HeadPost'
const Post = () => {
  return <>
    <Box sx={{ padding:'24px 32px', margin:'0 auto', backgroundColor:'background.secondary', display:'flex', flexDirection:'column', gap:3, borderRadius:'10px'
    }}>
      <HeadPost userName={'Nguyen Minh Toan'} date={'October 11 •'} />
      <Box
        sx={{ padding:'0 32px', minHeight:'120px', maxHeight:'120px', display:'flex', justifyContent:'space-between', flexDirection:'column', fontSize:'18px' }}>
        <Typography variant="span" color='text.primary'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim, porttitor
        </Typography>
        <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
          <Link href="#" color="hastag.primary" underline="hover">#hashtag</Link>
          <Link href="#" color="hastag.primary" underline="hover">#hashtag</Link>
        </Box>
      </Box>
      <Box>
        <img src={Picture} alt="post" style={{ width:'100%', maxHeight:'630px', objectFit:'scale-down' }}/>
      </Box>
      <ReactEmojis/>
      <Box>

      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap:2 }}>
        <img src={avatar} alt="avatar" style={{ width:'25px', height:'25px', borderRadius:'50%' }}/>
        <TextField fullWidth placeholder="Write a comment..." variant="standard" sx={{ height:'100%' }} />
      </Box>
      <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:2 }}>
        <Typography variant="span" color='text.secondary'>View comments</Typography>
      </Box>
    </Box>
  </>
}
export default Post
