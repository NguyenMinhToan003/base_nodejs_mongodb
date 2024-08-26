import Box from '@mui/material/Box'
import Message from './Message'
const GroupMessage = ({ setStatusAction, setUser }) => {
  const user = [
    { name: 'Nguyen T', avatar: 'https://avatars.githubusercontent.com/u/117341351', id: '1' },
    { name: 'Nguyen A', avatar: 'https://avatars.githubusercontent.com/u/117941351', id: '2' },
    { name: 'Nguyen B', avatar: 'https://avatars.githubusercontent.com/u/117441351', id: '3' },
    { name: 'Nguyen C', avatar: 'https://avatars.githubusercontent.com/u/117341951', id: '4' },
    { name: 'Nguyen D', avatar: 'https://avatars.githubusercontent.com/u/117741351', id: '5' }
  ]
  return <>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, overflowY: 'auto', overflowX: 'hidden', padding: '10px' }}>
      {
        user?.map((data, index) => {
          return <Message key={index} user={data} setStatusAction={setStatusAction} setUser={setUser} />
        })
      }
    </Box>
  </>
}
export default GroupMessage