import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import GroupMessage from '~/components/GroupMessage/GroupMessage'
const Recovery = ({ setStatusAction, setUser }) => {
  return (
    <>
      <Typography variant='h6' sx={{ padding: '20px 0', textAlign: 'center', fontWeight: 'bold' }}>Recovery</Typography>
      <TextField
        variant="filled"
        fullWidth
        placeholder="Search for recovery"
        sx={{ marginBottom: 2 }}
      />
      <GroupMessage setStatusAction={setStatusAction} setUser={setUser} />
    </>
  )
}
export default Recovery