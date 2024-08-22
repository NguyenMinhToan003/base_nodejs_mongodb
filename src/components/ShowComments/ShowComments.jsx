import Slide from '@mui/material/Slide'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ListComments from './ListComments'
import DialogContentText from '@mui/material/DialogContentText'
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
      sx={{ background:'background.primary', minHeight:'100vh' }}
    >
      <DialogTitle sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:1 }}>
        <Typography variant='p' >Comments</Typography>
        <IconButton onClick={() => setShowComment(false)} sx={{ background:'background.secondary', color:'#f23d5b' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider/>
      <DialogContent sx={{width:'100%'}}>
        <DialogContentText>
          <ListComments comments={comments}/>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
      </DialogActions>
    </Dialog>
  )
}
export default ShowComments