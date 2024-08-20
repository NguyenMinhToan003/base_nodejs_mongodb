import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import GroupMessage from '~/components/GroupMessage/GroupMessage'
const Recovery = () => {
  return (
    <>
      <Box sx={{ position:'fixed', top:'0', right:'0', bottom:'0', width:theme => theme.socialMedia.widthRight, padding:'20px 30px', display:{ sm:'none', md: 'flex' }, flexDirection:'column' }}>
        <Typography variant="h6" sx={{ padding:'20px 0', textAlign:'center', fontWeight:'bold' }}>Recovery</Typography>
        <TextField
          variant="filled"
          fullWidth
          placeholder="Search for recovery"
          sx={{ marginBottom:2 }}
        />

        <GroupMessage />

      </Box>
      <Divider orientation="vertical" sx={{ position:'fixed', right:theme => theme.socialMedia.widthRight, top:'0', bottom:'0', margin:'0', display:{ sm:'none', md:'block' } }}/>
    </>
  )
}
export default Recovery