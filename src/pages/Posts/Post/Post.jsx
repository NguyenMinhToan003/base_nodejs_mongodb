import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import avatar from '~/assets/avatar.png'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import ReactEmojis from './ReactEmojis'
import HeadPost from './HeadPost'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Divider from '@mui/material/Divider'
import { useConfirm } from 'material-ui-confirm'
const Post = ({ post }) => {
  const confirm = useConfirm()
  const handleShowImage = (image) => {
    confirm({
      title: '',
      description: <img src={image} alt="media" style={{ width: '100%', height: 'auto' }} />
    })
      .then(() => {
      })
      .catch(() => {})
  }
  return (
    <>
      <Box
        sx={{
          width: '100%',
          padding: '24px 32px',
          margin: '0 auto',
          backgroundColor: 'background.secondary',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          borderRadius: '10px'
        }}
      >
        <HeadPost userName={post.author.username} date="October 11 •" avatar={post.author.profile_picture} />

        <Box
          sx={{
            padding: '0 32px',
            maxHeight: '120px',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            gap: 2,
            fontSize: '18px'
          }}
        >
          <Typography variant="body1" component="span" color="text.primary">
            {post.content}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'start', gap: 1 }}>
            {
              post.hashtags.map((hashtag, index) => (
                <Link key={index} href="#" >
                  <Typography component="span" color="hashtag.primary">
                    #{hashtag}
                  </Typography>
                </Link>
              ))
            }
          </Box>
        </Box>
        {
          post.media.length === 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => handleShowImage(post.media[0])}>
              <img src={post.media[0] } alt="media" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
            </Box>)
        }
        {
          post.media.length > 1 && (
            <ImageList
              sx={{ width: '100%', height: '600px', overflowY:'hidden' }}
              max={4}
            >
              {post.media.map((item, index) => (
                <ImageListItem key={index} sx={{ cursor:'pointer', position:'relative', overflow:'hidden', width:'100%' }} onClick={() => handleShowImage(item)}>
                  {
                    index === 3 && post.media.length > 4 &&
              <Box sx={{ display:'flex', justifyContent:'center', backgroundColor:'#00000097', position:'absolute', top:'0', left:'0', right:'0', height:'100%', justifyItems:'center', alignItems:'center' }}>
                <Typography color="primary.main" sx={{ fontWeight: 'bold', fontSize:'20px' }}>
                +{post.media.length - 4} more
                </Typography>
              </Box>
                  }
                  {
                    index<4 ? <img
                      srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item}?w=248&fit=crop&auto=format`}
                      loading="lazy"
                    />: null
                  }
                </ImageListItem>
              ))}
            </ImageList>
          )
        }
        <ReactEmojis comments={post.comments} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img src={avatar} alt="avatar" style={{ width: '25px', height: '25px', borderRadius: '50%' }} />
          <TextField fullWidth placeholder="Write a comment..." variant="standard" sx={{ height: '100%' }} />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" component="span" color="text.secondary" sx={{ fontWeight: 'bold' }}>
          View comments
          </Typography>
        </Box>
      </Box>
      <Divider/>
    </>
  )
}

export default Post
