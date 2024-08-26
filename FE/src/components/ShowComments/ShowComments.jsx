import React from 'react'
import Slide from '@mui/material/Slide'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import DialogContentText from '@mui/material/DialogContentText'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Tooltip from '@mui/material/Tooltip'
import avatar from '~/assets/avatar.png'
import ListComments from './ListComments'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const ShowComments = ({ setShowComment, comments }) => {
  return (
    <Dialog
      open={true}
      TransitionComponent={Transition}
      fullWidth={true}
      maxWidth="xl"
      sx={{ background: 'background.primary', minHeight: '100vh' }}
    >
      <DialogTitle component="div" disableTypography
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1 }}
      >
        <Button variant="text" endIcon={<ArrowForwardIosIcon />}>
          {comments.length} Comments
        </Button>
        <IconButton
          onClick={() => setShowComment(false)}
          sx={{ background: 'background.secondary', color: '#f23d5b' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent sx={{ width: '100%' }}>
        <DialogContentText>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: '2rem' }}>
            <img
              src={avatar}
              alt="avatar"
              style={{ width: '30px', height: '30px', borderRadius: '50%' }}
            />
            <Box
              sx={{
                backgroundColor: 'background.primary',
                height: '100%',
                width: '100%',
                padding: '10px 30px',
                border: '2px solid',
                borderRadius: '40px'
              }}
            >
              <TextField
                autoFocus
                fullWidth
                placeholder="Write a comment..."
                variant="standard"
                sx={{ height: '100%', outline: 'none', border: 'none' }}
              />
            </Box>
            <Tooltip title="Send">
              <IconButton color="info">
                <SendIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <ListComments comments={comments} />
        </DialogContentText>
      </DialogContent>
      <DialogActions />
    </Dialog>
  )
}

export default ShowComments
