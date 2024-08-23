import Slide from '@mui/material/Slide'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListComments from './ListComments'
import DialogContentText from '@mui/material/DialogContentText'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import avatar from '~/assets/avatar.png'
import Button from '@mui/material/Button'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const ShowComments = ({ showComment, setShowComment, comments }) => {
  return (
    <Dialog
      open={true}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-coments"
      fullWidth={true}
      maxWidth='xl'
      sx={{ background: 'background.primary', minHeight: '100vh' }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
        <Button variant="text" endIcon={<ArrowForwardIosIcon />}>{comments.length} Comments</Button>
        <IconButton onClick={() => setShowComment(false)} sx={{ background: 'background.secondary', color: '#f23d5b' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent sx={{ width: '100%' }}>
        <DialogContentText>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: '2rem' }}>
            <img src={avatar} alt="avatar" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
            <TextField autoFocus fullWidth placeholder="Write a comment..." variant="standard" sx={{ height: '100%' }} />
          </Box>
          <ListComments comments={comments} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
      </DialogActions>
    </Dialog>
  )
}
export default ShowComments