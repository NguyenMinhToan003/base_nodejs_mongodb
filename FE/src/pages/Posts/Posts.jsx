import Post from '~/components/Post/Post'
import { mockDataPost } from '../../api/mockdata'
import { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
const Posts = () => {
  const [listPost, setListPost] = useState([])
  useEffect(() => {
    setListPost(mockDataPost.posts)
  }, [])
  if (!listPost) return <Box
    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><CircularProgress />Loading...</Box>
  return <>
    <Box >
      {
        listPost?.map((post, index) => (
          <Post key={index} post={post} />
        ))
      }
    </Box>
  </>
}

export default Posts
