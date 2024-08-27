import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import RoomChats from '~/components/RoomChats/RoomChats'
const Recovery = ({ setStatusAction, setRoom }) => {
  return (
    <>
      <Typography variant='h6' sx={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>Room Chats</Typography>
      <TextField
        variant="filled"
        fullWidth
        placeholder="Search for recovery"
        sx={{ marginBottom: 2, padding: '10px' }}
      />
      <RoomChats setStatusAction={setStatusAction} setRoom={setRoom} />
    </>
  )
}
export default Recovery